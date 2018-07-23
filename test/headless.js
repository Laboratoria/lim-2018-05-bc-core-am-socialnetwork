global.window = global;
global.assert = require('chai').assert;
require('../src/social_network');
require('./social.spec.js');
