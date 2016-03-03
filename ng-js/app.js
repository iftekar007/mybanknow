/**
 * Created by samsuj on 29/10/15.
 */


'use strict';

/* App Module */

var mybanknow = angular.module('mybanknow', ['ui.router','ngCookies','angularValidator']);

mybanknow.run(['$rootScope', '$state',function($rootScope, $state){

    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });


    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
    });

}]);

mybanknow.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

// For any unmatched url, redirect to /state1
    $urlRouterProvider
        .otherwise("/index");

//
    // Now set up the states
    $stateProvider
        .state('index',{
            url:"/index",
            views: {

 /*               'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
*/                'content': {
                    templateUrl: 'partials/home.html' ,
                    controller: 'index'
                },

            }
        })

        .state('personal-signup',{
            url:"/personal-signup",
            views: {

                  'header': {
                 templateUrl: 'partials/header.html' ,
                 //controller: 'header'
                 },
                 'footer': {
                 templateUrl: 'partials/footer.html' ,
                 //controller: 'footer'
                 },
                                'content': {
                    templateUrl: 'partials/personal-signup.html' ,
                    controller: 'personalsignup'
                },

            }
        })


        .state('new-account',{
            url:"/new-account",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/new-account.html' ,
                    //controller: 'home'
                },

            }
        })

        .state('business-account',{
            url:"/business-account",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/business-account.html' ,
                    controller: 'businessaccount'
                },

            }
        })

        .state('mycloud-account',{
            url:"/mycloud-account",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/mycloud-account.html' ,
                    //controller: 'home'
                },

            }
        })

        .state('dashboard',{
            url:"/dashboard",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                     controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                    //  controller: 'admin_left'
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/dashboard.html' ,
                    // controller: 'dashboard'
                },

            }
        }
    )





        .state('login',
        {
            url:"/login",
            views: {

                /*              'header': {
                 templateUrl: 'partials/admin_header.html' ,
                 controller: 'header'
                 },
                 'footer': {
                 templateUrl: 'partials/admin_footer.html' ,
                 //controller: 'footer'
                 },
                 */                'content': {
                    templateUrl: 'partials/login.html' ,
                    controller: 'login'
                },

            }
            /*           onEnter: ['$stateParams', '$state', '$uibModal',
             function($stateParams, $state, $uibModal) {
             var size;
             $uibModal.open({
             animation: true,
             templateUrl: 'myModalContent.html',
             controller: 'ModalInstanceCtrl',
             size: size,

             });
             }]
             */        }
    )









    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        hashPrefix:'!'
    });

});

/*
mybanknow.directive('slideToggle', function() {
    return {
        restrict: 'A',
        scope:{
            isOpen: "=slideToggle"
        },
        link: function(scope, element, attr) {
            var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;
            scope.$watch('isOpen', function(newVal,oldVal){
                if(newVal !== oldVal){
                    element.stop().slideToggle(slideDuration);
                }
            });
        }
    };
});

mybanknow.directive('myCustomer', function() {
    return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
});*/


