function my_max (numberArray) {
		
			if(!(numberArray instanceof Array)) {
					return "Please enter an array";
				}
			var arrayLength = numberArray.length,
			largest = numberArray[0];
			
				
				
				for(var i = 0; i < arrayLength; i += 1) {
					
					if (largest < numberArray[i]) {
						largest = numberArray[i];
					}
				}
				return largest;
			}
			
			
			
			function vowel_count(myString) {
				var count = 0,
				stringLength = myString.length;
				vowels = /[aeiou]/i;
				
				for(var i = 0; i < stringLength; i += 1) {
					if(vowels.test(myString[i])) {
						count += 1;
					}
				}
				return count;
			}
			
			
			
			function reverse(someString) {
				return someString.split('').reverse().join('');
			}
