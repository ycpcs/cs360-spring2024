---
layout: default
title: "Assignment 5"
---

**Due: Wed, Apr 3rd in class** Late assignments will be penalized 20% per day.

Book Questions from *Introduction to Algorithms - 4th ed.*
==========================================================

20.1-1, 20.2-7 (10 points), 20.4-3, 20.5-2

Give a short 1-2 sentence description of your final project topic along with at least one reference. (5 points)

*Hints:*

> 20.1-1 - Consider constructing an array of length \|V\|, initializing the elements to zero, and then traversing the adjacency lists incrementing the appropriate elements of the array for either in or out degree. Be sure to account for *all* steps in your runtime analysis.
>
> 20.2-7 - Create a graph where wrestlers are vertices and rivalries are edges (note the asymptotic runtime of building the graph). Then consider the number of edges between a source and all reachable vertices, and use this to label the vertices as "babyfaces" and "heels". Finally, consider how to check to determine if a valid assignment is possible. Be sure to account for the asymptotic runtime of *all* steps to determine the final asymptotic runtime of the entire algorithm. Note: This is the problem of determining whether or not a graph is *bipartite*.
>
> 20.4-3 - By Lemma 22.11 we know that a DAG is acyclic if and only if a DFS produces no back edges. However DFS runs in O(V+E) but the question wants an O(V) run time. Note that the graphs for this problem are *undirected* and that for undirected *acyclic* graphs \|E\| ≤ \|V\| - 1 (by Theorem B.2.5 on page 1174). Consider under what conditions a *cycle* can be detected and the maximum number of edges that would need to be evaluated in each condition.
>
> 20.5-2 - Be sure to show the DFS results for the first pass, the list of vertices sorted by *decreasing* finishing times, the DFS results for G<sup>T</sup>, and the final strongly connected components.

