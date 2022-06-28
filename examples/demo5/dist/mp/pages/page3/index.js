const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document) {require('../../common/vendors~page1~page2~page3~page4~page5.js')(window, document);require('../../common/vendors~miniprogram-app~page1~page2~page3~page4.js')(window, document);require('../../common/default~page1~page2~page3~page4.js')(window, document);require('../../common/page3.js')(window, document)}

const baseConfig = getBaseConfig(mp, config, init)

Component({
    ...baseConfig.base,
    methods: {
        ...baseConfig.methods,
        
        
        
    },
})
