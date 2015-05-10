var _ = require("lodash");
var hammingDistance = require("./hammingDistance");

module.exports = function (pattern, dna) {
    var k = pattern.length;
    var distance = 0;

    _.forEach(dna, function (text) {
        var i;
        var hammingDistances = [];
        for (i = 0; i <= text.length - k; i++) {
            var kmer = text.substring(i, i + k);
            hammingDistances.push(hammingDistance(kmer, pattern))
        }
        distance += _.min(hammingDistances);
    });

    return distance;
};