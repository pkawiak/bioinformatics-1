var _ = require("lodash");
var everyKmerInText = require("./everyKmerInText");
var scoreOf = require("./scoreOf");
var profileOf = require("./profileOf");

module.exports = function (Dna, k, t, N, times) {
    var bestMotifs = [];
    var scoreOfBestMotifs = Number.MAX_VALUE;

    _.times(times, function (n) {
        var motifs = gibbsSampler(Dna, k, t, N);
        var scoreOfMotifs = scoreOf(motifs, t);
        if (scoreOfMotifs < scoreOfBestMotifs) {
            bestMotifs = motifs;
            scoreOfBestMotifs = scoreOfMotifs;
        }
    });

    return bestMotifs;
};

function gibbsSampler(Dna, k, t, N) {
    var motifs = randomKmers(Dna, k, t);
    var bestMotifs = motifs;
    var profile;
    var text;
    var scoreOfBestMotifs = scoreOf(bestMotifs, t);
    var j;
    var indexToRemove;
    var profileRandomlyGeneratedKmer;

    for (j = 0; j < N; j++) {

        indexToRemove = randomIntFromInterval(0, t - 1);
        motifs.splice(indexToRemove, 1);
        profile = profileOf(motifs, k, true);
        profileRandomlyGeneratedKmer = generateKmerProfileRandomly(Dna[indexToRemove], k, profile);
        motifs.splice(indexToRemove, 0, profileRandomlyGeneratedKmer);

        var scoreOfMotifs = scoreOf(motifs, t);
        if (scoreOfMotifs < scoreOfBestMotifs) {
            bestMotifs = motifs;
            scoreOfBestMotifs = scoreOfMotifs;
        }
    }
    return bestMotifs;
}

var profileIndexes = {
    "A": 0,
    "C": 1,
    "G": 2,
    "T": 3
};

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

function probabilityOf(pattern, profile) {
    var probabilities = _.map(pattern.split(""), function (nucleotide, index) {
        return profile[profileIndexes[nucleotide]][index];
    });

    return _.reduce(probabilities, function (total, n) {
        return total * n;
    });
}

function generateKmerProfileRandomly(text, k, profile) {
    var probabilities = [];
    var sum = 0;
    var kmers = [];
    everyKmerInText(text, k, function (kmer) {
        kmers.push(kmer);
        probabilities.push(probabilityOf(kmer, profile));
    });
    var probabilitiesSum = _.reduce(probabilities, function (n, total) {
        return total + n;
    });
    probabilities = _.map(probabilities, function (probability) {
        return probability / probabilitiesSum;
    });
    var rand = Math.random();
    for (var i = 0; i < probabilities.length; i++) {
        sum += probabilities[i];
        if (sum >= rand) {
            return kmers[i];
        }
    }
    return kmers[0];
}