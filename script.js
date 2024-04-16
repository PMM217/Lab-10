// set up array with sample numbers
var numbers = [5, 10, 15, 20, 25];

//Create a function to calculate the sum of numbers
function calculateSum(list) {

//initiaise variable    
    var sum = 0;

//iterate or workthrough each number on the list ++    
    for (var i = 0; i < list.length; i++) {


//add number to the sum        
        sum += list[i];

    }

    return sum;

}



//create a function to calculate the mean or average of the numbers
function calculateAvg(list) {

    var sum = calculateSum(list); //add numbers using calculateSum function
    var mean = sum / list.length; //get Average by dividing the sum by the number of elements in list or array

    return mean; //return avg

}

var sum = calculateSum(numbers); //adds up preset numbers in array
var mean = calculateAvg(numbers); // calculatees the average of numbers in preset array

var resultDiv = document.getElementById("result"); // get the result div element by calling its id or #


//Display the results in the resultDiv - includes the preset of numbers | the sum and the average - the use of the .join is a method when using an array which concatenates all the elements of an array into a single string - https://www.w3schools.com/jsref/jsref_join.asp#:~:text=The%20join()%20method%20returns,default%20is%20comma%20(%2C).
resultDiv.innerHTML = "<p>Array: " + numbers.join(", ") + "</p>" +

    "<p>Sum: " + sum + "</p>" +

    "<p>Mean: " + mean + "</p>";