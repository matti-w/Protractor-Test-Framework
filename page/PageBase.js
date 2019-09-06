
var page_base = function(){

    this.getURL = function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.ups.com/us/en/Home.page');
    }
};

module.exports = new page_base();