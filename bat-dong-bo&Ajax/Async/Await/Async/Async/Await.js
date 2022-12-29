
 //bai 1 + 2
async function f() { 
	console.log('Async function.'); 
	return Promise.resolve(1); 
}

f().then(function(result) { 
	console.log(result) 
});

//bai3
let promise = new Promise(function (resolve, reject) { 
	setTimeout(function () { 
	resolve('Promise resolved')}, 4000); 
});
async function asyncFunc() { 
	let result = await promise; 
 
	console.log(result); 
	console.log('hello'); 
}

asyncFunc();
