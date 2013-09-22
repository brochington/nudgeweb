console.log("fixture");

(function (window, undefined, ns){
	var ns = {};

	var blockArray1 = [
		{
			name : 'Broccoli'
		}
	];

	var whatever = [

	]
	

	ns.getBlockFixtureData = function(){
		console.log("getBlockFixtureData");
		return blockArray1;
	};



	window.Nudge.fixture = ns;
})(window);