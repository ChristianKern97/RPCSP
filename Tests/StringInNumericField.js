function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const test = async function (t) {
    let emitter = t.getOpCodeEmitter();

    //Listeners for motion blocks
    emitter.on('motion_movesteps_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_movesteps'){
                let input = operation._argValues.STEPS;
                t.assert.ok(isNumeric(input), "motion_movesteps contained non numeric argument");
            }
        });
    });
    emitter.on('motion_turnright_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_turnright'){
                let input = operation._argValues.DEGREES;
                t.assert.ok(isNumeric(input), "motion_turnright contained non numeric argument");
            }
        });
    });
    emitter.on('motion_turnleft_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_turnleft'){
                let input = operation._argValues.DEGREES;
                t.assert.ok(isNumeric(input), "motion_turnleft contained non numeric argument");
            }
        });
    });
    emitter.on('motion_pointindirection_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_pointindirection'){
                let input = operation._argValues.DIRECTION;
                t.assert.ok(isNumeric(input), "motion_pointindirection contained non numeric argument");
            }
        });
    });
    emitter.on('motion_gotoxy_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_gotoxy'){
                let input = operation._argValues.X;
                t.assert.ok(isNumeric(input), "motion_gotoxy contained non numeric argument for X");
                let input2 = operation._argValues.Y;
                t.assert.ok(isNumeric(input2), "motion_gotoxy contained non numeric argument for Y");
            }
        });
    });
    emitter.on('motion_glidesecstoxy_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_glidesecstoxy'){
                let input = operation._argValues.SECS;
                t.assert.ok(isNumeric(input), "motion_glidesecstoxy contained non numeric argument");
                let input1 = operation._argValues.X;
                t.assert.ok(isNumeric(input1), "motion_glidesecstoxy contained non numeric argument for X");
                let input2 = operation._argValues.Y;
                t.assert.ok(isNumeric(input2), "motion_glidesecstoxy contained non numeric argument for Y");
            }
        });
    });
    emitter.on('motion_glidesecsto_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_glidesecsto'){
                let input = operation._argValues.SECS;
                t.assert.ok(isNumeric(input), "motion_glidesecsto contained non numeric argument");
            }
        });
    });
    emitter.on('motion_changexby_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_changexby'){
                let input = operation._argValues.DX;
                t.assert.ok(isNumeric(input), "motion_changexby contained non numeric argument");
            }
        });
    });
    emitter.on('motion_setx_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_setx'){
                let input = operation._argValues.X;
                t.assert.ok(isNumeric(input), "motion_setx contained non numeric argument");
            }
        });
    });
    emitter.on('motion_changeyby_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_changeyby'){
                let input = operation._argValues.DY;
                t.assert.ok(isNumeric(input), "motion_changeyby contained non numeric argument");
            }
        });
    });
    emitter.on('motion_sety_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_sety'){
                let input = operation._argValues.Y;
                t.assert.ok(isNumeric(input), "motion_sety contained non numeric argument");
            }
        });
    });
    emitter.on('motion_scroll_right_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_scroll_right'){
                let input = operation._argValues.DISTANCE;
                t.assert.ok(isNumeric(input), "motion_scroll_right contained non numeric argument");
            }
        });
    });
    emitter.on('motion_scroll_up_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'motion_scroll_up'){
                let input = operation._argValues.DISTANCE;
                t.assert.ok(isNumeric(input), "motion_scroll_up contained non numeric argument");
            }
        });
    });

    //Listeners for looks blocks
    emitter.on('looks_sayforsecs_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'looks_sayforsecs'){
                let input = operation._argValues.SECS;
                t.assert.ok(isNumeric(input), "looks_sayforsecs contained non numeric argument");
            }
        });
    });
    emitter.on('looks_thinkforsecs_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'looks_thinkforsecs'){
                let input = operation._argValues.SECS;
                t.assert.ok(isNumeric(input), "looks_thinkforsecs contained non numeric argument");
            }
        });
    });
    emitter.on('looks_changeeffectby_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'looks_changeeffectby'){
                let input = operation._argValues.CHANGE;
                t.assert.ok(isNumeric(input), "looks_changeeffectby contained non numeric argument");
            }
        });
    });
    emitter.on('looks_seteffectto_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'looks_seteffectto'){
                let input = operation._argValues.VALUE;
                t.assert.ok(isNumeric(input), "looks_seteffectto contained non numeric argument");
            }
        });
    });
    emitter.on('looks_changesizeby_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'looks_changesizeby'){
                let input = operation._argValues.CHANGE;
                t.assert.ok(isNumeric(input), "looks_changesizeby contained non numeric argument");
            }
        });
    });
    emitter.on('looks_setsizeto_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'looks_setsizeto'){
                let input = operation._argValues.SIZE;
                t.assert.ok(isNumeric(input), "looks_setsizeto contained non numeric argument");
            }
        });
    });
    emitter.on('looks_setstretchto_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'looks_setstretchto'){
                let input = operation._argValues.STRETCH;
                t.assert.ok(isNumeric(input), "looks_setstretchto contained non numeric argument");
            }
        });
    });
    emitter.on('looks_goforwardbackwardlayers_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'looks_goforwardbackwardlayers'){
                let input = operation._argValues.NUM;
                t.assert.ok(isNumeric(input), "looks_goforwardbackwardlayers contained non numeric argument");
            }
        });
    });

    //Listeners for sound blocks
    emitter.on('sound_seteffectto_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'sound_seteffectto'){
                let input = operation._argValues.VALUE;
                t.assert.ok(isNumeric(input), "sound_seteffectto contained non numeric argument");
            }
        });
    });
    emitter.on('sound_changeeffectby_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'sound_changeeffectby'){
                let input = operation._argValues.VALUE;
                t.assert.ok(isNumeric(input), "sound_changeeffectby contained non numeric argument");
            }
        });
    });
    emitter.on('sound_changevolumeby_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'sound_changevolumeby'){
                let input = operation._argValues.VOLUME;
                t.assert.ok(isNumeric(input), "sound_changevolumeby contained non numeric argument");
            }
        });
    });
    emitter.on('sound_setvolumeto_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'sound_setvolumeto'){
                let input = operation._argValues.VOLUME;
                t.assert.ok(isNumeric(input), "sound_setvolumeto contained non numeric argument");
            }
        });
    });

    //Listeners for events blocks
    emitter.on('event_whengreaterthan_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'event_whengreaterthan'){
                let input = operation._argValues.VALUE;
                t.assert.ok(isNumeric(input), "event_whengreaterthan contained non numeric argument");
            }
        });
    });

    //Listeners for control blocks
    emitter.on('control_repeat_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'control_repeat'){
                let input = operation._argValues.TIMES;
                t.assert.ok(isNumeric(input), "control_repeat contained non numeric argument");
            }
        });
    });
    emitter.on('control_wait_after', (block, target) => {
        block._ops.forEach(operation => {
            if(operation.opcode == 'control_wait'){
                let input = operation._argValues.DURATION;
                t.assert.ok(isNumeric(input), "control_wait contained non numeric argument");
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
        name: 'String in numeric field Test',
        description: 'Tests if the program contains a numeric only field which contains a non numeric string',
        categories: []
    }
];