module.exports = function (text, k, callback) {
    var i;
    for (i = 0; i <= text.length - k; i++) {
        var kmer = text.substring(i, i + k);
        callback(kmer, i);
    }
};