let tbody = document.getElementById("tbody");
let p1 = prompt("enter a no of emp list");

for (i = 1; i <= p1; i++) {
  let tr = document.createElement("tr");
  tbody.appendChild(tr);
  tr.addEventListener("click",(element)=>{
    //console.log("one");
    
     element.currentTarget.remove();
     updatesn();

  },false);
  for (j = 1; j <= 4; j++) {
    let td = document.createElement("td");
    tr.appendChild(td);
    if (j == 1) {
      td.textContent = i;
      
    }
    if (j == 2) {
      td.textContent = prompt("enter a name");
    }
    if (j == 3) {
      td.textContent = prompt("enter a loacation");
    }
    if (j == 4) {
      let del = document.createElement("input");
      del.type = "submit";
      del.value = "delete";
      del.className= "del";
      del.addEventListener(
        "click",
        (element) => {
          element.stopPropagation(); 
          tr.remove();
          updatesn();
           
        },
        false
      );
      td.appendChild(del);
    }
  
  }

}

function updatesn(){
   let rows = tbody.querySelectorAll("tr");
   for(i=0;i<p1;i++){
    rows[i].firstElementChild.textContent=i+1;  
   }
}
// let del1 = document.getElementsByClassName("del");
// for(i=0;i<p1;i++){
//     del1[i].addEventListener(
//         "click",
//         (element) => {
//           element.preventDefault();
//           //console.log("click");
//            //element.currentTarget.remove();
//         },
//         false
//       );
// }