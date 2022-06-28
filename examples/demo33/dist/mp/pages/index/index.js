const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document) {require('../../common/vendors~index~index2.js')(window, document);require('../../common/default~index~index2.js')(window, document);require('../../common/index.js')(window, document)}

const baseConfig = getBaseConfig(mp, config, init)

Component({
    ...baseConfig.base,
    methods: {
        ...baseConfig.methods,
        
        
        
    },
})
