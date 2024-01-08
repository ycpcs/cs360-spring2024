---
layout: default
title: "Assignment 1"
---

**Due: Mon, Feb 5th in class** Late assignments will be penalized 20% per day.

Book Questions from *Introduction to Algorithms - 4th ed.*
==========================================================

1.2-2, 1.2-3

2.2-3, 2-2 (10 points)

Implementation - insertion sort.

*Hints:*

> 1.2-2 & 1.2-3 Remember that *n* must be an **integer**.
>
> 2.2-3 Be sure to give a *mathematically rigorous* justification for your answer and not simply an *intuitive* explanation. Consider what the probability is for the *i*<sup>th</sup> element being the desired one and how many elements were searched to find it.
>
> 2-2 (a) - Consider what **two** criteria are necessary for a sorting algorithm to be correct (the obvious one is that the elements end up in non-decreasing order, what is the other?)
>
> > (b) - What must be true both **before** and **after** the *inner* loop executes (consider what the inner loop does)? Remember you must show it holds for *initialization*, *maintenance*, and *termination* conditions.
> >
> > (c) - What must be true both **before** and **after** the *outer* loop executes (consider what the outer loop does)? Remember you must show it holds for *initialization*, *maintenance*, and *termination* conditions.
> >
> > (d) - Note this version of bubble-sort uses *fixed* iteration loops, i.e. no **while** statements. Construct a table as shown in class to determine the *worst-case* runtime.

**Implementation**

A skeleton project is provided in [CS360\_InsertionSort.zip](../assign/src/CS360_InsertionSort.zip). The zip file contains a [CLion](https://www.jetbrains.com/clion/) project. **insertionSorter.cpp** contains the main routine as well as empty sort function stubs - you should not need to modify **main()** or *any* of the utility functions.

> -   For each input size, the program generates a *random* array **D[]**
> -   **D[]** is copied into the array **A[]** *prior* to each sorting function call (such that each sort works on the *same* data sets)
> -   A checking function will verify correct operation of your sorting implementation and halt the program if it produces incorrectly sorted output.
> -   Since C++ does not have an **A.length** member variable, I have included a function called **length(A)** which will return the length of the array (which is stored in **A[0]**)
> -   All arrays have been expanded by 1 (with appropriate adjustments to any loops) to agree with the pseudocode from the book where array indices range from **A[1]** -\> **A[n]**

*Your Task*

Implement the sort algorithm *as given in the pseudocode below* for insertion sort. Insert counter increment statements (note: a **count** global variable is provided), into each sorting function for each *executable* line of *pseudocode* (e.g. count all three lines required to implement a swap as a *single* operation). Use this counter to *empirically* measure the runtime of each sort. Only increment the counter for statements *within* the sorting functions, i.e. do not include any initialization overhead incurred in **main()** or the utility functions. Note that **count** is reset prior to each sort call but the results are stored in a 3D array **counter** which is used to display a table of all results once all the sorts and runs have completed.

The program will generate output data for 13 input sizes using increasing powers of 2 from 2<sup>4</sup> = 16 to 2<sup>16</sup> = 65536. The program will also generate **\#define NUM\_AVG** sets of data for each size in order to compute an *average* runtime for random arrays of each size.

The program will run each sort for each input *size* with elements randomly generated from *two* different input *ranges* 

> -   The large range contains elements in the range [1 -\> 32768]
> -   The small range contains elements in the range [1 -\> 1024]

Once the data for all input sizes and both ranges and element ranges have been generated, the program will produce a comma separated table of output in the console and a corresponding **output.csv** file in the **bin** subdirectory. Use this data to make a *meaningful* plot (e.g. using Excel) of the data showing *important* characteristics. In particular:

> -   Plot number of inputs *n* vs. empirical average runtimes as **data points** for both element ranges
> -   Show the *best fit* asymptotic **curves** for **cn**<sup>2</sup> appropriate for the sort. Determine an *approximate* value of **c** (to the nearest 0.5) for each element range that fits the actual data relatively well. (Hint: Simply manually choose values for each **c** and plot the corresponding asymptotic curve until it fits the data *reasonably* well, i.e. you do not need to mathematically find the "best-fit" values.)

**Hint:** To plot **cn**<sup>2</sup>, consider making another column in the spreadsheet that *computes* **cn**<sup>2</sup> for each input size *n*. Then plot the empirical data as **points** (with no lines) and the computed values as a **curve** without points.

*Insertion Sort*

    INSERTION-SORT(A)
    1  for j = 2 to A.length
    2     key = A[j]
    3     // Insert A[j] into the sorted sequence A[1..j-1]
    4     i = j - 1
    5     while i > 0 and A[i] > key
    6        A[i+1] = A[i]
    7        i = i - 1
    8     A[i+1] = key

**HINTS:**

Function call statements **DO NOT** increment the counter since their runtime is evaluated by the execution of the function.

Return statement **DO NOT** increment the counter.

Loop statements, i.e. **for** and **while**, will execute *one more* time than the statements in the loop body. Hence a counter can be added both within and after the loop statement as follows

    for (...) {
       count++;
       // Body of loop
    }
    count++;
    
    while (...) {
       count++;
       // Body of loop
    }
    count++;
        
For logical structures, i.e.**if**, **if/else**, **if/else if/ else**, there will need to be counters in *each* branch for the *total* number of conditions to ensure proper counting dependent on which branch executes. Note: if there is no **else** branch, one should be added with simply the count increment in the case when the condition is false to properly count the evaluation of the condition 

    if (...) {
       count++;
       // Body of if
    } else {
       count++;
    }
    
    if (...) {
       count++;
       // Body of if branch
    } else {
       count++;
       // Body of else branch
    }

    if (...) {
       count++;
       // Body of first if branch
    } else if (...) {
       count += 2;
       // Body of second if branch
    } else if (...) {
       count += 3;
       // Body of third if branch
    } else {
       count += however many if conditions there are
       // Body of else branch
    }
