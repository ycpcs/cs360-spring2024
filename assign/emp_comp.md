---
layout: default
title: "Empirical Comparison Report"
---

**Mon, March 18th by 11:59pm** Late assignments will be penalized 20% per day.

Use the following [template](template.docx).

## Empirical Sorting Comparison

The purpose of this assignment is to compare the various sorting algorithms implemented in assignments 1, 2, and 3.

## Submission

The submission for this assignment should consist of a written report that graphically shows the results for all five sorts and provides a discussion of what was observed. **DO NOT** include your completed source code, but provide tables of numerical data in an appendix at the end of the report.

The report should include *meaningful* plots (e.g. using Excel) of all the data showing *important* comparison characteristics. 
	
**DISCUSS** the results in terms of observed behavior (e.g. how well does the asymptotic behavior match the empirical data), comparison of behaviors between sorts (e.g. which ones perform better at which data set sizes), comparison of hidden constants for sorts with the same asymptotic behaviors, and any other important observed features. The discussion should refer to the graphs when appropriate to illustrate each aspect. 

*Algorithms*

Provide the individual sort graphs you generated in assignments 1-3 and discuss for each algorithm:

>-   Does the empirical constant vary for each sort based on element range, i.e. for the two element ranges, are the data points close to each other or not? If not, briefly explain why you think there is variation in the sort behavior.

>-   Does the empirical data for each sort fit the asymptotic trend curve relatively well for *small* data sets? If not, briefly explain why you think there is a deviation from the asymptotic trend for small data set sizes.

*Small Range Comparison*

For all the algorithms, create appropriate graphs using the *small element range* data sets to highlight the following comparisons:

>-   Which sorts have the best runtime for *small* data sets, i.e. *small n*, i.e. which sorts are most efficient for different (small) *n*?

>-   Which sorts have the best runtime for *large* data sets, i.e. *large n*, i.e. which sorts are most efficient for different (large) *n*?

>-   For **just** the *n lg n* sorts, which are most efficient both in terms of runtime and memory usage? 

*Large Range Comparison*

>-   Which sorts have the best runtime for *small* data sets, i.e. *small n*, i.e. which sorts are most efficient for different (small) *n*?


>-   Which sorts have the best runtime for *large* data sets, i.e. *large n*, i.e. which sorts are most efficient for different (large) *n*?

>-   For **just** the *n lg n* sorts, which are most efficient both in terms of runtime and memory usage? 

*Conclusion*

**SUMMARIZE** the results by describing under what conditions you would select different sorts, i.e. if you were asked to sort a data set, what criteria would you use in making your selection?

*Appendix*

There should be a summary table listing the sort method, asymptotic behavior, and empirical asymptotic formula with "best-fit" constants.

Also provide a table of the empirical data (**not** the calculated curve fit data).

## Grading

-   Constant dependent on range - 10 points (2 per sort)
-   Asymptotic fit for small *n* - 10 points (2 per sort)
-   Small range comparison
    > -   small *n* - 10 points
    > -   large *n* - 10 points
    > -   *n* lg *n* - 5 points
-   Large range comparison
    > -   small *n* - 10 points
    > -   large *n* - 10 points
    > -   *n* lg *n* - 5 points
-   Conclusion - 10 points
-   Appendix
    > -   asymptotic constants - 5 points
    > -   empirical data - 5 points
-   Writing quality - 10 points

**Upload** a .pdf file to Canvas by **Monday, March 18 at 11:59pm**
