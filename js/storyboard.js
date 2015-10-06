var domain = "http://dinova-uat.azurewebsites.net/";

formatPhone = function (s) {
    if (s != null && s != "") {
        return "(" + s.substr(0, 3) + ") " + s.substr(3, 3) + " - " + s.substr(6, 4);
    }
}


$(".change-password").click(function () { $(document).trigger("CHANGE_PASSWORD"); });