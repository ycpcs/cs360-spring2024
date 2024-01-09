---
layout: default
title: "Lecture 5: Master Theorem"
---

Since divide and conquer algorithms occur quite frequently and produce recursive equations for their run times, it is important to be able to solve recursive equations. Last lecture we "solved" the recurrence equation for merge sort using a method known as a *recursion tree*. While this method can in theory always be used, it is often cumbersome. For problems that have a fixed number of identical sized recursive pieces there is a much simpler method known as the *master theorem* that can be used to solve certain recursive equations almost "by inspection".

Master Theorem
==============

The master theorem can be employed to solve recursive equations of the form

> **T(n) = aT(n/b) + f(n)**

where *a* ≥ 1, *b* \> 1, and *f(n)* is *asymptotically positive*. Intuitively for divide and conquer algorithms, this equation represents dividing the problem up into *a* subproblems of size *n/b* with a combine time of *f(n)*. For example, for merge sort *a* = 2, *b* = 2, and *f(n)* = Θ(*n*). Note that floors and ceilings for *n/b* do not affect the asymptotic behavior or the results derived using the theorem.

If the recursion is in the form shown above, then the recurrence can be solved depending on one of three cases (which relate the dominance of the recursive term to the combine term):

**Case 1** (recursion dominates)

If there exists a **constant** ε \> 0 such that

> **f(n) = O(n<sup>log<sub>b</sub>a - ε</sup>)**

then the solution to the recurrence is given by

> **T(n) = Θ(n<sup>log<sub>b</sub>a</sup>)**

In this case, *f(n)* is *polynomially bounded* above by *n<sup>log<sub>b</sub>a</sup>* (which represents the run time of the recursive term), i.e. the recursive term dominates the run time.

**Case 2** (recursion and combine are "equal")

If there exists a **constant** k ≥ 0 such that

> **f(n) = Θ(n<sup>log<sub>b</sub>a</sup> lg<sup>k</sup> n)**

then the solution to the recurrence is given by

> **T(n) = Θ(n<sup>log<sub>b</sub>a</sup> lg<sup>k+1</sup> n)**

In this case, *f(n)* is *polynomially equal* to *n<sup>log<sub>b</sub>a</sup>*, i.e. neither term dominates thus the extra term to get the bound.

**Case 3** (combine dominates)

If there exists a **constant** ε \> 0 such that

> **f(n) = Ω(n<sup>log<sub>b</sub>a + ε</sup>)**

**AND** if *a f(n/b)* ≤ *c f(n)* for some **constant** *c* \< 1 and all *sufficiently large n* (this additional constraint is known as the *regularity condition*), then the solution to the recurrence is given by

> **T(n) = Θ(f(n))**

In this case, *f(n)* is *polynomially bounded* below by *n<sup>log<sub>b</sub>a</sup>* (which represents the run time of the recursive term) with the additional regularity condition, i.e. the combine term dominates the run time.

Thus in all three cases it is important to compute the *recursive term run time* *n<sup>log<sub>b</sub>a</sup>* and compare it *asymptotically* to the *combine term run time f(n)* to determine which case holds. Often both of these terms are *polynomials*, thus it is simply a matter of comparing the *exponents* (since all polynomials are bounded by their highest order term). If the recursive equation satifies either case 1 or case 2, the solution can then be written by inspection. If the recursive equation satisfies case 3, then the regularity condition must be verified in order to write down the solution.

Note: There are gaps between the cases where the theorem cannot be applied (as well as recursive equations that **do not** fit the form required by the theorem **exactly**). In these cases, other techniques must be used which will not be covered in this course (refer to [Lecture 6](lecture06.html) for details).

Procedure
=========

To apply the master theorem, the following procedure can be applied. Given the recursive equation 

> **T(n) = aT(n/b) + f(n)**

1. Convert any asymptotic bounds for *f(n)* to functional notation by selecting a constant for the bound, e.g. **Θ(n<sup>2</sup>) &rArr; cn<sup>2</sup>**
2. Identify **a**, **b**, and **f(n)**
3. Compute **n<sup>log<sub>b</sub>a</sup>**
4. Compare **f(n)** with **n<sup>log<sub>b</sub>a</sup>** to determine the proper case and write the solution to the recursive equation
    - **Case 1** (*f(n) "<" n<sup>log<sub>b</sub>a</sup>*)**:** Give an ε to show **f(n) = O(n<sup>log<sub>b</sub>a - ε</sup>)**, then give the solution **T(n) = Θ(n<sup>log<sub>b</sub>a</sup>)**
    - **Case 2** (*f(n) "≈" n<sup>log<sub>b</sub>a</sup>*)**:** Show **f(n) = Θ(n<sup>log<sub>b</sub>a</sup>)**, then give the solution **T(n) = Θ(n<sup>log<sub>b</sub>a</sup> lg n)**
    - **Case 3** (*f(n) ">" n<sup>log<sub>b</sub>a</sup>*)**:** Give an ε to show **f(n) = Ω(n<sup>log<sub>b</sub>a + ε</sup>)**, **AND** show **af(n/b) ≤ cf(n)** for some *c < 1*, then give the solution **T(n) = Θ(f(n))**

Examples
========

**Example 1**

