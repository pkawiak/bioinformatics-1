var expect = require("expect.js");

var reverseComplement = require("../../main/js/reverseComplement");

describe("Reverse Complement Spec", function () {

    var text;

    it("should process short text", function () {
        //given
        text = "AAAACCCGGT";

        //when
        //then
        expect(reverseComplement(text)).to.be("ACCGGGTTTT");
    });

    it("should process extra dataset", function () {
        //given
        text = "GCACTAAAGCACCAGCGAGACTAGACAGTGCCTTACGCTGTATAGGGATAAAAGTTGTCAAGATGACTTGCGGGAATCGTTAGGCTGACACGCACTAATGCTCGCCTTCCGGGTGTTCTGTGAGTACGGTTGATCACGGTCGCCCTGCGGATGTACTACCATGAAAGTTGATCACGTGCCGCGCGCTCCCTAAGCTTAGAAGTTTGCACAATCTGCATTCTATCCTGCCACGCCTTCAATAATAAGTGGTGTATGCAATTTGGAGTCGATCTGGGAACCAACGATTAACTTGGGAAGTGGCTATATCAAAATACGATGTCTTCAGCGTCGCGGTCGACGCTGCGCAACGAACGAAAAGTCCGATGGACCCGAACTCTGATTATACCGAATCTCCGCTTTTACGACTCGCCACATACCGGCATAAGCCATTCTGGGGCTTTGCCCCCTTAGGTCTAGCCCACCCCCGACCTAGCTTGAGCGTGTCACACCCCAACAGCCGCATTACGCCCGCTCACCGACACTTGGCGGTCGTATAAGAAATCCAAAACCGAGACGAAAACTGAAGAATAAGGTTCATTCAGCATTGTGGAGTTGACAACATCAGTATGAGGGTGAGTTGCGTCAAAGTCGAAGAATATGGAGGGTCAAATCACGAGATGTAACATCCACGCGAACACTTAGCTAGTAATCATTTTTCCGTAAAGAGTCGTTGAGTCCGACCAGTTGAAGCTCAGTGTTTATCCGGTAGGGAATTGTAGGATCAACGATAGGGTCGCGGAACCGCCGTATTATAGAAAGAGATAGTCCCAACGTTCTTTATGCACTTCGCTGAGAGAGGGTGACCGGGCACGCAGAGACTTTGGCTTTGTAGCCCCATTCCGCGGCTCTTCGGATACTGACTGAGCTGTAGTCGGCACATCCTTTACAACAAAAAAGCTCATGTCCGAGATTTTAATGGCGGCGCACGGTCACTCGGAGTTGACGAATGCGCAGCGAATCGTTGGTTCCAGATAAAGGCAAGGCTGTGTTACTGTTTCGGAGGGCAATCGTCAACGAGCAAAGATGTTAGAATAGAAATCGGAGCGAGGCTCCCAGCAAATATGAGTTAGGATCTTTTTTGCGAAAGGGTTGGTCTCCATCTCCTCTCGCCTGCGAGCGAGTCCCCGAAGCACGTTCAACCTATTTGATTCGGTGCAGGACACCCTAGATTAGCATACAGGTATAATATCAGGAAGAGTCACCTTTCATTCCCGACCAGTAGGATGTATAGGAATGAGACTATCCAGTTCTTTGTCAGCTCAAGACAGCGTTGGCAATACGGCCGAGTATTGGGGGGAATACCCCGGAACATAGTATTGTGCCTTAGCTATTGCCCTAGATACCACGCGGCCCTTGAGCATTTGTCTACACTTTGGTGATCCTAGGCACCCCGCGCTCGTGGCAACGTCAGCATCTTGTGATAGCAAAGCGTATGTACCTGTAATGTAACATCAAAGTATATCGGCACCCTAGTGGGGGCGAAGGTTGGATCGCTTATCACTCGGGACGACGGTGGTATCCAGCCACAGTGTTGCTCATTAACGACCACACAGCTCTTGGAATCGAGCCATGGACAGGGGACGCCCCAGGATACATGATGTTCCTGTGAGCACAAGCACTATGGCAGGCTTAGAGCTAATTCTTCCATTGGGCCGGTAAGACGCCAGAGAAAGTCACCGGTGTGAGAAAGGGTTTCGTGTGGGGGAGGCGTCAAACAACAAGGATTTACGTCGAACCGATCAGCCCTTGTCTGATTCATTCCAGGTTTAAGCGAGCCCTGGCGGTGACCTCCCGGGGATTCTTGGTGACGATAAGTGTAGACTGGTTTATGACTGTCTATAAGTGCAAGCAGTCCGCGACTCGGCCGCTCCTCAGATCTCGTCCTCCCAATCCTTACGAGGCACTATTCCGGCCCTAAAAACTTACCTACCAACCGGACATAGCGAACGGTCTAAGTTTTCGGAAATTGAATAACACTCGAACAAAGGAGCCCAATACATGGCACAAGCACACATAAAGCTTGGCGCTGCTGACGGCCGGCCCCCACAGCAGGTGGGTATATCAGGATAATGCTCTACCTCCTCGGGGATGACCAGAGACGAACGTTCGGACGCTATTAGTTAGTGGTCGCCCAGATATTCTCCTAATCAAGCCCTCGAAGGCTAGTCTAAATTTTAGCAAAAACTCGTATAGCAGCACATGCGGTAGACTGGGCCTCAGCCAGGTAGAGCTGTGGCTGCACTCGAGCAATCACTACCGTATAGAGTGGTGTTATTTCGGGGTGAATGTCAGGGGTGGTCCAAAATCACAAACACGTCTATTCGCACCCGGGAATGCTCATGTTCCCACGGCGGGCCTGTACAGATGTGAGAGGCAGCGATCATACAAAGTTGCCTGGCCTCCCCACGAACACACGGCGGCCCATTAGGTCTGAACAGGTTTATCGTTAATATATTTTGCGGTGG";

        //when
        //then
        expect(reverseComplement(text)).to.be("CCACCGCAAAATATATTAACGATAAACCTGTTCAGACCTAATGGGCCGCCGTGTGTTCGTGGGGAGGCCAGGCAACTTTGTATGATCGCTGCCTCTCACATCTGTACAGGCCCGCCGTGGGAACATGAGCATTCCCGGGTGCGAATAGACGTGTTTGTGATTTTGGACCACCCCTGACATTCACCCCGAAATAACACCACTCTATACGGTAGTGATTGCTCGAGTGCAGCCACAGCTCTACCTGGCTGAGGCCCAGTCTACCGCATGTGCTGCTATACGAGTTTTTGCTAAAATTTAGACTAGCCTTCGAGGGCTTGATTAGGAGAATATCTGGGCGACCACTAACTAATAGCGTCCGAACGTTCGTCTCTGGTCATCCCCGAGGAGGTAGAGCATTATCCTGATATACCCACCTGCTGTGGGGGCCGGCCGTCAGCAGCGCCAAGCTTTATGTGTGCTTGTGCCATGTATTGGGCTCCTTTGTTCGAGTGTTATTCAATTTCCGAAAACTTAGACCGTTCGCTATGTCCGGTTGGTAGGTAAGTTTTTAGGGCCGGAATAGTGCCTCGTAAGGATTGGGAGGACGAGATCTGAGGAGCGGCCGAGTCGCGGACTGCTTGCACTTATAGACAGTCATAAACCAGTCTACACTTATCGTCACCAAGAATCCCCGGGAGGTCACCGCCAGGGCTCGCTTAAACCTGGAATGAATCAGACAAGGGCTGATCGGTTCGACGTAAATCCTTGTTGTTTGACGCCTCCCCCACACGAAACCCTTTCTCACACCGGTGACTTTCTCTGGCGTCTTACCGGCCCAATGGAAGAATTAGCTCTAAGCCTGCCATAGTGCTTGTGCTCACAGGAACATCATGTATCCTGGGGCGTCCCCTGTCCATGGCTCGATTCCAAGAGCTGTGTGGTCGTTAATGAGCAACACTGTGGCTGGATACCACCGTCGTCCCGAGTGATAAGCGATCCAACCTTCGCCCCCACTAGGGTGCCGATATACTTTGATGTTACATTACAGGTACATACGCTTTGCTATCACAAGATGCTGACGTTGCCACGAGCGCGGGGTGCCTAGGATCACCAAAGTGTAGACAAATGCTCAAGGGCCGCGTGGTATCTAGGGCAATAGCTAAGGCACAATACTATGTTCCGGGGTATTCCCCCCAATACTCGGCCGTATTGCCAACGCTGTCTTGAGCTGACAAAGAACTGGATAGTCTCATTCCTATACATCCTACTGGTCGGGAATGAAAGGTGACTCTTCCTGATATTATACCTGTATGCTAATCTAGGGTGTCCTGCACCGAATCAAATAGGTTGAACGTGCTTCGGGGACTCGCTCGCAGGCGAGAGGAGATGGAGACCAACCCTTTCGCAAAAAAGATCCTAACTCATATTTGCTGGGAGCCTCGCTCCGATTTCTATTCTAACATCTTTGCTCGTTGACGATTGCCCTCCGAAACAGTAACACAGCCTTGCCTTTATCTGGAACCAACGATTCGCTGCGCATTCGTCAACTCCGAGTGACCGTGCGCCGCCATTAAAATCTCGGACATGAGCTTTTTTGTTGTAAAGGATGTGCCGACTACAGCTCAGTCAGTATCCGAAGAGCCGCGGAATGGGGCTACAAAGCCAAAGTCTCTGCGTGCCCGGTCACCCTCTCTCAGCGAAGTGCATAAAGAACGTTGGGACTATCTCTTTCTATAATACGGCGGTTCCGCGACCCTATCGTTGATCCTACAATTCCCTACCGGATAAACACTGAGCTTCAACTGGTCGGACTCAACGACTCTTTACGGAAAAATGATTACTAGCTAAGTGTTCGCGTGGATGTTACATCTCGTGATTTGACCCTCCATATTCTTCGACTTTGACGCAACTCACCCTCATACTGATGTTGTCAACTCCACAATGCTGAATGAACCTTATTCTTCAGTTTTCGTCTCGGTTTTGGATTTCTTATACGACCGCCAAGTGTCGGTGAGCGGGCGTAATGCGGCTGTTGGGGTGTGACACGCTCAAGCTAGGTCGGGGGTGGGCTAGACCTAAGGGGGCAAAGCCCCAGAATGGCTTATGCCGGTATGTGGCGAGTCGTAAAAGCGGAGATTCGGTATAATCAGAGTTCGGGTCCATCGGACTTTTCGTTCGTTGCGCAGCGTCGACCGCGACGCTGAAGACATCGTATTTTGATATAGCCACTTCCCAAGTTAATCGTTGGTTCCCAGATCGACTCCAAATTGCATACACCACTTATTATTGAAGGCGTGGCAGGATAGAATGCAGATTGTGCAAACTTCTAAGCTTAGGGAGCGCGCGGCACGTGATCAACTTTCATGGTAGTACATCCGCAGGGCGACCGTGATCAACCGTACTCACAGAACACCCGGAAGGCGAGCATTAGTGCGTGTCAGCCTAACGATTCCCGCAAGTCATCTTGACAACTTTTATCCCTATACAGCGTAAGGCACTGTCTAGTCTCGCTGGTGCTTTAGTGC");
    });

    it("should process data challenge", function () {
        //given
        text = "GCCACTATTACACGACGGCGCAACGACCAGCTGTATCCGAGAGGCCTCGACACGGATGATACGAATGTGACTATGTACCATTCGATTGCCGTAGGCCATGATATGTACAGTGCGTACTCCCAGGTGGCCGTAGGAGAGGACGTATCGCGACACGACGTAATACACGCCTCCGAATACAAGTTGATATCTTCCACATTTCAAAAAAGAAGCGTTAAGCTCTCAAGTTTTCCCTAACGCAACCCCCGGGACTCTTGTAATTGTTGGAGAACCCATACAGTAGGAATAGCGGTATCCGTAACGTAAAACCCGTTTCCTTTTAGGTCTCGCATGCTCAAACTACTAGAAGGATAGATAGCCCCTCGTAGACTATAGGATCTTAAGTACAGCGCGAGCCGCCCTTGAAGGACCTACTCTTTCATTGAATGCTGGCGAAATGGCTGAACAAAGGAGTGCAGGCCAGTAACATGGCATCGCTGATAGAATTACTTCCGAAAGCGTAAGTTGCCTTTTTGGGTCGGGGGGGATGGACGTGTTCCTAATGCCTAAGGAACTGGTCAGTCCAAAGAGTCAGAATTACCCAAAGTATGCCTCATGACCTTTGGGGTCGGCTAAGCGTCAGTCGATAGCCGCCGAAAAGTCCGCGGAGTACGCGATATTCTTCGGTATCCCGCCACCGTGTACGATGAAACAGTACTATATTCACGTTCTTGATTTTCCAAGACACCTAGCTGAGGATTTGATTAGCGTCCACATGCGGCCGTCTTTTAATGGTCGATCCCTTCGCCATAGTTCTGTATCTGTTGCAGGTTAGACAGTGCTACTTGCGTTAGTTATCCCATGTGCGTGCCCGGTGCCAGAGGCACCTCATTTGCTCTCTACATCTGGTTACCACAGGCCGGTTGTCCTGCGGGTCGTGGCCATTTACAAAAATAACCTCATGCATCCCACAAGTCCATCTATATCGAGGGTCGAGATCTGAGTTAGGCTCGCTCGGGTGTAGCTGTACACTCTCTGCAGGGACCCATCCTTAGTCATCCTTTGTGGCACGCATATCGTGGGCATGATGAGACGGGGCCCTCCTCACTGAAAATAATCTGAAGACTTGTCGTTAGCAAGTGAGGAGCCGCTACTTTTCGTATACGCCCGCCAGCAAGGCGTTTGGCTAGTACCGTTATCGGTTGAGAACTGGTCTCTATGTGTCGTTTGGAGTCGATACACCAGGAGAGCTCACATGGTTCCTCTCCTTATGCGCGGAAGCCATCTATTGATCATGTTAGACATTAGTAGTTAGTCCATAGGGTGCTTCACATAACTTATCAGGTATACAGCATACGAGGAACGCGAAGATCGCGCCCGTACAAAAATAGGTTGTAGCAATCAACTCCTGTTTTATCATCCCTTCAACTAGTGCTAAAAGTAGATTTCACTGGCTCAGGAAACAGTATGCATCTGCGGTGTAGTCATGTTACGGTTCGTACTATCAATCAAATTCTCTGACTACATCCTGAGGTCCTCATCTTGAAGGTCAGCTAAGATACAGCTCGTAAGGGTGGAAACGTTACTTATTGAGTACTTAGGAGATAAACCAGCCTCAGGCGCAAAGTAGAACCAAACGGGGACCGACCGATAAGATAGCTCCGCTATTGCCCACGAAACCCAACTCCGGAGGATGAGAAATAGACTGCTCCTCGACTTTATGCAGGTCAAAGCTACTCAACAACCGCTCCGGGAGCTAGACCCGAACCTGTAATGTCAAAAATCAGTTTCATTACTGGAGCGGCTCCGGAAACTAACATGTACACGTATGAGCCCTGACTCGGGCCGCAGCCCCGGTGTTGATGATACATCGATAAATAAAGCTCAGGGGCTGGCTTTGTCCGGGGAACATATACCCCAGCGACCCTGATGCCAGTGAGTGAACCTGCGCTGTAGGGCAGCGGGACTACAATGCCGGGCGATTCTCATCATGTGTGAAGGGCCTCGGGCTCGCCGAAACGACAACATTTACTAGAAAATCAAGTATGGCGACCTACCAAGTGCAAAGAGTTCTTTAGTATTACCACGCCCGAGCTATACATATTTTATTAATATCAGCGAGCTCGATTCGAAGATTCAACCGATAACGGACCGCGGAGAAAGCGTGACTAGGGCAACGCTCCCTGCATCACCTACGAATAACGGAGCCCTGGTTTGGTAATGTGGTCGGCATTTATGCATAGTCTTACAGATTGTTCATTCGCGAGATTATTTGATGATAGTTGCTTTGCGAATAACAAGAACCCAAGGGAGTTTCCATGAAGTCTATTTTTCTTTCACTATCCTTCATTATCATCTGCGCCCCAGCAGTCTTATCGGAGTTGCGAGTACCTGGTGAACCCTGAGTCCACCGTGTCTTATCCCGAACAGCTGTGATGCGAGACAAAGAAATTGGCCGCACACTAGACCTGATACGGGTCACGCACAAAACTAAGTAATTAATCCACAGAGATGAATCGTTTATATTAAAGGACCATATGTTGAGCAACGAGTTTTGGAATCCGCGCGGTACATGTGCACTAGGGCACGCACCGGTTCGCCCCGCTTATTCCCACACCCGGACGAGTAAGTATCAAACGCACCGAGAAATGCCGTTGCGACTAAACTATATACTTCAGCGAACATCAGAGCATTACGATTCGCCGAAGGCAGTCTTGGAATAGCCCACATAAGGGTAGGGGAGATGCTGCATAGTTCAGGATCAACCCGTTACCTCGTGAACGATGGCAAAGAACTATAGAGGGTGCCAAGCTTCCCAGCTGAGCAATCCCACGTGTTGAGTGACACTTTGAATGCACCCTCGGTAAATGTGACATTTGTCGTGAAGGTGTCGCAACCGGGTACGGTCCACTAGCCGTAATGTCTGAGGGGCTCTACCAGGACGGAATAACGGCAAGAAGCTGGAGACTTACTGACGTGAAGGCCTAACGAGCCTATTACCACAGCTCCCACTTAACTGGATCCTGAGAGAAGTACGATCATGTTGGGCACTTTCAGAAACGCGTCTTGGCCGAGGACTAGGCTGGTCGACTTGCTCGGTTAGAGGCTGATGTATATTCAGGGAGAGGACGCGAGACGTCAGATCTCAGAACGCCTTGGCTGTAGGATCGAATTTGTATCTTACCACCTGGTTTCGGCTCGCTCGAAACGGCCTCGTATTCAGCCAACCTGTGTTCGTTCAGTCAGCCTAGTAATGAGTAAAGTAGGCCTGGTAGGATGCATACGCTCAGGGAGCTCGGGCAGTCCGTGATATCGAGAGGTGATGACTTCTAGTCGGTTGGGAACTCACCAGATTGGTAACACTCCTACGCATTATGCTGACAGAGAAGGGGATACGCTGGCCCTACGCCGACGTCGATCGAACATCTGAAAACTACAACTCGCGGCTGTACGTGTGGGAGTGTTCCTGAAGGGACACGCCGGCGGGATAATAAGCCCCAATTCTTATCACGGTTAAGGGAGTTTTCTGGGGCTCCTATGAAAACGCGGGAACGATGTGCCGCGACTTAATGGTCGTGGTCAATCGCCCATTTTCAGAATGTTTGTAACTCCCTGATTTTAACACTATTCCGTAACCGCAAGGCCCTTATTATCTCAATGAGACATCTAATTAGAATTAATCATTGGTTGTATAAATCCAGTAGCAGAATAGCTCCTGTTAGTATAGGGACACCAAATGCCGTTCGGATTAGGCTGATGTTGAACTCCCAGCGACTACGGCACGTCGCTTCGCTGTCATCCAGCCAACTCGGTGCTCATTTGACCGATAAACGCCGATTACACAGCTGCTCAAAATGCTACTCTTGCGAAAACGATGTTACATTTACTCTCCTGCTATCTGCGTTTATGATGTTCAGAACCTAAATGACTGCGCAGTGTCTTGAGCGCCCAAATACGTGGGCACTCCTTTCGCAGAAAATCAAACACGTGTCCCAGCCTCGAGGCTCTCGACTTCTCTCTGATTATACTTATGTTTGTCTAAGTAAGAGTTACGATTTAAAGCTACGGTCGCCGAAGTACTTCAGCGCCGTGGCGATGCATGCTCGCTTACTAGACCATCTATGTCTGAAATCTTACGCCCTATCATCAGCACAGAATAGAGGACCTTTGACCGCTTGGCCGACCCAATCTCTGGGGACCCTTCCAAAGCTGTCAAGTAAAGTTTGCTCTATACGCCCCTTGCGAACGGTAGGGTTTTCGGTGCTATACGCTATTCGTGTGAGGCAAATTCGAAAATCTGCCGACGGTACCACTAATTAATCAAGCAGATTCGCGTATCTGCGCTACCACCGAGTACCTTGCATCATTATTTTATAGGAACAGTTCTACTTGAGGAGGCCCAGCCCATTCTCCGGGCAAACAACTACACTTCCGGATAGACGGGGCAAGTGTAACGTCCATGTAGCATTTGTGCGAGCCTGGCTATTCAAGGAGGAACAGACTGAGTGACAAGGCTACGGCGGTCGGTATACAACGGTAGACGACGCCGACACGCTGTATGAGGATAGAAGGGATCCCCTCTCTGCCCCAGAACGCGCATAATTTGCAACCCTATTCTGCGGATCTATGGGCTCGCCTCTCTATTAATGGATTCCATTCGGACGGCTAATCTGACATTAAAGCGAGCTCTAGCTGGCTATCTTGGGAAATTGTGGGCACTCTTGTCTTTTAGGATAATTAGGTGAGAGCCTATTGTTGCATATGTCGCAATGTCATACACGAACGTCCGATAAATGTACACTGATCGCCGACACCAAGACAGGATGGTTCAGCCACGGAGCCGGGTACCAAGTAGCTCCCCTCCCACTAGCTTATTTATTAGGGTGTCAGGCGTCGCAAGGATAGTTATACGTCCGCCCAGCTCGACGGCACCTTCTGAGTAACGTCGCATTTCTTTGAGCTCCGACAATCCCGAAGATATCACTCTTTATTCTTCATGGTTACGGCCATCTATCGTGGACATCACGGGTCCGTACGTGACGCACCCGGGTCCTTGCTGTTCGCTAGTTATGGAGAATTCAAAGAAGGACCCTGCGTCCGCGATAAAACATCTCATAGGCCGATTTGGGCCCTTCCGTAACGCTTGTGTGCGGCATGTTCCAGATATATGGAATTACATCCATGACTATAGGTCAGAACAGATCCCATACGGATTTTAATTCCTAAGACCTGCACGTTCTCCGAACTGGGTTTTGCAGACTTCGGTGCTGACCTCCGCCGTTTCGTTTTTCGGCTGCGCTGTGCTTTAGAAATCCCTCACAGATAGGGGCGGGACCGGAAATCTATCCGCGCTACCTGGCCAATTATACCTGTGAATTTTGACATAGCAATGTTCAACGAAAGGATCCAATAGCCCTCATCCAGCACATGTGGAAGGGACACATAGAGAGGCTGTCTTGAATGACTGTTGAGCTCGTTCACGCTCAAAGTTGAGGATACGAGTATGAAGGACACAACCGGAACGTATTGTAATAAAGACCTTGAAGCCTCCTGGGTCGCCTCGCATAGCCAATCGTACTGTTTGGACCCTCATCGGGAATGCGCCCGCGGGCTGCCAGGCGGTGTGGCTTCGCAAGCTGGATTTGCTGCCACACACGAGGGCTCGCAATTTGGTATTGGAAGACCCAGTTCACCTATGCCGCACCTACGCCATACAAGAGTAGTCACGCGCGGTGTTGCAACTTATCCGTCTTGTCGGAAGGGAACGGCTGATCGTACTCACTCTGTAGCCTGGTATAAATTGATCTTTTGCCTTGCTGCTCCCTTTGCGTAATAGCAGCCGCTGTTCATATACCGCAAATTACGATCAAAGTCACGCGTAGATAGTGGCCGGACATGAAACACACGCAGTTCATTTCACCTAGACGGACCACGTACTTGGTTGTAGCAGACTTATCCCCAGTGGTTTAGAATCTTTGATTTCGTTGCTCGGCAACAATCTCGAAAGCTCTCCTATACAGACGAAGTTGTCCCTGGATACAGTACCTGACACACCTGGGCGTCTGACCAACATTTTGGAGGGTAGCCATAGCTAATATTCTAAGCCGGTCAAGCCAACTAGGGTTGTCTGTGACTCAAGTCCTGTTAGAATGTCCAGTCTAAGAGGGTTCGGCCGGTTTCGTCTCGCGGAATTTATAGCTTGTATAGGGCATTCAGGTACTTCGTCCACATCATAGCTAGAGATCTTCGAAGCTACAACGGGCTCATCTTTCCTTGAGAGGACATCGTCGAAAATGGGAAAGCCGATGCTTTGGTATAGTTACCTCTCCCCCTGGATGCGACCACGAACGAACCCGGGACCAAATGTGATAGCAAAGTTTTACGAACCGAGGAAAGTTGCCTTGAACCTAGAGCACAACAGAAACAAACTATGGTTGATTGTGTACCATCCGGCGATTTTCCGTCTAGAACTATGTAAGTCGCCAGTGGGAATCTGCGATTTAATCTAAGTCGCTCGACTGGTCTAGAATGACTTATGGTCCACGAATATTAGTAAGGAATCATATGAGTATAATACGTCGCCCTGCTATATTTCAGACCTTAAGCGCGCGATTGCCCAGGCAAATGGAAGTCCTTTATACAGCAGGTGCATATTTCGAGTAACCTTTTCGCGCAAGACTGTGTATGTGTGTCTCTGTTGGTGTTCAACTACACTTCGCTTAAGTTCATGCCTGAACAAATAGAGAGGCCCTACTCTCCGGATTGCCAGAGAAGCCTAACGATTGAGATGGTCACCGCCCATGGATAATACGAAACTGCTTCGCTCTACGCGGGGTGTACACGGAAGCTCCAACACTCAATTCTTGGCAAAAGAGTGAGCACGAAATACGTCATTCTGGCTTTAGCCGCTTACTACGACGTGGTGGGGAGGCGTATTCCACACTATGATCCTTAGATAATATCTGCTTGACGGTACAAGCCCTTGCAGAGGTGTGATCACGCTCGAAGCTCGTAGGCCCCGCCGACTGGCTGAACGACGACTTTGAGACGACGTGAAGTAATTAATTTAAATTCATTCCAAAGACGGTCCCTCCTAAAGGTGCGGAAATCTAATTTGTTTCCTAGAAGCGGAACAGTGGGAGGCAGTACCCGCCTCGCAATTCACCTTGCTACTTATCGCCAATTTGAGTTCTAACAGACAGCGGGAAGCATCGGGGACAAAGGCCAATCGAGCTAGTACGATTCAATAAGTGGCTCTCTTCGTGGACGATCCCGGCCCCTTGCGAAGATTTAATGTGCCCGGGGTTGTCCCGGCCAGTCCGATGACACTGGACATGTGTTCCGCTCGGTCACGATGGGCAGGAAATTGTGCCAACATGAGGAATAAACGGGATCAAAAGAAATGAACCCTTAATATCACGGTGAGTCAAGATACAGCCAGATGTACGGCATTTTATTCTCGGTGTACTTTGGTTTATGCTGTGAAGACGATTGGTGACGCAGATTGGTGGGCCGCTCTTCTCAACAGCTTAACATTTCTTTTGTGAGTAAGCATCTAGTGAAAGCTCGTTCCAGGCACTTCTCCGGATATTCGCGCAAACAATGCTCTACAATGGCGGCCGGCACCAGTCAAACCTGGTAGTATTGCCTAACGACAGTGTGTTGCGTTTTCAGAATAGTCGTGAGTTTTGCCGTAATGCGTATTCCACAACTTGCACCCAGACGGTAGGCAGGGTGCCGCACTGGTGCCATATATAACCTCCCAAAGCGCACAGACCTGAACGTAGCGACGGGGTGCGATGCTTAGAATCTCGCCCAAAGTGTAGGTATTTGGTACCTACAAGACGCAAAACAAACCGCGCTCTGCAGCATGACCAGGTAGTGGGATACCGTTCAAAAGTTGTGACGCTTCAGGCTGTCAGTCGGATAATTTGCTCTACCCAAACTTATGCATAGAACGGCGCCGATACCACGATGTAAATTTGATTCAAATTGGTCAATAAGGAGGTCCCTGGTAGTGCAGAGGTCGATCCCGACCGCACATCTGACTCGAAGCGTGTCATTCCGAACGTGCATCACGACGACGGGATGTTGGATCGGTGCGCCCTTAATTCTCCCCGATATTGCCGGTTACCATGACCGTCCCCCAGCCTTGCCGTACAGTGAGGGATCCTCATTCAAACTCGCGTACCTAGCCGGAGAACAGTGTCCCTGACTACGAAGGACGGCCATTTCGTCGGCGGTCTGCAATAGTCTCAATTGACTATTCGGTGGGCGGAGGCCTTGCCATACATCAGTTGGATTCACAACCGCAGGCTTTAGATTCTGTTGATTGAATTT";

        //when
        //then
        expect(reverseComplement(text)).to.be("AAATTCAATCAACAGAATCTAAAGCCTGCGGTTGTGAATCCAACTGATGTATGGCAAGGCCTCCGCCCACCGAATAGTCAATTGAGACTATTGCAGACCGCCGACGAAATGGCCGTCCTTCGTAGTCAGGGACACTGTTCTCCGGCTAGGTACGCGAGTTTGAATGAGGATCCCTCACTGTACGGCAAGGCTGGGGGACGGTCATGGTAACCGGCAATATCGGGGAGAATTAAGGGCGCACCGATCCAACATCCCGTCGTCGTGATGCACGTTCGGAATGACACGCTTCGAGTCAGATGTGCGGTCGGGATCGACCTCTGCACTACCAGGGACCTCCTTATTGACCAATTTGAATCAAATTTACATCGTGGTATCGGCGCCGTTCTATGCATAAGTTTGGGTAGAGCAAATTATCCGACTGACAGCCTGAAGCGTCACAACTTTTGAACGGTATCCCACTACCTGGTCATGCTGCAGAGCGCGGTTTGTTTTGCGTCTTGTAGGTACCAAATACCTACACTTTGGGCGAGATTCTAAGCATCGCACCCCGTCGCTACGTTCAGGTCTGTGCGCTTTGGGAGGTTATATATGGCACCAGTGCGGCACCCTGCCTACCGTCTGGGTGCAAGTTGTGGAATACGCATTACGGCAAAACTCACGACTATTCTGAAAACGCAACACACTGTCGTTAGGCAATACTACCAGGTTTGACTGGTGCCGGCCGCCATTGTAGAGCATTGTTTGCGCGAATATCCGGAGAAGTGCCTGGAACGAGCTTTCACTAGATGCTTACTCACAAAAGAAATGTTAAGCTGTTGAGAAGAGCGGCCCACCAATCTGCGTCACCAATCGTCTTCACAGCATAAACCAAAGTACACCGAGAATAAAATGCCGTACATCTGGCTGTATCTTGACTCACCGTGATATTAAGGGTTCATTTCTTTTGATCCCGTTTATTCCTCATGTTGGCACAATTTCCTGCCCATCGTGACCGAGCGGAACACATGTCCAGTGTCATCGGACTGGCCGGGACAACCCCGGGCACATTAAATCTTCGCAAGGGGCCGGGATCGTCCACGAAGAGAGCCACTTATTGAATCGTACTAGCTCGATTGGCCTTTGTCCCCGATGCTTCCCGCTGTCTGTTAGAACTCAAATTGGCGATAAGTAGCAAGGTGAATTGCGAGGCGGGTACTGCCTCCCACTGTTCCGCTTCTAGGAAACAAATTAGATTTCCGCACCTTTAGGAGGGACCGTCTTTGGAATGAATTTAAATTAATTACTTCACGTCGTCTCAAAGTCGTCGTTCAGCCAGTCGGCGGGGCCTACGAGCTTCGAGCGTGATCACACCTCTGCAAGGGCTTGTACCGTCAAGCAGATATTATCTAAGGATCATAGTGTGGAATACGCCTCCCCACCACGTCGTAGTAAGCGGCTAAAGCCAGAATGACGTATTTCGTGCTCACTCTTTTGCCAAGAATTGAGTGTTGGAGCTTCCGTGTACACCCCGCGTAGAGCGAAGCAGTTTCGTATTATCCATGGGCGGTGACCATCTCAATCGTTAGGCTTCTCTGGCAATCCGGAGAGTAGGGCCTCTCTATTTGTTCAGGCATGAACTTAAGCGAAGTGTAGTTGAACACCAACAGAGACACACATACACAGTCTTGCGCGAAAAGGTTACTCGAAATATGCACCTGCTGTATAAAGGACTTCCATTTGCCTGGGCAATCGCGCGCTTAAGGTCTGAAATATAGCAGGGCGACGTATTATACTCATATGATTCCTTACTAATATTCGTGGACCATAAGTCATTCTAGACCAGTCGAGCGACTTAGATTAAATCGCAGATTCCCACTGGCGACTTACATAGTTCTAGACGGAAAATCGCCGGATGGTACACAATCAACCATAGTTTGTTTCTGTTGTGCTCTAGGTTCAAGGCAACTTTCCTCGGTTCGTAAAACTTTGCTATCACATTTGGTCCCGGGTTCGTTCGTGGTCGCATCCAGGGGGAGAGGTAACTATACCAAAGCATCGGCTTTCCCATTTTCGACGATGTCCTCTCAAGGAAAGATGAGCCCGTTGTAGCTTCGAAGATCTCTAGCTATGATGTGGACGAAGTACCTGAATGCCCTATACAAGCTATAAATTCCGCGAGACGAAACCGGCCGAACCCTCTTAGACTGGACATTCTAACAGGACTTGAGTCACAGACAACCCTAGTTGGCTTGACCGGCTTAGAATATTAGCTATGGCTACCCTCCAAAATGTTGGTCAGACGCCCAGGTGTGTCAGGTACTGTATCCAGGGACAACTTCGTCTGTATAGGAGAGCTTTCGAGATTGTTGCCGAGCAACGAAATCAAAGATTCTAAACCACTGGGGATAAGTCTGCTACAACCAAGTACGTGGTCCGTCTAGGTGAAATGAACTGCGTGTGTTTCATGTCCGGCCACTATCTACGCGTGACTTTGATCGTAATTTGCGGTATATGAACAGCGGCTGCTATTACGCAAAGGGAGCAGCAAGGCAAAAGATCAATTTATACCAGGCTACAGAGTGAGTACGATCAGCCGTTCCCTTCCGACAAGACGGATAAGTTGCAACACCGCGCGTGACTACTCTTGTATGGCGTAGGTGCGGCATAGGTGAACTGGGTCTTCCAATACCAAATTGCGAGCCCTCGTGTGTGGCAGCAAATCCAGCTTGCGAAGCCACACCGCCTGGCAGCCCGCGGGCGCATTCCCGATGAGGGTCCAAACAGTACGATTGGCTATGCGAGGCGACCCAGGAGGCTTCAAGGTCTTTATTACAATACGTTCCGGTTGTGTCCTTCATACTCGTATCCTCAACTTTGAGCGTGAACGAGCTCAACAGTCATTCAAGACAGCCTCTCTATGTGTCCCTTCCACATGTGCTGGATGAGGGCTATTGGATCCTTTCGTTGAACATTGCTATGTCAAAATTCACAGGTATAATTGGCCAGGTAGCGCGGATAGATTTCCGGTCCCGCCCCTATCTGTGAGGGATTTCTAAAGCACAGCGCAGCCGAAAAACGAAACGGCGGAGGTCAGCACCGAAGTCTGCAAAACCCAGTTCGGAGAACGTGCAGGTCTTAGGAATTAAAATCCGTATGGGATCTGTTCTGACCTATAGTCATGGATGTAATTCCATATATCTGGAACATGCCGCACACAAGCGTTACGGAAGGGCCCAAATCGGCCTATGAGATGTTTTATCGCGGACGCAGGGTCCTTCTTTGAATTCTCCATAACTAGCGAACAGCAAGGACCCGGGTGCGTCACGTACGGACCCGTGATGTCCACGATAGATGGCCGTAACCATGAAGAATAAAGAGTGATATCTTCGGGATTGTCGGAGCTCAAAGAAATGCGACGTTACTCAGAAGGTGCCGTCGAGCTGGGCGGACGTATAACTATCCTTGCGACGCCTGACACCCTAATAAATAAGCTAGTGGGAGGGGAGCTACTTGGTACCCGGCTCCGTGGCTGAACCATCCTGTCTTGGTGTCGGCGATCAGTGTACATTTATCGGACGTTCGTGTATGACATTGCGACATATGCAACAATAGGCTCTCACCTAATTATCCTAAAAGACAAGAGTGCCCACAATTTCCCAAGATAGCCAGCTAGAGCTCGCTTTAATGTCAGATTAGCCGTCCGAATGGAATCCATTAATAGAGAGGCGAGCCCATAGATCCGCAGAATAGGGTTGCAAATTATGCGCGTTCTGGGGCAGAGAGGGGATCCCTTCTATCCTCATACAGCGTGTCGGCGTCGTCTACCGTTGTATACCGACCGCCGTAGCCTTGTCACTCAGTCTGTTCCTCCTTGAATAGCCAGGCTCGCACAAATGCTACATGGACGTTACACTTGCCCCGTCTATCCGGAAGTGTAGTTGTTTGCCCGGAGAATGGGCTGGGCCTCCTCAAGTAGAACTGTTCCTATAAAATAATGATGCAAGGTACTCGGTGGTAGCGCAGATACGCGAATCTGCTTGATTAATTAGTGGTACCGTCGGCAGATTTTCGAATTTGCCTCACACGAATAGCGTATAGCACCGAAAACCCTACCGTTCGCAAGGGGCGTATAGAGCAAACTTTACTTGACAGCTTTGGAAGGGTCCCCAGAGATTGGGTCGGCCAAGCGGTCAAAGGTCCTCTATTCTGTGCTGATGATAGGGCGTAAGATTTCAGACATAGATGGTCTAGTAAGCGAGCATGCATCGCCACGGCGCTGAAGTACTTCGGCGACCGTAGCTTTAAATCGTAACTCTTACTTAGACAAACATAAGTATAATCAGAGAGAAGTCGAGAGCCTCGAGGCTGGGACACGTGTTTGATTTTCTGCGAAAGGAGTGCCCACGTATTTGGGCGCTCAAGACACTGCGCAGTCATTTAGGTTCTGAACATCATAAACGCAGATAGCAGGAGAGTAAATGTAACATCGTTTTCGCAAGAGTAGCATTTTGAGCAGCTGTGTAATCGGCGTTTATCGGTCAAATGAGCACCGAGTTGGCTGGATGACAGCGAAGCGACGTGCCGTAGTCGCTGGGAGTTCAACATCAGCCTAATCCGAACGGCATTTGGTGTCCCTATACTAACAGGAGCTATTCTGCTACTGGATTTATACAACCAATGATTAATTCTAATTAGATGTCTCATTGAGATAATAAGGGCCTTGCGGTTACGGAATAGTGTTAAAATCAGGGAGTTACAAACATTCTGAAAATGGGCGATTGACCACGACCATTAAGTCGCGGCACATCGTTCCCGCGTTTTCATAGGAGCCCCAGAAAACTCCCTTAACCGTGATAAGAATTGGGGCTTATTATCCCGCCGGCGTGTCCCTTCAGGAACACTCCCACACGTACAGCCGCGAGTTGTAGTTTTCAGATGTTCGATCGACGTCGGCGTAGGGCCAGCGTATCCCCTTCTCTGTCAGCATAATGCGTAGGAGTGTTACCAATCTGGTGAGTTCCCAACCGACTAGAAGTCATCACCTCTCGATATCACGGACTGCCCGAGCTCCCTGAGCGTATGCATCCTACCAGGCCTACTTTACTCATTACTAGGCTGACTGAACGAACACAGGTTGGCTGAATACGAGGCCGTTTCGAGCGAGCCGAAACCAGGTGGTAAGATACAAATTCGATCCTACAGCCAAGGCGTTCTGAGATCTGACGTCTCGCGTCCTCTCCCTGAATATACATCAGCCTCTAACCGAGCAAGTCGACCAGCCTAGTCCTCGGCCAAGACGCGTTTCTGAAAGTGCCCAACATGATCGTACTTCTCTCAGGATCCAGTTAAGTGGGAGCTGTGGTAATAGGCTCGTTAGGCCTTCACGTCAGTAAGTCTCCAGCTTCTTGCCGTTATTCCGTCCTGGTAGAGCCCCTCAGACATTACGGCTAGTGGACCGTACCCGGTTGCGACACCTTCACGACAAATGTCACATTTACCGAGGGTGCATTCAAAGTGTCACTCAACACGTGGGATTGCTCAGCTGGGAAGCTTGGCACCCTCTATAGTTCTTTGCCATCGTTCACGAGGTAACGGGTTGATCCTGAACTATGCAGCATCTCCCCTACCCTTATGTGGGCTATTCCAAGACTGCCTTCGGCGAATCGTAATGCTCTGATGTTCGCTGAAGTATATAGTTTAGTCGCAACGGCATTTCTCGGTGCGTTTGATACTTACTCGTCCGGGTGTGGGAATAAGCGGGGCGAACCGGTGCGTGCCCTAGTGCACATGTACCGCGCGGATTCCAAAACTCGTTGCTCAACATATGGTCCTTTAATATAAACGATTCATCTCTGTGGATTAATTACTTAGTTTTGTGCGTGACCCGTATCAGGTCTAGTGTGCGGCCAATTTCTTTGTCTCGCATCACAGCTGTTCGGGATAAGACACGGTGGACTCAGGGTTCACCAGGTACTCGCAACTCCGATAAGACTGCTGGGGCGCAGATGATAATGAAGGATAGTGAAAGAAAAATAGACTTCATGGAAACTCCCTTGGGTTCTTGTTATTCGCAAAGCAACTATCATCAAATAATCTCGCGAATGAACAATCTGTAAGACTATGCATAAATGCCGACCACATTACCAAACCAGGGCTCCGTTATTCGTAGGTGATGCAGGGAGCGTTGCCCTAGTCACGCTTTCTCCGCGGTCCGTTATCGGTTGAATCTTCGAATCGAGCTCGCTGATATTAATAAAATATGTATAGCTCGGGCGTGGTAATACTAAAGAACTCTTTGCACTTGGTAGGTCGCCATACTTGATTTTCTAGTAAATGTTGTCGTTTCGGCGAGCCCGAGGCCCTTCACACATGATGAGAATCGCCCGGCATTGTAGTCCCGCTGCCCTACAGCGCAGGTTCACTCACTGGCATCAGGGTCGCTGGGGTATATGTTCCCCGGACAAAGCCAGCCCCTGAGCTTTATTTATCGATGTATCATCAACACCGGGGCTGCGGCCCGAGTCAGGGCTCATACGTGTACATGTTAGTTTCCGGAGCCGCTCCAGTAATGAAACTGATTTTTGACATTACAGGTTCGGGTCTAGCTCCCGGAGCGGTTGTTGAGTAGCTTTGACCTGCATAAAGTCGAGGAGCAGTCTATTTCTCATCCTCCGGAGTTGGGTTTCGTGGGCAATAGCGGAGCTATCTTATCGGTCGGTCCCCGTTTGGTTCTACTTTGCGCCTGAGGCTGGTTTATCTCCTAAGTACTCAATAAGTAACGTTTCCACCCTTACGAGCTGTATCTTAGCTGACCTTCAAGATGAGGACCTCAGGATGTAGTCAGAGAATTTGATTGATAGTACGAACCGTAACATGACTACACCGCAGATGCATACTGTTTCCTGAGCCAGTGAAATCTACTTTTAGCACTAGTTGAAGGGATGATAAAACAGGAGTTGATTGCTACAACCTATTTTTGTACGGGCGCGATCTTCGCGTTCCTCGTATGCTGTATACCTGATAAGTTATGTGAAGCACCCTATGGACTAACTACTAATGTCTAACATGATCAATAGATGGCTTCCGCGCATAAGGAGAGGAACCATGTGAGCTCTCCTGGTGTATCGACTCCAAACGACACATAGAGACCAGTTCTCAACCGATAACGGTACTAGCCAAACGCCTTGCTGGCGGGCGTATACGAAAAGTAGCGGCTCCTCACTTGCTAACGACAAGTCTTCAGATTATTTTCAGTGAGGAGGGCCCCGTCTCATCATGCCCACGATATGCGTGCCACAAAGGATGACTAAGGATGGGTCCCTGCAGAGAGTGTACAGCTACACCCGAGCGAGCCTAACTCAGATCTCGACCCTCGATATAGATGGACTTGTGGGATGCATGAGGTTATTTTTGTAAATGGCCACGACCCGCAGGACAACCGGCCTGTGGTAACCAGATGTAGAGAGCAAATGAGGTGCCTCTGGCACCGGGCACGCACATGGGATAACTAACGCAAGTAGCACTGTCTAACCTGCAACAGATACAGAACTATGGCGAAGGGATCGACCATTAAAAGACGGCCGCATGTGGACGCTAATCAAATCCTCAGCTAGGTGTCTTGGAAAATCAAGAACGTGAATATAGTACTGTTTCATCGTACACGGTGGCGGGATACCGAAGAATATCGCGTACTCCGCGGACTTTTCGGCGGCTATCGACTGACGCTTAGCCGACCCCAAAGGTCATGAGGCATACTTTGGGTAATTCTGACTCTTTGGACTGACCAGTTCCTTAGGCATTAGGAACACGTCCATCCCCCCCGACCCAAAAAGGCAACTTACGCTTTCGGAAGTAATTCTATCAGCGATGCCATGTTACTGGCCTGCACTCCTTTGTTCAGCCATTTCGCCAGCATTCAATGAAAGAGTAGGTCCTTCAAGGGCGGCTCGCGCTGTACTTAAGATCCTATAGTCTACGAGGGGCTATCTATCCTTCTAGTAGTTTGAGCATGCGAGACCTAAAAGGAAACGGGTTTTACGTTACGGATACCGCTATTCCTACTGTATGGGTTCTCCAACAATTACAAGAGTCCCGGGGGTTGCGTTAGGGAAAACTTGAGAGCTTAACGCTTCTTTTTTGAAATGTGGAAGATATCAACTTGTATTCGGAGGCGTGTATTACGTCGTGTCGCGATACGTCCTCTCCTACGGCCACCTGGGAGTACGCACTGTACATATCATGGCCTACGGCAATCGAATGGTACATAGTCACATTCGTATCATCCGTGTCGAGGCCTCTCGGATACAGCTGGTCGTTGCGCCGTCGTGTAATAGTGGC");
    });


});