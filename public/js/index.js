const message = { c1: 57, c2: 31, c3: 17, c4: 47, c5: 61 };

var now = new Date().getTime();
var setupTime = localStorage.getItem("setupTime");
if (setupTime !== null && now - setupTime > 10 * 60 * 1000) {
  localStorage.clear();
}

function addToConsoleElement(message) {
  var list = document.getElementById("console-list");
  var newEle = document.createElement("li");
  newEle.innerText = message;
  list.appendChild(newEle);
}

async function onClick(event) {
  try {
    event.preventDefault();
    var selectedOption = document.querySelector('input[name="Vote"]:checked');
    if (selectedOption === null) {
      addToConsoleElement("Please Select a user");
      return;
    }
    addToConsoleElement("You voted for the user " + selectedOption.id);

    const value = message[selectedOption.value];

    const response = await fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ msg: value }),
    });
    const result = await response.json();
    console.log(result, result["ret_msg"]);
    addToConsoleElement(
      "The ID of " +
        selectedOption.id +
        " is :- " +
        message[selectedOption.value]
    );
    addToConsoleElement(
      "The encrypted message sent to central Voting Authority, containing blind factor is:- " +
        result["signed_msg"]
    );
    addToConsoleElement(
      "The message recived after signature from central authority is:- " +
        result["ret_msg1"]
    );
    addToConsoleElement(
      "The message after removing Blind Factor (Final Signed Message) is:- " +
        result["ret_msg"]
    );
    // localStorage.setItem("Voted For", selectedOption.value);
    localStorage.setItem("setupTime", now);
    document.getElementById("submit-btn").disabled = true;
  } catch (err) {
    addToConsoleElement("The error occured because", err.message);
  }
}

const sub = localStorage.getItem("Voted For");

if (sub !== null) {
  var selectedOption = (document.querySelector(
    "input[value=" + sub + "]"
  ).checked = true);
  document.getElementById("submit-btn").disabled = true;
}
