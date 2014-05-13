'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	app = require('../../../server'),
    request = require('supertest');

//Globals
//var user, user2;
var userLogin
var company;
var companyAmount;

//The tests
describe('<Unit Test>', function() {
    describe('Purchase Test:', function() {
        before(function(done) {
            userLogin = {
            	user : 'test@abc.pl',
            	password : 'test'
            }

            done();
        });

        describe('HTTP Tests', function() {
            it('should be able to register', function(done) {
            	request(app).post('/users').send(userLogin).expect(200, done);
            });
            it('should be able to login', function(done) {
            	//	/signin
            	request(app).post('/users/session').send(userLogin).expect(200, done);
            	//done();
                /*var a = request(app)
                	.get('/users/abc@abc.pl', function(res) {
                		//console.log(res);
                	});*/
                //console.log(a);
            });

            it('should be able to get companies list', function(done) {
            	//'/users/test@test.com/stock'
                var a = request(app)
                	.get('/companies.json').end(function(err, res) {
                		//console.log(res.body);
                		var companies = res.body
                		should.exist(companies[0]);
                		company = companies[0];
                		should.exist(company.name);
                		should.exist(company.stockPrice);
                		companyAmount = 10;
                		done();
                	});
                //console.log(a);
            });

            it('should be able to purchase', function(done) {
                var a = request(app)
                	.post('/purchase').send({
                           	email: userLogin.email,
                            company: company.name,
                            amount: companyAmount,
                            cost: companyAmount*company.stockPrice
                        }).expect(200).end(function(err, res) {
                		console.log(res);
                	});
               //console.log(res.body.message);
                done();
                //console.log(a);
            });
            
            it('should be able to see owned stock', function(done) {
            	//''
                var a = request(app)
                	.get('/users/'+userLogin.email+'/stock').end(function(err, res) {
                		console.log(res.body);
                		var ownedStock = res.body
                		should.exist(ownedStock[0]);
                		done();
                		/*should.exist(companies[0]);
                		company = companies[0];
                		should.exist(company.name);
                		should.exist(company.stockPrice);
                		companyAmount = 10;*/
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
            
            it('should be able do sign out', function(done) {
            	request(app).post('/users/session').send(userLogin).expect(200);
            	done();
            });
        });

        after(function(done) {
           //user.remove();
           //done();
        });
    });
});

