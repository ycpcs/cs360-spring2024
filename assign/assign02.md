---
layout: default
title: "Assignment 2"
---

**Due: Wed, Feb 14th in class** Late assignments will be penalized 20% per day.

Book Questions from *Introduction to Algorithms - 4th ed.*
==========================================================

2.3-6 (recursively)

3-2 (with *brief* justifications for *each* row - 10 points)

4.5-1 (b,d), 4.5-2, 4-1 (b,c,f)

Implementation - Merge sort

*Hints:*

> 2.3-6 - Be sure to give a *recursive* algorithm and the corresponding recursive equation. Then solve the equation via Master theorem.
>
> 3-2 - Refer to the properties of logs and exponentials in section 3.2, particularly eq. 3.16, 3.19, and the following properties
>
> *n<sup>b</sup> = o(a<sup>n</sup>)*
>
> *lg<sup>b</sup>n = o(n<sup>a</sup>)*
>
> i.e. polynomials are bounded by exponentials and logarithms are bounded by polynomials.
>
> 4.5-2 - Note that Strassen's algorithm runs in Θ(n<sup>lg 7</sup>), consider what this means with respect to O().
>
> 4-1 - Use the steps in [Lecture 5](../lectures/lecture05.html) for the Master theorem to identify the appropriate cases. Remember that all logarithms are bounded by all polynomials.

**Implementation**

A skeleton project is provided in [CS360\_MergeSort.zip](../assign/src/CS360_MergeSort.zip). The zip file contains a [CLion](https://www.jetbrains.com/clion/) project. **mergeSorter.cpp** contains the main routine as well as empty sort function stubs - you should not need to modify **main()** or *any* of the utility functions.

> -   For each input size, the program generates a *random* array **D[]**
> -   **D[]** is copied into the array **A[]** *prior* to each sorting function call (such that each sort works on the *same* data sets)
> -   A checking function will verify if your sorting implementation produces an array that is in non-decreasing order and halt the program otherwise. Note that just because this function passes **does not** mean your algorithm is working properly. You may wish to print out the sorted array for a few small array sizes.
> -   All arrays have been expanded by 1 (with appropriate adjustments to any loops) to agree with the pseudocode from the book where array indices range from **A[1]** -\> **A[n]**

*Your Task*

Implement the sort algorithm *as given in the pseudocode below* for merge sort. Insert counter increment statements (note: a **count** global variable is provided), into each sorting function for each *executable* line of *pseudocode* (e.g. count all three lines required to implement a swap as a *single* operation). Use this counter to *empirically* measure the runtime of each sort. Only increment the counter for statements *within* the sorting functions, i.e. do not include any initialization overhead incurred in **main()** or the utility functions. Note that **count** is reset prior to each sort call but the results are stored in a 3D array **counter** which is used to display a table of all results once all the sorts and runs have completed.

The program will run each sort for each input *size* with elements randomly generated from *two* different input *ranges* 

> -   The small range contains elements in the range [1 -\> 1024]
> -   The large range contains elements in the range [1 -\> 32768]

Initially the skeleton code will only run the sorting algorithm for one array of size 16 to make it easier to debug any issues. 

Once you are confident that the sort code is correct, change the **\#define MAX\_RUNS** to 13 which will generate output data for 13 input sizes using increasing powers of 2 from 2<sup>4</sup> = 16 to 2<sup>16</sup> = 65536. 

Also change **\#define NUM\_AVG** to 10 to compute an *average* runtime for 10 random arrays of each size.

Once the data for all input sizes and both ranges and element ranges have been generated, the program will produce a comma separated table of output in the console and a corresponding **mergeOutput.csv** file in the **bin** subdirectory. Use this data to make a *meaningful* plot (e.g. using Excel) of the data showing *important* characteristics. In particular:

> -   Plot number of inputs *n* vs. empirical average runtimes as **data points** for both element ranges
> -   Show the *best fit* asymptotic **curves** for **cn lg n** appropriate for the sort. Determine an *approximate* value of **c** (to the nearest 0.5) for each element range that fits the actual data relatively well. (Hint: Simply manually choose values for each **c** and plot the corresponding asymptotic curve until it fits the data *reasonably* well, i.e. you do not need to mathematically find the "best-fit" values.)
> -   Create a second plot to illustrate and discuss how well the asymptotic curve fits the data for *small* data set sizes (*n* < 512) for both element ranges
> -   Create a third plot showing *both* insertion sort and merge sort on the same axes and determine for which range is each sort faster, i.e. where is the crossover point. **Note** you may need to adjust the axis ranges to highlight your conclusions. 

**Hint:** To plot **cn lg n**, consider making another column in the spreadsheet that *computes* **cn lg n** for each input size *n*. Then plot the empirical data as **points** (with no lines) and the computed values as a **curve** without points.

*Merge Sort*

    MERGE-SORT(A,p,r)
    1  if p ≥ r                   // base case: zero or one element
    2     return
    3  q = ⌊(p+r)/2⌋              // determine midpoint
    4  MERGE-SORT(A,p,q)          // recursively sort A[p:q]
    5  MERGE-SORT(A,q+1,r)        // recursively sort A[q+1:r]
    6 // Merge A[p:q] and A[q+1:r] into A[p:r]
    7  MERGE(A,p,q,r)

    MERGE(A,p,q,r)
    1  nL = q - p + 1             // length of A[p:q]
    2  nR = r - q                 // length of A[q+1:r]
    3  let L[0:nL-1] and R[0:nR-1] be new arrays
    4  for i = 0 to nL-1          // copy A[p:q] into L[0:nL-1]
    5     L[i] = A[p+i]
    6  for j = 0 to nR-1          // copy A[q+1:r] into R[0:nR-1]
    7     R[j] = A[q+j+1]
    8  i = 0                      // index smallest remaining element in L
    9  j = 0                      // index smallest remaining element in R
    10 k = p                      // index location to fill in A
    11 // As long as each of the arrays L and R contains an unmerged element,
       //    copy the smallest unmerged element back into A[p:r]
    12 while i < nL and j < nR
    13    if L[i] ≤ R[j]
    14       A[k] = L[i]
    15       i = i + 1
    16    else A[k] = R[j]
    17       j = j + 1
    18    k = k + 1
    19 // Having gone through one of L and R entirely, copy the
       //     remainder of the other to the end of A[p:r]
    20 while i < nL
    21   A[k] = L[i]
    22   i = i + 1
    23   k = k + 1
    24 while j < nR
    25   A[k] = R[j]
    26   j = j + 1
    27   k = k + 1

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
