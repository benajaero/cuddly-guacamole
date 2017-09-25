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

//only difference should be that these two return an array of vals
//oh yea, t stands for temporary

function classModeFunc(arr, tarr, freqArr) {
    var max = 0, pos = 0;
    var r = []

    for (var i = 0; i < freqArr.length; i++) {
        if (freqArr[i] > max) {
            max = freqArr[i];
            pos = i;
        }        
    }
    r = [arr[pos], tarr[pos]]
    return r

}

function classMedianFunc(tarr, ttarr, tfreqArr, length) {
    // we need to duplicate arrs
    var arr = tarr.slice(0) 
    var topArr = ttarr.slice(0)
    var freqArr = tfreqArr.slice(0)
    var ttfreqArr = tfreqArr.slice(0)
    
    //if input is good then these should be the same
    sortTogether(arr, freqArr)
    sortTogether(topArr, ttfreqArr)

    var median = Math.floor(length / 2)
    var r = []

    if (length % 2 != 0) {
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j += 1) {
            console.log(median,length)
            console.log(i, j)
            r = [arr[j], topArr[j]]
        }
        return r
    }
    else {
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j += 1 ){
            r = [mean2(arr[j], arr[j+1]), mean2(topArr[j], topArr[j+1])]
        }
        return r
    }
}

function discreteMedian(tarr, tfreqArr, length) {
    var arr = tarr.slice(0)
    var freqArr = tfreqArr.slice(0)

    sortTogether(arr, freqArr)
    
    var median = Math.floor(length / 2)

    if (length % 2 != 0) {
        var vall
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            vall = arr[j]
        return vall
    }
    else {
        var average
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            average = mean2(arr[j], arr[j+1], 0) 
        return average
    }
}

function discreteLowerQuartile(tarr, tfreqArr, length) {
    var arr = tarr.slice(0)
    var freqArr = tfreqArr.slice(0)

    sortTogether(arr, freqArr)
    
    var median = Math.floor(length / 4)

    if (length % 4 != 0) {
        var vall
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            vall = arr[j]
        return vall
    }
    else {
        var average
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            average = mean2(arr[j], arr[j+1], 0) 
        return average
    }
}

