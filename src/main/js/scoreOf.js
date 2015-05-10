var _ = require("lodash");

module.exports = function (motifs, motifLength) {
    var scores = [];

    for (var i = 0; i < motifLength; i++) {
        var nucleotidesCount = {
            "A": 0,
            "C": 0,
            "G": 0,
            "T": 0
        };
        _.forEach(motifs, function (motif) {
            nucleotidesCount[motif[i]]++;
        });

        var iScores = _.sortBy([nucleotidesCount["A"], nucleotidesCount["C"], nucleotidesCount["G"], nucleotidesCount["T"]]);
        var iScore = iScores[0] + iScores[1] + iScores[2];
        scores.push(iScore);
    }
    return _.reduce(scores, function (total, n) {
        return total + n;
    });
};