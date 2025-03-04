$(document).ready(function(){

    var input = 15;
    var table = $('<table>').addClass('mul_table');


    for (var i = 0; i <= input; i++) {
        var row = $('<tr>').addClass('bar');
        row.append($('<td>').text(i));
        if (i === 0) {
            //row.append($('<td>').text('hi'));
            for (var j = 1; j <= input; j++) {
                row.append($('<td>').text(j));
            }
        }
        else {
            for (var j = 1; j <= input; j++) {
                row.append($('<td>').text(i*j));
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




    }




})




