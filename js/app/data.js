console.log("data");

(function (window, undefined, ns){
	var ns = {},
		fixture = window.Nudge.fixture;
		model = window.Nudge.models;

	ns.setModels = function(){
		model = window.Nudge.models;
		return model;
	}


	ns.testData = function(){
		console.log("testData");
	};

	ns.getBlocks = function(koArray){
		console.log("getBlocks");
		// Using fixture data for now.
		var fixtureData = fixture.getBlockFixtureData();
		var tempArr = [];
		fixtureData.forEach(function(v, i, arr){
			tempArr.push(new model.Block(v));
		})
		koArray(tempArr);
	}

	window.Nudge.data = ns;
})(window);	