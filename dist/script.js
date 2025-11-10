// Collect selections, log them, then show a single-line summary on the page.
function myLineUp(event) {
  event.preventDefault(); // keep the page from reloading

  // Status
  const status = document.querySelector('input[name="status"]:checked')?.value || "";

  // Game date
  const gameDate = document.getElementById("gameDate").value;

  // Players (all checked)
  const playerNodes = document.querySelectorAll('input[name="players"]:checked');
  const players = Array.from(playerNodes).map(cb => cb.value);

  // Log each piece to the console
  console.log("Status:", status);
  console.log("Date:", gameDate);
  console.log("Players:", players);

  // Build one concatenated string
  const summary =
    `Status: ${status} | Date: ${gameDate} | ` +
    `Players: ${players.length ? players.join(", ") : "None selected"}`;

  // Display on the web page
  document.getElementById("output").textContent = summary;
}

// Add the event listener to the submit button (as requested)
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", myLineUp);
});
