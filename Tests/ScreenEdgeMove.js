const test = async function (t) {
    /* your code here */
    let stageSize = t.getStageSize();
    let borderTop = stageSize.height/2;
    let borderBot = 0-(stageSize.height/2)
    let borderRight = stageSize.width/2;
    let borderLeft = 0-(stageSize.width/2)
    t.onSpriteMoved(sprite => {
        let s = sprite._old;
        //right wall
        if(s.direction == 90){
            t.assert.not(s.x >= borderRight, "sprite tried to exit screen on right");
        }
        //left wall
        else if(s.direction == -90){
            t.assert.not(s.x <= borderLeft, "sprite tried to exit screen on left");
        }
        //top wall
        else if(s.direction == 0){
            t.assert.not(s.y >= borderTop, "sprite tried to exit screen on top");
        }
        //bottom wall
        else if(s.direction == 180){
            t.assert.not(s.y <= borderBot, "sprite tried to exit screen on bottom");
        }
        //top right
        else if(s.direction > 0 && s.direction < 90){
            t.assert.not(s.x >= borderRight && s.y >= borderTop, "sprite tried to exit screen on top right");
        }
        //bottom right
        else if(s.direction > 90 && s.direction < 180){
            t.assert.not(s.x >= borderRight && s.y <= borderBot, "sprite tried to exit screen on bottom right");
        }
        //top left
        else if(s.direction > -90 && s.direction < 0){
            t.assert.not(s.x <= borderLeft && s.y >= borderTop, "sprite tried to exit screen on top left");
        }
        //bottom left
        else if(s.direction >= -179 && s.direction < -90){
            t.assert.not(s.x <= borderLeft && s.y <= borderBot, "sprite tried to exit screen on bottom left");
        }
    });
    t.setRandomInputInterval(100);
    t.detectRandomInputs();
    await t.runForTime(30000);
    t.end();
}

module.exports = [
    {
        test: test,
        name: 'Screenedge Move Test',
        description: 'Tests if a sprite is trying to move out of the screen',
        categories: []
    }
];