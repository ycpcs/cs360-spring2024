---
layout: default
title: "Lecture 23: All Pairs Shortest Paths - Floyd-Warshall Algorithm"
---

Bellman-Ford and Dijkstra's algorithms provide a means to find the shortest path from a *given* source. However often we may wish to find the shortest paths between *all pairs* of vertices. One way to accomplish this would be to simply run Bellman-Ford or Dijkstra's algorithm for each vertex in the graph. Thus the run times for these strategies would be (particularly for dense graphs where \|*E*\| ≈ \|*V*\|<sup>2</sup>):

> **Bellman-Ford** - \|*V*\| O(*VE*) ≈ O(*V*<sup>4</sup>)
>
> **Dijkstra** - \|*V*\| O(*V*<sup>2</sup> + *E*) ≈ O(*V*<sup>3</sup>)
>
> > \|*V*\| O(*V* lg *V* + *E*) ≈ O(*V*<sup>2</sup> lg *V* + *VE*)

In the case of dense graphs an often more efficient algorithm (with very low hidden constants) for finding all pairs shortest paths is the *Floyd-Warshall algorithm*.

Floyd-Warshall Algorithm
========================

The Floyd-Warshall algorithm works based on a property of *intermediate* vertices of a shortest path. An *intermediate* vertex for a path *p* = \<*v*<sub>1</sub>, *v*<sub>2</sub>, ..., *v*<sub>j</sub>\> is any vertex other than *v*<sub>1</sub> or *v*<sub>j</sub>.

If the vertices of a graph *G* are indexed by {1, 2, ..., *n*}, then consider a subset of vertices {1, 2, ..., *k*}. Assume *p* is a minimum weight path from vertex *i* to vertex *j* whose intermediate vertices are drawn from the subset {1, 2, ..., *k*}. If we consider vertex *k* on the path then either:

> *k* is **not** an intermediate vertex of *p* (i.e. is not used in the minimum weight path)
>
> > ⇒ all intermediate vertices are in {1, 2, ..., *k*-1}
>
> *k* is an intermediate vertex of *p* (i.e. is used in the minimum weight path)
>
> > ⇒ we can divide *p* at *k* giving two subpaths *p*<sub>1</sub> and *p*<sub>2</sub> giving *v*<sub>i</sub> ↝ *k* ↝ *v*<sub>j</sub>
> >
> > ⇒ by Lemma 24.1 (subpaths of shortest paths are also shortest paths) subpaths *p*<sub>1</sub> and *p*<sub>2</sub> are shortest paths with intermediate vertices in {1, 2, ..., *k*-1}

Thus if we define a quantity *d*<sup>(k)</sup><sub>ij</sub> as the minimum weight of the path from vertex *i* to vertex *j* with intermediate vertices drawn from the set {1, 2, ..., *k*} the above properties give the following recursive solution

> ![image](images/lecture23/FloydWarshRecurse.png)

Thus we can represent the optimal values (when *k* = *n*) in a matrix as

> ![image](images/lecture23/FloydWarshMat.png)

**Algorithm**

Basically the algorithm works by repeatedly exploring paths between every pair using each vertex as an intermediate vertex.

<pre>
	FLOYD-WARSHALL(W)
	1.  n = W.rows
	2.  D<sup>(0)</sup> = W
	3.  Π<sup>(0)</sup> = π<sup>(0)</sup><sub>ij</sub> = NIL if i = j or w<sub>ij</sub> = ∞
	                 = i   if i ≠ j and w<sub>ij</sub> &lt; ∞
	4.  for k = 1 to n
	5.     let D<sup>(k)</sup> = (d<sup>(k)</sup><sub>ij</sub>) be a new <i>n</i> x <i>n</i> matrix
	6.     for i = 1 to n
	7.        for j = 1 to n
	8.           d<sup>k</sup><sub>ij</sub> = min(d<sup>(k-1)</sup><sub>ij</sub>, d<sup>(k-1)</sup><sub>ik</sub> + d<sup>(k-1)</sup><sub>kj</sub>)
	9.           if d<sup>(k-1)</sup><sub>ij</sub> &le; d<sup>(k-1)</sup><sub>ik</sub> + d<sup>(k-1)</sup><sub>kj</sub>
	10.             π<sup>(k)</sup><sub>ij</sub> = π<sup>(k-1)</sup><sub>ij</sub>
	11.          else
	12.             π<sup>(k)</sup><sub>ij</sub> = π<sup>(k-1)</sup><sub>kj</sub>
	13. return D<sup>(n)</sup>
</pre>

Since Floyd-Warshall is simply three (tight) nested loops, the run time is clearly O(*V*<sup>3</sup>).

**Example**

Using the same directed graph from [lecture 22](lecture22.html) and [lecture 23](lecture23.html)

> ![image](images/lecture23/FloydWarshexample.png)

*Initialization*: (*k* = 0)

> ![image](images/lecture23/FloydWarshexample1.png)

*Iteration 1*: (*k* = 1) Shorter paths from 2 ↝ 3 and 2 ↝ 4 are found through vertex 1

> ![image](images/lecture23/FloydWarshexample2.png)

*Iteration 2*: (*k* = 2) Shorter paths from 4 ↝ 1, 5 ↝ 1, and 5 ↝ 3 are found through vertex 2

> ![image](images/lecture23/FloydWarshexample3.png)

*Iteration 3*: (*k* = 3) No shorter paths are found through vertex 3

> ![image](images/lecture23/FloydWarshexample4.png)

*Iteration 4*: (*k* = 4) Shorter paths from 1 ↝ 2, 1 ↝ 3, 2 ↝ 3, 3 ↝ 1, 3 ↝ 2, 5 ↝ 1, 5 ↝ 2, 5 ↝ 3, and 5 ↝ 4 are found through vertex 4

> ![image](images/lecture23/FloydWarshexample5.png)

*Iteration 5*: (*k* = 5) No shorter paths are found through vertex 5

> ![image](images/lecture23/FloydWarshexample6.png)

The final shortest paths for all pairs is given by

> ![image](images/lecture23/FloydWarshexample7.png)

**Transitive Closure**

Floyd-Warshall can be used to determine whether or not a graph has *transitive closure*, i.e. whether or not there are paths between all vertices.

> -   Assign all edges in the graph to have weight = 1
> -   Run Floyd-Warshall
> -   Check if *all* *d*<sub>ij</sub> \< *n*

This procedure can implement a slightly more efficient algorithm through the use of logical operators rather than min() and +.

Johnson's Algorithm
===================

While Floyd-Warshall is efficient for dense graphs, if the graph is sparse then an alternative all pairs shortest path strategy known as *Johnson's algorithm* can be used. This algorithm basically uses Bellman-Ford to detect any negative weight cycles and then employs the technique of *reweighting* the edges to allow Dijkstra's algorithm to find the shortest paths. This algorithm can be made to run in O(*V*<sup>2</sup> lg *V* + *VE*).

