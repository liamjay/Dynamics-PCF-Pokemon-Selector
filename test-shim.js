global.requestAnimatationFrame = function(callback) {
    setTimeout(callback, 0);
};