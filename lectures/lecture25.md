---
layout: default
title: "Lecture 25: Maximal Flow - Ford-Fulkerson Algorithm"
---

Last lecture provided the framework for maximum flow problems and proved the key theorem - max-flow min-cut - that all algorithms are based on. This lecture we will investigate an algorithm for computing maximal flows known as *Ford-Fulkerson*.

Ford-Fulkerson Algorithm
========================

The *Ford-Fulkerson algorithm* builds upon the general strategy presented last time.

<pre>
	1  for each edge (u,v) ∈ G.E
	2     (u,v).f = 0
	3  while there exists a path p from s to t in the residual network G<sub>f</sub>
	4     c<sub>f</sub>(p) = min{ c<sub>f</sub>(u,v) : (u,v) is in p}
	5     for each edge (u,v) in p
	6        if (u,v) ∈ G.E
	7           (u,v).f = (u,v).f + c<sub>f</sub>(p)
	8        else (v,u).f = (v,u).f - c<sub>f</sub>(p)
	9  return f
</pre>

This algorithm runs efficiently as long as the value of the maximal flow \|*f* <sup>\*</sup>\| is reasonably small or if poor augmenting paths are avoided.

Edmonds-Karp Algorithm
======================

An extension that improves upon the basic Ford-Fulkerson method is the *Edmonds-Karp algorithm*. This algorithm finds the augmenting path using BFS ignoring the residual capacities. Thus BFS finds a *shortest path* (in terms of number of edges) to use as the augmenting path. With this modification, it can be shown that Edmonds-Karp runs in O(*VE*<sup>2</sup>).

**Example**

Consider the following flow network

> ![image](images/lecture25/MaxFlowexample.png)

Initially we will remove the anti-parallel edges between vertices 1 and 2 by adding an intermediate vertex 1' and edges with the same capacities, i.e. *c*(1,1') = *c*(1',2) = *c*(1,2) = 8.

> ![image](images/lecture25/MaxFlowexampleMod.png)

Note that clearly \|*f* <sup>\*</sup>\| ≤ 29 (the smaller of the capacities leaving the source or entering the sink).

*Iteration 1:* Choose the augmenting path *p*<sub>1</sub> = \< *s*, 1, *t* \> which has *c*<sub>f</sub>(*p*<sub>1</sub>) = 5 (due to *c*(1,*t*)) giving \|*f*\| = 5 and the residual network

> ![image](images/lecture25/MaxFlowexample1.png)

(note the addition of edges (1,*s*) and (*t*,1) with *c*<sub>f</sub> = 5).

*Iteration 2:* Choose the augmenting path *p*<sub>2</sub> = \< *s*, 1, 3, *t* \> which has *c*<sub>f</sub>(*p*<sub>2</sub>) = 7 (due to *c*(1,3)) giving \|*f*\| = 12 and the residual network

> ![image](images/lecture25/MaxFlowexample2.png)

*Iteration 3:* Choose the augmenting path *p*<sub>3</sub> = \< *s*, 2, 3, *t* \> which has *c*<sub>f</sub>(*p*<sub>3</sub>) = 6 (due to *c*(2,3)) giving \|*f*\| = 18 and the residual network

> ![image](images/lecture25/MaxFlowexample3.png)

*Iteration 4:* Choose the augmenting path *p*<sub>4</sub> = \< *s*, 2, 4, *t* \> which has *c*<sub>f</sub>(*p*<sub>4</sub>) = 9 (due to *c*(*s*,2)) giving \|*f*\| = 27 and the residual network

> ![image](images/lecture25/MaxFlowexample4.png)

*Iteration 5:* Choose the augmenting path *p*<sub>5</sub> = \< *s*, 1, 1', 2, 4, *t* \> which has *c*<sub>f</sub>(*p*<sub>5</sub>) = 1 (due to *c*(2,4)) giving \|*f*\| = 28 and the residual network

> ![image](images/lecture25/MaxFlowexample5.png)

At this point there are no other augmenting paths. Hence the final flow network with a min-cut shown is

> ![image](images/lecture25/MaxFlowexampleCut.png)

with maximal flow \|*f* <sup>\*</sup>\| = 28.

**Note** As we admit flow along an edge (*u*,*v*), we add or increase flow along the reverse edge (*v*,*u*), i.e. the flow provides capacity for that edge.

Consider the following example

> ![image](images/lecture25/MaxFlowBack.png)

Clearly we can see that the max flow is \|*f* <sup>\*</sup>\| = 2 since we could follow paths across the top (*p*<sub>1</sub> = \< *s*, 1, 2, *t* \>) and bottom (*p*<sub>2</sub> = \< *s*, 3, 4, *t* \>) of the graph. 

*Iteration 1:* However, consider the following alternative initial augmenting path *p*<sub>1</sub> = \< *s*, 1, 4, *t* \> (which is valid since it also contains only 3 edges) which has *c*<sub>f</sub>(*p*<sub>1</sub>) = 1 giving the residual network

> ![image](images/lecture25/MaxFlowBack1.png)
  
Notice that without the reverse edges, there is no augmenting path from *s* to *t*. However, because admitting flow produces capacity along the reversed edge (*4*, *1*), the residual graph contains augmenting path *p*<sub>2</sub> = \< *s*, 3, 4, 1, 2, *t* \> which also has *c*<sub>f</sub>(*p*<sub>1</sub>) = 1 giving the residual network

> ![image](images/lecture25/MaxFlowBack2.png)

Note this second augmenting path essentially restores the capacity in the original edge (*1*, *4*).
