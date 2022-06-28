const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document) {require('../../common/vendors~chooselib~databaseguide~deployfunctions~index~storageconsole~userconsole.js')(window, document);require('../../common/default~databaseguide~storageconsole~userconsole.js')(window, document);require('../../common/userconsole.js')(window, document)}

const baseConfig = getBaseConfig(mp, config, init)

Component({
    ...baseConfig.base,
    methods: {
        ...baseConfig.methods,
        
        
        
    },
})
