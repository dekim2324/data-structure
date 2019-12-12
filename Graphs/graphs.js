class Graph {
    constructor() {
        this.list = {}
    };

    addVertex(vertex) {
        this.list[vertex] = [];
    };
    addEdge(v1, v2) {
        this.list[v1].push(v2);
        this.list[v2].push(v1);
    };
    removeEdge(v1, v2) {
        this.list[v1] = this.list[v1].filter(node => {
            node !== v2
        });
        this.list[v2] = this.list[v2].filter(node => {
            node !== v1
        });
    };
    removeVertex(vertex) {
        while(this.list[vertex].length) {
            let pop = this.list[vertex].pop();

            this.removeEdge(vertex, pop);
        }
        delete this.list[vertex];
    }
}
//Big O - time complexity
//adjacency  list:
// add vertex: O(1) // add edge: O(1)
// remove vertex: O(n) // remove edge: O(n)