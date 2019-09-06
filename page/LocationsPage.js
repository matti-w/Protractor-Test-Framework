var location_page = function(){
    
    this.locationPageHeader = element(by.css("[class='ups-page-title_cell'] span"));
    this.locationTextBox = element(by.css("[id='txtQuery']"));
    this.searchButton = element(by.css("button[aria-label='Search']"));
    
};
module.exports = new location_page();