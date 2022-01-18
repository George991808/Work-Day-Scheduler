var planner = document.getElementById("planner");
// var savedInputs= localStorage.getItem("savedNote")) || [];
buildplanner();
function buildplanner() {
  for (let i = 0; i < 24; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");

    planner.appendChild(row);
    var timeslot = document.createElement("div");
    timeslot.innerText = i + ":00";
    row.appendChild(timeslot);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    row.appendChild(input);

    var save = document.createElement("button");
    save.innerText = "SAVE";
    row.appendChild(save);
    save.addEventListener("click", saveInput);
  }
}

function saveInput(event) {
  alert("Hello! I am an alert box!!");
}

//show current date in header
document.getElementsByClassName("date")[0].innerText =
  moment().format("MMMM Do YYYY");
//
