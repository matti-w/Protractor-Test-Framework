describe('Login page test suite', () => {

    var page_base = require('../page/PageBase');
    var home_page = require('../page/HomePage.js');
    var login_page = require('../page/LoginPage');
    var myAcct_page = require('../page/MyAccountPage');

    beforeEach(function() {
        
        page_base.getURL();
    });
 
    
     afterEach(function() {
        console.log('Test is complete.')
    });

    
    it('Validate UPS login page titel', function(){
        var expectedTitle = "Login | UPS - United States";
        home_page.loginLink.click();
       // expect(browser.getTitle()).toEqual("Login | UPS - United States");
        browser.getTitle().then(function(actualTitle){
            expect(actualTitle).toEqual(expectedTitle);
        })
    });

    it('Validate UPS login page header', function(){
        var pageHeader = "Login";
        home_page.loginLink.click();
       // expect(login_page.loginPageLabel.getText()).toEqual(pageHeader);
        login_page.loginPageLabel.getText().then(function(actualHeader){
            expect(actualHeader).toEqual(pageHeader);
        });

    });

    it('Login to UPS as a registered user', function(){
        home_page.loginLink.click();
        login_page.useridField.sendKeys("employe10");
        login_page.passwordField.sendKeys("comPany1245");
        login_page.submitbutton.click();
        browser.sleep(2000);
        element(by.css("[id='ups-account-toggle']")).getText().then(function(name){
            expect(name).toEqual("Tom Peter");
        });

        myAcct_page.logOutLink.click();
    });

    

});