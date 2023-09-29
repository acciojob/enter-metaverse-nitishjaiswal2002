//your JS code here. If required.
const statusParagraph = document.getElementById("status");
        const enterButton = document.getElementById("enterBtn");
        const resultHeader = document.getElementById("result");

        // Add a click event listener to the button
        enterButton.addEventListener("click", function () {
            // Update the text in the <p> tag
            statusParagraph.textContent = "Entered Metaverse";

            // Display the updated text in the <h1> tag
            resultHeader.textContent = statusParagraph.textContent;
        });