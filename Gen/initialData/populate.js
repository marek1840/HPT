'use strict';
require('../model/Companies.js');
var mongoose = require('mongoose'),
    Company = mongoose.model('Company');
    
var companyNumber = 103;

var companies = [new Company({name: "Tech Data Corporation", industry: "Securities", stockPrice: 387, stockAmount: 1480, history: [{ date: new Date(), price: 1480}]}),
 new Company({name: "Quintiles Transnational", industry: "Pharmaceuticals", stockPrice: 1022, stockAmount: 974, history: [{ date: new Date(), price: 974}]}),
 new Company({name: "Estee Lauder Companies Inc.", industry: "Securities", stockPrice: 229, stockAmount: 212, history: [{ date: new Date(), price: 212}]}),
 new Company({name: "SBC Communications Inc", industry: "Software", stockPrice: 1249, stockAmount: 716, history: [{ date: new Date(), price: 716}]}),
 new Company({name: "Sierra Pacific Resources", industry: "Banking", stockPrice: 627, stockAmount: 1318, history: [{ date: new Date(), price: 1318}]}),
 new Company({name: "PerkinElmer Inc", industry: "Agriculture", stockPrice: 139, stockAmount: 899, history: [{ date: new Date(), price: 899}]}),
 new Company({name: "Raytheon Company", industry: "Securities", stockPrice: 447, stockAmount: 396, history: [{ date: new Date(), price: 396}]}),
 new Company({name: "Amerada Hess Corporation", industry: "Consulting", stockPrice: 228, stockAmount: 1449, history: [{ date: new Date(), price: 1449}]}),
 new Company({name: "Shopko Stores Inc", industry: "Banking", stockPrice: 1160, stockAmount: 509, history: [{ date: new Date(), price: 509}]}),
 new Company({name: "Interpublic Group of Companies Inc.", industry: "Pharmaceuticals", stockPrice: 772, stockAmount: 1142, history: [{ date: new Date(), price: 1142}]}),
 new Company({name: "Coventry Health Care Inc.", industry: "Energy", stockPrice: 806, stockAmount: 883, history: [{ date: new Date(), price: 883}]}),
 new Company({name: "Hartford Financial Services Group Inc.", industry: "Transportation", stockPrice: 1380, stockAmount: 591, history: [{ date: new Date(), price: 591}]}),
 new Company({name: "Old Republic International Corp.", industry: "Software", stockPrice: 1140, stockAmount: 602, history: [{ date: new Date(), price: 602}]}),
 new Company({name: "Clear Channel Communications Inc.", industry: "Music", stockPrice: 844, stockAmount: 822, history: [{ date: new Date(), price: 822}]}),
 new Company({name: "Comcast Corp.", industry: "Electronics", stockPrice: 798, stockAmount: 742, history: [{ date: new Date(), price: 742}]}),
 new Company({name: "Northrop Grumman Corporation", industry: "Cosmietics", stockPrice: 209, stockAmount: 595, history: [{ date: new Date(), price: 595}]}),
 new Company({name: "Transocean Inc", industry: "Biotechnology", stockPrice: 97, stockAmount: 264, history: [{ date: new Date(), price: 264}]}),
 new Company({name: "Intel Corporation", industry: "Computer", stockPrice: 142, stockAmount: 637, history: [{ date: new Date(), price: 637}]}),
 new Company({name: "Marshall & Ilsley Corporation", industry: "Music", stockPrice: 1077, stockAmount: 138, history: [{ date: new Date(), price: 138}]}),
 new Company({name: "Scientific-Atlanta Inc", industry: "Music", stockPrice: 588, stockAmount: 873, history: [{ date: new Date(), price: 873}]}),
 new Company({name: "The Boeing Company", industry: "Securities", stockPrice: 1445, stockAmount: 325, history: [{ date: new Date(), price: 325}]}),
 new Company({name: "Honeywell International Inc.", industry: "Banking", stockPrice: 333, stockAmount: 434, history: [{ date: new Date(), price: 434}]}),
 new Company({name: "PETsMART Inc", industry: "Computer", stockPrice: 1280, stockAmount: 562, history: [{ date: new Date(), price: 562}]}),
 new Company({name: "Brinker International, Inc.", industry: "Biotechnology", stockPrice: 862, stockAmount: 470, history: [{ date: new Date(), price: 470}]}),
 new Company({name: "Unisys Corporation", industry: "Chemical", stockPrice: 464, stockAmount: 1062, history: [{ date: new Date(), price: 1062}]}),
 new Company({name: "Audiovox Corporation", industry: "Biotechnology", stockPrice: 959, stockAmount: 135, history: [{ date: new Date(), price: 135}]}),
 new Company({name: "Wellpoint Health Networks Inc", industry: "Advertising", stockPrice: 1133, stockAmount: 1395, history: [{ date: new Date(), price: 1395}]}),
 new Company({name: "Cabot Corp", industry: "Computer", stockPrice: 1101, stockAmount: 215, history: [{ date: new Date(), price: 215}]}),
 new Company({name: "AFLAC Incorporated", industry: "Chemical", stockPrice: 1131, stockAmount: 781, history: [{ date: new Date(), price: 781}]}),
 new Company({name: "Compass Bancshares Inc", industry: "Computer", stockPrice: 1340, stockAmount: 770, history: [{ date: new Date(), price: 770}]}),
 new Company({name: "Service Corp. International", industry: "Securities", stockPrice: 595, stockAmount: 786, history: [{ date: new Date(), price: 786}]}),
 new Company({name: "Cendant Corp", industry: "Advertising", stockPrice: 1087, stockAmount: 1399, history: [{ date: new Date(), price: 1399}]}),
 new Company({name: "Ingram Micro Inc.", industry: "Chemical", stockPrice: 1373, stockAmount: 961, history: [{ date: new Date(), price: 961}]}),
 new Company({name: "BJ's Wholesale Club, Inc.", industry: "Energy", stockPrice: 463, stockAmount: 991, history: [{ date: new Date(), price: 991}]}),
 new Company({name: "Publix Super Markets Inc.", industry: "Biotechnology", stockPrice: 1457, stockAmount: 323, history: [{ date: new Date(), price: 323}]}),
 new Company({name: "Healthsouth Corp", industry: "Consulting", stockPrice: 693, stockAmount: 388, history: [{ date: new Date(), price: 388}]}),
 new Company({name: "Storage Technology Corporation", industry: "Banking", stockPrice: 958, stockAmount: 517, history: [{ date: new Date(), price: 517}]}),
 new Company({name: "New Jersey Resources Corporation", industry: "Transportation", stockPrice: 711, stockAmount: 1219, history: [{ date: new Date(), price: 1219}]}),
 new Company({name: "Mattel Inc.", industry: "Chemical", stockPrice: 1414, stockAmount: 291, history: [{ date: new Date(), price: 291}]}),
 new Company({name: "Constellation Emergy Group Inc.", industry: "Chemical", stockPrice: 1152, stockAmount: 1418, history: [{ date: new Date(), price: 1418}]}),
 new Company({name: "Stewart & Stevenson Services Inc", industry: "Biotechnology", stockPrice: 593, stockAmount: 1222, history: [{ date: new Date(), price: 1222}]}),
 new Company({name: "Procter & Gamble Co.", industry: "Cosmietics", stockPrice: 702, stockAmount: 818, history: [{ date: new Date(), price: 818}]}),
 new Company({name: "Reader's Digest Association Inc.", industry: "Pharmaceuticals", stockPrice: 585, stockAmount: 1159, history: [{ date: new Date(), price: 1159}]}),
 new Company({name: "Morgan Stanley Dean Witter & Co.", industry: "Agriculture", stockPrice: 865, stockAmount: 653, history: [{ date: new Date(), price: 653}]}),
 new Company({name: "CDI Corp.", industry: "Music", stockPrice: 662, stockAmount: 233, history: [{ date: new Date(), price: 233}]}),
 new Company({name: "Tektronix Inc", industry: "Cosmietics", stockPrice: 138, stockAmount: 752, history: [{ date: new Date(), price: 752}]}),
 new Company({name: "Markel Corporation", industry: "Cosmietics", stockPrice: 618, stockAmount: 754, history: [{ date: new Date(), price: 754}]}),
 new Company({name: "LSI Logic Corporation", industry: "Music", stockPrice: 622, stockAmount: 602, history: [{ date: new Date(), price: 602}]}),
 new Company({name: "Household International Corp.", industry: "Cosmietics", stockPrice: 1426, stockAmount: 426, history: [{ date: new Date(), price: 426}]}),
 new Company({name: "Pinnacle West Capital Corp", industry: "Biotechnology", stockPrice: 83, stockAmount: 1347, history: [{ date: new Date(), price: 1347}]}),
 new Company({name: "Affiliated Computer Services, Inc.", industry: "Chemical", stockPrice: 1034, stockAmount: 1241, history: [{ date: new Date(), price: 1241}]}),
 new Company({name: "Universal Health Services Inc", industry: "Agriculture", stockPrice: 1337, stockAmount: 973, history: [{ date: new Date(), price: 973}]}),
 new Company({name: "Astoria Financial Corporation", industry: "Chemical", stockPrice: 229, stockAmount: 613, history: [{ date: new Date(), price: 613}]}),
 new Company({name: "RPM Inc.", industry: "Advertising", stockPrice: 1062, stockAmount: 766, history: [{ date: new Date(), price: 766}]}),
 new Company({name: "Pep Boys Manny, Moe & Jack", industry: "Securities", stockPrice: 841, stockAmount: 1457, history: [{ date: new Date(), price: 1457}]}),
 new Company({name: "KPMG Consulting Inc.", industry: "Cosmietics", stockPrice: 1020, stockAmount: 163, history: [{ date: new Date(), price: 163}]}),
 new Company({name: "Casey's General Stores Inc.", industry: "Cosmietics", stockPrice: 980, stockAmount: 463, history: [{ date: new Date(), price: 463}]}),
 new Company({name: "CH2M Hill Cos. Ltd.", industry: "Transportation", stockPrice: 1368, stockAmount: 1382, history: [{ date: new Date(), price: 1382}]}),
 new Company({name: "Oglethorpe Power Corp.", industry: "Cosmietics", stockPrice: 463, stockAmount: 423, history: [{ date: new Date(), price: 423}]}),
 new Company({name: "FMC Corp", industry: "Software", stockPrice: 1427, stockAmount: 1225, history: [{ date: new Date(), price: 1225}]}),
 new Company({name: "W.R. Grace & Co", industry: "Music", stockPrice: 844, stockAmount: 1445, history: [{ date: new Date(), price: 1445}]}),
 new Company({name: "International Multifoods Corporation", industry: "Banking", stockPrice: 1275, stockAmount: 1176, history: [{ date: new Date(), price: 1176}]}),
 new Company({name: "The May Department Stores Company", industry: "Banking", stockPrice: 360, stockAmount: 174, history: [{ date: new Date(), price: 174}]}),
 new Company({name: "Ashland Inc.", industry: "Securities", stockPrice: 973, stockAmount: 251, history: [{ date: new Date(), price: 251}]}),
 new Company({name: "Briggs & Stratton Corporation", industry: "Consulting", stockPrice: 155, stockAmount: 618, history: [{ date: new Date(), price: 618}]}),
 new Company({name: "Northern Trust Corporation", industry: "Pharmaceuticals", stockPrice: 1061, stockAmount: 121, history: [{ date: new Date(), price: 121}]}),
 new Company({name: "CSK Auto Corp.", industry: "Consulting", stockPrice: 467, stockAmount: 1243, history: [{ date: new Date(), price: 1243}]}),
 new Company({name: "Viacom Inc", industry: "Electronics", stockPrice: 186, stockAmount: 213, history: [{ date: new Date(), price: 213}]}),
 new Company({name: "Science Applications Intl. Inc.", industry: "Energy", stockPrice: 604, stockAmount: 981, history: [{ date: new Date(), price: 981}]}),
 new Company({name: "RoadwayCorp", industry: "Advertising", stockPrice: 351, stockAmount: 771, history: [{ date: new Date(), price: 771}]}),
 new Company({name: "BMC Software, Inc.", industry: "Advertising", stockPrice: 542, stockAmount: 827, history: [{ date: new Date(), price: 827}]}),
 new Company({name: "Becton, Dickinson and Company", industry: "Securities", stockPrice: 1009, stockAmount: 915, history: [{ date: new Date(), price: 915}]}),
 new Company({name: "Community Health Systems Inc.", industry: "Agriculture", stockPrice: 284, stockAmount: 656, history: [{ date: new Date(), price: 656}]}),
 new Company({name: "AT&T Corp.", industry: "Banking", stockPrice: 950, stockAmount: 565, history: [{ date: new Date(), price: 565}]}),
 new Company({name: "Citizens Communications Co.", industry: "Advertising", stockPrice: 352, stockAmount: 683, history: [{ date: new Date(), price: 683}]}),
 new Company({name: "AutoNation, Inc.", industry: "Chemical", stockPrice: 1294, stockAmount: 780, history: [{ date: new Date(), price: 780}]}),
 new Company({name: "WGL Holdings Inc", industry: "Music", stockPrice: 906, stockAmount: 568, history: [{ date: new Date(), price: 568}]}),
 new Company({name: "UST Inc", industry: "Transportation", stockPrice: 749, stockAmount: 163, history: [{ date: new Date(), price: 163}]}),
 new Company({name: "Energizer Holdings Inc.", industry: "Transportation", stockPrice: 924, stockAmount: 902, history: [{ date: new Date(), price: 902}]}),
 new Company({name: "Charming Shoppes Inc.", industry: "Advertising", stockPrice: 536, stockAmount: 1178, history: [{ date: new Date(), price: 1178}]}),
 new Company({name: "Hewlett-Packard Company", industry: "Consulting", stockPrice: 666, stockAmount: 1371, history: [{ date: new Date(), price: 1371}]}),
 new Company({name: "Kellwood Company", industry: "Agriculture", stockPrice: 490, stockAmount: 1337, history: [{ date: new Date(), price: 1337}]}),
 new Company({name: "Gemstar-TV Guide International Inc.", industry: "Securities", stockPrice: 313, stockAmount: 1473, history: [{ date: new Date(), price: 1473}]}),
 new Company({name: "Sysco Corp", industry: "Banking", stockPrice: 851, stockAmount: 762, history: [{ date: new Date(), price: 762}]}),
 new Company({name: "Brightpoint, Inc.", industry: "Consulting", stockPrice: 1288, stockAmount: 1428, history: [{ date: new Date(), price: 1428}]}),
 new Company({name: "Ryder System Inc", industry: "Consulting", stockPrice: 1079, stockAmount: 595, history: [{ date: new Date(), price: 595}]}),
 new Company({name: "Whirlpool Corporation", industry: "Computer", stockPrice: 1070, stockAmount: 762, history: [{ date: new Date(), price: 762}]}),
 new Company({name: "Wyndham International Inc", industry: "Computer", stockPrice: 972, stockAmount: 281, history: [{ date: new Date(), price: 281}]}),
 new Company({name: "Paychex Inc", industry: "Transportation", stockPrice: 884, stockAmount: 305, history: [{ date: new Date(), price: 305}]}),
 new Company({name: "Owens Corning", industry: "Banking", stockPrice: 73, stockAmount: 382, history: [{ date: new Date(), price: 382}]}),
 new Company({name: "Texas Instruments Incorporated", industry: "Advertising", stockPrice: 728, stockAmount: 651, history: [{ date: new Date(), price: 651}]}),
 new Company({name: "Earthlink, Inc.", industry: "Computer", stockPrice: 219, stockAmount: 108, history: [{ date: new Date(), price: 108}]}),
 new Company({name: "Toys 'R' Us Inc", industry: "Computer", stockPrice: 251, stockAmount: 524, history: [{ date: new Date(), price: 524}]}),
 new Company({name: "Dow Jones & Company, Inc.", industry: "Securities", stockPrice: 1159, stockAmount: 815, history: [{ date: new Date(), price: 815}]}),
 new Company({name: "Emerson Electric Co.", industry: "Securities", stockPrice: 584, stockAmount: 930, history: [{ date: new Date(), price: 930}]}),
 new Company({name: "Terex Corp", industry: "Biotechnology", stockPrice: 545, stockAmount: 975, history: [{ date: new Date(), price: 975}]}),
 new Company({name: "Ball Corporation", industry: "Securities", stockPrice: 644, stockAmount: 1380, history: [{ date: new Date(), price: 1380}]}),
 new Company({name: "Cisco Systems Inc.", industry: "Biotechnology", stockPrice: 721, stockAmount: 963, history: [{ date: new Date(), price: 963}]}),
 new Company({name: "Bank of America Corporation", industry: "Advertising", stockPrice: 312, stockAmount: 804, history: [{ date: new Date(), price: 804}]}),
 new Company({name: "Sprint Corp.", industry: "Securities", stockPrice: 1427, stockAmount: 870, history: [{ date: new Date(), price: 870}]}),
 new Company({name: "Aon Corporation", industry: "Securities", stockPrice: 454, stockAmount: 492, history: [{ date: new Date(), price: 492}]}),
 new Company({name: "Sonic Automotive Inc.", industry: "Cosmietics", stockPrice: 1410, stockAmount: 732, history: [{ date: new Date(), price: 732}]}),
 new Company({name: "Maxtor Corporation", industry: "Securities", stockPrice: 282, stockAmount: 772, history: [{ date: new Date(), price: 772}]}),
 new Company({name: "Pactiv Corp", industry: "Biotechnology", stockPrice: 408, stockAmount: 1134, history: [{ date: new Date(), price: 1134}]}),
 new Company({name: "Fidelity National Financial Inc.", industry: "Cosmietics", stockPrice: 1195, stockAmount: 138, history: [{ date: new Date(), price: 138}]}),
 new Company({name: "DURA Automotive Systems Inc.", industry: "Music", stockPrice: 197, stockAmount: 897, history: [{ date: new Date(), price: 897}]}),
 new Company({name: "Pitney Bowes Inc.", industry: "Agriculture", stockPrice: 890, stockAmount: 1055, history: [{ date: new Date(), price: 1055}]})];

Company.removeAll(function () {
	console.log('removed all companies');
});

var savedCompanies = 0;
for (;savedCompanies<companyNumber;++savedCompanies) {
	if (savedCompanies==companies.length) {
		
	}
	console.log(savedCompanies);
	var company = companies[savedCompanies];
	company.save(function () {
        console.log('saved ' + company.name);//FIXME: wrong name in log
    });
}
console.log('saved '+savedCompanies+' companies');
/*companies.forEach(function (company) {
    company.save(function () {
        console.log('saved ' + company.name);
    });
});*/
