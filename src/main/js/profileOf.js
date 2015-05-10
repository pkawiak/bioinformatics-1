var _ = require("lodash");

module.exports = function (motifs, motifLength, pseudocounts) {
    var initialCount = pseudocounts ? 1 : 0;
    var profile = [
        [],
        [],
        [],
        []
    ];
    var motifsSize = motifs.length;

    for (var i = 0; i < motifLength; i++) {
        var nucleotidesCount = {
            "A": initialCount,
            "C": initialCount,
            "G": initialCount,
            "T": initialCount
        };
        _.forEach(motifs, function (motif) {
            nucleotidesCount[motif[i]]++;
        });
        profile[0].push(nucleotidesCount["A"] / motifsSize);
        profile[1].push(nucleotidesCount["C"] / motifsSize);
        profile[2].push(nucleotidesCount["G"] / motifsSize);
        profile[3].push(nucleotidesCount["T"] / motifsSize);
    }
    return profile;
};