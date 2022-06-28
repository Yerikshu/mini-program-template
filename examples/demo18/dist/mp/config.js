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
		]
	},
	"generate": {
		"worker": "common/workers"
	},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {},
		"usingComponents": {},
		"cookieStore": "globalstorage"
	},
	"pages": {
		"page1": {},
		"page2": {},
		"page3": {}
	},
	"redirect": {
		"notFound": "page1",
		"accessDenied": "page1"
	},
	"optimization": {}
}