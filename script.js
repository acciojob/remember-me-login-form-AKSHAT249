//your JS code here. If required.
const btn = document.getElementById("submit");

btn.addEventListener( "click", (e) => {
	// document.getElementById("form").preventDefault();
	e.preventDefault();
	
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const checkbox = document.getElementById("checkbox").checked;
	console.log(username, password, checkbox);

	if(checkbox){
		console.log("remember me checked")
		const userObj = {"username":username, "password":password}
		localStorage.setItem("userObj", JSON.stringify(userObj));
		alert("Logged in as.")
	}else{
		localStorage.clear();
	}
	

	let obje = JSON.parse(localStorage.getItem("userObj"));
	if(obje){
		const existing_button  = document.getElementById("existing")
		existing_button.style.display = "block"
		
	}
	console.log("obje", obje)
	

} );



document.getElementById("existing").addEventListener("click", ()=> {
	alert("Logged in as.")
})