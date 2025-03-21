let uname = document.getElementById("uname");

uname.addEventListener("focusout", function checkname() {
    let uname = document.getElementById("uname").value;
    let p1 = document.getElementById("p1");

    if (uname==""){
        p1.style.display = "block";
        p1.style.color = "red";
      
    }
    else {
        p1.style.display = "none";
    }
}  
);

let umail = document.getElementById("umail");

umail.addEventListener("focusout" , function checkmail() {
    let umail = document.getElementById("umail").value;
    let p2 = document.getElementById("p2");

    if (umail== "") {
        p2.style.display = "block";
        p2.style.color = "red";
				p21.style.display = "none";
    }
    else {
        p2.style.display = "none";
    }

		
}
);

newpw.addEventListener("input", function pwnum() {
	let newpw = Number(document.getElementById("newpw").value);
	
	document.getElementById("p3");

	if(isNaN(newpw)) {
		 p3.style.display = "block";
		 p3.style.color = "red";
	}
	else {
		p3.style.display = "none";
	}

});

conpw.addEventListener("input", function conpwnum() {
	let conpw = Number(document.getElementById("conpw").value);

	document.getElementById("p411");

	if(isNaN(conpw)) {
		 p411.style.display = "block";
		 p411.style.color = "red";
	}
	else {
		p411.style.display = "none";
	}

});

  let eyeopen = document.getElementById("eyeopen");
  let conpwinput = document.getElementById("conpw");
  let eyeicon = document.getElementById("eyeicon");
	eyeicon.style.cursor = "pointer";

	

  eyeopen.addEventListener("click", function eyeclick() {

  if (conpwinput.type === "password") {
  	conpwinput.type = "text";
  	eyeicon.setAttribute("class", "fa-solid fa-eye-slash"); 
  } 
	else {
    conpwinput.type = "password";
    eyeicon.setAttribute("class", "fa-solid fa-eye"); 
   }
  }
);

conpw.addEventListener("input", function pwnum() {
	let newpw = document.getElementById("newpw").value;
	let conpw = document.getElementById("conpw").value;

	let p3 = document.getElementById("p3");
	let p4 = document.getElementById("p4");
	let p41 = document.getElementById("p41");
	let p411 = document.getElementById("p411")

	if (newpw === "" || conpw === "") {
			p3.style.display = "none";
			p4.style.display = "none";
			p41.style.display = "none";
			p411.style.display = "none";
			
	}

	if (newpw !== conpw) {
		p4.style.display = "block";    
		p4.style.color = "red";
		p411.style.display = "none";    
} 
	else {
		p4.style.display = "none";    
		p411.style.display = "block";   
		p411.style.color = "green";
}

}
);