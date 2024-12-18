//your JS code here. If required.
const btn = document.getElementById("submit");

btn.addEventListener( "click", (e) => {
	// document.getElementById("form").preventDefault();
	e.preventDefault();
	console.log("boae")
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
		localStorage.removeItem("userObj");

	}

	let obje = JSON.parse(localStorage.getItem("userObj"));
	if(obje){
		const existing_button  = document.getElementById("existing appears")
		existing_button.style.display = "block"
		
	}
	console.log("obje", obje)
	

} );



document.getElementById("existing appears").addEventListener("click", ()=> {
	alert("Logged in as.")
})