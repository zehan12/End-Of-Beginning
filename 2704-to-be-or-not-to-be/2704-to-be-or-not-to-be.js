/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let v = val;
    return {
        toBe:function(n){
            if ( n === v ) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe:function(n){
            if ( n !== v ) {
                return true
            } else {
                throw new Error("Equal");
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */