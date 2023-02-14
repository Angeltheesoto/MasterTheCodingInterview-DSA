// Graphs:

// Ways to create a graph:
// Edge List
// const graph = [
//   [0, 2],
//   [2, 3],
//   [2, 1],
//   [1, 3],
// ];
// Adjacent List
// const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];
// Adjacent Matrix
// const graph3 = [
//   [0, 0, 1, 0],
//   [0, 0, 1, 1],
//   [1, 1, 0, 1],
//   [0, 1, 1, 0],
// ];

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertext(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes += 1;
    } else {
      console.log(node, ": This node already exists.");
    }
  }

  addEdge(node1, node2) {
    // undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    this.numberOfNodes += 1;
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertext;
      for (vertext of nodeConnections) {
        connections += vertext + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertext("0");
myGraph.addVertext("1");
myGraph.addVertext("2");
myGraph.addVertext("3");
myGraph.addVertext("4");
myGraph.addVertext("5");
myGraph.addVertext("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
// Answer:
// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6
// 6 --> 5
