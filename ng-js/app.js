/**
 * Created by samsuj on 29/10/15.
 */


'use strict';

/* App Module */

var mybanknow = angular.module('mybanknow', ['ui.router','ngCookies','angularValidator','ngFileUpload','ui.bootstrap','angular-confirm']);

mybanknow.run(['$rootScope', '$state',function($rootScope, $state){

    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });


    $rootScope.$on('$stateChangeSuccess',function(ev, to, toParams, from, fromParams){

        $rootScope.stateIsLoading = false;
        $rootScope.previousState = from.name;
        $rootScope.currentState = to.name;


        $(document).scrollTop(0);


       // console.log($rootScope.popupHeight);
    });



    $rootScope.$on('$viewContentLoaded', function(){



        angular.element('.sidebar-mini').toggleClass('sidebar-collapse');
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
                 templateUrl: 'partials/mycloud-header.html' ,
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
                    templateUrl: 'partials/mycloud-header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/new-account.html' ,
                    controller: 'business_account'
                },

            }
        })
		
		.state('choose-login',{
            url:"/choose-login",
            views: {

                'header': {
                    templateUrl: 'partials/header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/chooselogin-footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/choose-login.html' ,
                    controller: 'chooselogin'
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
                    templateUrl: 'partials/mycloud-header.html' ,
                    //controller: 'header'
                },
                'footer': {
                    templateUrl: 'partials/footer.html' ,
                    //controller: 'footer'
                },
                'content': {
                    templateUrl: 'partials/mycloud-account.html' ,
                    controller: 'mycloudaccount'
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

        .state('add-admin',{
            url:"/add-admin",
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
                    templateUrl: 'partials/add_admin.html' ,
                    controller: 'addadmin'
                },

            }
        }
    )
        .state('myprofile',{
            url:"/myprofile",
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
                    templateUrl: 'partials/myprofile.html' ,
                    controller: 'myprofile'
                },

            }
        }
    )


