describe('Service: frontendApp.OtpCalculator', function () {

    // load the service's module
    beforeEach(module('frontendApp'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (OtpCalculator) {
        service = OtpCalculator;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
