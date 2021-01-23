const test = async function (t) {
    //TODO is there a t.getClones()??
    var startingSprites = t.getSprites().length;
    var emitter = t.getOpCodeEmitter();
    emitter.on('control_create_clone_of_menu', () =>{
        var sprites = t.getSprites().length;
        t.assert.ok((sprites-startingSprites)<300);
    });    
    emitter.on('control_create_clone_of', () =>{
        var sprites = t.getSprites().length;
        t.assert.ok((sprites-startingSprites)<300);
    });   
    t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(30000);
    t.end();
}

module.exports = [
    {
        test: test,
        name: 'Sprite Amount Test',
        description: 'Tests if the maximum amount of clones was exceeded',
        categories: []
    }
];