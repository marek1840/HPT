'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	app = require('../../../server'),
    request = require('supertest');

//Globals
//var user, user2;

//The tests
describe('<Unit Test>', function() {
    describe('Purchase Test:', function() {
        before(function(done) {
            

            done();
        });

        describe('Method Save', function() {
            it('should be able do sign in', function(done) {
            	//	/signin
                var a = request(app)
                	.get('/users/abc@abc.pl', function(res) {
                		//console.log(res);
                	});
                //console.log(a);
            });

            it('should be able to see owned shares', function(done) {
            	//'/users/test@test.com/stock'
                var a = request(app)
                	.get('/companies.json').end(function(err, res) {
                		console.log(res.body);
                	});
                //console.log(a);
            });

            /*it('should fail to save an existing user again', function(done) {
                user.save();
                return user2.save(function(err) {
                    should.exist(err);
                    done();
                });
            });

            it('should show an error when try to save without name', function(done) {
                user.name = '';
                return user.save(function(err) {
                    should.exist(err);
                    done();
                });
            });*/
        });

        after(function(done) {
            //user.remove();
           // done();
        });
    });
});

