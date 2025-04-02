//js
/*
Sa'ada, Max, and Evan
3/4/2025
Web Development
pa3.js
This is the main JavaScript file for this project
*/


//testing
//putting letters in dimension box
//dimensions above 20 and below 1

nums =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
$(document).ready(function () {
    $("#pushbutton").on("click", function () {
        recentPush = true //variable for if the button is pressed recently
        console.log(recentPush + "boolean of recentPush");
        $("p").removeClass("correct-answer") //if you reclick the button to make the grid anew, we dont want green text
        $("p").removeClass("incorrect-answer") //if you reclick the button to make the grid anew, we dont want green text
        //this is all evan's stuff above
        userInput = -1;
        autoFlag = false; //for timer in later js. first thing timer does is count a second
        clearTimeout(timer); //timer is reset at beginning of each problem
        var inputVal = $(".test").val(); //accessing user input from the 'dimension' field

        if (!nums.includes(parseInt(inputVal))){ //if invalid dimension and if integer
            alert("Please enter a valid positive number less than or equal to 20");
            //alert() is a card that pops up with the error message
            return;
        }
        //stores dimension
        var input = parseInt(inputVal); //if valid dimension put that integer into a variable
        makeTable(input); //start making the table with that dimension
    });

    //this function takes an input value and generates a table of that many rows and cols
    function makeTable(input) {
        //clears old table
        $("#here_table").empty();

        var table = $('<table>').addClass('mul_table');
        var counter = 1;    //keeps count of each cell along the x-axis (i)
        var randomCounter = getRandomNumber(1, input * input);  //generate a random num between 1 and total number of cells
                                                                // for the input cell position

        for (var i = 0; i <= input; i++) { // rows (i) start at 0
            var row = $('<tr>').addClass('cell1');
            if (i === 0) row.append($('<td>').text(""));    //the first cell of the table with no text
            else row.append($('<td>').text(i)); // first number of each row

            if (i === 0) {
                for (var j = 1; j <= input; j++) { //if in top row, list numbers on left side
                    row.append($('<td class="cell1">').text(j));
                }
            } else {    //this section generates random input cell in any cell other than the header row and col
                for (var j = 1; j <= input; j++) { // do if non-top row
                    if (counter === randomCounter) {
                        correctAnswer = i*j

                        var cell;   //this cell variable holds the cell with input type and .on('keyup') event

                        //the 'keyup', event allows us to store what the user enters on each press of the key
                        var inputVal = $('<input type="text">').on('keyup', function () {
                            userInput = $(this).val();  //detects and stores the value entered by the user
                            console.log("User entered:", userInput);
                        });

                        cell = $('<td class="cell_input">').append(inputVal);
                        row.append(cell);
                    } else if (j % 2 != 1) {    //this section creates the checkered pattern on the table
                        //if col is even and row is even the cells will be orange (cell2)
                        if (i % 2 === 1)
                            row.append($('<td class="cell2">').text(i * j));
                        else{ //if col is even and row is odd cell will be pink (cell3)
                            row.append($('<td class="cell3">').text(i * j));
                        }
                    } else {//if col is odd and row is even, the cells will be pink (cell3)
                        if (i % 2 === 1)
                            row.append($('<td class="cell3">').text(i * j));
                        else{//if col is odd and row is odd, the cells will be orange (cell2)
                            row.append($('<td class="cell2">').text(i * j));
                        }
                    }

                    counter += 1;

                }
            }

            table.append(row);
        }

        $('#here_table').append(table); //putting the table in place in the html
    }

    //some code for timer borrowed from in class examples (fruit iterator?)

    var counter; //the numeber we see for the timer
    var autoFlag = false; //first thing timer does is count a second. perhaps overkill
    var timer; //stores timer for initiating pauses and resets
    $("button").on("click", function () { //when 'create table' button is clicked start timer

        counter = parseInt($("input").val()); //get current value of this field
        if (0<counter && counter<21){//nums.includes(counter)) { //checks if our input is valid 1-20 using list above
            if (autoFlag) { //autoflag is false before button press. will run after first second is counted
                autoFlag = false; //allows next second to proceed
                clearTimeout(timer); //stops the timer from continuing to count
            } else { //runs first time
                autoFlag = true; //allows the timer to be reset
                autoCount(); //starting timer/counter method
            }
        }
    });

    function autoCount() {
        if (counter > 0) { //still time left
            counter = counter - 1; //decrease time left
            $("p").html("timer left: " + counter); // the timer text

            if (autoFlag) {
                timer = setTimeout(autoCount, 1000); //one second pause
            }

        }
        else { //time up
            recentPush = false; //this will be true if the user clicks on the button again
            $("p").html("Time up!");
            $("#here_table").empty(); //clears old table
            $("h1").empty();
            if (parseInt(userInput) === correctAnswer) { //answer matches correct answer
                $("p").addClass("correct-answer").html("Your answer is correct!"); //display text

                autoFlag = false; //after each run
            }
            else { //answer doens't match correct answer
                $("p").addClass("incorrect-answer").html("Incorrect! The correct answer is: " + correctAnswer); //display message and correct answer

                autoFlag = false;

            }
            if (recentPush === false) {
                console.log("recentpush is false");

                setTimeout(function () {
                    if (recentPush === false) { // Check again before reloading
                        window.location.reload();
                    }
                }, 3000);
            }

        }
    }

    
    // this function generates a random number to put the input cell
    // called in the makeTable() function
    function getRandomNumber(min, max) {
        min = Math.ceil(min); // round up to nearest integer
        max = Math.floor(max); // round down to nearest integer
        var range = max - min;
        // a random number within the given range
        return Math.floor(Math.random() * range) + min;
    }
});


