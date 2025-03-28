//js
/*
Sa'ada, Max, and Evan
3/4/2025
Web Development
pa3.js
This is the main JavaScript file for this project
*/

//var userInput;

//$(document).keydown(function(keyPressed) {
//    if (keyPressed.keyCode === 13) {
//        if (userInput !== null) {
//            console.log("test123: " + userInput);
//        }

//    }
//});

var userInput;

$(document).ready(function () {
    $("#pushbutton").on("click", function () {
        userInput = -1;
        autoFlag = false;
        clearTimeout(timer);
        var inputVal = $(".test").val();
        if (parseInt(inputVal) > 25 || parseInt(inputVal) <= 0){
            alert("Please enter a valid positive number less than 25");
            return;
        }
        var input = parseInt(inputVal);
        makeTable(input);
    });

    function makeTable(input) {
        //clear old table
        $("#here_table").empty();

        var table = $('<table>').addClass('mul_table');
        var counter = 1;
        var randomCounter = getRandomNumber(1, input * input);

        for (var i = 0; i <= input; i++) { // rows (i) start at 0
            var row = $('<tr>').addClass('cell1');
            if (i === 0) row.append($('<td>').text(""));
            else row.append($('<td>').text(i)); // first number of each row

            if (i === 0) {
                for (var j = 1; j <= input; j++) { //if in top row, list numbers on left side
                    row.append($('<td class="cell1">').text(j));
                }
            } else {
                for (var j = 1; j <= input; j++) { // do if non-top row
                    if (counter === randomCounter) {
                        correctAnswer = i*j
                        // for a randomly selected cell count, adds an input field
                        var cell;

                        //the 'change', means when the input field content changes we run the function
                        var inputVal = $('<input type="text">').on('keyup', function () {
                            userInput = $(this).val();
                            console.log("User entered:", userInput);
                        });

                        cell = $('<td class="cell_input">').append(inputVal);
                        row.append(cell);
                    } else if (j % 2 != 1) {
                        if (i % 2 === 1)
                            row.append($('<td class="cell2">').text(i * j)); // these ones should have alternating cell color
                        else{
                            row.append($('<td class="cell3">').text(i * j));
                        }
                    } else {
                        if (i % 2 === 1)
                            row.append($('<td class="cell3">').text(i * j)); // these ones should have alternating cell color
                        else{
                            row.append($('<td class="cell2">').text(i * j));
                        }
                    }
                    
                    counter += 1;






                }
            }

            table.append(row);
        }

        $('#here_table').append(table);
    }

    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var counter = 10;
    var autoFlag = false;
    var timer;

    $("button").on("click", function () {
        console.log("time start: " + $("input").val());
        counter = parseInt($("input").val()); // ensure numeric value
        if (nums.includes(counter)) { // check if counter is in nums array
            if (autoFlag) {
                autoFlag = false;
                clearTimeout(timer);
            } else {
                autoFlag = true;
                autoCount();
            }
        }
    });

    function autoCount() {
        if (counter > 0) {
            counter = counter - 1;
            $("p").html("timer left: " + counter); // the timer text

            if (autoFlag) {
                timer = setTimeout(autoCount, 1000);
                console.log("waited 1 second", counter);
            }
        } else {
            $("p").html("Time up!");
            $("#here_table").empty();
            $("h1").empty();
            if (parseInt(userInput) === correctAnswer) {
                $("p").html("Your answer is correct!");

                autoFlag = false;
            }
            else {
                $("p").html("Incorrect! The correct answer is: " + correctAnswer);

                autoFlag = false;

            }
        }
    }

    function getRandomNumber(min, max) {
        min = Math.ceil(min); // round up to nearest integer
        max = Math.floor(max); // round down to nearest integer
        var range = max - min;
        // a random number within the given range
        return Math.floor(Math.random() * range) + min;
    }
});