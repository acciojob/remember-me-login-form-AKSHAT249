//your JS code here. If required.
const btn = document.getElementById("submit");

btn.addEventListener( "click", (e) => {
	// document.getElementById("form").preventDefault();
	e.preventDefault();
	
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const checkbox = document.getElementById("checkbox").checked;
	

	if(checkbox){
		const userObj = {"username":username, "password":password}
		localStorage.setItem("userObj", JSON.stringify(userObj));
		alert("Logged in as.")
	}else{
		localStorage.removeItem("userObj");
	}
	

	let obje = JSON.parse(localStorage.getItem("userObj"));
	if(obje != null){
		const existing_button  = document.getElementById("existing")
		existing_button.style.display = "block"
	}
	
	

} );

document.getElementById("existing").addEventListener("click", ()=> {
	let obje = JSON.parse(localStorage.getItem("userObj"));
	alert(`Logged in as. ${obje.username} `)
})