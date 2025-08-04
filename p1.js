// 📨 Task Description: "Was the Package Received the Day Before It Was Sent?"
// You're given a simplified model of time zones and package delivery. A package is sent from one time zone to another, starting at a specific local hour and taking a certain number of hours to be delivered.
// Your task is to determine whether the package was received on the previous day relative to when it was sent — from the perspective of local time at the destination.
// The purpose of this function is to determine whether a package was received on the previous calendar day (in local time at the destination) relative to when it was sent (in local time at the origin).
document.getElementById("soltittle").innerText =
  "Was the package received before it was sent? (Simplified)";
const outPutCon = document.createElement("div");
outPutCon.id = "output-container";
const tz_from = document.createElement("input");
tz_from.id = "tz_from";
tz_from.placeholder = "Time Zone From (e.g., UTC+2)";
const tz_to = document.createElement("input");
tz_to.id = "tz_to";
tz_to.placeholder = "Time Zone To (e.g., UTC-5)";
const start = document.createElement("input");
start.id = "start";
start.placeholder = "Start Time (e.g., 14:00 for 2 PM)";
const duration = document.createElement("input");
duration.id = "duration";
duration.placeholder = "Duration (in hours, e.g., 5)";

const submit = document.createElement("button");
submit.id = "submit";
submit.innerText = "Check";
const output = document.createElement("div");
output.id = "output";
outPutCon.appendChild(tz_from);
outPutCon.appendChild(tz_to);
outPutCon.appendChild(start);
outPutCon.appendChild(duration);
outPutCon.appendChild(submit);
outPutCon.appendChild(output);
document.getElementById("solution-output").appendChild(outPutCon);
document.querySelectorAll("input").forEach((input) => {
  input.style.display = "block";
  input.style.marginTop = "10px";
  input.style.marginBottom = "10px";
  input.style.width = "100%";
  input.style.padding = "5px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "4px";
});
function checkDay(form = 0, to = 0, start = 0, dura = 0) {
  if (arguments.length > 4) {
    console.error(
      " Too many arguments provided. Expected 4 arguments: form, to, start, duration."
    );
    return;
  }
  const tzFrom = parseInt(form);
  const tzTo = parseInt(to);
  const startTime = parseInt(start);
  const durationHours = parseInt(dura);
  if (
    Number.isNaN(tzFrom) ||
    Number.isNaN(tzTo) ||
    Number.isNaN(startTime) ||
    Number.isNaN(durationHours)
  ) {
    console.error("Invalid input. Please provide valid numbers.");
    return;
  }
  const startInUTC = startTime - tzFrom;
  const endInUTC = startInUTC + durationHours;
  const endInDestination = endInUTC + tzTo; // local time at destination
  const _24Hours = endInDestination % 24; // normalize to 24-hour format
  console.log(
    `Start in UTC: ${startInUTC}, End in UTC: ${endInUTC}, End in Destination: ${endInDestination}`
  );
  if (_24Hours < 0) {
    output.innerText = "The package was received the day before it was sent.";
    console.log("The package was received the day before it was sent.");
  } else if (_24Hours >= 0 && _24Hours < 24) {
    output.innerText = "The package was received on the same day it was sent.";
    console.log("The package was received on the same day it was sent.");
  }
  console.log("Package received check completed.");
}
document.getElementById("submit").addEventListener("click", () => {
  const tzFrom = document.getElementById("tz_from").value;
  const tzTo = document.getElementById("tz_to").value;
  const startTime = document.getElementById("start").value;
  const durationHours = document.getElementById("duration").value;
  checkDay(tzFrom, tzTo, startTime, durationHours);
  console.log("event listener added for submit button");
});
