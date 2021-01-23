const test = async function (t) {
    let emitter = t.getOpCodeEmitter();
    emitter.on('operator_add_after', (block, target) => {
        block._ops.forEach(element => {
            if(element.opcode == 'operator_add'){
                let argValues = element._argValues;
                t.assert.ok(isNumeric(argValues.NUM1), "operator_add contained non numeric argument(s)");
                t.assert.ok(isNumeric(argValues.NUM2), "operator_add contained non numeric argument(s)");
            }
        });
    });
    emitter.on('operator_subtract_after', (block, target) => {
        block._ops.forEach(element => {
            if(element.opcode == 'operator_subtract'){
                let argValues = element._argValues;
                t.assert.ok(isNumeric(argValues.NUM1), "operator_subtract contained non numeric argument(s)");
                t.assert.ok(isNumeric(argValues.NUM2), "operator_subtract contained non numeric argument(s)");
            }
        });
    });
    emitter.on('operator_multiply_after', (block, target) => {
        block._ops.forEach(element => {
            if(element.opcode == 'operator_multiply'){
                let argValues = element._argValues;
                t.assert.ok(isNumeric(argValues.NUM1), "operator_multiply contained non numeric argument(s)");
                t.assert.ok(isNumeric(argValues.NUM2), "operator_multiply contained non numeric argument(s)");
            }
        });
    });
    emitter.on('operator_divide_after', (block, target) => {
        block._ops.forEach(element => {
            if(element.opcode == 'operator_divide'){
                let argValues = element._argValues;
                t.assert.ok(isNumeric(argValues.NUM1), "operator_divide contained non numeric argument(s)");
                t.assert.ok(isNumeric(argValues.NUM2), "operator_divide contained non numeric argument(s)");
            }
        });
    });
    //Evaluated after execution to get calculated values for FROM and TO
    emitter.on('operator_random_after', (block, target) => {
        block._ops.forEach(element => {
            if(element.opcode == 'operator_random'){
                let argValues = element._argValues;
                t.assert.ok(isNumeric(argValues.FROM), "operator_random contained non numeric argument(s)");
                t.assert.ok(isNumeric(argValues.TO), "operator_random contained non numeric argument(s)");
            }
        });
    });
    emitter.on('operator_mod_after', (block, target) => {
        block._ops.forEach(element => {
            if(element.opcode == 'operator_mod'){
                let argValues = element._argValues;
                t.assert.ok(isNumeric(argValues.NUM1), "operator_mod contained non numeric argument(s)");
                t.assert.ok(isNumeric(argValues.NUM2), "operator_mod contained non numeric argument(s)");
            }
        });
    });
    emitter.on('operator_round_after', (block, target) => {
        block._ops.forEach(element => {
            if(element.opcode == 'operator_round'){
                let argValues = element._argValues;
                t.assert.ok(isNumeric(argValues.NUM), "operator_round contained non numeric argument");
            }
        });
    });
    emitter.on('operator_mathop_after', (block, target) => {
        block._ops.forEach(element => {
            if(element.opcode == 'operator_mathop'){
                let argValues = element._argValues;
                t.assert.ok(isNumeric(argValues.NUM), "operator_mathop contained non numeric argument");
            }
        });
    });
    t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(30000);
    t.end();
}

const isNumeric = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = [
    {
        test: test,
        name: 'String in Match operation Test',
        description: 'Tests if a value used in a math operation is a string',
        categories: []
    }
];