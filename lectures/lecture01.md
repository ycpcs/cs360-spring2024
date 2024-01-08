---
layout: default
title: "Lecture 1: Welcome To Introduction to Algorithms!"
---

**CS/ACC/PE 360** - Analysis of Algorithms, "Beancounting for Techies"

Accounting - Down to the penny - with "misc"

Algorithms - Asymptotic bounds - O(n)

**Algorithm** - "a well defined computational procedure that takes ... input and produces ... output."

Analysis Issues
===============

> 1.  **WHAT DATA STRUCTURES TO USE!** (lists, queues, stacks, heaps, trees, etc.)
> 2.  **IS IT CORRECT!** (all or only most of the time?)
> 3.  **HOW EFFICIENT IS IT!** (asymptotically fixed or does it depend on the inputs?)
> 4.  **IS THERE AN EFFICIENT ALGORITHM!!** - P ≟ NP

Many practical problems can be cast as mathematical ones, i.e. graphs, linear programming, string matching, etc.

Algorithmic analysis is primarily about *proving* that a procedure is correct and then *counting* the number of operations required for the procedure to execute, i.e. finding the *run-time*. In this class we will use mathematical "proofs" to find *asymptotic bounds* ignoring numerous factors that get lumped into "hidden constants", but in real situations other overhead would ultimately want to be considered such as:

> -   runtime overhead - such as memory management, function calls, etc.
> -   additional auxilarly storage requirements
> -   hardware functionality - such as parallel architectures

Pseudocode Conventions
======================

We will be using pseudocode for our algorithm implementations and will follow the conventions described in Chapter 2 of the textbook (CLRS) with the important ones summarized here.

> -   *Indentation* will indicate block structures (similar to Python)
> -   *Loops* (**for**, **while**) and *decisions* (**if/else**) follow standard C++/Java conventions, i.e. the loop counter retains its value that caused the loop to terminate (useful when proving the correctness of an algorithm)
> -   **//** indicates *comments*
> -   **=** indicates *assignment* (and can be used for multiple assignment)
> -   Variables are *local* to the procedure in which they are used
> -   Array elements are accessed with *bracketed indices* as in C++/Java, e.g. A[i]
> -   The notation ".." is used to indicate a (inclusive) *subarray*, e.g. A[i..j] indicates the elements \<A[i],A[i+1], ..., A[j]\>
> -   Object *attributes* and *methods* are accessed using the standard "." notation, e.g. A.length
> -   Object names are treated as *pointers*, thus B = A creates an *alias* **NOT** a copy
> -   Variables are passed *by value*, except for objects and arrays which are passed *by reference*.
> -   *Multiple values* may be returned in a **return** statement
> -   Boolean expressions are *short circuiting*, i.e. are evaluated left to right only until the value of the expression is known

