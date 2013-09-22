console.log("fixture");

(function (window, undefined, ns){
	var ns = {};

	var blockArray1 = [
		{
			notificationField : "hello",
			locationField : 'Right here'
		},
		{
			notificationField : "Buy Milk",
			locationField : 'QFC'
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