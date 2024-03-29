---
layout: default
title: "Lecture 14: Greedy Algorithms - Activity Selection"
---

While dynamic programming can be successfully applied to a variety of optimization problems, many times the problem has an even more straightforward solution by using a *greedy approach*. This approach reduces solving multiple subproblems to find the optimal to simply solving one greedy one. Implementation of greedy algorithms is usually more straighforward and more efficient, but *proving* a greedy strategy produces optimal results requires additional work.

Activity Selection
==================

**Problem**

Given a set of *activities* *A* of length *n*

> *S* = \<*a*<sub>1</sub>, *a*<sub>2</sub>, ..., *a*<sub>n</sub>\>

with *starting times*

> <*s*<sub>1</sub>, *s*<sub>2</sub>, ..., *s*<sub>n</sub>\>

and *finishing times*

> <*f*<sub>1</sub>, *f*<sub>2</sub>, ..., *f*<sub>n</sub>\>

such that 0 ≤ *s*<sub>i</sub> \< *f*<sub>i</sub> \< ∞, we define two activities *a*<sub>i</sub> and *a*<sub>j</sub> to be *compatible* if

> *f*<sub>i</sub> ≤ *s*<sub>j</sub> **or** *f*<sub>j</sub> ≤ *s*<sub>i</sub>

i.e. one activity ends before the other begins so they do not overlap.

Find a *maximal* set of compatible activies, e.g. scheduling the most activities in a lecture hall. Note that we want to find the maximum *number* of activities, **not** necessarily the maximum *use* of the resource.

**Dynamic Programming Solution**

*Step 1: Characterize optimality*

Without loss of generality, we will assume that the *a*'s are sorted in non-decreasing order of finishing times, i.e. *f*<sub>1</sub> ≤ *f*<sub>2</sub> ≤ ... ≤ *f*<sub>n</sub>.

Furthermore, we can define boundary activities *a*<sub>0</sub> such that *f*<sub>0</sub> = 0, and *a*<sub>n+1</sub> such that *s*<sub>n+1</sub> = *f*<sub>n</sub>.

Define the set *S*<sub>ij</sub>

> *S*<sub>ij</sub> = {*a*<sub>k</sub> ∈ *S* : *f*<sub>i</sub> ≤ *s*<sub>k</sub> \< *f*<sub>k</sub> ≤ *s*<sub>j</sub>}

as the subset of activities that can occur between the completion of *a*<sub>i</sub> (*f*<sub>i</sub>) and the start of *a*<sub>j</sub> (*s*<sub>j</sub>). Clearly then *S* = *S*<sub>0,n+1</sub>, i.e. all the activities fit between the boundary activities *a*<sub>0</sub> and *a*<sub>n+1</sub>.

Furthermore let *A*<sub>ij</sub> be the *maximal* set of activities for *S*<sub>ij</sub>, thus we wish to find *A*<sub>0,n+1</sub> such that \|*A*<sub>0,n+1</sub>\| is *maximized*.

*Step 2: Define the recursive solution (top-down)*

Similar to rod cutting, if *A*<sub>0,(n+1)</sub> ≠ ∅, then assume it contains activity *a*<sub>k</sub> which will divide the set of activities into ones that all finish *before* *s*<sub>k</sub> and ones that all start *after* *f*<sub>k</sub>. Thus we can write the recursion as 

> ![image](images/lecture14/actset.png)

and letting *c[0,n+1]* be \|A<sub>0,n+1</sub>\|, i.e. *c* is the maximal number of compatible activities that start *after* *a*<sub>0</sub> and end *before* *a*<sub>n+1</sub>, we can write the previous recursion as

> ![image](images/lecture14/actc.png)

i.e. compute *c[0,n+1]* for each *k* = 1, ..., n and select the max.

We can show optimal substructure using a "cut-and-paste" argument by assuming that if *c[0,n+1]* is optimal, then *c[0,k]* and *c[k,n+1]* must also be optimal (otherwise if we could find subsets with more activities that were still compatible with *a*<sub>k</sub> then it would contradict the assumption that *c[0,n+1]* was optimal).

*Step 3: Compute the maximal set size (bottom-up)*

Substituting *i* for 0 and *j* for *n+1* gives 

> ![image](images/lecture14/actcdyn.png)

Note that *S*<sub>ij</sub> = ∅ for *i* ≥ *j* since otherwise *f*<sub>i</sub> ≤ *s*<sub>j</sub> \< *f*<sub>j</sub> ⇒ *f*<sub>i</sub> \< *f*<sub>j</sub> which is a contradiction for *i* ≥ *j* by the assumption that the activities are in sorted order. Thus *c[i,j] = 0* for *i* ≥ *j*.

Hence, construct an *n+2* x *n+2* table (which is upper triangular) that can be done in polynomial time since clearly for each *c[i,j]* we will examine no more than *n* subproblems giving an upper bound on the worst case of O(*n*<sup>3</sup>).

