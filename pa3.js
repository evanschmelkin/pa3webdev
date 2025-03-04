nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var counter = 0;
var autoFlag = false;
$('button').on('click', function(){
    counter = $('form').val();
    if (counter in nums){
        if(autoFlag){
            autoFlag = false;
            clearTimeout(timer);
        }
        else{
            autoFlag = true;
            autoCount( );
        }

    }
});


function autoCount( ){
    counter = (counter+1)%maxInd;
    document.getElementById("counterText").innerHTML = myList[counter];
    if(autoFlag)
        timer = setTimeout("autoCount()",700);
}




