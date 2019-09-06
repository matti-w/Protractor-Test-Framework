var signUp_page = function(){

    this.fullName = element(by.css("[id='ups-full_name_input']"));
    this.emailAdd = element(by.css("[id='ups-email_input']"));
    this.username = element(by.css("[id='ups-user_id_input']"));
    this.pWord = element(by.css("[id='ups-user_password_input']"));
    this.signUpBtn = element(by.css("[class='ups-cta ups-cta_primary']"));
    this.errMsg = element(by.css("[id='ups-checkbox_group'] [class='ups-invalid_color']"));
}
module.exports = new signUp_page();