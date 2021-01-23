const test = async function (t) {
    let emitter = t.getOpCodeEmitter();
    emitter.on('data_itemoflist_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'data_itemoflist'){
                let index = operation._argValues.INDEX;
                let listLength = t.getSprite(target.sprite.name).getList(operation._argValues.LIST.name, false)._variable.value.length;
                t.assert.lessOrEqual(index, listLength, "data_itemoflist tried to access a non existing element in list "+operation._argValues.LIST.name);
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
        name: 'List IndexOutOfBounds Test',
        description: 'Tests if an accessed List-Element is existing',
        categories: []
    }
];