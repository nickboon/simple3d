const Defaults = require('../src/defaults');

class DebugDefaults extends Defaults {
    constructor() {
        super({
            solidOptions: {
                fillColour: '#0f0'
            }
        });
    }
}

module.exports = DebugDefaults;