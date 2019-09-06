
var home_page = function(){
    
     this.upsLogo = element(by.css("[id='ups-header_logo'] img"));
     this.loginLink = element(by.xpath("//ul[@class='ups-header_utils']/li[1]/a"))
     this.signUpLink = element(by.xpath("//ul[@class='ups-header_utils']/li[2]/a"));
     this.locationsLink = element(by.xpath("//ul[@class='ups-header_utils']/li[3]/a"));
     this.upsQuickStartLink = element(by.css("ups-quickStartMenu"));
     this.shippingLink = element(by.css("[id='ups-menuLinks1']"));
     this.serviceLink = element(by.css("[id='ups-menuLinks2']"));
     this.quickStartShipLink = element(by.css("[id='ups-quickStartShip']"));


};
module.exports = new home_page();