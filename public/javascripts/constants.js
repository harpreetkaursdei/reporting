
var localbaseUrl   = "//52.39.212.226:4009";

var baseUrl = "//192.155.246.146:7048";
var servicebaseUrl = "//52.39.212.226:4004";

var localhostUrl="";


var googleapiurl = 'http://192.155.246.146:8280/googleadwordsapi/adword/examples/AdWords/v201603/';
var webservices = {	  

	    "getUserregister" : baseUrl + "/webservices/register",
        "checkUnique" : baseUrl + "/webservices/checkUnique",
        "getUserlogin" : baseUrl + "/webservices/login",
        "forgetPassword" : baseUrl + "/webservices/forgetPassword",
        "resetPassword" : baseUrl + "/webservices/resetPassword",
        "confirmationEmail" : baseUrl + "/webservices/confirmationEmail",
        "getgooglecampaignreports":localhostUrl+"/networks/getgooglecampaignreports",
        "getcampaignreportlist":localhostUrl+"/networks/getcampaignreportlist",
        "addcampaignreportlist":localhostUrl+"/networks/addcampaignreportlist",
        "reportdetails":localhostUrl+"/networks/reportdetails",
        "callapiforcampaignreport":localhostUrl+"/networks/callapiforcampaignreport",
        "getfacebookcampaignreports":localhostUrl+"/networks/getfacebookcampaignreports",
        "getgooglecampaignreportsdetails":localhostUrl+"/networks/getgooglecampaignreportsdetails",
        "configureaccounts":localhostUrl+"/networks/configureaccounts",
        "getassociatedaccount":localhostUrl+"/networks/getassociatedaccount",
        
        "geteventbritetoken":localhostUrl+"/networks/geteventbritetoken",
        "geteventbritetokenstep2":localhostUrl+"/networks/geteventbritetokenstep2",
        "geteventbritemyprofile":localhostUrl+"/networks/geteventbritemyprofile",
        "geteventbriteownedevents":localhostUrl+"/networks/geteventbriteownedevents",
        "geteventbriteorganizers":localhostUrl+"/networks/geteventbriteorganizers",
        "geteventbritevenues":localhostUrl+"/networks/geteventbritevenues",
        "geteventbritecategories":localhostUrl+"/networks/geteventbritecategories",
        "geteventbritesubcategories":localhostUrl+"/networks/geteventbritesubcategories",
        "geteventbriteevents":localhostUrl+"/networks/geteventbriteevents",
        "geteventbritecontactlists":localhostUrl+"/networks/geteventbritecontactlists",        
}

var global_message = {
    "EmailAvailable" : "Available",
    "EmailExist" : "Already Exist!",
    "SavingError" : "Error in saving !",
    "SignupSuccess" : "Email send to you , Please go to email to activate your account.",
    "ForgetPassword" : "Email has been sent to you for reset new password.",
    "ForgetEmailError" : "Please enter correct Email.",
    "ActivatedMessage" : "Your account has been activated now , you can sign in your account .",
    "ErrorInActivation" : "There is some problem in server , Please try some time.",
    "eventSaved" : "Event has been Selected, Please choose Network",
    "eventError" : "Some Error Occured, Please try again.",
    "networkSaved" : "Network has beed added with campaign",
    "networkError" : "Some Error Occured, Please try again.",
    "date_comparison":'End time must be greater than start time. ',
    "endDateError" : 'End date must be same or greater than start date',
    "minbudgetamount":'The entered Budget is very less!',
}
 
var appConstants = {
	"authorizationKey": "dGF4aTphcHBsaWNhdGlvbg=="
}
var headerConstants = {
	"json": "application/json"
} 
var authConstants = {
    "json": "application/json",
    "Content-Type": "Authorization"
}
var googleadwordsapi = {
    'getgooglekeywords': googleapiurl + 'Optimization/GetKeywordIdeas.php',
    'getgoogleplacements' : googleapiurl + 'Optimization/GetPlacementIdeas.php',
    'addgooglecampaign' : googleapiurl + 'BasicOperations/AddCampaigns_Development.php',
}


var userlibrarypath = "http://localhost:5504/images/userlibrary";

/*
var eventbritedetails =  {
        'url'              : 'https://www.eventbrite.com/',
        'clientID'         : '5RLGSPSPPPM237QT4Q',
        'clientSecret'     : 'Q5ERHNU3YCQL5CGXFTSQAZREIKOYZEX3CHWNRLZRGB4YUEQ5PQ',
       // 'callbackURL'      : 'http://alist.marketing:5000/auth/eventbrite/callback',
        'callbackURL'      : 'http://alistixs.com',
    }

var eventbriteapi = {
    'getclientsidetoken': eventbritedetails.url + 'oauth/authorize?response_type=token&client_id='+eventbritedetails.clientID +'&redirect_uri='+eventbritedetails.callbackURL,
    'getserversidetoken': eventbritedetails.url + 'oauth/authorize?response_type=code&client_id='+eventbritedetails.clientID +'&redirect_uri='+eventbritedetails.callbackURL,
}
*/