var expect = require("expect.js");

var medianString = require("../../main/js/medianString");

describe("Median String Spec", function () {

    var k;
    var dnaStrings;

    it("should process short text", function () {
        //given
        k = 3;
        dnaStrings = [
            "AAATTGACGCAT",
            "GACGACCACGTT",
            "CGTCAGCGCCTG",
            "GCTGAGCACCGG",
            "AGTTCGGGACAG"
        ];

        //when
        //then
        expect(medianString(k, dnaStrings)).to.be("GAC");
    });

    it("should process extra dataset", function () {
        //given
        k = 6;
        dnaStrings = [
            "TGATGATAACGTGACGGGACTCAGCGGCGATGAAGGATGAGT",
            "CAGCGACAGACAATTTCAATAATATCCGCGGTAAGCGGCGTA",
            "TGCAGAGGTTGGTAACGCCGGCGACTCGGAGAGCTTTTCGCT",
            "TTTGTCATGAACTCAGATACCATAGAGCACCGGCGAGACTCA",
            "ACTGGGACTTCACATTAGGTTGAACCGCGAGCCAGGTGGGTG",
            "TTGCGGACGGGATACTCAATAACTAAGGTAGTTCAGCTGCGA",
            "TGGGAGGACACACATTTTCTTACCTCTTCCCAGCGAGATGGC",
            "GAAAAAACCTATAAAGTCCACTCTTTGCGGCGGCGAGCCATA",
            "CCACGTCCGTTACTCCGTCGCCGTCAGCGATAATGGGATGAG",
            "CCAAAGCTGCGAAATAACCATACTCTGCTCAGGAGCCCGATG"
        ];

        //when
        //then
        expect(medianString(k, dnaStrings)).to.be("CGGCGA");
    });

    it("should process data challenge", function () {
        //given
        k = 6;
        dnaStrings = [
            "AAAATCATCATCAACGAAGCAGAATGCAGACATCGCGGAGGA",
            "TCGAGTGAGGCCTGTTCAAATCCAAAAACCGCGCGGAGGAGA",
            "TATTTTAAACCGTCCAGATGCTTAGAAAAAACAGGAAAAAGC",
            "CACCACAAAACCGATATCTTTCGAGACATTAGCGCAGTGCAG",
            "AACTAACAGCCTAGTAATTCGTTCCCAAACAAAAACCTCGCA",

            "GCTGGTAGGAGGTGGTTTACAGGTAACTCATGCGTAAAAACC",
            "GGTTCATGAGATCTCCCGCTTGCCAAAAGCTAGTATGTCCTA",
            "GGTTAGAAAACCAAAACGCGCGAGGTAAGGAGCCTCCTAGCA",
            "GAGCACAAACCCAAAAACTCGGTAAGTTAGGCTGAATTGTGG",
            "GCGGTTAAAACCTCCTTATCCAGTTTGCTTGAGCGAGAGGTG"
        ];

        //when
        //then
        expect(medianString(k, dnaStrings)).to.be("AAAACC");
    });
});