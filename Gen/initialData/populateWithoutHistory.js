'use strict';
require('../model/Companies.js');
var mongoose = require('mongoose'),
    Company = mongoose.model('Company');

var companies = [new Company({name: "Tech Data Corporation", industry: "Securities", stockPrice: 387, stockAmount: 1480}),
    new Company({name: "Quintiles Transnational", industry: "Pharmaceuticals", stockPrice: 1022, stockAmount: 974}),
    new Company({name: "Estee Lauder Companies Inc.", industry: "Securities", stockPrice: 229, stockAmount: 212}),
    new Company({name: "SBC Communications Inc", industry: "Software", stockPrice: 1249, stockAmount: 716}),
    new Company({name: "Sierra Pacific Resources", industry: "Banking", stockPrice: 627, stockAmount: 1318}),
    new Company({name: "PerkinElmer Inc", industry: "Agriculture", stockPrice: 139, stockAmount: 899}),
    new Company({name: "Raytheon Company", industry: "Securities", stockPrice: 447, stockAmount: 396}),
    new Company({name: "Amerada Hess Corporation", industry: "Consulting", stockPrice: 228, stockAmount: 1449}),
    new Company({name: "Shopko Stores Inc", industry: "Banking", stockPrice: 1160, stockAmount: 509}),
    new Company({name: "Interpublic Group of Companies Inc.", industry: "Pharmaceuticals", stockPrice: 772, stockAmount: 1142}),
    new Company({name: "Coventry Health Care Inc.", industry: "Energy", stockPrice: 806, stockAmount: 883}),
    new Company({name: "Hartford Financial Services Group Inc.", industry: "Transportation", stockPrice: 1380, stockAmount: 591}),
    new Company({name: "Old Republic International Corp.", industry: "Software", stockPrice: 1140, stockAmount: 602}),
    new Company({name: "Clear Channel Communications Inc.", industry: "Music", stockPrice: 844, stockAmount: 822}),
    new Company({name: "Comcast Corp.", industry: "Electronics", stockPrice: 798, stockAmount: 742}),
    new Company({name: "Northrop Grumman Corporation", industry: "Cosmietics", stockPrice: 209, stockAmount: 595}),
    new Company({name: "Transocean Inc", industry: "Biotechnology", stockPrice: 97, stockAmount: 264}),
    new Company({name: "Intel Corporation", industry: "Computer", stockPrice: 142, stockAmount: 637}),
    new Company({name: "Marshall & Ilsley Corporation", industry: "Music", stockPrice: 1077, stockAmount: 138}),
    new Company({name: "Scientific-Atlanta Inc", industry: "Music", stockPrice: 588, stockAmount: 873}),
    new Company({name: "The Boeing Company", industry: "Securities", stockPrice: 1445, stockAmount: 325}),
    new Company({name: "Honeywell International Inc.", industry: "Banking", stockPrice: 333, stockAmount: 434}),
    new Company({name: "PETsMART Inc", industry: "Computer", stockPrice: 1280, stockAmount: 562}),
    new Company({name: "Brinker International, Inc.", industry: "Biotechnology", stockPrice: 862, stockAmount: 470}),
    new Company({name: "Unisys Corporation", industry: "Chemical", stockPrice: 464, stockAmount: 1062}),
    new Company({name: "Audiovox Corporation", industry: "Biotechnology", stockPrice: 959, stockAmount: 135}),
    new Company({name: "Wellpoint Health Networks Inc", industry: "Advertising", stockPrice: 1133, stockAmount: 1395}),
    new Company({name: "Cabot Corp", industry: "Computer", stockPrice: 1101, stockAmount: 215}),
    new Company({name: "AFLAC Incorporated", industry: "Chemical", stockPrice: 1131, stockAmount: 781}),
    new Company({name: "Compass Bancshares Inc", industry: "Computer", stockPrice: 1340, stockAmount: 770}),
    new Company({name: "Service Corp. International", industry: "Securities", stockPrice: 595, stockAmount: 786}),
    new Company({name: "Cendant Corp", industry: "Advertising", stockPrice: 1087, stockAmount: 1399}),
    new Company({name: "Ingram Micro Inc.", industry: "Chemical", stockPrice: 1373, stockAmount: 961}),
    new Company({name: "BJ's Wholesale Club, Inc.", industry: "Energy", stockPrice: 463, stockAmount: 991}),
    new Company({name: "Publix Super Markets Inc.", industry: "Biotechnology", stockPrice: 1457, stockAmount: 323}),
    new Company({name: "Healthsouth Corp", industry: "Consulting", stockPrice: 693, stockAmount: 388}),
    new Company({name: "Storage Technology Corporation", industry: "Banking", stockPrice: 958, stockAmount: 517}),
    new Company({name: "New Jersey Resources Corporation", industry: "Transportation", stockPrice: 711, stockAmount: 1219}),
    new Company({name: "Mattel Inc.", industry: "Chemical", stockPrice: 1414, stockAmount: 291}),
    new Company({name: "Constellation Emergy Group Inc.", industry: "Chemical", stockPrice: 1152, stockAmount: 1418}),
    new Company({name: "Stewart & Stevenson Services Inc", industry: "Biotechnology", stockPrice: 593, stockAmount: 1222}),
    new Company({name: "Procter & Gamble Co.", industry: "Cosmietics", stockPrice: 702, stockAmount: 818}),
    new Company({name: "Reader's Digest Association Inc.", industry: "Pharmaceuticals", stockPrice: 585, stockAmount: 1159}),
    new Company({name: "Morgan Stanley Dean Witter & Co.", industry: "Agriculture", stockPrice: 865, stockAmount: 653}),
    new Company({name: "CDI Corp.", industry: "Music", stockPrice: 662, stockAmount: 233}),
    new Company({name: "Tektronix Inc", industry: "Cosmietics", stockPrice: 138, stockAmount: 752}),
    new Company({name: "Markel Corporation", industry: "Cosmietics", stockPrice: 618, stockAmount: 754}),
    new Company({name: "LSI Logic Corporation", industry: "Music", stockPrice: 622, stockAmount: 602}),
    new Company({name: "Household International Corp.", industry: "Cosmietics", stockPrice: 1426, stockAmount: 426}),
    new Company({name: "Pinnacle West Capital Corp", industry: "Biotechnology", stockPrice: 83, stockAmount: 1347}),
    new Company({name: "Affiliated Computer Services, Inc.", industry: "Chemical", stockPrice: 1034, stockAmount: 1241}),
    new Company({name: "Universal Health Services Inc", industry: "Agriculture", stockPrice: 1337, stockAmount: 973}),
    new Company({name: "Astoria Financial Corporation", industry: "Chemical", stockPrice: 229, stockAmount: 613}),
    new Company({name: "RPM Inc.", industry: "Advertising", stockPrice: 1062, stockAmount: 766}),
    new Company({name: "Pep Boys Manny, Moe & Jack", industry: "Securities", stockPrice: 841, stockAmount: 1457}),
    new Company({name: "KPMG Consulting Inc.", industry: "Cosmietics", stockPrice: 1020, stockAmount: 163}),
    new Company({name: "Casey's General Stores Inc.", industry: "Cosmietics", stockPrice: 980, stockAmount: 463}),
    new Company({name: "CH2M Hill Cos. Ltd.", industry: "Transportation", stockPrice: 1368, stockAmount: 1382}),
    new Company({name: "Oglethorpe Power Corp.", industry: "Cosmietics", stockPrice: 463, stockAmount: 423}),
    new Company({name: "FMC Corp", industry: "Software", stockPrice: 1427, stockAmount: 1225}),
    new Company({name: "W.R. Grace & Co", industry: "Music", stockPrice: 844, stockAmount: 1445}),
    new Company({name: "International Multifoods Corporation", industry: "Banking", stockPrice: 1275, stockAmount: 1176}),
    new Company({name: "The May Department Stores Company", industry: "Banking", stockPrice: 360, stockAmount: 174}),
    new Company({name: "Ashland Inc.", industry: "Securities", stockPrice: 973, stockAmount: 251}),
    new Company({name: "Briggs & Stratton Corporation", industry: "Consulting", stockPrice: 155, stockAmount: 618}),
    new Company({name: "Northern Trust Corporation", industry: "Pharmaceuticals", stockPrice: 1061, stockAmount: 121}),
    new Company({name: "CSK Auto Corp.", industry: "Consulting", stockPrice: 467, stockAmount: 1243}),
    new Company({name: "Viacom Inc", industry: "Electronics", stockPrice: 186, stockAmount: 213}),
    new Company({name: "Science Applications Intl. Inc.", industry: "Energy", stockPrice: 604, stockAmount: 981}),
    new Company({name: "RoadwayCorp", industry: "Advertising", stockPrice: 351, stockAmount: 771}),
    new Company({name: "BMC Software, Inc.", industry: "Advertising", stockPrice: 542, stockAmount: 827}),
    new Company({name: "Becton, Dickinson and Company", industry: "Securities", stockPrice: 1009, stockAmount: 915}),
    new Company({name: "Community Health Systems Inc.", industry: "Agriculture", stockPrice: 284, stockAmount: 656})];


companies.forEach(function (company) {
    company.save(function () {
        console.log('saved ' + company.name);
    });
});