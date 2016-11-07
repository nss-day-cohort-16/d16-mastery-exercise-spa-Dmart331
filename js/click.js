"use strict";
var CarDealer = (function(oldCarDealer){
  oldCarDealer.activateEvents = function(event){

     var input = document.getElementById('input');
     var inventory = document.getElementsByClassName('card');
     var color = 0;
     var section = document.getElementById('bodWrapper')

     document.addEventListener("click", newClick);
     input.addEventListener("keyup" , newData);
              
              function newClick(event){
                for (var i=0; i<inventory.length; i++){
                    var newSel = inventory[i];
                    color = "#59BFBF";
                    console.log(newSel)
                    CarDealer.removeClass(newSel , color);

                    if (event.target === inventory[i] || event.target.closest('div') === inventory[i]){
                      color =  "#FFBDA3";
                      CarDealer.addClass(newSel , color);
                      input.focus();
                      input.value = "";
                    }
                }
            }

          function newData(event) {
             if(event.keyCode === 13) {
                input.value = " ";
              }

            let newBio = document.getElementsByClassName('border');
            newBio[0].childNodes[4].innerHTML = input.value;
          } 
        };

return oldCarDealer;

})(CarDealer || {});
