// your code here
let ur=document.getElementById("url");


let butt=document.getElementById("button");
butt.addEventListener("click" , function(){
	let na=document.getElementById("name").value;
	let ye=document.getElementById("year").value;
	if(na==""  && ye== ""){
		ur.innerHTML="https://localhost:8080/";
	}
	else if(na=="" && ye!=""){
		ur.innerHTML="https://localhost:8080/?year=" + ye;
	}
	else if(na!="" && ye==""){
		ur.innerHTML="https://localhost:8080/?name=" + na;
	}
	else{
		ur.innerHTML="https://localhost:8080/?name=" + na +"&year=" + ye;
	}
});