(function() {
	'use strict';
	
	var displayValue = "0";
	//var operations = $('.operations');
	$('#calc .btn').click(function() {
		var btnValue = $(this).data('value');
		if(btnValue === '=') {
			updateDisplay(processAnswer(), true);
		} else if(btnValue === 'reset') {
			updateDisplay('0', true);
		}
		else {
		if(btnValue === '+' ||
			btnValue === '*' ||
			btnValue === '-' ||
			btnValue ==='/' ) {
				if( (displayValue[displayValue.length - 1] === '+') ||
					(displayValue[displayValue.length - 1] === '*') ||
					(displayValue[displayValue.length - 1] === '-') ||
				(	displayValue[displayValue.length - 1] === '/')
				) {
					displayValue = displayValue.substr(0, displayValue.length - 1);
				}
			}
			updateDisplay(btnValue, false);
		}
		
	});
	
	
	
	var processAnswer =  function() {
		try{
			var result = eval(displayValue);
			return result;
		} catch (e){
			return 'Error';
		}
		
	};
	
	var updateDisplay = function(value, overwrite) {
		
		displayValue = displayValue.toString();
		
		$('#calc .display').text(value);
		if(overwrite === true) {
			displayValue = value;
		} else {
			if(displayValue == "0" ||
				displayValue === "*" ||
				displayValue === "+" ||
				displayValue === "/" ||
				displayValue === "Error" ||
				displayValue == "Infinity") {
			  displayValue = value;
			}else{
				displayValue += value;
		    }
		}
		
		$('#calc .display').text(displayValue);
		
	};
	
})();
