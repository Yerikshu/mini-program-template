module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/",
	"router": {
		"index": [
			{
				"regexp": "^\\/(?:\\/)?$",
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
	"redirect": {},
	"optimization": {}
}