var now = moment();
var time;
var planner = document.getElementById("planner");
var savedInputs = JSON.parse(localStorage.getItem("savedInputs"));
if (savedInputs == undefined) {
  savedInputs = [];
  for (let i = 0; i < 24; i++) {
    savedInputs.push(" ");
  }
}
buildplanner();
function buildplanner() {
  for (let i = 0; i < 24; i++) {
    if (i < now.hour()) {
      time = "past";
    } else if (now.hour() === i) {
      time = "now";
    } else {
      time = "future";
    }
    var row = document.createElement("div");
    row.setAttribute("class", "row " + time);
    // row.setAttribute("class", color);

    planner.appendChild(row);
    var timeslot = document.createElement("div");
    timeslot.innerText = i + ":00";
    row.appendChild(timeslot);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.value = savedInputs[i];
    row.appendChild(input);

    var save = document.createElement("button");
    save.innerText = "SAVE";
    save.setAttribute("id", i);
    row.appendChild(save);
    save.addEventListener("click", saveInput);
  }
}

function saveInput(event) {
  var position = event.target.getAttribute("id");
  savedInputs[position] = event.target.previousSibling.value;
  localStorage.setItem("savedInputs", JSON.stringify(savedInputs));
}

//show current date in header
document.getElementsByClassName("date")[0].innerText =
  moment().format("MMMM Do YYYY");
//