.state('add-file',{
            url:"/add-file",
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
                    templateUrl: 'partials/add_file.html' ,
                    controller: 'addfile'
                },

            }
        }
    )






        .state('add-user',{
            url:"/add-user",
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
                    templateUrl: 'partials/add_user.html' ,
                    controller: 'adduser'
                },

            }
        }
    )



        .state('edit-admin',{
            url:"/edit-admin/:userId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/edit_admin.html' ,
                    controller: 'editadmin'
                },

            }
        }
    )

        .state('edit-admin1',{
            url:"/edit-admin1/:userId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/edit_admin1.html' ,
                    controller: 'editadmin1'
                },

            }
        }
    )
        .state('edit-file',{
            url:"/edit-file/:fileId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/edit_file.html' ,
                    controller: 'editfile'
                },

            }
        }
    )
        .state('edit-user',{
            url:"/edit-user/:userId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/edit_user.html' ,
                    controller: 'edituser'
                },

            }
        }
    )
  .state('edit-user1',{
            url:"/edit-user1/:userId",
            views: {

                'admin_header': {
                    templateUrl: 'partials/admin_top_menu.html' ,
                    controller: 'admin_header'
                },
                'admin_left': {
                    templateUrl: 'partials/admin_left.html' ,
                },
                'admin_footer': {
                    templateUrl: 'partials/admin_footer.html' ,
                },
                'content': {
                    templateUrl: 'partials/edit_user1.html' ,
                    controller: 'edituser1'
                },

            }
        }
    )



        .state('admin-list',{
            url:"/admin-list",
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
                    templateUrl: 'partials/admin_list.html' ,
                    controller: 'adminlist'
                },

            }
        }
    )
        .state('file-list',{
            url:"/file-list",
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
                    templateUrl: 'partials/file_list.html' ,
                    controller: 'filelist'
                },

            }
        }
    )



        .state('user-list',{
            url:"/user-list",
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
                    templateUrl: 'partials/user_list.html' ,
                    controller: 'userlist'
                },

            }
        }
    )





        .state('login',
        {
            url:"/login",
            views: {

                              'header': {
                 templateUrl: 'partials/header.html' ,
                 /*controller: 'header'*/
                 },
                 'footer': {
                 templateUrl: 'partials/chooselogin-footer.html' ,
                 //controller: 'footer'
                 },
                                 'content': {
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



        .state('forgot-password',
        {
            url:"/forgot-password" ,
            views:{
				
				              'header': {
                 templateUrl: 'partials/header.html' ,
                 /*controller: 'header'*/
                 },
                 'footer': {
                 templateUrl: 'partials/chooselogin-footer.html' ,
                 //controller: 'footer'
                 },
				 
                'content':{
                    templateUrl:    'partials/forgot_password.html',
                    controller:     'forgotpassword'
                }
            }
        }
    )

        .state('forgot-password-check',
        {
            url:"/forgot-password-check" ,
            views:{
                'header': {
                    templateUrl: 'partials/header.html' ,
                    /*controller: 'header'*/
                },
                'footer': {
                    templateUrl: 'partials/chooselogin-footer.html' ,
                    //controller: 'footer'
                },

                'content':{
                    templateUrl:    'partials/forgot_password_check.html',
                    controller:     'forgotpasswordcheck'
                }
            }
        }
    )

        .state('change-password',
        {
            url:"/change-password" ,
            views:{
                'header': {
                    templateUrl: 'partials/header.html' ,
                    /*controller: 'header'*/
                },
                'footer': {
                    templateUrl: 'partials/chooselogin-footer.html' ,
                    //controller: 'footer'
                },

                'content':{
                    templateUrl:    'partials/change_password.html',
                    controller:     'change_password'
                }
            }
        }
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


mybanknow.controller('index', function($scope,$state,$cookieStore,$http) {

    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'countrylist',
        // data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        //$rootScope.stateIsLoading = false;
        $scope.countrylist=data

    });

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
	
	$scope.togglearea=function(){
			$('html, body').animate({
                scrollTop: $('div#home_body_block1').offset().top+70
            }, 2000);
	}

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


        angular.extend($scope.form,  {'source_type' : 'careerselling'});

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addmycloud',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            $('#submitshowmodal').modal('show');
            $scope.careerselling.reset();

        });


    }
    $scope.contactformshowform=function(){


        $('#contact_support').modal('show');
    }

    $scope.contact_supportformsubmit=function(){



        angular.extend($scope.form,  {'source_type' : 'contactsupport'});

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addmycloud',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            $('#contactsupportsubmitshowmodal').modal('show');
            $scope.contactsupport.reset();

        });
    }

    $scope.contactformsubmit=function(){

        angular.extend($scope.form,  {'source_type' : 'contact'});

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addmycloud',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            $('#contactowmodal').modal('show');
            $scope.contact.reset();

        });
    }
});

mybanknow.controller('login', function($scope,$state,$http,$cookieStore,$rootScope) {
    $rootScope.popupHeight = $(window).height();
    $rootScope.headerHeight = $('.peracc_head').innerHeight();
    $rootScope.footerHeight = $('.peracc_footer').innerHeight();
    console.log($rootScope.popupHeight);
    console.log($rootScope.headerHeight);
    console.log($rootScope.footerHeight);

    $rootScope.requiredHeight=($rootScope.popupHeight-55)+'px';
    //console.log($rootScope.popupHeight);

     $('.peracc_body').css('height',$rootScope.requiredHeight);
   // $('.peracc_body').height($rootScope.requiredHeight);

    $scope.login = function(){
        $rootScope.stateIsLoading = true;
        console.log(1);
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminlogin',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                $cookieStore.put('userid',data.userdetails.id);
                $cookieStore.put('useremail',data.userdetails.email);
                $cookieStore.put('userfullname',data.userdetails.fname+' '+data.userdetails.lname);
                $cookieStore.put('userfname',data.userdetails.fname);
                $cookieStore.put('userlname',data.userdetails.lname);
                $cookieStore.put('username',data.userdetails.username);
                $cookieStore.put('userrole',data.userdetails.userrole);

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



                //console.log($rootScope.userrole);

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
                $rootScope.stateIsLoading=false;

                console.log('in error');
                console.log('in error'+$rootScope.stateIsLoading );
            }

        });
    }
});


