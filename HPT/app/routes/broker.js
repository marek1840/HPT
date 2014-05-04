'use strict';

var brokers = require('../controllers/brokers');

module.exports = function(app){
    app.post('/brokers', brokers.hire);
};
