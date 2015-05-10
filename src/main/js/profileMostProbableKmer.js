var _ = require("lodash");
var everyKmerInText = require("./everyKmerInText");

var profileIndexes = {
    "A": 0,
    "C": 1,
    "G": 2,
    "T": 3
};

function kMerProbability(kmer, profile) {
    var probabilities = _.map(kmer.split(""), function (nucleotide, index) {
        return profile[profileIndexes[nucleotide]][index];
    });
    return _.reduce(probabilities, function (total, n) {
        return total * n;
    });
}

module.exports = function (text, k, profile) {
    var maxProbability = -1;
    var result;
    everyKmerInText(text, k, function (kmer) {
        var probability = kMerProbability(kmer, profile);
        if (probability > maxProbability) {
            maxProbability = probability;
            result = kmer;
        }
    });
    return result;
};