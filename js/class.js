"use strict";

var CarDealer = (function (oldCarDealer) {

    oldCarDealer.addClass = function(event , color) {
		event.classList.add('border');
		event.style.backgroundColor = color;
    };
    oldCarDealer.removeClass = function(event , color) {
  		event.classList.remove('border');
		event.style.backgroundColor = color;
	};
return oldCarDealer;
})(CarDealer || {});