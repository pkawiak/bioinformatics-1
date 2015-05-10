var _ = require("lodash");

module.exports = function (genomePart, otherGenomePart) {

    var result = 0;

    if (genomePart.length !== otherGenomePart.length) {
        throw new Error("To compute Hamming distance both genome parts have to be of equal length.");
    }

    var genomePartSplit = genomePart.split("");
    var otherGenomePartSplit = otherGenomePart.split("");

    _.forEach(genomePartSplit, function (nucleotide, index) {
        if (nucleotide !== otherGenomePartSplit[index]) {
            result++;
        }
    });

    return result;
};