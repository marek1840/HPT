import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.util.List;
import java.util.Random;

public class Generator {

	final static int minCompanies = 100;
	final static int maxCompanies = 110;
	final static int minStock = 100;
	final static int maxStock = 1500;
	final static int minPrice = 50;
	final static int maxPrice = 1500;
	final static String[] industriesName = { "Agriculture", "Advertising",
			"Banking", "Biotechnology", "Chemical", "Computer", "Electronics",
			"Energy", "Music", "Pharmaceuticals", "Software", "Transportation",
			"Consulting", "Cosmietics", "Securities", "Airline" };
	static List<String> companies;;

	public static void main(String[] args) {
		if (args.length != 1) {
			System.out.println("Podaj nazwe kolekcji");
			System.exit(-1);
		}
		Random rand = new Random();
		try {
			companies = Files.readAllLines(new File("companies.txt").toPath(), Charset.defaultCharset());
			FileWriter file = new FileWriter("populate.js");
			int num = rand.nextInt(maxCompanies - minCompanies) + minCompanies;
			for (int j = 0; j < num; j++) {
				int number = (rand.nextInt(maxStock - minStock) + minStock);
				int companyNum = (rand.nextInt(companies.size()));
				file.write("db."
						+ args[0]
						+ ".insert({name: \""
						+ companies.get(companyNum)
						+ "\", industry: \""
						+ industriesName[rand
								.nextInt(industriesName.length - 1)]
						+ "\", stockPrice: "
						+ (rand.nextInt(maxPrice - minPrice) + minPrice)
						+ ", stockAmount: " + number
						+ ", history: [{ date: new Date(), number: " + number
						+ "}]});" + System.getProperty("line.separator"));
				companies.remove(companyNum);
			}
			file.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
