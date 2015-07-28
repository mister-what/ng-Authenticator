/**
 * @ngdoc service
 * @name OtpCalculator
 * @description
 * _Please update the description and dependencies._
 *
 * */
angular.module('gauthApp')
    .service('OtpCalculator', function (generator) {
        this.addAccount = function (name, secret) {
            if (!localStorage.accounts) {
                localStorage.accounts = "{}";
            }
            var accounts = JSON.parse(localStorage.accounts);
            accounts[name] = secret;
            localStorage.accounts = JSON.stringify(accounts);
        };
        this.getAccount = function (name) {
            if (!localStorage.accounts) {
                localStorage.accounts = "{}";
            }
            var accounts = JSON.parse(localStorage.accounts);
            return {name: name, secret: accounts[name]};
        };
        this.deleteAccount = function(name, callback){
            if (!localStorage.accounts) {
                localStorage.accounts = "{}";
                callback("Error");
                return;
            }
            var accounts = JSON.parse(localStorage.accounts);
            delete accounts[name];
            localStorage.accounts = JSON.stringify(accounts);
            callback();
        };
        this.getAllPasswords = function (callback) {
            if (!localStorage.accounts) {
                localStorage.accounts = "{}";
                callback({});
            }
            var accounts = JSON.parse(localStorage.accounts);
            var otps = {};
            for (var x in accounts) {
                otps[x] = generator.generateOTP(accounts[x]);
            }
            callback(otps);
        };

    });

