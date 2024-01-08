---
layout: default
title: "Lecture 3: Asymptotic Notation"
---

In [lecture 2](lecture02.html) we performed a detailed analysis of insertion sort only to end up discarding most of the work by only keeping the highest order term. In [lecture 2b](lecture2b.html) we implemented psueudocode and added counters to empirically measure the runtime for different input sizes to get an estimate of the *constant* for the highest order term. We intuitively described the *asymptotic growth* of a function based on the *input size*, i.e. for "sufficiently large" values of *n*. Formal mathematical notation can be used to both rigorously define the asymptotic behavior for a particular algorithm as well as serve as a mechanism to *compare* algorithms. Thus typically the asymptotic behavior is used to describe the *efficiency* of an algorithm without requiring computation of the exact run time.

We will want to find either or both an asymptotic *lower bound* and *upper bound* for the growth of our function. The *lower bound* represents the *best case* growth of the algorithm while the *upper bound* represents the *worst case* growth of the algorithm.

O() - ("Big O")
===============

As discussed in the previous lecture, often we are most concerned about the *worst case* behavior of an algorithm. Thus we define an *asymptotic upper bound* (although not necessarily tight) for a function *f(n)* denoted O() as follows: Given two functions *f(n)* and *g(n)*

> ![image](images/lecture03/bigO.png)

Thus O() describes how bad our algorithm can grow, i.e. is no worse than. Note: Often it is enough to find a loose upper bound to show that a given algorithm is better than (or at least no worse than) another.

𝛀() - ("Big Omega")
===================

We can similarly define an *asymptotic lower bound* (again not necessarily tight and often not particularly useful) for a function *f(n)* denoted ω() as follows: Given two functions *f(n)* and *g(n)*

> ![image](images/lecture03/bigOmega.png)

Thus ω() describes how good our algorithm can be, i.e. is no better than. For this bound to be meaningful, it is often best to find a tight lower bound.

Θ() - ("Big Theta")
===================

Finally we can define an *asymptotically tight bound* for a function *f(n)* denoted Θ() as follows: Given two functions *f(n)* and *g(n)* both *asymptotically non-negative*

> ![image](images/lecture03/bigTheta.png)

This notation indicates that *g(n)* is both a *lower bound* (best case) and *upper bound* (worst case) for *f(n)*, thus the algorithm has a consistent growth independent of the particular input set.

Theorem
=======

For any two functions *f(n)* and *g(n)*

> ![image](images/lecture03/theorem.png)

Intuitively, the theorem simply states that a function is an asymptotically tight bound if and only if it is both an upper and lower bound.

Examples
========

**Example 1**

Show

> ![image](images/lecture03/example1.png)

*Solution*

We need to find *constants* *c*<sub>1</sub>, *c*<sub>2</sub>, *n*<sub>0</sub>\> 0 such that

> ![image](images/lecture03/sol1a.png)

Dividing through by *n*<sup>2</sup> (which is valid since *n*\>0) gives

> ![image](images/lecture03/sol1b.png)

*Lower Bound*

Consider the *lower bound*, i.e.

> ![image](images/lecture03/sol1c.png)

If we let *n*<sub>0</sub> = 12, then the right hand side becomes

> ![image](images/lecture03/sol1d.png)

and for *any* *n* \> 12

> ![image](images/lecture03/sol1e.png)

Hence we can choose *c*<sub>1</sub> ≤ 1/4 (e.g. *c*<sub>1</sub> = 1/8) and *n*<sub>0</sub> = 12 to satisfy the lower bound since

> ![image](images/lecture03/sol1f.png)

Therefore

> ![image](images/lecture03/sol1g.png)

Note: **ANY** combination of *c*<sub>1</sub> and *n*<sub>0</sub> that satisfy the lower bound may be used, but whichever ones are chosen must be **constant** values.

*Upper Bound*

Consider the *upper bound*, i.e.

> ![image](images/lecture03/sol1h.png)

Again we use a similar procedure to the lower bound but with **the same** *n*<sub>0</sub> = 12 (or any *n*<sub>0</sub> \> 12 since the lower bound holds for any *n* \> 12), then the left hand side becomes

> ![image](images/lecture03/sol1i.png)

for *any* *n* \> 12.

Hence we can choose *c*<sub>2</sub> ≥ 1/2 (e.g. *c*<sub>2</sub> = 1) and *n*<sub>0</sub> = 12 to satisfy the upper bound since

> ![image](images/lecture03/sol1j.png)

Note: Again we may choose **ANY** *c*<sub>2</sub> that satisfies the upper bound with the *same* *n*<sub>0</sub> as the lower bound, but whichever one is chosen must be a **constant** value.

**Example 2**

Determine if

> ![image](images/lecture03/example2.png)

*Solution*

As before, we need to find *constants* *c*<sub>1</sub>, *c*<sub>2</sub>, *n*<sub>0</sub>\> 0 such that

> ![image](images/lecture03/sol2a.png)

Dividing through by *n*<sup>2</sup> (which is valid since *n*\>0) gives

> ![image](images/lecture03/sol2b.png)

*Lower Bound*

Consider the *lower bound*, i.e.

> ![image](images/lecture03/sol2c.png)

Clearly this lower bound can be satisfied for *c*<sub>1</sub> = 1 and *n*<sub>0</sub> = 1

Therefore

> ![image](images/lecture03/sol2d.png)

*Upper Bound*

Unfortunately we cannot find any **constant** *c*<sub>2</sub> that satisfies

> ![image](images/lecture03/sol2e.png)

*for all* *n* (much less *n* ≥ *n*<sub>0</sub>). Therefore

> ![image](images/lecture03/sol2f.png)

Hence by the theorem

> ![image](images/lecture03/sol2g.png)

o() - ("Little O")
==================

A weaker (non-asymptotically tight) upper bound that is often useful and easier to determine is defined for two functions *f(n)* and *g(n)* as

> ![image](images/lecture03/littleO.png)

This upper bound can be shown by the following limit

> ![image](images/lecture03/littleOlim.png)

For example, it can easily be shown that

> ![image](images/lecture03/sol3a.png)

since

> ![image](images/lecture03/sol3b.png)

However

> ![image](images/lecture03/sol3c.png)

since

> ![image](images/lecture03/sol3d.png)

ω() - "Little Omega"
====================

A corresponding weaker (non-asymptotically tight) lower bound is defined for two functions *f(n)* and *g(n)* as

> ![image](images/lecture03/littleOmega.png)

This lower bound can also be shown by the following limit

> ![image](images/lecture03/littleOmegalim.png)

For example, it can easily be shown that

> ![image](images/lecture03/sol4a.png)

since

> ![image](images/lecture03/sol4b.png)

However

> ![image](images/lecture03/sol4c.png)

since

> ![image](images/lecture03/sol4d.png)

Summary
=======

Intuitively, asymptotic notation can be thought of as "relational operators" for functions similar to the corresponding relational operators for values

> = ⇒ Θ()
>
> ≤ ⇒ O()
>
> ≥ ⇒ Ω()
>
> \< ⇒ o()
>
> \> ⇒ ω()

Review properties of exponentials (pg. 55 of CLRS), logarithms (pg. 56 of CLRS), and summations (Appendix A of CLRS).

