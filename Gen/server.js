var net = require('net');

var server = net.createServer(function(c) {
    c.on('data', function(data) {
        var received = JSON.parse(data.toString());
        console.log(received);
        if (received.type == "getAll") {
            //here you are sending all data to the user like this:
            c.write(JSON.stringify({"GOTIT": "getAll"}));
        } else if(received.type == "buy"){
            //purchases here
            c.write(JSON.stringify({"GOTIT": "buy"}));
        } else if(received.type == "sell") {
            //sells here
            c.write(JSON.stringify({"GOTIT": "sell"}));
        }
    });
    c.on('end', function() {});
});

server.listen(8000, function() {
    console.log('server bound');
});


