describe('Location page suite', () => {

    var page_base = require('../page/PageBase');
    var home_page = require('../page/HomePage.js');
    var location_page = require('../page/LocationsPage');
   

    beforeEach(function() {
        
        page_base.getURL();
    });
 
    
     afterEach(function() {
        console.log('Test is complete.')
    });

    
    it('Validate UPS locations page title',function(){
        home_page.locationsLink.click();
        expect(browser.getTitle()).toEqual("Find Locations: UPS - United States");

    });

    it('Validate UPS locations page header', function(){
        var pageHeader = "Find locations";
        home_page.locationsLink.click();
       // expect(location_page.locationPageHeader.getText()).toEqual(pageHeader);
        location_page.locationPageHeader.getText().then(function(actualHeader){
            expect(actualHeader).toEqual(pageHeader);
        })

    });

    it('Validate UPS locations search result', function(){
        home_page.locationsLink.click();
        location_page.locationTextBox.sendKeys("New York");
        location_page.searchButton.click();
        browser.sleep(2000);
        let list = element.all(by.css("[id='candidateResultsDiv'] ul li"));
            expect(list.count()).toBe(5);
     
            
        
    });
});