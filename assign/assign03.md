---
layout: default
title: "Assignment 3"
---

**Due: Wed, Mar 1st in class** Late assignments will be penalized 20% per day.

Book Questions from *Introduction to Algorithms - 4th ed.*
==========================================================

6.4-3, 7.2-3

Q3: One way we can circumvent the Ω(n lg n) bound is if we know something about the distribution of the data prior to sorting. Suppose a set of *n* data points is provided such that it is clustered into partitions of size *k* (hence there are *n/k* partitions) where all the values in a partition are *less than* all the values in the next partition (and *greater than* all the values in the prior partition) but the values *within* a partition are *not* sorted. Thus to sort the entire input it is sufficient to simply sort each partition. Show that a lower bound for sorting this type of "batch"-ordered input is Ω(n lg k).

Implementation - Heap sort, quick sort, and counting sort (5 points each)

*Hints:*

> 6.4-3 - Explain the difference in run-times for best and worst case heapsort both practically and asymptotically both in terms of *building* the max heap and *sorting* the max heap.
> 
> 7.2-3 - For an array in *decreasing* order, consider which element is selected as the pivot element for the first several recursive calls and where it is placed once PARTITION() completes. Argue that this pattern produces O(*n*<sup>2</sup>) runtime.
> 
> Q3 - Use an argument similar to the original Θ(n lg n) one in Theorem 8.1. Note that there are *k!* permutations for *each* partition and consider how many partitions there are to derive the total number of possibilities there can be. Use the decision tree argument to get the formula (*n*/*k*)(lg *k!*) with eq. 3.19, and then use the definition of Θ to show the lower bound.

**Implementation**

A skeleton project is provided in [CS360\_HeapQuickCountingSort.zip](../assign/src/CS360_HeapQuickCountingSort.zip). The zip file contains a [CLion](https://www.jetbrains.com/clion/) project. **heapQuickCountingSorter.cpp** contains the main routine as well as empty sort function stubs - you should not need to modify **main()** or *any* of the utility functions.

> -   For each input size, the program generates a *random* array **D[]**
> -   **D[]** is copied into the array **A[]** *prior* to each sorting function call (such that each sort works on the *same* data sets)
> -   A checking function will verify if your sorting implementation produces an array that is in non-decreasing order and halt the program otherwise. Note that just because this function passes **does not** mean your algorithm is working properly. You may wish to print out the sorted array for a few small array sizes.
> -   All arrays have been expanded by 1 (with appropriate adjustments to any loops) to agree with the pseudocode from the book where array indices range from **A[1]** -\> **A[n]**
> -   C++ also does not have an **A.heap-size** member variable, the parameter **heap-size** is passed as an additional parameter to any function requiring **A.heap-size**

*Your Task*

Implement the sort algorithm *as given in the pseudocode below* for heap, quick, and counting sort. Insert counter increment statements (note: a **count** global variable is provided), into each sorting function for each *executable* line of *pseudocode* (e.g. count all three lines required to implement a swap as a *single* operation). Use this counter to *empirically* measure the runtime of each sort. Only increment the counter for statements *within* the sorting functions, i.e. do not include any initialization overhead incurred in **main()** or the utility functions. Note that **count** is reset prior to each sort call but the results are stored in a 3D array **counter** which is used to display a table of all results once all the sorts and runs have completed.

The program will run each sort for each input *size* with elements randomly generated from *two* different input *ranges* 

> -   The small range contains elements in the range [1 -\> 1024]
> -   The large range contains elements in the range [1 -\> 32768]

Initially the skeleton code will only run the sorting algorithm for one array of size 16 to make it easier to debug any issues. 

Once you are confident that the sort code is correct, change the **\#define MAX\_RUNS** to 13 which will generate output data for 13 input sizes using increasing powers of 2 from 2<sup>4</sup> = 16 to 2<sup>16</sup> = 65536. 

Also change **\#define NUM\_AVG** to 10 to compute an *average* runtime for 10 random arrays of each size.
> -   The large range contains elements in the range [1 -\> 32768]

Once the data for all input sizes and both ranges and element ranges have been generated, the program will produce a comma separated table of output in the console and a corresponding **output.csv** file in the **bin** subdirectory. Use this data to make a *meaningful* plot (e.g. using Excel) of the data showing *important* characteristics. In particular:

> -   Plot number of inputs *n* vs. empirical average runtimes as **data points** for both element ranges
> -   Show the *best fit* asymptotic **curve** for **cn lg n** for heap and quick sort, and **cn + k** for counting sort appropriate for the sort. Determine an *approximate* value of **c** (to the nearest 0.5) and  **k** for each sort that fits the actual data relatively well. (Hint: Simply manually choose values for each **c** and plot the corresponding asymptotic curve until it fits the data *reasonably* well, i.e. you do not need to mathematically find the "best-fit" values. **k** is simply a y offset, so select **c** to match the slope and then adjust **k** to vertically adjust the curve.)

**Hint:** To plot **cn lg n** and **cn + k**, consider making another column in the spreadsheet that *computes* **cn lg n** and **cn + k** for each input size *n*. Then plot the empirical data as **points** (with no lines) and the computed values as a **curve** without points.

*Heap Sort*

    HEAPSORT(A, n)
    1  BUILD-MAX-HEAP(A, n)
    2  for i = n downto 2
    3     exchange A[1] with A[i]
    4     A.heapsize = A.heapsize - 1
    5     MAX-HEAPIFY(A,1)

    BUILD-MAX-HEAP(A, n)
    1  A.heapsize = n
    2  for i = ⌊n/2⌋ downto 1
    3     MAX-HEAPIFY(A,i)

    MAX-HEAPIFY(A,i)
    1  l = LEFT(i)
    2  r = RIGHT(i)
    3  if l ≤ A.heapsize and A[l] > A[i]
    4     largest = l
    5  else largest = i
    6  if r ≤ A.heapsize and A[r] > A[largest]
    7     largest = r
    8  if largest ≠ i
    9     exchange A[i] with A[largest]
    10    MAX-HEAPIFY(A,largest)
	
*Quick Sort*

    QUICKSORT(A,p,r)
    1  if p < r
    2     // Partition the subarray around the pivot, which ends up in A[q]
    3     q = PARTITION(A,p,r)
    4     QUICKSORT(A,p,q-1)      // recursively sort low side
    5     QUICKSORT(A,q+1,r)      // recursively sort high side
    
    PARTITION(A,p,r)
    1  x = A[r]                       // the pivot
    2  i = p - 1                      // highest index into the low side
    3  for j = p to r-1               // process each element other than the pivot
    4     if A[j] ≤ x                 // does this element belong on the low side?
    5        i = i + 1                // index of a new slot in the low side
    6        exchange A[i] with A[j]  // put this element there
    7  exchange A[i+1] with A[r]      // pivot goes just to the right of the low side
    8  return i+1                     // new index of the pivot

*Counting Sort*

    COUNTING-SORT(A,n,k)
    1  let B[1:n] and C[0:k] be new arrays
    2  for i = 0 to k
    3     C[i] = 0
    4  for j = 1 to n
    5     C[A[j]] = C[A[j]] + 1
    6  // C[i] now contains the number of elements equal to i
    7  for i = 1 to k
    8     C[i] = C[i] + C[i-1]
    9  // C[i] now contains the number of elements less than or equal to i
    10 // Copy A to B, starting from the end of A
    11 for j = n downto 1
    12    B[C[A[j]]] = A[j]
    13    C[A[j]] = C[A[j]] - 1      // to handle duplicate values
    14 return B

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