mybanknow.controller('forgotpassword', function($scope,$state,$http,$cookieStore,$rootScope) {
    $rootScope.popupHeight = $(window).height();
    $rootScope.headerHeight = $('.peracc_head').innerHeight();
    $rootScope.footerHeight = $('.peracc_footer').innerHeight();
    console.log($rootScope.popupHeight);
    console.log($rootScope.headerHeight);
    console.log($rootScope.footerHeight);

    $rootScope.requiredHeight=($rootScope.popupHeight-55)+'px';
    $('.peracc_body').css('height',$rootScope.requiredHeight);

    $scope.forgotpasssubmit = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'forgotpass',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                $cookieStore.put('user_id',data.userdetails.user_id);
                $cookieStore.put('user_email',data.userdetails.email);

                $rootScope.user_id=$cookieStore.get('user_id');
                $rootScope.user_email=$cookieStore.get('user_email');

                // console.log($rootScope.user_email);
                // console.log($rootScope.user_id);
                //console.log($rootScope.refferalcodes);

                $state.go('forgot-password-check');


            }else{
                $scope.errormsg = data.msg;
            }

        });
    }
});
mybanknow.controller('forgotpasswordcheck', function($scope,$state,$http,$cookieStore,$rootScope) {
    $rootScope.popupHeight = $(window).height();
    $rootScope.headerHeight = $('.peracc_head').innerHeight();
    $rootScope.footerHeight = $('.peracc_footer').innerHeight();
    console.log($rootScope.popupHeight);
    console.log($rootScope.headerHeight);
    console.log($rootScope.footerHeight);

    $rootScope.requiredHeight=($rootScope.popupHeight-55)+'px';
    $('.peracc_body').css('height',$rootScope.requiredHeight);

    $scope.form={email:$rootScope.user_email,refferal_code:$rootScope.refferalcodess}
    $scope.forgotpasschecksubmit = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'forgotpassaccesscheck',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                $state.go('change-password');
                return

            }else{
                $scope.errormsg = data.msg;
            }

        });
    }
});

