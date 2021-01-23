const test = async function (t) {
    // Get a dictionary of lists in the project with there current value
    let sprites = t.getSprites(sprite => sprite != null, false);
    let listIDs = new Set();
    let lists = [];
    sprites.forEach(sprite =>{
        var tmpLists = sprite.getLists(false);
        tmpLists.forEach(list => {
            if(!listIDs.has(list.id)){
                listIDs.add(list.id);
                lists.push(list);
            }
        });
    });
    let emitter = t.getOpCodeEmitter();
    emitter.on('data_addtolist', () => {
        lists.forEach(list => {
			t.assert.not(list.value.length >= 200000, "data_addtolist failed (list is full)");
        });
    });

    //This might be not enough time for the list to fill
	t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(30000);

    //await t.runForTime(2000002);
    t.end();
}

module.exports = [
    {
        test: test,
        name: 'Full List Test',
        description: 'Tests if an element is added to a full list',
        categories: []
    }
];