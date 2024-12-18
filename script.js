//your JS code here. If required.
const btn = document.getElementById("submit");

btn.addEventListener( "click", (e) => {
	// document.getElementById("form").preventDefault();
	e.preventDefault();
	
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const checkbox = document.getElementById("checkbox").checked;
	

	if(checkbox){
		localStorage.setItem("username":username);
		localStorage.setItem("password":password);
		
		// const userObj = {"username":username, "password":password}
		// localStorage.setItem("userObj", JSON.stringify(userObj));
		alert("Logged in as.")
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
	

	
	if(localStorage.getItem("username") && localStorage.getItem("password")){
		const existing_button  = document.getElementById("existing")
		existing_button.style.display = "block"
	}
	
	

} );

document.getElementById("existing").addEventListener("click", ()=> {
	
	alert(`Logged in as. ${localStorage.getItem("username")} `)
})