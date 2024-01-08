---
layout: default
title: "Lecture 26: NP Completeness"
---

So far in this class we have been concerned with problems that are solvable in *polynomial time*, i.e. the run-time can be bounded by O(*n*<sup>k</sup>) for some constant *k*. We have also seen how dynamic programming can be applied to certain problems to reduce a brute force exponential solution to polynomial time. However there is another interesting class of problems that to this point are not solvable in polynomial time, i.e. we can do no better than brute force. This class of problems is intuitively known as *NP-hard* which are problems that any problem in *NP* can be reduced to (but are not necessarily in *NP*). Furthermore, in this class there are certain problems that are themselves in *NP* and thus are the "hardest" problems in the class *NP* which are known as *NP-complete*. We will only discuss an intuitive understanding of these problems as the formalism is beyond the scope of this course.

Computability
=============

Often we assume that all (well-posed) problems are computable, even if not efficiently. However in 1936 Alan Turing **proved** a problem that is *uncomputable* known as the *Halting Problem*.

**Halting Problem**

Given a description of an algorithm and an initial input, determine whether or not the program halts when executed on the input.

*Proof*

Let **halt**(*a*, *i*) be an algorithm that decides whether or not program *a* halts on input *i*. Then construct the following function:

    trouble(s)
       if halt(s,s) = false
          return true
       else
          infinite loop

Let *t* be the representation of **trouble()** and evaluate **trouble**(*t*), i.e. run trouble on itself. Since **trouble()** is a function, it must either halt or not given any input. Assume **trouble**(*t*) halts

> Since it halts, it must have entered the **if** branch ⇒ **halt**(*t*, *t*) = false. But that occurs if **trouble**(*t*) *does not halt* which **contradicts** the assumption.

Therefore the assumption must be incorrect so **trouble**(*t*) must run forever.

> Since it does not halt, it must have entered the **else** branch ⇒ **halt**(*t*. *t*) = true. But that occurs if **trouble**(*t*) *halts* which **contradicts** the assumption.

Thus in either case we reach a contradiction which means that **halt()** **CANNOT EXIST**, i.e. there is no algorithm that can determine whether or not any algorithm will halt or not on a given input. Note this does **not** mean that there cannot be algorithms that can detect infinite loops, only that a *general* one that works for *all* algorithms and inputs is impossible.

NP Completeness
===============

Complexity theory is a field that investigates the run-time of *decision problems*, i.e. problems that return true/false as the answer. While many of the problems we have looked at are *optimization problems* (e.g. *minimum* spanning trees, *shortest* paths, *maximal flow*, etc.), optimization problems can be recast as decision problems by simply asking "is the value of the solution \< *k* for some constant *k*?" Foregoing problems that are uncomputable, we would like to classify computable problems into "tractable" (i.e. *efficiently* solvable) and "intractable" (i.e. *inefficiently* solvable).

**Set P**

We will formalize this notion by defining a set *P* of problems as ones that can be *solved* in *polynomial time*. By this we mean that the run-time of the algorithms is upper-bounded by O(*n*<sup>k</sup>) for a *constant* k (or at least independent of *n*) even if *k* is very large. In this class we have only analyzed problems ∈ *P*. If a problem is in *P* we say it is *tractable* by which we mean has an efficient algorithm to solve it.

**Set NP**

The set of problems that can be *verified* in *polynomial time*, i.e. given a solution we can check that it is correct in polynomial time, is the class *NP* (non-deterministic polynomial time problems). Clearly *P* ⊆ *NP* (since if we can solve it in polynomial time we can certainly verify a given solution in polynomial time). For many problems in this class (known as *NP-hard* problems), however, no efficient solutions have been found *so far*. It is postulated that for some of them, no polynomial time solution exists and thus they are ∉ *P*. If this can be proven, it would mean that *P* ≠ *NP* and there exist problems that we can do no better than to brute force.

**NP Completeness, P = NP**

Within *NP-hard* class, we define a subset of problems that are the "hardest" ones which are known as *NP-complete* problems. These are the problems to which all other problems in *NP* can be *reduced* (i.e. recast into) in polynomial time. Thus if we can find a solution to **ONE** *NP*-complete problem, we can solve **ALL** *NP*-complete problems (which means all *NP* problems). If this solution is polynomial, then we will have proven that *P* = *NP*, i.e. all problems (in *NP*) have efficient solutions.

The question of whether or not *P* = *NP* is one of the fundamental questions in CS and is the basis of much graduate level research. The "proof" would simply consist of finding **ONE** polynomial time solution to **ANY** *NP*-complete problem.

First *NP*-complete Problem
===========================

While the definitions for the categories of problems is easily understood, the remaining question is

> **Are there any NP-complete problems?**

The answer (suprisingly) is **YES**. One problem proven to be *NP*-complete is known as *circuit satisfiability*.

**Problem**

Given a circuit consisting of Boolean **AND**, **OR**, and **NOT** two input logic gates (**NOT** only has a single input). A circuit is then simply a set of gates with a particular interconnectivity of outputs of certain gates to inputs of subsequent ones (without creating any cycles). Any wire that does not originate from the output of a gate is known as a *circuit input* and any wire that does not terminate at the input of a gate is known as a *circuit output*. We will limit the number of outputs to 1, i.e. the entire circuit returns a *decision* value of 0/1.

The circuit is said to be *satisfiable* if there is an assignment of the inputs that produces a 1 at the output (i.e. outputs **TRUE**). If we assume the size of the circuit *n* is the number of gates in the circuit plus the number of wires, then the problem of determining a set of input values that *satisfies* the circuit can be shown to be *NP*-complete.

*Sketch of Proof*

Clearly we see that the problem is in *NP* since given a particular set of inputs we can compute the result of the circuit in polynomial time. The difficulty is showing that **ANY** problem in *NP* can be represented as a *circuit satisfiability* problem. This is shown by considering any computable algorithm can be represented by a logical circuit that can be encoded into a state machine on a general purpose computer. The operation of the algorithm simply transitions between states in the computer. At some point, one of the bits in the computer will represent the output of the algorithm and thus any algorithm can be reduced to a *circuit satisfiability* problem (in polynomial time).

Problems in *P* and *NP*
========================

Many seemingly similar problems often are in different classes. One version has a polynomial time solution and is thus in *P*, while only a minor modification to the description makes the variant *NP*-complete. For example

> **P** | **NP** |
> ----- | ------ |
> 2-CNF                                 | 3-CNF                                         |
> *Shortest* simple path                | *Longest* simple path                         |
> *Euler* tour (touch each *edge* once) | *Hamiltonian* tour (touch each *vertex* once) |



