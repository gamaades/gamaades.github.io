/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.5
Version: 1.9.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.9/admin/
*/

var handleSuperboxGallery = function() {
	"use strict";
	$('.superbox').SuperBox();
};


var Gallery = function () {
	"use strict";
    return {
        //main function
        init: function () {
            $.getScript('assets/plugins/superbox/js/superbox.js').done(function() {
                handleSuperboxGallery();
            });
        }
    };
}();