
//https://jestjs.io/docs/en/expect.html

const expect = require('expect');
const utils = require('./utils');

/**
 * describe() && it() comes from Mocha Testing Framework
 */
 describe('Manual Testing', ()=>{
    it('should square a number', () => {
        var result = utils.square(3);
        if(result !== 9)
           throw new Error(`Expected 9, but got ${result}`);
    });
 });


describe('Basic Testing with Expect', ()=>{
    //Testing primitives
    it('should add to number', () => {
        var result = utils.add(22,33);
        expect(result).toBe(55);
     });

    //Testing Objects/Arrays
    it('should be equal', () => {
        //Testing if 2 objects are equal. (toEqual or toNotEqual)
        expect({name: 'Alex'}).toEqual({name: 'Alex'});
    });

    it('should contain values', () => {
        //Testing if provided array is a subset of expected.
        expect([1,2,3,4,5]).toEqual(expect.arrayContaining([1,4]));
    });
});

describe('Testing Async Code', ()=>{
    //done is a callback function that should be executed right after assert statement
    it('should wait for 1 sec before running test case', (done)=> {
        utils.addAsync(7, 5, (sumOfThoseTwo) => {
            expect(sumOfThoseTwo).toBe(12);
            done();
        })
    });
});

describe('Testing Properties of Object', () => {
    it('should set first and last Name', () => {
        let myUser = {
            age: 24,
            location: 'NYC',
            status: 'Single'
        }
        utils.setName(myUser, "Alex K.");
            expect(myUser).toHaveProperty('firstName');
            expect(myUser).toHaveProperty('lastName', 'K.');
    });
});



 /**
  * List of all functions: 
  
    expect(value)
    expect.extend(matchers)
    expect.anything()
    expect.any(constructor)
    expect.arrayContaining(array)
    expect.assertions(number)
    expect.hasAssertions()
    expect.not.arrayContaining(array)
    expect.not.objectContaining(object)
    expect.not.stringContaining(string)
    expect.not.stringMatching(string | regexp)
    expect.objectContaining(object)
    expect.stringContaining(string)
    expect.stringMatching(string | regexp)
    expect.addSnapshotSerializer(serializer)
            .not
            .resolves
            .rejects
            .toBe(value)
            .toHaveBeenCalled()
            .toHaveBeenCalledTimes(number)
            .toHaveBeenCalledWith(arg1, arg2, ...)
            .toHaveBeenLastCalledWith(arg1, arg2, ...)
            .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
            .toHaveReturned()
            .toHaveReturnedTimes(number)
            .toHaveReturnedWith(value)
            .toHaveLastReturnedWith(value)
            .toHaveNthReturnedWith(nthCall, value)
            .toBeCloseTo(number, numDigits)
            .toBeDefined()
            .toBeFalsy()
            .toBeGreaterThan(number)
            .toBeGreaterThanOrEqual(number)
            .toBeLessThan(number)
            .toBeLessThanOrEqual(number)
            .toBeInstanceOf(Class)
            .toBeNull()
            .toBeTruthy()
            .toBeUndefined()
            .toContain(item)
            .toContainEqual(item)
            .toEqual(value)
            .toHaveLength(number)
            .toMatch(regexpOrString)
            .toMatchObject(object)
            .toHaveProperty(keyPath, value)
            .toMatchSnapshot(propertyMatchers, snapshotName)
            .toMatchInlineSnapshot(propertyMatchers, inlineSnapshot)
            .toStrictEqual(value)
            .toThrow(error)
            .toThrowErrorMatchingSnapshot()
            .toThrowErrorMatchingInlineSnapshot()
  */