describe('Name of the group', () => {

    var page_base = require('../page/PageBase.js');
    var home_page = require('../page/HomePage.js');
    var signUp_page = require('../page/SignUpPage.js');
    var testData = require('../testdata/InvalidRegData.js');
    var using = require('jasmine-data-provider');
    
    beforeEach(function() {
        
        page_base.getURL();
    });
 
    
     afterEach(function() {
        console.log('Test is complete.')
    });

    using(testData.dataset, function(data, description){

        it('Valdiate registeration with invalid test data ' + description, function(){
            
            home_page.signUpLink.click();
            browser.sleep(1000);
            signUp_page.fullName.sendKeys(data.name);
            signUp_page.emailAdd.sendKeys(data.email);
            signUp_page.username.sendKeys(data.userid);
            signUp_page.pWord.sendKeys(data.password);
            signUp_page.signUpBtn.click();
            browser.sleep(2000);
            signUp_page.errMsg.getText().then(function(error){
                expect(error).toBe('Please Accept UPS Agreement.');
            });
    
        });
    });
    
});