const assert = require('assert');
const add = require('../app');

describe('Addition Test', function() {
    it('should return 5', function() {
        assert.strictEqual(add(2,3),5);
    });
});