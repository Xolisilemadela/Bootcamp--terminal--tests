import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('The isFromBellville function', function(){

    it('should return "true" for Bellville registration number', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should return "false" for registration numbers that are not from Bellville', function(){
        assert.equal(false, isFromBellville('CJ 123'));
    });
});