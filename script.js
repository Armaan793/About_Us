document.getElementById("coupleForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent page from reloading

  // Get user inputs
  const activity = document.getElementById("activity").value;
  const gift = document.getElementById("gift").value;
  const special = document.getElementById("special").value;

  // Create a response message
  const responseText = `
    <strong>Favorite Activity:</strong> ${activity} <br>
    <strong>Perfect Gift:</strong> ${gift} <br>
    <strong>Special Date Plans:</strong> ${special || "No plans yet!"}
  `;

  // Display the response
  document.getElementById("responseText").innerHTML = responseText;
  document.getElementById("response").style.display = "block";
});
