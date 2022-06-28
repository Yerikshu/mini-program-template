module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/",
	"router": {
		"page1": [
			{
				"regexp": "^\\/page1\\.html(?:\\/)?$",
				"options": "i"
			}
		],
		"page2": [
			{
				"regexp": "^\\/page2\\.html(?:\\/)?$",
				"options": "i"
			}
		],
		"page3": [
			{
				"regexp": "^\\/page3\\.html(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"generate": {
		"worker": "common/workers"
	},
	"runtime": {
		"subpackagesMap": {
			"page3": "package1"
		},
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