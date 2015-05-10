var _ = require("lodash");
var everyKmerInText = require("./everyKmerInText");
var profileMostProbableKmer = require("./profileMostProbableKmer");
var profileOf = require("./profileOf");
var scoreOf = require("./scoreOf");

module.exports = function (Dna, k, t, pseudocounts) {
    var bestMotifs = initBestMotifs(Dna, k);
    var bestMotifsScore = Number.MAX_VALUE;

    everyKmerInText(Dna[0], k, function (motif) {
        var motifs = [motif];
        var j;
        var profile;
        var scoreOfMotifs;
        for (j = 1; j < t; j++) {
            profile = profileOf(motifs, k, pseudocounts);
            motifs.push(profileMostProbableKmer(Dna[j], k, profile));

        }
        scoreOfMotifs = scoreOf(motifs, k);
        if (scoreOfMotifs < bestMotifsScore) {
            bestMotifsScore = scoreOfMotifs;
            bestMotifs = motifs;
        }
    });

    return bestMotifs;

};

function initBestMotifs(Dna, k) {
    return _.map(Dna, function (text) {
        return text.substring(0, k);
    });
}