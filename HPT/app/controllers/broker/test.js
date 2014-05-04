require('./../../models/userData.js');
var strategies = require('./strategies.js');

var Broker = require('./broker.js');
var name = "mail@mail"

//var broker = new Broker('mail@mail',  50000, strategies.buyAll, 10000000, 3);
var broker = new Broker('mail@mail',  50000, strategies.buyMostStocks, 10000000, 3);
broker.start();
setInterval(broker.getData, 3000);