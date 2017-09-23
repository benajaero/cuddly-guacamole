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
var discreteFrequencyAdder = $('#discreteFrequencyAdder')
var discreteClear = $('#discrete-clear')

function clearDiscreteFields() {
    discreteData.empty()
}

function addDiscreteField() {
    
}

function addDiscreteFrequencyField() {

}

discreteDataAdder.click(addDiscreteField)
discreteFrequencyAdder.click(addDiscreteFrequencyField)
discreteClear.click(clearDiscreteFields)

