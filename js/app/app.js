console.log("app.js");

$(document).ready(function(){
	console.log("page is ready");

	nvm.init();

	var koBindObject = {
		testName: nvm.testName,
		blocksArray : nvm.blocksArray

	}

	ko.applyBindings(koBindObject);
})