Solve the recursive equation

> **T(n) = 9T(n/3) + n**

> **1.** *f(n) = n* does not contain any asymptotic bounds that need conversion
>
> **2.** For this equation
> 
> > **a = 9**
>
> > **b = 3**
>
> > **f(n) = n**
>
> Intuitively this equation would represent an algorithm that divides the original inputs into nine groups each consisting of a third of the elements and takes linear time to combine the results. 
>
> **3.** Computing
>
> > **n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>3</sub>9</sup> = n<sup>2</sup>**
> 
> **4.** We see that *f(n) = n "<" n<sup>2</sup>* so we try to show *Case 1*, i.e.
>
>> **f(n) = n = O(n<sup>log<sub>b</sub>a - ε</sup>) = O(n<sup>2 - ε</sup>)**
>
> which is satisfied for any ε ≤ 1, e.g. choose ε = 1 giving *n = O(n<sup>2 - 1</sup>) = O(n)*. Hence the equation satisfies *Case 1* so we can give the solution as
>
> > **T(n) = Θ(n<sup>log<sub>b</sub>a</sup>) = Θ(n<sup>2</sup>)**

**Example 2**

Solve the recursive equation

> **T(n) = T(2n/3) + Θ(1)**

> **1.** *f(n) = Θ(1)* hence we convert the asymptotic bound to *f(n) = c*
>
> **2.** For this equation
> 
> > **a = 1**
>
> > **b = 3/2** (note *b* is the *denominator* of *n/(3/2)*)
>
> > **f(n) = c**
>
> Intuitively this equation would represent an algorithm that only uses two thirds of the elements at each step and takes constant time to combine the results. 
>
> **3.** Computing
>
> > **n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>3/2</sub>1</sup> = n<sup>0</sup> = 1**
> 
> **4.** We see that *f(n) = c "≈" 1* so we try to show *Case 2*, i.e.
>
>> **f(n) = c = Θ(n<sup>log<sub>b</sub>a</sup>) = Θ(1)**
>
> which is satisfied. Hence the equation satisfies *Case 2* so we can give the solution as
>
> > **T(n) = Θ(n<sup>log<sub>b</sub>a</sup> lg n) = Θ(1 lg n) = Θ(lg n)**

**Example 3**

Solve the recursive equation

> **T(n) = 3T(n/4) + 2nlgn**

> **1.** *f(n) = 2nlgn* does not contain any asymptotic bounds that need conversion
>
> **2.** For this equation
> 
> > **a = 3**
>
> > **b = 4**
>
> > **f(n) = 2nlgn**
>
> Intuitively this equation would represent an algorithm that divides the original inputs into three groups each consisting of a quarter of the elements and takes linearlog time to combine the results.
>
> **3.** Computing
>
> > **n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>4</sub>3</sup> ≈ n<sup>0.79</sup>**
> 
> **4.** We see that *f(n) = 2nlgn ">" n<sup>0.79</sup>* so we try to show *Case 3*, i.e.
>
> > **f(n) = 2nlgn = Ω(n<sup>log<sub>b</sub>a + ε</sup>) = Ω(n<sup>0.79 + ε</sup>)**
>
> which (since *2nlgn = Ω(n)*) is satisfied for any ε ≤ 0.21, e.g. choose ε = 0.2 giving *2nlgn = Ω(n<sup>0.79 + 0.2</sup>) = Ω(n<sup>0.99</sup>)*. Hence the equation **might** satisfies *Case 3* if we can show the regularity condition
>
> **af(n/b) ≤ cf(n)** for *c < 1*
>
> Thus
>
> > **a f(n/b) = 3·2(n/4)lg(n/4) = (3/4)·2nlg(n/4) ≤ (3/4)·2nlgn = (3/4)f(n)**
>
> Thus regularity holds by choosing *c = 3/4* (which is \< 1). So we can give the solution as
>
> > **T(n) = Θ(f(n)) = Θ(2nlgn) = Θ(nlgn)**

**Example 4**

Solve the recursive equation

> **T(n) = 2T(n/2) + nlgn**

> **1.** *f(n) = nlgn* does not contain any asymptotic bounds that need conversion
>
> **2.** For this equation
> 
> > **a = 2**
>
> > **b = 2**
>
> > **f(n) = nlgn**
>
> Intuitively this equation would represent an algorithm that divides the original inputs into two groups each consisting of half of the elements and takes linearlog time to combine the results. 
>
> **3.** Computing
>
> > **n<sup>log<sub>b</sub>a</sup> = n<sup>log<sub>2</sub>2</sup> = n<sup>1</sup> = n**
> 
> **4.** We see that *f(n) = nlgn "=" n lg<sup>1</sup>n* so we can use *Case 2* where *k=1*
>
> > **f(n) = Θ(n<sup>log<sub>b</sub>a</sup> lg<sup>1</sup>n)** 
>
> then the solution to the recurrence is given by
>
> > **T(n) = Θ(n<sup>log<sub>b</sub>a</sup> lg<sup>k+1</sup>n)**
>
> So we can give the solution as
>
> > **T(n) = Θ(n<sup>log<sub>b</sub>a</sup> lg<sup>k+1</sup>n) = Θ(n lg<sup>2</sup>n)**