mybanknow.controller('change_password', function($scope,$state,$http,$cookieStore,$rootScope) {
    $rootScope.popupHeight = $(window).height();
    $rootScope.headerHeight = $('.peracc_head').innerHeight();
    $rootScope.footerHeight = $('.peracc_footer').innerHeight();
    console.log($rootScope.popupHeight);
    console.log($rootScope.headerHeight);
    console.log($rootScope.footerHeight);

    $rootScope.requiredHeight=($rootScope.popupHeight-55)+'px';
    $('.peracc_body').css('height',$rootScope.requiredHeight);

    $scope.form={email:$rootScope.user_email,user_id:$rootScope.user_id}
    $scope.changepassFormSubmit = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'changepasswords',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                $state.go('login');
                return

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

mybanknow.controller('mycloudaccount', function($scope,$state,$http,$cookieStore,$rootScope) {

    $rootScope.popupHeight = $(window).height();
    $rootScope.headerHeight = $('.peracc_head').innerHeight();
    $rootScope.footerHeight = $('.peracc_footer').innerHeight();
    console.log($rootScope.popupHeight);
    console.log($rootScope.headerHeight);
    console.log($rootScope.footerHeight);

    $rootScope.requiredHeight=($rootScope.popupHeight-152)+'px';
//console.log($rootScope.popupHeight);

    $('.peracc_body').css('height',$rootScope.requiredHeight);
});
mybanknow.controller('chooselogin', function($scope,$state,$http,$cookieStore,$rootScope) {

    $rootScope.popupHeight = $(window).height();
    $rootScope.headerHeight = $('.peracc_head').innerHeight();
    $rootScope.footerHeight = $('.peracc_footer').innerHeight();
    console.log($rootScope.popupHeight);
    console.log($rootScope.headerHeight);
    console.log($rootScope.footerHeight);

    $rootScope.requiredHeight=($rootScope.popupHeight-55)+'px';
//console.log($rootScope.popupHeight);

    $('.peracc_body').css('height',$rootScope.requiredHeight);
});



mybanknow.controller('business_account', function($scope,$state,$http,$cookieStore,$rootScope) {
    $rootScope.popupHeight = $(window).height();
    $rootScope.headerHeight = $('.peracc_head').innerHeight();
    $rootScope.footerHeight = $('.peracc_footer').innerHeight();
    console.log($rootScope.popupHeight);
    console.log($rootScope.headerHeight);
    console.log($rootScope.footerHeight);

    $rootScope.requiredHeight=($rootScope.popupHeight-152)+'px';
//console.log($rootScope.popupHeight);

    $('.peracc_body').css('height',$rootScope.requiredHeight);
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'countrylist',
       // data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        //$rootScope.stateIsLoading = false;
       $scope.countrylist=data

    });

//console.log($scope.countrylist);

    $scope.form={};
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

    $scope.businessaccountformsubmit = function(){
        angular.extend($scope.form,  {'source_type' : 'businessaccount'});

        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addmycloud',
             data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            $('#businessmodal').modal('show');
            $scope.businessaccount.reset();

        });

    }
});

mybanknow.controller('personalsignup', function($scope,$state,$http,$cookieStore,$rootScope) {
    $rootScope.popupHeight = $(window).height();
    $rootScope.headerHeight = $('.peracc_head').innerHeight();
    $rootScope.footerHeight = $('.peracc_footer').innerHeight();
    console.log($rootScope.popupHeight);
    console.log($rootScope.headerHeight);
    console.log($rootScope.footerHeight);

    $rootScope.requiredHeight=($rootScope.popupHeight-152)+'px';
//console.log($rootScope.popupHeight);

    $('.peracc_body').css('height',$rootScope.requiredHeight);

    $scope.personalsignupformsubmit = function(){
       // $('#personalmodal').modal('show');


    }
});