**BUT WE DON'T NEED TO DO ALL THAT WORK!** Instead at each step we could simply select (*greedily*) the activity that finishes first and is compatible with the previous activities. Intuitively this choice leaves the most time for other future activities.

**Greedy Algorithm Solution**

To use the greedy approach, we must *prove* that the greedy choice produces an optimal solution (although not necessarily the *only* solution).

Consider any non-empty subproblem *S*<sub>ij</sub> with activity *a*<sub>m</sub> having the earliest finishing time, i.e.

> *f*<sub>min</sub> = min{*f*<sub>k</sub> : *a*<sub>k</sub> ∈ *S*<sub>ij</sub>}

then the following two conditions must hold

> 1.  *a*<sub>m</sub> is used in an optimal subset of *S*<sub>ij</sub>
> 2.  *S*<sub>im</sub> = ∅ leaving *S*<sub>mj</sub> as the only subproblem

meaning that the greedy solution produces an optimal solution.

*Proof*

> 1.  Let *A*<sub>ij</sub> be an optimal solution for *S*<sub>ij</sub> and *a*<sub>k</sub> be the first activity in *A*<sub>ij</sub>
>
>     > → If *a*<sub>k</sub> = *a*<sub>m</sub> then the condition holds.
>     >
>     > → If *a*<sub>k</sub> ≠ *a*<sub>m</sub> then construct *A*<sub>ij</sub><sup>'</sup> = *A*<sub>ij</sub> - {*a*<sub>k</sub>} ∪ {*a*<sub>m</sub>}. Since *f*<sub>m</sub> ≤ *f*<sub>k</sub> ⇒ *A*<sub>ij</sub><sup>'</sup> is still optimal.
>
> 2.  If *S*<sub>im</sub> is non-empty ⇒ *a*<sub>k</sub> with
>
>     > *f*<sub>i</sub> ≤ *s*<sub>k</sub> \< *f*<sub>k</sub> ≤ *s*<sub>m</sub>\< *f*<sub>m</sub>
>     >
>     > ⇒ *f*<sub>k</sub> \< *f*<sub>m</sub> which contradicts the assumption that *f*<sub>m</sub> is the minimum finishing time. Thus *S*<sub>im</sub> = ∅.
>
Thus instead of having 2 subproblems each with *n*-*j*-1 choices per problem, we have reduced it to 1 subproblem with 1 choice.

*Algorithm*

Always start by choosing the first activity (since it finishes first), then repeatedly choose the next compatible activity until none remain. The algorithm can be implemented either recursively or iteratively in O(n) time (assuming the activities are sorted by finishing times) since each activity is examined only once.

    GREEDY-ACTIVITY-SELECTOR(s,f,n)
    1  A = {a1}
    2  k = 1
    3  for m = 2 to n
    4     if s[m] ≥ f[k]        // is am in Sk
    5        A = A ∪ {am}       // yes, so choose it
    6        k = m              // and continue from there
    7  return A

**Example**

Consider the following set of activities represented graphically in non-decreasing order of finishing times

> ![image](images/lecture14/actselexample.png)

Using the greedy strategy an optimal solution is {1, 4, 8, 11}. Note another optimal solution not produced by the greedy strategy is {2, 4, 8, 11}.

Greedy Algorithm Properties
===========================

A general procedure for creating a greedy algorithm is:

> 1.  Determine the optimal substructure (like dynamic programming)
> 2.  Derive a recursive solution (like dynamic programming)
> 3.  For every recursion, show *one* of the optimal solutions is the *greedy* one.
> 4.  Demonstrate that by selecting the *greedy* choice, *all* other subproblems are *empty*.
> 5.  Develop a recursive/iterative implementation.

Usually we try to cast the problem such that we only need to consider one subproblem and that the greedy solution to the subproblem is optimal. Then the subproblem along with the greedy choice produces the optimal solution to the original problem.

Dynamic Programming vs. Greedy Algorithms
=========================================

Often seemingly similar problems warrant the use of one or the other approach. For example consider the *knapsack problem*. Suppose a thief wishes to maximize the value of stolen goods subject to the limitation that whatever they take must fit into a fixed size knapsack (or subject to a maximum weight).

**0-1 Problem**

If there are *n* items with value *v*<sub>i</sub> and weight *w*<sub>i</sub> where the *v*<sub>i</sub>'s and *w*<sub>i</sub>'s are integers, find a subset of items with maximum total value for total weight ≤ *W*. This version requires *dynamic programming* to solve since taking the most valuable per pound item may not produce optimal results (if it precludes taking additional items).

**Fractional Problem**

Assume that fractions of items can be taken. This version can utilize a *greedy algorithm* where we simply take as much of the most valuable per pound items until the weight limit is reached.

