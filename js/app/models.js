console.log("models");

(function (window, undefined, ns){
	var ns = {};

	ns.Block = function(data){
		var self = this
			data = data || {},
			locator = Math.floor((Math.random()*100000)+1);

			this.name = ko.observable(data.name);
			this.locatorID = locator;
			this.locatorString = "[data-locator='" + locator + "']";


	};


	window.Nudge.models = ns;
})(window);