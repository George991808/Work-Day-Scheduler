
var planner = document.getElementById("planner");
buildplanner()
function buildplanner() {
  
  
    for (let i = 0; i < 24; i++) {
      var row = document.createElement("div");
      row.setAttribute("class", "row");
     
      planner.appendChild(row);
      var timeslot = document.createElement("div");
      timeslot.innerText=i+":00";
       row.appendChild(timeslot);

       var input = document.createElement("input");
       input.setAttribute("type", "text");
       row.appendChild(input);

       var save = document.createElement("button");
      save.innerText="SAVE"
       row.appendChild(save);

    }
  
    
  }