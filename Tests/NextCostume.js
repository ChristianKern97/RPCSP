const test = async function (t) {
    let trackedDeleteBlock;
    let emitter = t.getOpCodeEmitter();
    emitter.on('looks_nextcostume', (block, target) => {
        t.assert.ok(target.sprite.costumes_.length > 1);
    });
    t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(30000);
    t.end();
}

module.exports = [
    {
        test: test,
        name: 'Next Costume Test',
        description: 'Tests if the program contains more than one costume when "next costume" block is called',
        categories: []
    }
];