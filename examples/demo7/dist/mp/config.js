module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/",
	"router": {
		"page1": [
			{
				"regexp": "^\\/a(?:\\/)?$",
				"options": "i"
			}
		],
		"page2": [
			{
				"regexp": "^\\/b(?:\\/)?$",
				"options": "i"
			}
		],
		"page3": [
			{
				"regexp": "^\\/c(?:\\/)?$",
				"options": "i"
			}
		],
		"page4": [
			{
				"regexp": "^\\/d\\/([^\\/]+?)(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"generate": {
		"worker": "common/workers"
	},
	"runtime": {
		"subpackagesMap": {
			"page2": "package1",
			"page3": "package2",
			"page4": "package2"
		},
		"tabBarMap": {},
		"usingComponents": {}
	},
	"pages": {
		"page1": {},
		"page2": {},
		"page3": {},
		"page4": {}
	},
	"redirect": {
		"notFound": "page1",
		"accessDenied": "page1"
	},
	"optimization": {}
}