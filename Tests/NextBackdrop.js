const test = async function (t) {
    let emitter = t.getOpCodeEmitter();
    emitter.on('looks_nextbackdrop', () => {
        let stage = t.getStage();
        t.assert.greaterOrEqual(stage._target.sprite.costumes_.length, 2, "Tried to use looks_nextbackdrop with a stage that only has one backdrop");
    });
    t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(30000);
    t.end();
}

module.exports = [
    {
        test: test,
        name: 'Next Backdrop Test',
        description: 'Tests if the program contains more than one backdrop when "next backdrop" block is called',
        categories: []
    }
];