var dashboard = dashboard || {};

(function ($, window, document) {

	dashboard.area = [];
	dashboard.subject = [];
	dashboard.grade = [];
	dashboard.poverty = [];
	dashboard.resource = [];
	dashboard.projstatus = [];

	$(".filter-area").click(function () {
	    var self = this;
	    var key = $(this).attr("data-key");
	    $("#filter-area").slideToggle();
	    $("#filter-" + key).slideToggle();
	});    
        
}(window.jQuery, window, document));