const test = async function (t) {
    let knownVariables = new Set();
    let lastSayThink = null;
    let emitter = t.getOpCodeEmitter();
    emitter.on('data_setvariableto', (block, target) => {
        knownVariables.add(block._argValues.VARIABLE.id);
    });
    emitter.on('data_variable', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'data_variable'){
                t.assert.ok(knownVariables.has(operation._argValues.VARIABLE.id), "Variable was used before initialization")
            }
        });
    });
    t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(30000);
    t.end();
}

module.exports = [
    {
        test: test,
        name: 'Variable before init Test',
        description: 'Tests if a variable ise used, before a value is assigned',
        categories: []
    }
];