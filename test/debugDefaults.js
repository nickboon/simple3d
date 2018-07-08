const Simple3d = require('../src/simple3d');

class DebugDefaults extends Simple3d.Defaults {
    constructor() {
        super({
            solidOptions: {
                fillColour: '#0f0'
            }
        });
    }
}

module.exports = DebugDefaults;