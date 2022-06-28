module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/test",
	"router": {
		"index": [
			{
				"regexp": "^\\/test(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"generate": {
		"worker": "common/workers"
	},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {},
		"usingComponents": {}
	},
	"pages": {
		"index": {}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {}
}