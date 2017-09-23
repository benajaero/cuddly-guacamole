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

function clearDiscreteFields() {
    discreteData.empty()
    discreteFrequencies.empty()
    discreteProducts.empty()
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

function discrete() {

}
discreteDataAdder.click(addDiscreteField)
discreteFrequencyAdder.click(addDiscreteFrequencyField)
discreteClear.click(clearDiscreteFields)
discreteCollect.click(discrete)


