/**
*@param {number } x
*@return {boolean}
*/

const isPalindrome = function(x) { 
	if(x<0){//buat kondisi utama variabel kurang dari nol atau minus otomatis bukan palindrome atau return false
		return false;
	}
	let reversed = 0;//jabarkan variabel
	let current = x; //buat variabel setara dengan x
	while(current != 0){ //bila loop tidak setara dengan nol, dikondisikan 
		reversed = reversed * 10 +  current % 10; //atur reversed agar setara dengan reversed 
		current = Math.floor(current/10); //bagi current dengan sepuluh lalu dibulatkan kurang atau setara dengan nomor yang diinput
	}
	return x === reversed; //return jika x setara dengan reversed
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(10));
console.log(isPalindrome(-121));