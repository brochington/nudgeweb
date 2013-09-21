console.log("viewmodel");


var nvm = function(){
	var data = window.Nudge.data;
	var models = window.Nudge.model;


	var blocksArray = ko.observableArray([]);
	var testName = ko.observable("Broch");

	var init = function(){
		models = data.setModels();
		data.getBlocks(blocksArray);
		console.log(blocksArray());
	};

	var loadBlocks = function(){

	};

	var addBlockToBlocksArray = function(){
		console.log("adding block to array");
		console.log(models);
		// add task
		blocksArray.unshift(new models.Block({name: "yoyoyo"}))
	}

	var deleteBlock = function (ui, e){
		console.log("deleteBlock");
		console.log(ui);
		console.log(e);
		console.log(e.target);
		$(e.target).parents().fadeOut();
	}



	return {
		init: init,
		testName : testName,
		blocksArray : blocksArray,

		//methods
		addBlockToBlocksArray : addBlockToBlocksArray,
		deleteBlock : deleteBlock
	};
}();