mybanknow.controller('admin_header', function($scope,$state,$http,$cookieStore,$rootScope,$log) {
    // $state.go('login');
    // if($cookieStote.get('userid'))


    //






    $rootScope.logout = function () {
        $cookieStore.remove('userid');
        $cookieStore.remove('username');
        $cookieStore.remove('userrole');
        $cookieStore.remove('useremail');
        $cookieStore.remove('userfullname');

        $rootScope.userrole=0;
        $rootScope.userfullname=0;
        $rootScope.userid=0;
        $rootScope.userrole=0;

        console.log('in logout');
        $state.go('index');
    }



    if (typeof($cookieStore.get('userid')) != 'undefined' && $cookieStore.get('userid') > 0) {

        $rootScope.userfullname=$cookieStore.get('userfullname');
        $rootScope.userid=$cookieStore.get('userid');
        $rootScope.userrole=$cookieStore.get('userrole');
        console.log($rootScope.userfullname);
    }
    else{
        $rootScope.userid=0;
        $state.go('login');
    }



$rootScope.togglesidebar=function(){

    angular.element('.sidebar-mini').toggleClass('sidebar-collapse');

}

    if(typeof($rootScope.i)=='undefined')$rootScope.i=0;
    if($rootScope.i==0){

        console.log($rootScope.i+'ri');
        angular.element('.sidebar-mini').toggleClass('sidebar-collapse');
        $rootScope.i++;
    }

    $rootScope.$on('$viewContentLoaded', function(){

        $('li.treeview').find('a').unbind().click(function(e){
            console.log('45555555');


            $(this).next('.treeview-menu').slideToggle( "slow" );
            //e.preventDefault();

        });

        //Here your view content is fully loaded !!
        console.log('On load ..');
        //angular.element('.sidebar-mini').toggleClass('sidebar-collapse');
    });

    /* if(angular.element('head').find('script[src="dist/js/app.min.js"]').length==0)
        angular.element('head').append('<script src="dist/js/app.min.js"></script>');*/




    if(angular.element('head').find('link[href="css/admin_style.css"]').length==0)angular.element('head').append('<link id="home" href="css/admin_style.css" rel="stylesheet">');

    $scope.toggledropdown = function () {

        //angular.element('li.user-manu-dropdown').toggleClass('open');
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



mybanknow.controller('adminlist', function($scope,$state,$http,$cookieStore,$rootScope,$confirm) {
    $scope.currentPage=1;
    $scope.perPage=3;
    $scope.begin=0;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function(){
        console.log($scope.currentPage);
        $scope.begin=parseInt($scope.currentPage-1)*$scope.perPage;
        $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    }
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'adminlist',
        // data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        console.log(data);
        $scope.userlist=data;
        $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));


    });

    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.fname.indexOf($scope.searchkey) != -1) || (item.lname.indexOf($scope.searchkey) != -1) ||(item.mail.indexOf($scope.searchkey) != -1)||(item.mobile_no.indexOf($scope.searchkey) != -1)||(item.phone_no.indexOf($scope.searchkey) != -1) ||(item.address.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };
    $scope.deladmin = function(item){


        $confirm({text: 'Are you sure you want to delete?'})
            .then(function() {
                $rootScope.stateIsLoading = true;

                var idx = $scope.userlist.indexOf(item);
                $http({
                    method  : 'POST',
                    async:   false,
                    url     : $scope.adminUrl+'deleteadmin',
                    data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                }) .success(function(data) {
                    $rootScope.stateIsLoading = false;
                    $scope.userlist.splice(idx,1);
                    $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));

                });
            });

    }

    $scope.changeStatus = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.userlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminupdatestatus',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist[idx].status = 1-$scope.userlist[idx].status;
        });
    }



    $scope.changepassword=function(uid){
        $scope.uid=uid;

        console.log('change password modal');

        $('#changepassword').modal('show');
        $scope.add_finder.reset();



    }

    $scope.closemodal=function(){

        $scope.add_finder.reset();

        $('#changepassword').modal('hide');
    }

    $scope.updatepass = function () {

        $scope.errorshow=false;
        $scope.form.uid=$rootScope.userid;

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminchangepassword?uid='+$scope.uid,
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            if(data.status=='success') {
                $rootScope.stateIsLoading = false;
                $('#changepassword').modal('hide');

                return;
            }
            if(data.status=='error'){
                console.log('in error');
                $scope.errorshow=true;
                $rootScope.stateIsLoading = false;
            }
        });
    }


    //console.log('in add admin form ');
});

