"use strict";

var CarDealer =(function(oldCarDealer){
	var inventory=[];
	return {
        loadInventory: function(callBack) {
            var loader = new XMLHttpRequest();
            loader.open("GET", "json/quiz.json");
            loader.send();
            loader.addEventListener("load", function() {
                inventory = JSON.parse(this.responseText).inventory;
                console.log(inventory);
                callBack(inventory);
            });
        },
        getInventory: function() {
            console.log("inventory", inventory);
            return inventory;
}
};
})(CarDealer || {});




