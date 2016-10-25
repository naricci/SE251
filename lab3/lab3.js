/**
 * Created by nick on 10/25/2016.
 */

var mathProblems = [{question: 35 / 7, answer: 5},
                {question: 60 / 6, answer: 10},
                {question: 10 + 10, answer: 20},
                {question: 3 / 3, answer: 1},
                {question: 21 / 3, answer: 7},
                {question: 7 + 2, answer: 9},
                {question: 5 / 5, answer: 1},
                {question: 8 - 5, answer: 3},
                {question: 8 / 8, answer: 1},
                {question: 18 / 6, answer: 3},
                {question: 10 - 5, answer: 5},
                {question: 8 + 1, answer: 9},
                {question: 4 + 7, answer: 11},
                {question: 1 * 1, answer: 1},
                {question: 5 * 7, answer: 35},
                {question: 9 - 4, answer: 5},
                {question: 8 - 7, answer: 1},
                {question: 10 - 5, answer: 5},
                {question: 8 * 1, answer: 8},
                {question: 10 + 7, answer: 17}
];

var displayProblems = function (problems) {
    var str = "<table class='table'>";

    for (i = 0; i < problems.length; i++) {
        str += "<tr>";
        str += "<td>" + problems[i].question + "</td>";
        str += "<td>" + problems[i].answer + "</td>";
        str += "<td><input type='text' class='answer'/></td>";
        str += "</tr>";
    }
    str += "</table>";

    document.getElementById("mathGrid").innerHTML = str;
}