mybanknow.controller('index', function($scope,$state,$cookieStore) {


    $scope.form={};


    setTimeout(function() {
        $('.about').click(function(){
            $('html, body').animate({
                scrollTop: $('div.home_body_block1_section').offset().top
            }, 2000);


        })

        $('.enroll').click(function(){
            $('html, body').animate({
                scrollTop: $('div.home_body_block3_section').offset().top
            }, 2000);


        })

        $('.contact').click(function(){
            $('html, body').animate({
                scrollTop: $('div.home_body_block5_section').offset().top
            }, 2000);


        })

        $('.program').click(function(){
            $('html, body').animate({
                scrollTop: $('div.home_body_block4').offset().top
            }, 2000);


        })


    },2000);

    $scope.customvalidator=function(){

        console.log(typeof($scope.form.agent_name));
        console.log(typeof($scope.form.have_agent));
        console.log(typeof($scope.form.agent_number));

        if(typeof ($scope.form.have_agent)=='undefined' ){

            if( typeof($scope.form.agent_name)=='undefined' || typeof($scope.form.agent_number)=='undefined'){

                console.log(typeof($scope.form.agent_name));
                console.log('in error');

                return "Either put Agent Name and Number or Let us know from where you learned about Mybank Now ?";

            }



        }
        else{
            if($scope.form.have_agent.length==0){

                if( $scope.form.agent_name.length==0 || $scope.form.agent_number.length==0){

                    console.log(($scope.form.agent_name));
                    console.log('in error');

                    return "Either put Agent Name and Number or Let us know from where you learned about Mybank Now ?";

                }

            }

        }

        return true;
    }

    $scope.carrer_sellingform=function(){

        $('#carrer_selling').modal('show');
    }

    $scope.carrer_sellingformsubmit=function(){
        $('#submitshowmodal').modal('show');
    }
    $scope.contactformshowform=function(){


        $('#contact_support').modal('show');
    }

    $scope.contact_supportformsubmit=function(){
        $('#contactsupportsubmitshowmodal').modal('show');
    }

    $scope.contactformsubmit=function(){
        $('#contactowmodal').modal('show');
    }
});

mybanknow.controller('login', function($scope,$state,$http,$cookieStore,$rootScope) {
    $scope.login = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'finderlogin',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.userdetails.status == 'success'){
                $cookieStore.put('userid',data.userdetails.id);
                $cookieStore.put('useremail',data.userdetails.email);
                $cookieStore.put('userfullname',data.userdetails.fname+' '+data.userdetails.lname);
                $cookieStore.put('username',data.userdetails.username);

                if(typeof (data.userdetails.roles[4]) != 'undefined')
                    $cookieStore.put('userrole',4);
                if(typeof (data.userdetails.roles[5]) != 'undefined')
                    $cookieStore.put('userrole',5);
                if(typeof (data.userdetails.roles[6]) != 'undefined')
                    $cookieStore.put('userrole',6);
                if(typeof (data.userdetails.roles[7]) != 'undefined')
                    $cookieStore.put('userrole',7);
                console.log($cookieStore.get('userid'));
                console.log($cookieStore.get('useremail'));
                console.log($cookieStore.get('userfullname'));

                $state.go('dashboard');

/*


                if(typeof($cookieStore.get('idea_det_id')) != 'undefined' && $cookieStore.get('idea_det_id')>0) {
                    $scope.idea_det_id = $cookieStore.get('idea_det_id');
                    $cookieStore.remove('idea_det_id');
                    $state.go('ideadetails',{ideaId: $scope.idea_det_id});
                    return
                }else{
*/
                //   $state.go('dashboard');
                //  return
                // }

            }else{
                $scope.errormsg = data.msg;
            }

        });
    }
});
mybanknow.controller('businessaccount', function($scope,$state,$http,$cookieStore,$rootScope) {
    $scope.businessaccountsubmit = function(){
        $('#businessmodal').modal('show');

    }
});

mybanknow.controller('personalsignup', function($scope,$state,$http,$cookieStore,$rootScope) {
    $scope.personalsignupformsubmit = function(){
        $('#personalmodal').modal('show');


    }
});


mybanknow.controller('admin_header', function($scope,$state,$http,$cookieStore,$rootScope,$log) {
    // $state.go('login');
    // if($cookieStote.get('userid'))
    if(angular.element('head').find('link[href="css/admin_style.css"]').length==0)angular.element('head').append('<link id="home" href="css/admin_style.css" rel="stylesheet">');

    $scope.toggledropdown = function () {

        angular.element('li.user-manu-dropdown').toggleClass('open');
        console.log('we');
    }


    $scope.logout = function () {
        $cookieStore.remove('userid');
        $cookieStore.remove('username');
        $cookieStore.remove('useremail');
        $cookieStore.remove('userfullname');
        $state.go('index');
    }


    // console.log('in admin header');
});

