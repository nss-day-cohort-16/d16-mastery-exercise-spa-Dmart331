"use strict";

var firstString = "";
var output = document.getElementById('container');

function showInventory (inventory){
		for(var i =0; i < inventory.length; i++){

			if(i % 3 === 0){
				firstString += `<div class="row">`;	
			}

		 	firstString += `<div id="${inventory[i].id}" class="col-md-4 card" >`;
			firstString +=	`<h3>${inventory[i].make}</h3>` ;
			firstString +=	`<h4>${inventory[i].model}</h4>`;
			firstString +=	`<p>${inventory[i].price}</p>
								<p>${inventory[i].description}</p></div>`;

			if((i+1) % 3 ===0){
				firstString += `</div>`;

		}

	}
	output.innerHTML += firstString;
CarDealer.activateEvents();

}

CarDealer.loadInventory(showInventory);
CarDealer.getInventory(showInventory);

