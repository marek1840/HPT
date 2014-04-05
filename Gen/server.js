var net = require('net'),
    Company = require('./model/Companies.js');

var dummyCompanies = [
    {
        name: 'c1',
        industry: 'military',
        change: -100,
        stockPrice: 150
    },
    {
        name: 'c2',
        industry: 'furniture',
        change: 100,
        stockPrice: 12
    }
]

var server = net.createServer(function(c) {
    c.on('data', function(data) {
        var received = JSON.parse(data.toString());

        console.log('got ' + JSON.stringify(received))

        if (received.type === "getAll") {
            //here you are sending all data to the user like this:
            c.write(JSON.stringify(dummyCompanies));
        } else if(received.type === "buy"){
            //purchases here
            c.write(('OK'));
        } else if(received.type === "sell") {
            //sells here
            //c.write(JSON.stringify({"GOTIT": "sell"}));
            c.write(('OK'));
        }
    });
    c.on('end', function() {});
});

server.listen(8000, function() {
    console.log('server bound');
});


