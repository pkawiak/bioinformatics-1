var hammingDistance = require("./hammingDistance");

module.exports = function (pattern, genome, d) {
    var result = [];
    var textLength = genome.length;
    var patternLength = pattern.length;
    var i;

    for (i = 0; i <= textLength - patternLength; i++) {
        var genomePart = genome.substring(i, i + patternLength);
        if (hammingDistance(pattern, genomePart) <= d) {
            result.push(i);
        }

    }

    return result;
};