mybanknow.controller('userlist', function($scope,$state,$http,$cookieStore,$rootScope,$confirm) {
    $scope.currentPage=1;
    $scope.perPage=3;
    $scope.begin=0;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function(){
        console.log($scope.currentPage);
        $scope.begin=parseInt($scope.currentPage-1)*$scope.perPage;
        $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    }
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'finderlist',
        // data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        console.log(data);
        $scope.userlist=data;
        $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));


    });

    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.fname.indexOf($scope.searchkey) != -1) || (item.lname.indexOf($scope.searchkey) != -1) ||(item.mail.indexOf($scope.searchkey) != -1)||(item.mobile_no.indexOf($scope.searchkey) != -1)||(item.phone_no.indexOf($scope.searchkey) != -1)||(item.role.indexOf($scope.searchkey) != -1) ||(item.address.indexOf($scope.searchkey) != -1)){
            return true;
        }
        return false;
    };
    $scope.deladmin = function(item){
        $confirm({text: ' Are you sure you want to delete this user? This cannot be undone.'})
            .then(function() {
                $rootScope.stateIsLoading = true;

                var idx = $scope.userlist.indexOf(item);
                $http({
                    method  : 'POST',
                    async:   false,
                    url     : $scope.adminUrl+'deleteadmin',
                    data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                }) .success(function(data) {
                    $rootScope.stateIsLoading = false;
                    $scope.userlist.splice(idx,1);
                    $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));

                });
            });
    }

    $scope.changeStatus = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.userlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'updatestatus',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist[idx].status = 1-$scope.userlist[idx].status;
        });
    }



    $scope.changepassword=function(uid){
        $scope.uid=uid;

        console.log('change password modal');

        $('#changepassword').modal('show');
        $scope.add_finder.reset();



    }

    $scope.closemodal=function(){

        $scope.add_finder.reset();

        $('#changepassword').modal('hide');
    }

    $scope.updatepass = function () {

        $scope.errorshow=false;
        $scope.form.uid=$rootScope.userid;

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminchangepassword?uid='+$scope.uid,
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            if(data.status=='success') {
                $rootScope.stateIsLoading = false;
                $('#changepassword').modal('hide');

                return;
            }
            if(data.status=='error'){
                console.log('in error');
                $scope.errorshow=true;
                $rootScope.stateIsLoading = false;
            }
        });
    }





    //console.log('in add admin form ');
});


mybanknow.controller('filelist', function($scope,$state,$http,$cookieStore,$rootScope,$confirm) {
    $scope.currentPage=1;
    $scope.perPage=3;
    $scope.begin=0;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function(){
        console.log($scope.currentPage);
        $scope.begin=parseInt($scope.currentPage-1)*$scope.perPage;
        $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    }
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'employementlist?role='+$rootScope.userrole,
        // data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        console.log(data);
        $scope.userlist=data;
        $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));


    });

    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.fname.indexOf($scope.searchkey) != -1) || (item.phone.indexOf($scope.searchkey) != -1) ){
            return true;
        }
        return false;
    };
    $scope.delcontact = function(item){
        $confirm({text: 'Are you sure you want to delete?'})
            .then(function() {
                $rootScope.stateIsLoading = true;

                var idx = $scope.userlist.indexOf(item);
                $http({
                    method  : 'POST',
                    async:   false,
                    url     : $scope.adminUrl+'delfile',
                    data    : $.param({id: $scope.userlist[idx].id}),  // pass in data as strings
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                }) .success(function(data) {
                    $rootScope.stateIsLoading = false;
                    $scope.userlist.splice(idx,1);
                    $scope.userlistp = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));

                });
            });
    }

    $scope.changeStatus = function(item){
        $rootScope.stateIsLoading = true;
        var idx = $scope.userlist.indexOf(item);
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'updatestatus',
            data    : $.param({uid: $scope.userlist[idx].uid}),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $scope.userlist[idx].status = 1-$scope.userlist[idx].status;
        });
    }




    //console.log('in add admin form ');
});


mybanknow.controller('addadmin', function($scope,$state,$http,$cookieStore,$rootScope) {
    // $state.go('login');
    $scope.contact=['Anytime','Early morning','Mid morning','Afternoon','Early evening','Late evening'];
    $scope.submitadminForm = function(){

        console.log($scope.adminUrl+'addadmin');


        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addadmin',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                console.log(data);
                $('.email_div').append('<label class="control-label has-error validationMessage">This email already exists.</label>');
            }else{
                $state.go('admin-list');
                return;
            }



        });


    }

    //console.log('in add admin form ');
});

mybanknow.controller('adduser', function($scope,$state,$http,$cookieStore,$rootScope) {
    // $state.go('login');
    $scope.contact=['Anytime','Early morning','Mid morning','Afternoon','Early evening','Late evening'];
    $scope.submitadminForm = function(){

        console.log($scope.adminUrl+'addadmin');


        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addfinder',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                console.log(data);
                $('.email_div').append('<label class="control-label has-error validationMessage">This email already exists.</label>');
            }else{
                $state.go('user-list');
                return;
            }



        });


    }

    //console.log('in add admin form ');
});

