var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
     specs: ['spec/HomePage_spec.js' , 'spec/LocationPage_spec.js', 'spec/LoginPage_spec.js', 'spec/SignUpPage_spec.js'],
     //specs: ['spec/LoginPage_spec.js'],



     //to run on firefox. By default protractor runs on chrome
    //  capabilities:  {
    //    'browserName' : 'firefox'
    //  },


/*
    to run cross browser testing
     multiCapabilities: [{
       'browserName' : 'firefox'
     }, {
       'browserName' : 'chrome'
     }],
*/

    

     suites :
        {
        Smoke : ['spec/LoginPage_spec.js'],
        Regression : ['spec/HomePage_spec.js' , 'spec/LocationPage_spec.js']
        },



     onPrepare :function()
     {
            browser.driver.manage().window().maximize();
             jasmine.getEnv().addReporter(
                        new Jasmine2HtmlReporter({
                          savePath: 'target/screenshots'
                        })
                      );
             
        
          
     },


     /*
     suites :
        {
        Smoke : ['Alerts.js','Dropdown.js'],
        Regression : 'ElementBasics.js'
        },
    */

    
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
      }
    
     
    };