console.log("data");

(function (window, undefined, ns){
	var ns = {};
	ns.testData = function(){
		console.log("testData");
	};

	window.Nudge.data = ns;
})(window)