mybanknow.controller('addfile', function($scope,$state,$http,$cookieStore,$rootScope,Upload) {
    // $state.go('login');
    $scope.contact=['Anytime','Early morning','Mid morning','Afternoon','Early evening','Late evening'];


    $scope.form={};
    $scope.form.resume = '';


    $scope.$watch('event_imgupload', function (files) {
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    upload(file);
                    console.log('in upload');
                })(files[i]);
            }
        }
    });

    $scope.getReqParams = function () {
        return $scope.generateErrorOnServer ? '?errorCode=' + $scope.serverErrorCode +
        '&errorMessage=' + $scope.serverErrorMsg : '';
    };

    function upload(file) {
        $scope.errorMsg = null;
        console.log('-----');
        uploadUsingUpload(file);
    }

    function uploadUsingUpload(file) {
        $rootScope.stateIsLoading = true;
        file.upload = Upload.upload({
            url: $scope.adminUrl+'uploadresume' + $scope.getReqParams(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'id':$rootScope.createIdeaId},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            $('.progress').removeClass('ng-hide');
            file.result = response.data;

            $scope.form.resume = response.data.image_url;
            $scope.form.event_image = response.data.image_name;
            $rootScope.stateIsLoading = false;

            //$('#loaderDiv').addClass('ng-hide');


        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            // $('#loaderDiv').removeClass('ng-hide');

            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }



    /*file upload end */


    $scope.submitadminForm = function(){

        console.log($scope.adminUrl+'addadmin');




        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'addemployement',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                console.log(data);
                $('.email_div').append('<label class="control-label has-error validationMessage">This email already exists.</label>');
            }else{
                $state.go('file-list');
                return;
            }



        });


    }

    //console.log('in add admin form ');
});



mybanknow.controller('editadmin', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    $scope.userid=$stateParams.userId;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'admindetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        console.log(data);
        $scope.form = {
            uid: data.uid,
            refferal_code: data.refferal_code,
            fname: data.fname,
            lname: data.lname,
            bname: data.bname,
            email: data.email,
            address: data.address,
            phone_no: data.phone_no,
            mobile_no: data.mobile_no,
            contact_time: data.contact_time,
        }
    });
    $scope.update = function () {

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('admin-list');
            return
        });
    }


})
mybanknow.controller('editadmin1', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    $scope.userid=$stateParams.userId;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'admindetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        console.log(data);
        $scope.form = {
            uid: data.uid,
            refferal_code: data.refferal_code,
            fname: data.fname,
            lname: data.lname,
            bname: data.bname,
            email: data.email,
            address: data.address,
            phone_no: data.phone_no,
            mobile_no: data.mobile_no,
            contact_time: data.contact_time,
        }
    });
    $scope.update = function () {

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('myprofile');
            return
        });
    }


})

