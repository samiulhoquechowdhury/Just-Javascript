//the Fetch API provides an interface for fetching(sendind/receiving) resources.
//It uses Request and Response objects.
//? The fetch() method is used to fetch a resourse (data).

//syntax -> let promise = fetch(url, [option])


const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");


//?better way

const getFacts = async  () => {
	console.log('getting data...')
	let response = await fetch(URL);
	console.log(response);
	let data = await response.json(); 
	// console.log(data[2].text);
	factPara.innerText = data[1].text
};


// //!promise chaining
// function getFacts(){
// 	fetch(URL).then((response) =>{
// 		return response.json();
// 	})
// 	.then((data) =>{
// 		console.log(data)
// 		factPara.innerText = data[2].text;
// 	})
// }


btn.addEventListener("click", getFacts)



