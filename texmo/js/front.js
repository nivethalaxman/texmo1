/*global $, document, Chart, LINECHART, data, options, window*/
$(document).ready(function () {

    'use strict';

    // Main Template Color
    var brandPrimary = '#fff';
    var scrollbg = '#e8a249';

    // ------------------------------------------------------- //
    // For demo purposes only
    // ------------------------------------------------------ //

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            $('link#theme-stylesheet').attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });
        }

        return false;
    });

    // ------------------------------------------------------- //
    // Custom Scrollbar
    // ------------------------------------------------------ //

    if ($(window).outerWidth() > 992) {
        $("nav.side-navbar").niceScroll({
            cursorcolor: scrollbg,
            cursorwidth: '3px',
            cursorborder: 'none'
        });
    }


    // ------------------------------------------------------- //
    // Side Navbar Functionality
    // ------------------------------------------------------ //
    $('#toggle-btn').on('click', function (e) {

        e.preventDefault();

        if ($(window).outerWidth() > 1194) {
            $('nav.side-navbar').toggleClass('shrink');
            $('.page').toggleClass('active');
        } else {
            $('nav.side-navbar').toggleClass('show-sm');
            $('.page').toggleClass('active-sm');
        }
    });


    // ------------------------------------------------------- //
    // Login  form validation
    // ------------------------------------------------------ //
    $('#login-form').validate({
        messages: {
            loginUsername: 'please enter your username',
            loginPassword: 'please enter your password'
        }
    });

    // ------------------------------------------------------- //
    // Register form validation
    // ------------------------------------------------------ //
    $('#register-form').validate({
        messages: {
            registerUsername: 'please enter your first name',
            registerEmail: 'please enter a vaild Email Address',
            registerPassword: 'please enter your password'
        }
    });

    // ------------------------------------------------------- //
    // Transition Placeholders
    // ------------------------------------------------------ //
    $('input').on('focus', function () {
        $(this).siblings('.label-custom').addClass('active');
    });

    $('input').on('blur', function () {
        $(this).siblings('.label-custom').removeClass('active');

        if ($(this).val() !== '') {
            $(this).siblings('.label-custom').addClass('active');
        } else {
            $(this).siblings('.label-custom').removeClass('active');
        }
    });


    // ------------------------------------------------------- //
    // Jquery Progress Circle
    // ------------------------------------------------------ //
    var machine = $("#machine1").gmpc({
        color: brandPrimary,
        line_width: 8,
        percent: 90
    });
    var machine = $("#machine2").gmpc({
        color: brandPrimary,
        line_width: 8,
        percent: 60
    });
    var machine4 = $("#machine3").gmpc({
        color: brandPrimary,
        line_width: 8,
        percent: 80
    });
    var machine3 = $("#machine4").gmpc({
        color: brandPrimary,
        line_width: 8,
        percent: 20
    });
    var machine = $("#machine5").gmpc({
        color: brandPrimary,
        line_width: 10,
        percent: 90,
        width: "300px" 

    });
    var machine = $("#machine6").gmpc({
        color: brandPrimary,
        line_width: 10,
        percent: 60,
        width: "300px" 
    });
    var machine4 = $("#machine7").gmpc({
        color: brandPrimary,
        line_width: 10,
        percent: 80,
        width: "300px" 
    });
    var machine3 = $("#machine8").gmpc({
        color: brandPrimary,
        line_width: 10,
        percent: 20,
        width: "300px" 

    });


    var machine = $("#machine9").gmpc({
        color: brandPrimary,
        line_width: 8,
        percent: 90
    });
    var machine = $("#machine10").gmpc({
        color: brandPrimary,
        line_width: 8,
        percent: 60
    });
    var machine4 = $("#machine11").gmpc({
        color: brandPrimary,
        line_width: 8,
        percent: 80
    });
    var machine3 = $("#machine12").gmpc({
        color: brandPrimary,
        line_width: 8,
        percent: 20
    });
    var machine = $("#machine13").gmpc({
        color: brandPrimary,
        line_width: 10,
        percent: 90,
        width: "300px" 

    });
    var machine = $("#machine14").gmpc({
        color: brandPrimary,
        line_width: 10,
        percent: 60,
        width: "300px" 
    });
    var machine4 = $("#machine15").gmpc({
        color: brandPrimary,
        line_width: 10,
        percent: 80,
        width: "300px" 
    });
    var machine3 = $("#machine16").gmpc({
        color: brandPrimary,
        line_width: 10,
        percent: 20,
        width: "300px" 

    });
    
    
    machine3.gmpc('animate', 80, 3000);
    machine4.gmpc('animate', 80, 3000);

    // ------------------------------------------------------- //
    // External links to new window
    // ------------------------------------------------------ //

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });

});




$(function(){
  var viewModel = {};
  viewModel.fileData = ko.observable({
    dataURL: ko.observable(),
    // base64String: ko.observable(),
  });
  viewModel.multiFileData = ko.observable({
    dataURLArray: ko.observableArray(),
  });
  viewModel.onClear = function(fileData){
    if(confirm('Are you sure?')){
      fileData.clear && fileData.clear();
    }                            
  };
  viewModel.debug = function(){
    window.viewModel = viewModel;
    console.log(ko.toJSON(viewModel));
    debugger; 
  };
  ko.applyBindings(viewModel);
});


$(document).on('click', '.browse', function(){
  var file = $(this).parent().parent().parent().find('.file');
  file.trigger('click');
});
$(document).on('change', '.file', function(){
  $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
});