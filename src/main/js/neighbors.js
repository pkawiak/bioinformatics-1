var _ = require("lodash");

var hammingDistance = require("./hammingDistance");
var nucleotides = ["A", "C", "T", "G"];

var neighbors = function (pattern, d) {
    if (d === 0) {
        return [pattern];
    }

    if (pattern.length === 1) {
        return nucleotides;
    }

    var neighborhood = [];
    var suffixPattern = pattern.substring(1);
    var suffixNeighbors = neighbors(suffixPattern, d);

    _.forEach(suffixNeighbors, function (suffixNeighbor) {
        if (hammingDistance(suffixPattern, suffixNeighbor) < d) {
            _.forEach(nucleotides, function (nucleotide) {
                neighborhood.push(nucleotide + suffixNeighbor)
            });
        } else {
            neighborhood.push(pattern[0] + suffixNeighbor)
        }
    });

    return neighborhood;
};
module.exports = neighbors;