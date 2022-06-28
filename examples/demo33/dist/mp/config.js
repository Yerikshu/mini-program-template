module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/index2",
	"router": {
		"index": [
			{
				"regexp": "^\\/index(?:\\/)?$",
				"options": "i"
			}
		],
		"index2": [
			{
				"regexp": "^\\/index2(?:\\/)?$",
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
		"index": {
			"extra": {
				"disableScroll": true
			}
		},
		"index2": {
			"extra": {
				"disableScroll": true
			}
		}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {}
}