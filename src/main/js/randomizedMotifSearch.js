var _ = require("lodash");
var profileOf = require("./profileOf");
var scoreOf = require("./scoreOf");
var profileMostProbableKmer = require("./profileMostProbableKmer");

module.exports = function (Dna, k, t, times) {
    var bestMotifs = [];
    var scoreOfBestMotifs = Number.MAX_VALUE;

    _.times(times, function (n) {
        var motifs = randomizedMotifSearch(Dna, k, t);
        var scoreOfMotifs = scoreOf(motifs, t);
        if (scoreOfMotifs < scoreOfBestMotifs) {
            bestMotifs = motifs;
            scoreOfBestMotifs = scoreOfMotifs;
        }
    });

    return bestMotifs;
};

function randomizedMotifSearch(Dna, k, t) {
    var motifs = randomKmers(Dna, k, t);
    var bestMotifs = motifs;
    var profile;
    var scoreOfBestMotifs = scoreOf(bestMotifs, t);

    while (true) {
        profile = profileOf(motifs, k, true);
        motifs = profileMostProbableKmers(Dna, k, profile);

        var scoreOfMotifs = scoreOf(motifs, t);
        if (scoreOfMotifs < scoreOfBestMotifs) {
            bestMotifs = motifs;
            scoreOfBestMotifs = scoreOfMotifs;
        } else {
            return bestMotifs;
        }
    }
}

function profileMostProbableKmers(Dna, k, profile) {

    return _.map(Dna, function (text) {
        return profileMostProbableKmer(text, k, profile);
    });
}


function randomKmers(Dna, k, t) {
    var result = [];

    _.forEach(Dna, function (text) {
        var randomStart = randomIntFromInterval(0, text.length - k);
        result.push(text.substr(randomStart, k));
    });
    return result;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}