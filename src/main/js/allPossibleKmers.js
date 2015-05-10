var _ = require("lodash");

var nucleotides = ["A", "C", "G", "T"];


function allPossibleKmersRecursive(k) {
    if (k === 1) {
        return nucleotides;
    } else {
        var result = [];
        var allKmers = allPossibleKmersRecursive(k - 1);

        _.forEach(nucleotides, function (nucleotide) {
            _.forEach(allKmers, function (kmer) {
                result.push(nucleotide + kmer);
            })
        });
        return result;
    }
}


module.exports = allPossibleKmersRecursive;