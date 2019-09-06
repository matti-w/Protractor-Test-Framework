var login_page = function(){

    this.loginPageLabel = element(by.css("[class='ups-page-title_cell'] span"));
    this.useridFieldLabel = element(by.css("[id='email']"));
    this.useridField = element(by.css("[id='email']"));
    this.passwordFieldLabel = element(by.css("[for='pwd']"));
    this.passwordField = element(by.css("[id='pwd']"));
    this.submitbutton = element(by.css("[id='submitBtn']"));
    
};
module.exports = new login_page();