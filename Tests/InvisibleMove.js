const test = async function (t) {
    let moveSet = new Set();
    let emitter = t.getOpCodeEmitter();
    emitter.on('looks_show', (block, target) => {
        moveSet.delete(target.sprite.name);
    });
    
    t.greenFlag();
    t.onSpriteMoved(sprite =>{
        if(!sprite.visible){
            t.assert.not(moveSet.has(sprite._target.sprite.name), "Invisible sprite was moving")
            moveSet.add(sprite._target.sprite.name);      
        }
    });
    t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(3000);
    t.end();
}

module.exports = [
    {
        test: test,
        name: 'Invisible Move Test',
        description: 'Tests if a invisible sprite is moving',
        categories: []
    }
];