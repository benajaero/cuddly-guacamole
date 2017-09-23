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




var discreteData = document.getElementById('discrete-data')
var discreteFrequencies = document.getElementById('discrete-frequencies')
var discreteProducts = document.getElementById('discrete-product')
var discreteDataAdder = document.getElementById('discreteDataAdder')
var discreteFrequencyAdder = document.getElementById('discreteFrequencyAdder')
var discreteClear = document.getElementById('discrete-clear')

function addDiscreteField() {
    
}

function addDiscreteFrequencyField() {

}

discreteDataAdder.addEventListener("click", addDiscreteField)
discreteFrequencyAdder.addEventListener("click", addDiscreteFrequencyField)
