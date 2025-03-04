/*
Sa'ada, Max, and Evan
3/4/2025
Web Development
pa3.js
This is the main JavaScript file for this project
*/
$(document).ready(function(){

    var input = 15;
    var table = $('<table>').addClass('mul_table');
    var counter = 1;

    for (var i = 0; i <= input; i++) { //rows (i) starts a 0

        var row = $('<tr>').addClass('cell1');
        if (i===0) row.append($('<td>').text(""));
        else row.append($('<td>').text(i)); //first number of each row
        if (i === 0) {
            //row.append($('<td>').text('hi'));
            for (var j = 1; j <= input; j++) { //if in top row, list numbers list on left side

                row.append($('<td class="cell1">').text(j));
            }
        }
        else {
            for (var j = 1; j <= input; j++) { //do if non-top row
                if (counter%2==1)
                    row.append($('<td class="cell2">').text(i*j)); //these ones should have alternating cell color
                else
                    row.append($('<td class="cell3">').text(i*j));
                counter += 1;
            }
        }

        //if i === 0,
        // add empty cell
        //else:
        //  do what you gotta do
        table.append(row);
    }


    $('#here_table').append(table);

    nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var counter = 10;
    var autoFlag = false;
    var timer;
    $("button").on("click", function(){
        counter = $("input").val();
        if (counter in nums){
            if(autoFlag){
                autoFlag = false;
                clearTimeout(timer);
            }
            else{
                autoFlag = true;
                autoCount();
            }

        }
    });


    function autoCount(){
        if (counter >0){
            console.log("test");
            counter = counter-1;
            $("p").html("timer left: " + counter); //the timer text
            if(autoFlag)
                timer = setTimeout(autoCount,1000);
        }
        else $("p").html("Time up!");




    }




})




