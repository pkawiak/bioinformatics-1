var expect = require("expect.js");

var approximateFrequentPatterns = require("../../main/js/approximateFrequentPatterns");

describe("Approximate Frequent Patterns Spec", function () {

    var genome;
    var k;
    var d;

    it("should process short genome", function () {
        //given
        genome = "ACGTTGCATGTCGCATGATGCATGAGAGCT";
        k = 4;
        d = 1;

        //when
        //then
        expect(approximateFrequentPatterns(genome, k, d).join(" ")).to.eql("GATG ATGT ATGC");
    });

    it("Should process data challenge", function () {
        //given
        genome = "AGGAAGTACCTACCTGCTACCTACCCGGACGGACGGATGCTACCAGGAGGTACCAAGAGGTGCAGGCGGATACCTACCTACCTGCTGCTGCTACCTGCAAGAGGTACCTACCAGGAAGAGGAAGCGGAAAGAAGTGCTACCTGCAGGTGCAGGAGGAAGTGCAGGCGGACGGATGCTGCCGGATACCAAGAGGTACCTACCCGGAAAGTACCCGGATACCTACCTACCCGGAAGGCGGAAGGAGGCGGATACCAGGCGGAAGGTGCTACCAAGTGCCGGATGCTGCCGGATGCTACCTGCAAGCGGATACCAAGCGGA";
        k = 6;
        d = 3;
        expect(approximateFrequentPatterns(genome, k, d)).to.eql(["GGGGGG"]);
    });

    it("should process short genome (with reverse complements))", function () {
        //given
        genome = "ACGTTGCATGTCGCATGATGCATGAGAGCT";
        k = 4;
        d = 1;

        //when
        //then
        expect(approximateFrequentPatterns(genome, k, d, true).join(" ")).to.eql("ATGT ACAT");
    });

    it("should process data challenge (with reverse complements))", function () {
        //given
        genome = "AGATAAGAGTGTAGAGTGTGTAGACCAGAAGAGTAGATAAGAACCAGAGTCCTATAGTTAGTACCTAAGATAAGATAGTGTGTCCAGAAGACCGTAGACCACCCCCCGTTAACCTAACCCCAGAACCCCACCACCCCCCTAAGACCCCAGATAAGACCAGAAGAGTTACCGTACCAGAGTAGAGTAGAACCCCAGATAACCGTTAACCTATAACCGTAGA";
        k = 6;
        d = 2;

        //when
        //then
        expect(approximateFrequentPatterns(genome, k, d, true).join(" ")).to.eql("TCTAGA GGGTTT AAACCC");
    });

});