// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new DoubleTopic("Lecture 1: Intro to Algorithms", "lectures/lecture01.html","Card Sorting App","lectures/Sorter.jar"),
		reading: "Ch. 1",
	},
	{
		topic: new TripleTopic("Lecture 2: Insertion Sort", "lectures/lecture02.html", "Insertion Sort Pseudocode", "handouts/lecture02-insertalg.pdf", "Sort Visualization", "http://math.hws.edu/eck/js/sorting/xSortLab.html"),
		reading: "Ch. 2.1&ndash;2.2",
	},
	{
		topic: new Topic("Lecture 2: Insertion Sort cont.", "lectures/lecture02.html"),
		reading: "Ch. 2.1&ndash;2.2",
	},
	{
		topic: new Topic("Lecture 2b: Empirical Analysis", "lectures/lecture02b.html"),
		reading: "Ch. 3",
	},
	{
		topic: new DoubleTopic("Lecture 3: Asymptotic Notation", "lectures/lecture03.html", "Assignment 1 Due", "assign/assign01.html"),
		reading: "Ch. 3",
	},
	{
		topic: new DoubleTopic("Lecture 4: Merge Sort", "lectures/lecture04.html", "Merge Sort Pseudocode", "handouts/lecture04-mergealg.pdf"),
		reading: "Ch. 2.3",
	},
	{
		topic: new DoubleTopic("Lecture 5: Master Theorem", "lectures/lecture05.html", "Master Theorem Reference", "handouts/lecture05-masterref.pdf"),
		reading: "Ch. 4.5",
	},
	{
		topic: new Topic("Lecture 5: Master Theorem cont.", "lectures/lecture05.html"),
		reading: "Ch. 4.5",
	},
	{
		topic: new DoubleTopic("Exam 1 Review", "", "Assignment 2 Due", "assign/assign02.html"),
		reading: "",
	},
	{
		topic: new Topic("** Exam 1 - Takehome Due Wed Feb 21", "")
	},
	{
		topic: new DoubleTopic("Lecture 7: Heapsort", "lectures/lecture07.html", "Heap Sort Pseudocode", "handouts/lecture07-heapalg.pdf"),
		reading: "Ch. 6",
	},
	{
		topic: new DoubleTopic("Lecture 8: Quicksort", "lectures/lecture08.html", "Quick Sort Pseudocode", "handouts/lecture08-quickalg.pdf"),
		reading: "Ch. 7",
	},
	{
		topic: new DoubleTopic("Lecture 9: Linear Sorting", "lectures/lecture09.html", "Counting Sort Pseudocode", "handouts/lecture09-countalg.pdf"),
		reading: "Ch. 8",
	},
