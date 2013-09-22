console.log("models");

(function (window, undefined, ns){
	var ns = {};

	ns.Block = function(data){
		var self = this
			data = data || {},
			locator = Math.floor((Math.random()*100000)+1);

			this.name = ko.observable(data.name);
			this.locatorID = ko.observable(locator);
			this.locatorString = "[data-locator='" + locator + "']";
			this.notificationField = ko.observable();
			this.locationField = ko.observable();


	};


	window.Nudge.models = ns;
})(window);