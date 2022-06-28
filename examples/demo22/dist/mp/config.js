module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/",
	"router": {
		"page1": [
			{
				"regexp": "^\\/(?:\\/)?$",
				"options": "i"
			}
		],
		"page2": [
			{
				"regexp": "^\\/page2(?:\\/)?$",
				"options": "i"
			}
		],
		"page3": [
			{
				"regexp": "^\\/page3(?:\\/)?$",
				"options": "i"
			}
		],
		"page4": [
			{
				"regexp": "^\\/page4(?:\\/)?$",
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