function discreteUpperQuartile(tarr, tfreqArr, length) {
    var arr = tarr.slice(0)
    var freqArr = tfreqArr.slice(0)

    sortTogether(arr, freqArr)
    
    var median = Math.floor(length / 1.33333 )

    if (length % 1.333333 != 0) {
        var vall
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            vall = arr[j]
        return vall
    }
    else {
        var average
        for (var i = 0, j = 0; i <= median; i += freqArr[j], j++) 
            average =  mean2(arr[j], arr[j+1], 0) 
        return average
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

function range(arr) {
    var tarr = arr.slice(0)
    tarr.sort()

    return tarr[tarr.length-1] - tarr[0]
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

function appendTheThing(appender, thing) {
    string = "<div class='field'><div class='control'><p>" + thing + "</p></div></div><hr>"
    appender.append(string)
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
    appendTheThing(discreteProducts, val)
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
    var discreteRangeVal = range(discreteArr)
    var discreteLQ = discreteLowerQuartile(discreteArr, discreteFrequencyArr, freqSum)
    var discreteUQ = discreteUpperQuartile(discreteArr, discreteFrequencyArr, freqSum)

    $("#discreteMean").text("Mean: " + discreteMean)
    $("#discreteMedian").text("Median: " + discreteMedianVal)
    $("#discreteMode").text("Mode: " + discreteModeVal)
    $("#discreteRange").text("Range: " + discreteRangeVal)
    $("#discreteLowerQuartile").text("Lower Quartile: " + discreteLQ)
    $("#discreteUpperQuartile").text("Upper Quartile: " + discreteUQ)
    $("#discreteInterQuartileRange").text("InterQuartileRange: " + (discreteUQ - discreteLQ))
    

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



var classTopData = $('#class-top')
var classBottomData = $('#class-bottom')
var classMeanData = $('#class-mean')
var classFrequencies = $('#class-frequencies')
var classProducts = $('#class-product')
var classDataAdder = $('#classDataAdder')
var classClear = $('#class-clear')
var classCollect = $('#class-collect')
var classPop = $('#class-pop')

var classBottomArr = [], classTopArr = [], classMeanArr = [], classFreqArr = [], classProductsArr = []

function clearClassArrs() {
    classBottomArr.length = 0
    classTopArr.length = 0
    classMeanArr.length = 0
    classFreqArr.length = 0
    classProductsArr.length = 0
}

function classPopStack() {
    classTopData.children().last().remove()
    classBottomData.children().last().remove()
    classMeanData.children().last().remove()
    classProducts.children().last().remove()
    classFrequencies.children().last().remove()
}

function clearClassData() {
    var answer = prompt("Are you sure (type yes or y)")
    if (answer.toLowerCase() == "yes" || answer.toLowerCase() == 'y') {
        classBottomData.empty()
        classTopData.empty()
        classFrequencies.empty()
        classMeanData.empty()
        classProducts.empty()
    }
}

function addClassFields() {
    classBottomData.append("<div class='field'><div class='control'><input class='input classBData' type='text' placeholder='number here'></div></div>") 
    classTopData.append("<div class='field'><div class='control'><input class='input classTData' type='text' placeholder='number here'></div></div>") 
    classFrequencies.append("<div class='field'><div class='control'><input class='input classFData' type='text' placeholder='number here'></div></div>") 
}

function addMean(val) {
    classMeanData.append("<p>" + val + "</p><hr>")
    
}

function addClassProduct(val) {
    classProducts.append("<p>" + val + "</p><hr>")
}

function pushProducts() {
    for (var i = 0; i < classFreqArr.length; i++) {
        var product = classMeanArr[i] * classFreqArr[i]
        classProductsArr.push(product)
        addClassProduct(product)
    }
}

function pushMeans(topArr, bottom) {
    if (topArr.length == bottom.length)
        for (var i = 0; i < topArr.length; i++) {
            var meanVal = mean2(topArr[i], bottom[i])
            classMeanArr.push(meanVal)
            addMean(meanVal)
        }
}

function collect(string, arr) {
    $(string).each(function() {
        var val = $(this).val();

        if (val != '' || val != ' ' || val != undefined || val != null || !Number.isNaN(val))
            arr.push(parseFloat(val))
    })
}



function lengthsAndSums() {
    var freqClassSum = 0
    for (var i = 0; i < classFreqArr.length; i++)
        freqClassSum += classFreqArr[i]

    var classProductSum = 0
    for (var i = 0; i < classProductsArr.length; i++)
        classProductSum += classProductsArr[i]

    $("#classBottomRangeLength").text("Bottom Range - " + classBottomArr.length)
    $("#classTopRangeLength").text("Top Range - " + classTopArr.length)
    $("#classMeanLength").text("Average - " + classMeanArr.length)
    $("#classFreqLength").text("Frequency - " + freqClassSum)
    $("#classProductSum").text("Product - " + classProductSum)

    var classMean = mean(classProductsArr, freqClassSum) 
    var classMedian = classMedianFunc(classBottomArr, classTopArr, classFreqArr, classFreqArr.length)
    var classMode = classModeFunc(classBottomArr, classTopArr, classFreqArr)

    $("#classMean").text("Mean: " + classMean)
    $("#classMedian").text("Median: " + classMedian[0] + " - " + classMedian[1])
    $("#classMode").text("Mode: " + classMode[0] + " - " + classMode[1])

    if (classMean < classMedian[0]) 
        $("#classDistribution").text("The data has a negatively skewed distribution")
    else if (classMean > classMedian[1])
        $("#classDistribution").text("The data has a positively skewed distribution")
    else
        $("#classDistribution").text("The data has a symmetrical distribution")
}

function classFunc() {
    clearClassArrs()
    classProducts.empty()
    classMeanData.empty()

    collect(".classBData", classBottomArr)
    collect(".classTData", classTopArr)
    collect(".classFData", classFreqArr)

    pushMeans(classTopArr, classBottomArr)
    pushProducts()

    lengthsAndSums()
    
}
classDataAdder.click(addClassFields)
classClear.click(clearClassData)
classPop.click(classPopStack)
classCollect.click(classFunc)

