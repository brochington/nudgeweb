console.log("models");

(function (window, undefined, ns){
	var ns = {};

	ns.Block = function(data){
		var self = this
			data = data || {},
			locator = Math.floor((Math.random()*100000)+1),
			slide = Math.floor((Math.random()*100000)+1);


			this.name = ko.observable(data.name);
			this.locatorID = ko.observable(locator);
			this.locatorString = "[data-locator='" + locator + "']";
			this.notificationField = ko.observable(data.notificationField);
			this.locationField = ko.observable(data.locationField);
			this.slide = "[data-slide='" + slide + "']";
			this.slideID = ko.observable(slide);

			console.log(this.slideID());

			this.gotoMap = function(ui, e){
				console.log($(self.slide).parent().scrollLeft());
				$(self.slide).parent().animate({scrollLeft : '0'});

			}

			this.gotoPeople = function(ui, e){
				$(self.slide).parent().animate({scrollLeft : '540'});
			}

			this.gotoTime = function(ui, e){
				$(self.slide).parent().animate({scrollLeft : '1140'});
			}

			this.updateBlock = function(ui, e){

			}
	};


	window.Nudge.models = ns;
})(window);