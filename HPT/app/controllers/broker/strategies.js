/*
	Strategia polegajaca na kupowaniu wszystkiego po trochu
*/
exports.buyAll = function (cash, profit, bought, companies, max) {
	var toSell = [];
	var toBuy = [];
	var boughtFinal = [];
	var cashFromSell = 0;
	var cashForOneCompany = cash/companies.length;
	bought.forEach(function(value) {
		companies.forEach(function(value2) {
			if(value.company === value2.name) {
				if((1 + (profit/100))*value.price < value2.stockPrice) {
					toSell.push(value);
					cashFromSell = cashFromSell + (value2.stockPrice*value.amount);
				} else {
					boughtFinal.push(value);
				}
			}
		});
	});
	if(cashForOneCompany>100) {
		companies.forEach(function(val) {
			if(Math.floor(cashForOneCompany/val.stockPrice)>0) {
				toBuy.push({"company":val.name,"amount":Math.floor(cashForOneCompany/val.stockPrice),"price":val.stockPrice});
				boughtFinal.push({"company":val.name,"amount":Math.floor(cashForOneCompany/val.stockPrice),"price":val.stockPrice});
				cash = cash - Math.floor(cashForOneCompany/val.stockPrice)*val.stockPrice;
			}
		});
	}
	return {"toSell":toSell, "bought":boughtFinal, "toBuy":toBuy, "cash":cash+cashFromSell};
}

/*
	Strategia polegajaca na kupowaniu jak najtanszych akcji ale ograniczajac
	sie do okreslonej liczby - na sztywno ustawione 200
*/
exports.buyMostStocks = function (cash, profit, bought, companies, max) {
	var toSell = [];
	var toBuy = [];
	var boughtFinal = [];
	var cashFromSell = 0;
	var cashToBuy = 0;
	bought.forEach(function(value) {
		companies.forEach(function(value2) {
			if(value.company === value2.name) {
				if((1 + (profit/100))*value.price < value2.stockPrice) {
					toSell.push(value);
					cashFromSell = cashFromSell + (value2.stockPrice*value.amount);
				} else {
					boughtFinal.push(value);
				}
			}
		});
	});
	
	var company = 'nazwa';
	var price = 9999999;
	var amount = 0;
	var buyNumber = 0;
	var out = false;
	while(true) {
		out = true;
		companies.forEach(function(value) {
			if(value.stockPrice < price && alreadyBought(value.name, boughtFinal) < max) {
				price = value.stockPrice;
				company = value.name;
				out = false;
				amount = alreadyBought(company, boughtFinal);
				//console.log('amount: '+amount);
			}
		})
		if(price>cash || out) {
			return {"toSell":toSell, "bought":boughtFinal, "toBuy":toBuy, "cash":cash+cashFromSell};
		}
		if((max - amount)*price < cash) {
			toBuy.push({"company":company,"amount":max-amount,"price":price});
			boughtFinal.push({"company":company,"amount":max-amount,"price":price});
			cash = cash - (max-amount)*price;
		} else {
			toBuy.push({"company":company,"amount":Math.floor(cash/price),"price":price});
			boughtFinal.push({"company":company,"amount":Math.floor(cash/price),"price":price});
			cash = cash - Math.floor(cash/price)*price;
		}
		price = 99999999;
	}
}
				
function alreadyBought(name, bo) {
	var counter = 0;
	bo.forEach(function(value) {
		if(value.company === name) {
			counter+=value.amount
		}
	});
	return counter;
}