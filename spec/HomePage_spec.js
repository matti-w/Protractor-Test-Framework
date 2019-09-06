describe('HomePage test suite', function(){

    var page_base = require('../page/PageBase');
    var home_page = require('../page/HomePage.js');

   
    beforeEach(function() {
       page_base.getURL();
   });

   
    afterEach(function() {
       console.log('Test is complete.')
   });
       
       
    it('Validate UPS Home page title', function(){
        
       // expect(browser.getTitle()).toEqual("Home | UPS - United States");
        browser.getTitle().then(function(actualTitle){
            expect(actualTitle).toEqual("Home | UPS - United States");
        });

    })

    it('Validate presence of UPS logo', function(){
        
        expect(home_page.upsLogo.isPresent()).toEqual(true);

    })
})