console.log("fixture");

(function (window, undefined, ns){
	var ns = {};

	var blockArray1 = [
		{
			name : 'Broccoli'
		},
		{
			name : "Dude"
		}
        ];
	

	ns.getBlockFixtureData = function(){
		console.log("getBlockFixtureData");
		return blockArray1;
	};

    ns.search = function(query){
         return window.Nudge.searchResult[query];
    };

	window.Nudge.fixture = ns;
})(window);