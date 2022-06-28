module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/",
	"router": {},
	"generate": {
		"worker": "common/workers"
	},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {},
		"usingComponents": {}
	},
	"pages": {
		"index": {
			"rem": true,
			"pageStyle": true
		}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {}
}