# cuddly-guacamole

Todo: Upload
This program serves as an automator for statistical computation. Given a set of data it will output the relevant properties.
Currently the program works with 

* Discrete Numerical Data
* Continuous Numerical Data

Discrete Numerical computations require the data and the frequency table. From this it will output:

* Mean (as a floating point number)
* Mode 
* Median
* Upper Quartile
* Lower Quartile
* Spread
* Inter Quartile range

The mean is calculated with the formula:
    x = sigma x / n (I wish latex worked here)

The mode only works for monomodal sets. This is because I haven't yet figured out an efficient yet simple algorithm that can report multiple modes. I could probably figure this out if I tried but apparently we don't need to for the task.

The median is calculated with the formula
    n / 2
This is because the arrays are 0-indexed. I hope this works, I'm really just guessing with this.
If the dataset is uneven then the median reports the mean of the two central numbers.

Upper Quartile is found the same way as the median but with
    n / 1.333
This is the same as n * 0.75 but I can use this with the modulo operator

Lower Quartile is found by dividing n by 4

Spread is max - min 
Inter Spread is UQuartile - LQuartile

This program also works with Continuous data sets.
For continuous datasets it needs to have ranges inputted.
The ranges are inclusive so 1 - 10 will be interpreted as 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

