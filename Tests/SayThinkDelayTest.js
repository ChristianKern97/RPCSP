const test = async function (t) {
    let lastSayThink = null;
    let emitter = t.getOpCodeEmitter();
    emitter.on('looks_think', (block, target) => {
        lastSayThink = assertDelay(t, lastSayThink);
    });
    emitter.on('looks_say', (block, target) => {
        lastSayThink = assertDelay(t, lastSayThink);
    });
    t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(30000);
    t.end();
}

const assertDelay = function(t, lastSayThink){
    let timeRunning = t.getRunTimeElapsed();
    if(lastSayThink == null){
        return timeRunning;
    }
    t.assert.ok(timeRunning-lastSayThink >= 500);
    return timeRunning;
}

module.exports = [
    {
        test: test,
        name: 'Say/Think delay test',
        description: 'Tests if multiple say/think blocks are called with little or no delay',
        categories: []
    }
];