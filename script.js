document.querySelector(".sos").onclick = function() {
  alert("SOS Activated! Sending location...");
};

document.querySelector("button").onclick = function() {
  let text = document.querySelector("textarea").value;
  alert("Analyzing: " + text);
};
