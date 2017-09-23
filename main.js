// ----------------------------------- MAIN -----------------------------------

function mean(arr, divisor) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / divisor
}

function mean(val1, val2, val3) {
    return (val1 + val2) / 2
}

function discreteMedian(arr, freqArr, length) {

    var median = Math.floor(length / 2)

    if (length % 2 == 0) {
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            return arr[j];
    }
    else {
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            return mean(arr[j], arr[j+1], 0) 
    }
}



var discreteData = $('#discrete-data')
var discreteFrequencies = $('#discrete-frequencies')
var discreteProducts = $('#discrete-product')
var discreteDataAdder = $('#discreteDataAdder')
var discreteFrequencyAdder = $('#discreteFAdder')
var discreteClear = $('#discrete-clear')
var discreteCollect = $('#discrete-collect')

var discreteArr = Array(), discreteFrequencyArr = Array(), discreteProductArr = Array()

function clearArrs() {
    discreteArr.length = 0;
    discreteFrequencyArr.length = 0
    discreteProductArr.length = 0
}

function clearDiscreteFields() {
    discreteData.empty()
    discreteFrequencies.empty()
    discreteProducts.empty()
    clearArrs()
}

function addDiscreteField() {
    console.log("Adding field")
    discreteData.append("<div class='field'><div class='control'><input class='input discreteData' type='text' placeholder='number here'></div></div>") 
}

function addDiscreteFrequencyField() {
    console.log("Adding field")
    discreteFrequencies.append("<div class='field'><div class='control'><input class='input discreteFrequency' type='text' placeholder='number here'></div></div>") 

}

function addDiscreteProductField(val) {
    discreteProducts.append("<p>" + val + "</p>")
}


//grab values and put them into an array
//parse them to find the products and length
//fill it up
//then use them to find mean, median and mode

function discrete() {
    clearArrs()
    $(".discreteData").each(function() {
        var val = $(this).val();
        if (val != '' || val != ' ' || val != undefined || val != null)
            discreteArr.push(parseFloat(val));
    })    

     $(".discreteFrequency").each(function() {
        var val = $(this).val();
        if (val != '' || val != ' ' || val != undefined || val != null)
            discreteFrequencyArr.push(parseFloat(val));
    })    
    console.log(discreteArr, discreteFrequencyArr)
    $('#discreteDataLength').text(" Actual Data: Length - " + discreteArr.length)
    $('#discreteFreqLength').text(" Frequency: Length - " + discreteFrequencyArr.length)
    
    


}

discreteDataAdder.click(addDiscreteField)
discreteFrequencyAdder.click(addDiscreteFrequencyField)
discreteClear.click(clearDiscreteFields)
discreteCollect.click(discrete)


