const test = async function (t) {
    let trackedDeleteBlock;
    let emitter = t.getOpCodeEmitter();
    emitter.on('data_deleteoflist', (block, target) => {
        if(trackedDeleteBlock != null){
            console.log("Internal error in testing function (maybe multiple delete blocks are executed simultaniously?)");
        }
        let targetList = target.variables[block.fields.LIST.id];
        trackedDeleteBlock = {
            deleteBlockId: block.id,
            targetList: targetList,
            targetListOrigSize: targetList.value.length
        };
    });
    emitter.on('data_deleteoflist_after', (block, target) => {
        if(block.id != trackedDeleteBlock.deleteBlockId){
            console.log("Internal error in testing function (maybe multiple delete blocks are executed simultaniously?)");
            trackedDeleteBlock = null;
            return;
        }
        t.assert.ok(target.variables[block.fields.LIST.id].value.length == trackedDeleteBlock.targetListOrigSize-1, "data_deleteoflist failed");
        trackedDeleteBlock = null;
    });
    t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(30000);
    t.end();
}

module.exports = [
    {
        test: test,
        name: 'Delete from List Test',
        description: 'Tests if deletion operations on lists work',
        categories: []
    }
];