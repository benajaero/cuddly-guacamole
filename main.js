// ----------------------------------- MAIN -----------------------------------

function mean(arr, divisor) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / divisor
}

function mean2(val1, val2, val3) {
    return (val1 + val2) / 2
}

function discreteMedian(arr, freqSum, length) {

    var median = Math.floor(length / 2)

    if (length % 2 == 0) {
        for (var i = 0, j = 0; i <= median; i += freqSum[j], j++) 
            return arr[j];
    }
    else {
        for (var i = 0, j = 0; i <= median; i += freqSum[j], j++) 
            return mean2(arr[j], arr[j+1], 0) 
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

function getProducts(vals, frequencies, products) {
    for (var i = 0; i < frequencies.length; i++) {
        products.push(vals[i] * frequencies[i])
    } 
}

//grab values and put them into an array
//parse them to find the products and length
//fill it up
//then use them to find mean, median and mode

function discrete() {
    clearArrs()
    $(".discreteData").each(function() {
        var val = $(this).val();
        if (val != '' || val != ' ' || val != undefined || val != null || !Number.isNaN(val))
            discreteArr.push(parseFloat(val));
    })    

     $(".discreteFrequency").each(function() {
        var val = $(this).val();
        if (val != '' || val != ' ' || val != undefined || val != null || !Number.isNaN(val))
            discreteFrequencyArr.push(parseFloat(val));
    })    
    console.log(discreteArr, discreteFrequencyArr)
    $('#discreteDataLength').text(" Actual Data: Length - " + discreteArr.length)
    var freqSum = 0;
    for (var i = 0; i < discreteFrequencyArr.length; i++) {
        freqSum += discreteFrequencyArr[i]
    }
    $('#discreteFreqLength').text(" Frequency: Sum - " + freqSum)
    
    if (discreteArr.length != discreteFrequencyArr.length) {
        $('#discreteErrors').text("The data is differently sized from the frequencies")
        return
    }
    
    getProducts(discreteArr, discreteFrequencyArr, discreteProductArr)
    
    var productSum = 0;

    for (var i = 0; i < discreteProductArr; i++) {
        productSum += discreteProductArr;
    }

    $('#discreteProductSum').text(" Product: Sum - " + productSum)

    for (var i = 0; i < discreteProductArr.length; i++)
        addDiscreteProductField(discreteProductArr[i])
    

    var discreteMean = mean(discreteProductArr, freqSum )
    var discreteMedianVal = discreteMedian(discreteArr, discreteFrequencyArr, freqSum)

    $("#discreteMean").text("Mean: " + discreteMean)
    $("#discreteMedian").text("Median: " + discreteMedianVal)

    if (discreteMean == discreteMedianVal) {
        $("#discreteDistribution").text("The data has a symmetrical distribution")
    }
    else if (discreteMean > discreteMedianVal) {
        $("#discreteDistribution").text("The data has a positively skewed distribution")
    }
    else {
        $("#discreteDistribution").text("The data has a negatively skewed distribution")
    }

}

discreteDataAdder.click(addDiscreteField)
discreteFrequencyAdder.click(addDiscreteFrequencyField)
discreteClear.click(clearDiscreteFields)
discreteCollect.click(discrete)


