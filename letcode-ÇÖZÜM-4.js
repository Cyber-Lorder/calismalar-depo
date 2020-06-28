var sumNumbers = function(root) {
    var total = 0;

    if(root === null){
        return total;
    }
    
    var queue = [];
    queue.push(root);
    
    while(queue.length !== 0){
        var node = queue.shift();
        
        if(node.left === null && node.right === null){
            total += parseInt(node.val);
        }
        
        if(node.left){
            node.left.val = '' + node.val + node.left.val;
            queue.push(node.left);
        }
        if(node.right){
            node.right.val = '' + node.val + node.right.val;
            queue.push(node.right);
        }
    }
    
    return total;
};