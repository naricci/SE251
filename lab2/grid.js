/**
 * Created by nick on 11/9/2016.
 */

// Store Generate Button in variable
var submitButton = document.getElementById("generate");

submitButton.onclick = function(e) {
    var index = 0;
    var sum = 0;
    var average = [];
    var results = document.getElementById("result");
    var textbox = document.getElementById("textbox").value;

    // Create HTML Table
    var str = "<table cellpadding='5' cellspacing='5'>";

    // Generate Random Number
    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Create Rows and Data for HTML Table
    for (x = 0; x < textbox; x++)
    {
        str += "<tr>";
        for (y = 0; y < textbox; y++)
        {
            rando = randomNumber(1, 100);
            average[index] = rando;
            // Is number divisible by 3 with no remainder
            if (rando % 3 == 0)
            {
                str += "<td bgcolor = #ff0000>" + rando + "</td>";
            }
            // Is number divisible by 2 with no remainder
            else if (rando % 2 == 0)
            {
                str += "<td bgcolor = #0000ff>" + rando + "</td>";
            }
            else
            {
                str += "<td>" + rando + "</td>";
            }
            // Increment random numbers
            index++;
        }
        str += "</tr>";
    }
    for (i = 0; i < index; i++) {

        sum += average[i];
    }
    var totalAvg = sum / i;

    // Close HTML Table
    str += "</table>";

    // Display the Average
    str += "<p> The average is " + totalAvg + "</p>";

    // Display Results
    results.innerHTML = str;
};