//	{
//		topic: new Topic("Lecture 9: Linear Sorting cont.", "lectures/lecture09.html"),
//		reading: "Ch. 8",
//	},
	{
		topic: new DoubleTopic("Lecture 12: Dynamic Programming - Rod Cutting", "lectures/lecture12.html", "Rod Cutting Pseudocode", "handouts/lecture12-rodcutalg.pdf"),
		reading: "Ch. 15",
	},
	{
		topic: new Topic("Empirical Report Workday", ""),
		reading: "",
	},
	{
		topic: new DoubleTopic("Exam 2 Review", "", "Assignment 3 Due", "assign/assign03.html"),
		reading: "",
	},
	{
		topic: new Topic("** Exam 2 - Takehome Due Mon Mar 11", "")
	},
	{
		topic: new DoubleTopic("Lecture 12: Dynamic Programming - Rod Cutting cont.", "lectures/lecture12.html", "Rod Cutting Example", "handouts/lecture12-rodcutex.pdf"),
		reading: "Ch. 15",
	},
	{
		topic: new TripleTopic("Lecture 13: Dynamic Programming - LCS", "lectures/lecture13.html", "LCS Pseudocode", "handouts/lecture13-LCSalg.pdf", "LCS Example", "handouts/lecture13-LCSex.pdf"),
		reading: "Ch. 15",
	},
	{
		topic: new DoubleTopic("LCS Practice Activity", "handouts/lecture13-LCS-Ex2.pdf", "LCS Solution", "handouts/lecture13-LCS-Ex2Sol.pdf"),
		reading: "Ch. 15",
	},
	{
		topic: new TripleTopic("Lecture 14: Greedy Algorithms - Activity Selection", "lectures/lecture14.html", "Greedy Activity Selection Pseudocode", "handouts/lecture14-actselalg.pdf", "Activity Selection Example", "handouts/lecture14-actselex.pdf"),
		reading: "Ch. 16",
	},
	{
		topic: new DoubleTopic("Lecture 15: Graph Theory", "lectures/lecture15.html", "Empirical Comparison Report Due - Mon Mar 18", "assign/emp_comp.html"),
		reading: "Appendix B.4",
	},
	{
		topic: new FiveTopic("Lecture 16: Breadth-First Search", "lectures/lecture16.html", "BFS Pseudocode", "handouts/lecture16-bfsalg.pdf", "BFS Example", "handouts/lecture16-bfsex.pdf", "BFS Practice Activity", "handouts/lecture16-bfsact.pdf", "BFS Solution", "handouts/lecture16-bfsact-sol.pdf"),
		reading: "Ch. 22.2",
	},
	{
		topic: new SixTopic("Lecture 17: Depth-First Search", "lectures/lecture17.html", "DFS Pseudocode", "handouts/lecture17-dfsalg.pdf", "DFS Example", "handouts/lecture17-dfsex.pdf", "DFS Practice Activity", "handouts/lecture17-dfsact.pdf", "DFS Solution", "handouts/lecture17-dfsact-sol.pdf", "Assignment 4 Due", "assign/assign04.html"),
		reading: "Ch. 22.3"
	},
	{
		topic: new SixTopic("Lecture 18: DFS Applications", "lectures/lecture18.html", "DFS Application Examples", "handouts/lecture18-dfsappex.pdf", "Topological Sort Practice Activity", "handouts/lecture18-topsortact.pdf", "Top Sort Solution", "handouts/lecture18-topsortact-sol.pdf", "SCCD Practice Activity", "handouts/lecture18-sccex.pdf", "SCCD Solution", "handouts/lecture18-sccex-sol.pdf"),
		reading: "Ch. 22.4&ndash;22.5",
	},
	{
		topic: new DoubleTopic("Exam 3 Review", "", "Assignment 5 Due", "assign/assign05.html"),
		reading: "",
	},
	{
		topic: new Topic("** Exam 3 - Takehome Due Wed Apr 5", "")
	},
	{
		topic: new FiveTopic("Lecture 19: Minimum Spanning Trees - Kruskal", "lectures/lecture19.html", "Kruskal Pseudocode", "handouts/lecture19-Kruskalalg.pdf", "Kruskal Example", "handouts/lecture19-Kruskalex.pdf", "Kruskal Practice Activity", "handouts/lecture19-Kruskalact.pdf", "Kruskal Solution", "handouts/lecture19-Kruskalactsol.pdf"),
		reading: "Ch. 23.1",
	},
	{
		topic: new FiveTopic("Lecture 20: Minimum Spanning Trees - Prim", "lectures/lecture20.html", "Prim Pseudocode", "handouts/lecture20-Primalg.pdf", "Prim Example", "handouts/lecture20-Primex.pdf","Prim Practice Activity", "handouts/lecture20-Primact.pdf", "Prim Solution", "handouts/lecture20-Primactsol.pdf"),
		reading: "Ch. 23.2",
	},
	{
		topic: new TripleTopic("Lecture 21: Shortest Path - Bellman-Ford", "lectures/lecture21.html", "Bellman-Ford Pseudocode", "handouts/lecture21-BellmanFordalg.pdf", "Bellman-Ford Example", "handouts/lecture21-BellmanFordex.pdf"),
		reading: "Ch. 24.1&ndash;24.2",
	},
	{
		topic: new SixTopic("Lecture 22: Shortest Path - Dijkstra", "lectures/lecture22.html", "Dijkstra Pseudocode", "handouts/lecture22-Dijkstraalg.pdf", "Dijkstra Example", "handouts/lecture22-Dijkstraex.pdf", "Lecture 23: Shortest Path - Floyd-Warshall", "lectures/lecture23.html", "SSSP Practice Activity", "handouts/lecture22-ssspact.pdf", "SSSP Solution", "handouts/lecture22-ssspactsol.pdf"),
		reading: "Ch. 24.3",
	},
	{
		topic: new Topic("Lecture 24: Maximal Flow", "lectures/lecture24.html", "Assignment 6 Due", "assign/assign06.html"),
		reading: "Ch. 26.1",
	},
	{
		topic: new SixTopic("Lecture 25: Maximal Flow- Ford-Fulkerson", "lectures/lecture25.html", "Ford-Fulkerson Pseudocode", "handouts/lecture25-FordFulkersonalg.pdf", "Ford-Fulkerson (Edmonds-Karp) Example", "handouts/lecture25-FordFulkersonex.pdf", "Max Flow Practice Activity", "handouts/lecture25-maxflowact.pdf", "Max Flow Solution", "handouts/lecture25-maxflowactsol.pdf", "Assignment 6 Due", "assign/assign06.html"),
		reading: "Ch. 26.2",
	},
	{
		topic: new Topic("Lecture 26: NP Completeness", "lectures/lecture26.html"),
		reading: "Ch. 34.1&ndash;34.3",
	},
	{
		topic: new DoubleTopic("Lecture 27: NP Complete Problems", "lectures/lecture27.html", "Clique Example", "handouts/lecture27-cliqueblank.pdf"),
		reading: "Ch. 34.4",
	},
	{
		topic: new DoubleTopic("Exam 4 Review", "", "Assignment 7 Due", "assign/assign07.html"),
		reading: "",
	},
	{
		topic: new Topic("** Exam 4 - Takehome Due Fri May 5", "")
	},
	{
		topic: new DoubleTopic("Lecture 28: More NP Complete Problems", "lectures/lecture28.html", "Vertex Cover and TSP Example", "handouts/lecture28-VerCovTSPex.pdf"),
		reading: "Ch. 34.4",
	},
	{
		topic: new TripleTopic("Lecture 29: Approximation Algorithms", "lectures/lecture29.html", "Approx Vertex Cover Example", "handouts/lecture29-appvertcoverblank.pdf", "Approx TSP Example", "handouts/lecture29-approxTSPblank.pdf"),
		reading: "Ch. 35.1-35.2",
	},
	{
		topic: new Topic("Wrapup", ""),
		reading: "",
	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("102", new Date("05/06/2022 08:00:00")),
		new FinalExamDay("101", new Date("05/08/2022 08:00:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
