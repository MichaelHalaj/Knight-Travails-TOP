class Node {
    data;
    parent;
    children;
    constructor(data, parent = null) {
        this.data = data;
        this.parent = parent;
    }
}
export default Node;