mybanknow.controller('myprofile', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    $scope.errorshow=false;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'myprofile?role='+$rootScope.userrole,
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        console.log(data);
        $scope.userinfo = data;
    });

    $scope.changepassword=function(){

        console.log('change password modal');

        $('#changepassword').modal('show');
        $scope.add_finder.reset();



    }

    $scope.closemodal=function(){

        $scope.add_finder.reset();

        $('#changepassword').modal('hide');
    }

    $scope.updatepass = function () {

        $scope.errorshow=false;
        $scope.form.uid=$rootScope.userid;

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'changepassword',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            if(data.status=='success') {
                $rootScope.stateIsLoading = false;
                $('#changepassword').modal('hide');

                return;
            }
            if(data.status=='error'){
                console.log('in error');
                $scope.errorshow=true;
                $rootScope.stateIsLoading = false;
            }
        });
    }

})
mybanknow.controller('edituser', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    $scope.userid=$stateParams.userId;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'finderdetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        console.log(data);
        $scope.form = {
            uid: data.uid,
            refferal_code: data.refferal_code,
            fname: data.fname,
            lname: data.lname,
            bname: data.bname,
            email: data.email,
            address: data.address,
            phone_no: data.phone_no,
            mobile_no: data.mobile_no,
            contact_time: data.contact_time,
            role: data.roleid,
        }
    });
    $scope.update = function () {

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('admin-list');
            return
        });
    }


})
mybanknow.controller('edituser1', function($scope,$state,$http,$cookieStore,$rootScope,$stateParams){

    $scope.userid=$stateParams.userId;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'finderdetails',
        data    : $.param({'uid':$scope.userid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        console.log(data);
        $scope.form = {
            uid: data.uid,
            refferal_code: data.refferal_code,
            fname: data.fname,
            lname: data.lname,
            bname: data.bname,
            email: data.email,
            address: data.address,
            phone_no: data.phone_no,
            mobile_no: data.mobile_no,
            contact_time: data.contact_time,
            role: data.roleid,
        }
    });
    $scope.update = function () {

        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'adminupdates',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            $state.go('myprofile');
            return
        });
    }


})

mybanknow.controller('editfile', function($scope,$state,$http,$cookieStore,$rootScope,Upload,$stateParams) {
    // $state.go('login');
    $scope.contact=['Anytime','Early morning','Mid morning','Afternoon','Early evening','Late evening'];


    $scope.form={};
    $scope.form.resume = '';



    $scope.fileid=$stateParams.fileId;

    $http({
        method  : 'POST',
        async:   false,
        url     :     $scope.adminUrl+'employementdetails',
        data    : $.param({'id':$scope.fileid}),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        console.log(data);
        $scope.form = {
            id: data.id,

            fname: data.fname,
            desc: data.lname,
            event_image: data.resume,
            resume: data.resume,
            email: data.email,
            role: data.rolid,
            phone_no: data.phone_no,
            mobile_no: data.mobile_no,
            contact_time: data.contact_time,
        }
    });


    $scope.$watch('event_imgupload', function (files) {
        $scope.formUpload = false;
        if (files != null) {
            for (var i = 0; i < files.length; i++) {
                $scope.errorMsg = null;
                (function (file) {
                    upload(file);
                    console.log('in upload');
                })(files[i]);
            }
        }
    });

    $scope.getReqParams = function () {
        return $scope.generateErrorOnServer ? '?errorCode=' + $scope.serverErrorCode +
        '&errorMessage=' + $scope.serverErrorMsg : '';
    };

    function upload(file) {
        $scope.errorMsg = null;
        console.log('-----');
        uploadUsingUpload(file);
    }

    function uploadUsingUpload(file) {
        $rootScope.stateIsLoading = true;
        file.upload = Upload.upload({
            url: $scope.adminUrl+'uploadresume' + $scope.getReqParams(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            fields: {'id':$rootScope.createIdeaId},
            file: file,
            fileFormDataName: 'Filedata'
        });

        file.upload.then(function (response) {
            $('.progress').removeClass('ng-hide');
            file.result = response.data;

            $scope.form.resume = response.data.image_url;
            $scope.form.event_image = response.data.image_name;
            $rootScope.stateIsLoading = false;

            //$('#loaderDiv').addClass('ng-hide');


        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        });

        file.upload.progress(function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            // $('#loaderDiv').removeClass('ng-hide');

            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

        });

        file.upload.xhr(function (xhr) {
            // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
        });
    }



    /*file upload end */


    $scope.submitadminForm = function(){

        console.log($scope.adminUrl+'addadmin');




        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'updateemployement',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            //$rootScope.stateIsLoading = false;
            if(data.status == 'error'){
                console.log(data);
                $('.email_div').append('<label class="control-label has-error validationMessage">This email already exists.</label>');
            }else{
                $state.go('file-list');
                return;
            }



        });


    }

    //console.log('in add admin form ');
});