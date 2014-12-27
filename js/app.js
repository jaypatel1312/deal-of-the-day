// Defining angular application model
// for Deal of the day app
//
var dotdApp = angular.module('dotdApp',['ngRoute','ngAnimate','truncate']);

////////// ROUTING /////////////////////////
// Deffining $routeProvider for Pomidoro applicatiom module
//
dotdApp.config(function ($routeProvider) {
    $routeProvider

        // We are going to define routes,
        // controllers and templates associated
        // with these routes.
       
        // main route
        //
        .when('/',
        {
            controller: 'RootController',
            templateUrl: 'views/RootControllerView.html'

        })

        // deal buy page
        //
        .when('/deal-item/:id',
        {
            controller: 'DealController',
            templateUrl: 'views/DealDetail.html'

        })

        // settings page
        //
        .when('/settings',
        {
            controller: 'SettingsController',
            templateUrl: 'views/SettingsControllerView.html'

        })

        // if non of the above routes
        // are matched we are setting router
        // to redirect to the RootController
        .otherwise({ redirectTo: '/'});
});

///////// CONTROLERS ////////////////////////////
// Below we are going to define all the controllers
// we have defined in the router
//

// RootController
//
dotdApp.controller('RootController', function($scope,listofDeals){

    // Controller is going to set recommendedDeals
    // variable for the $scope object in order for view to
    // display its contents on the screen as html 
    $scope.recommendedDeals = [];
    $scope.pageClass = 'page-home';

    // Just a housekeeping.
    // In the init method we are declaring all the
    // neccesarry settings and assignments
    init();

    function init(){
        $scope.recommendedDeals = listofDeals.getRecommended();
    }    
});

// DealController
//
dotdApp.controller('DealController', function($scope,listofDeals,$routeParams){

    // This controller is going to set theaters
    // variable for the $scope object in order for view to
    // display its contents on the screen as html 
    //$scope.deals = [];
    $scope.pageClass = 'page-about';

    // Just a housekeeping.
    // In the init method we are declaring all the
    // neccesarry settings and assignments
    init();

    function init(){
        $scope.deals = listofDeals.getSelectedDeal($routeParams.id);
        console.log($scope.deals);
    }    
});

// SettingsController
//
dotdApp.controller('SettingsController', function($scope){
    // This controller is going just to serve the view
});
///////////// FACTORIES ////////////////////////////

// Defining recommendedDeals factory
// It has 5 recommended movies and 
// makes them available to controller
// so it can pass values to the template
//
dotdApp.factory('listofDeals', function(){
    var recommended = [
        { id:1, name: 'Delicate Pinks', description: ' When celebrating your anniversary, flowers are always the way to go. Eliana Nunes Floral Design at Arcadia flower Shop has many options for your anniversary gift. You can choose from our beautiful selection of roses where you will find a variety of styles or if she has a green thumb, you may find that a beautiful plant or dish garden will make the perfect gift for her. On this page you will find a variety of anniversary flower arrangements to choose from as well. Not sure what to get? Leave it up to us with our Designer’s Choice arrangement. We will deliver your flowers anywhere in Winston Salem, NC and surrounding area. We also offer nationwide flower delivery using our amazing network of reputable local florists throughout the United States.', img: 'img/1.jpg', bought:1060,expire_date:'01/01/2015',price:100},
        { id:2, name: 'Birthday Flowers', description: 'Flowers are one of the best gifts you can give and at Arcadia Flower Shop you will always find the best selection. Everybody loves flowers and a bright birthday bouquet is sure to bring a smile to that special someone. Whether you are looking for a fresh flowers arrangement, a delightful romantic bouquet or a plant, Arcadia Flower Shop has plenty for you to choose from. Not sure what to get? Leave it up to us with our Designer’s Choice arrangement. We will deliver your flowers anywhere in Winston Salem, NC and surrounding area. We also offer nationwide flower delivery using our amazing network of reputable local florists throughout the United States.', img: 'img/2.jpg', bought:600,expire_date:'01/01/2015',price:400},
        { id:3, name: 'Love & Romance Flowers', description: 'Let her know how you feel by sending a beautiful flower arrangement from out Love & Romance selection. Whether you choose to send her classic roses, one of our signature designs or any arrangement from our selection, be sure you will brighten her day and make her feel special.', img: 'img/3.jpg', bought:6,expire_date:'01/01/2015',price:2000},
        { id:4, name: 'Roses', description: 'Send Roses from your premier Winstoon Salem florist for a surprise that she will love. Roses are such a classic, you can never go wrong with them. As many people\'s favorite flower, they are always sure to please. Here at Arcadia Flower Shop, our roses are always the freshest, premium long stem roses. Whether you like a classic rose arrangement, or a more modern aproach, our rose arrangements selection should have something that will work just right for you. You can also always call us to get your custom rose display to fit any specific needs. We offer daily delivery on roses and flower arrangements, anywhere in Winston Salem, NC. With our network of trusted local florists, we can also can send your order anywhere in the US, just call us to make arrangements.', img: 'img/4.jpg', bought:10,expire_date:'01/01/2015',price:500},
        { id:5, name: 'Sympathy Flowers', description: 'Express your condolences by sending sympathy flowers from Arcadia Flower Shop, your Winston Salem florist of choice. Choose from standing sprays, vase flower arrangements, basket arrangements, or check out our plant & dish garden section for even more options. We deliver flowers daily to all funeral homes in Winston Salem, NC and most of the surrounding area. We also offer nationwide flower delivery using our amazing network of reputable local florists throughout the United States.', img: 'img/5.jpg',bought:50,expire_date:'01/01/2015',price:450}      
    ];

    var factory = {};
    factory.getRecommended = function(){

        // If performing http communication to receive
        // factory data, the best would be to put http
        // communication code here and return the results
        return recommended;
    }

    factory.getSelectedDeal = function(id){
    	var obj;

		for (var i=0; i<recommended.length; i++) {
		    if ( recommended[i].id == id ) {
		        obj = recommended[i];
		        break;
		    }
		}

		return obj;
    }

    return factory;
});

