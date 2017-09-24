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

function sortTogether(array1, array2) {
    var merged = [];
    for(var i=0; i<array1.length; i++) { merged.push({'a1': array1[i], 'a2': array2[i]});  }
    merged.sort(function(o1, o2) { return ((o1.a1 < o2.a1) ? -1 : ((o1.a1 == o2.a1) ? 0 : 1));  });
    for(var i=0; i<merged.length; i++) { array1[i] = merged[i].a1; array2[i] = merged[i].a2;  }

}

function discreteMedian(tarr, tfreqArr, length) {
    var arr = tarr.slice(0)
    var freqArr = tfreqArr.slice(0)

    sortTogether(arr, freqArr)
    
    var median = Math.floor(length / 2)

    if (length % 2 == 0) {
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            return arr[j];
    }
    else {
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            return mean2(arr[j], arr[j+1], 0) 
    }
}

function discreteMode(arr, freqArr) {
    var max = 0, pos = 0;

    for (var i = 0; i < freqArr.length; i++) {
        if (freqArr[i] > max) {
            max = freqArr[i];
            pos = i;
        }        
    }

    return arr[pos]
}



var discreteData = $('#discrete-data')
var discreteFrequencies = $('#discrete-frequencies')
var discreteProducts = $('#discrete-product')
var discreteDataAdder = $('#discreteDataAdder')
var discreteClear = $('#discrete-clear')
var discreteCollect = $('#discrete-collect')
var discretePop = $("#discrete-pop")

var discreteArr = Array(), discreteFrequencyArr = Array(), discreteProductArr = Array()

function clearArrs() {
    discreteArr.length = 0;
    discreteFrequencyArr.length = 0
    discreteProductArr.length = 0
}

function clearDiscreteFields() {
    var answer = prompt("Are you sure?")
    if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
        discreteData.empty()
        discreteFrequencies.empty()
        discreteProducts.empty()
        clearArrs()
    }
}

function discreteStackPop() {
    discreteData.children().last().remove()
    discreteFrequencies.children().last().remove()
}

function addDiscreteField() {
    console.log("Adding field")
    discreteData.append("<div class='field'><div class='control'><input class='input discreteData' type='text' placeholder='number here'></div></div>") 
    addDiscreteFrequencyField()
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


function discrete() {
    clearArrs()
    discreteProducts.empty()
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

    for (var i = 0; i < discreteProductArr.length; i++) {
        productSum += discreteProductArr[i];
    }

    $('#discreteProductSum').text(" Product: Sum - " + productSum)

    for (var i = 0; i < discreteProductArr.length; i++)
        addDiscreteProductField(discreteProductArr[i])
    

    var discreteMean = mean(discreteProductArr, freqSum )
    var discreteMedianVal = discreteMedian(discreteArr, discreteFrequencyArr, freqSum)
    var discreteModeVal = discreteMode(discreteArr, discreteFrequencyArr)

    $("#discreteMean").text("Mean: " + discreteMean)
    $("#discreteMedian").text("Median: " + discreteMedianVal)
    $("#discreteMode").text("Mode: " + discreteModeVal)
    

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
discreteCollect.click(discrete)
discretePop.click(discreteStackPop)
discreteClear.click(clearDiscreteFields)

