class Node {
    data;
    parent;
    children;
    constructor(data, parent = null, children = []) {
        this.data = data;
        this.parent = parent;
        this.children = children;
    }
}
export default Node;