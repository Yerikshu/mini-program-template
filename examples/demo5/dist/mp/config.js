module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/a",
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
				"regexp": "^\\/spa(?:\\/)?$",
				"options": "i"
			},
			{
				"regexp": "^\\/spa\\/a(?:\\/)?$",
				"options": "i"
			},
			{
				"regexp": "^\\/spa\\/c(?:\\/)?$",
				"options": "i"
			}
		],
		"page5": [
			{
				"regexp": "^\\/waterfall(?:\\/)?$",
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
		"cookieStore": "memory",
		"extraStyleList": [
			"webkitMask"
		]
	},
	"pages": {
		"page1": {
			"share": true,
			"shareTimeline": true,
			"extra": {
				"navigationBarTitleText": "page1"
			}
		},
		"page5": {
			"share": true,
			"shareTimeline": true,
			"reachBottom": true
		},
		"page2": {
			"share": true,
			"shareTimeline": true
		},
		"page3": {
			"share": true,
			"shareTimeline": true
		},
		"page4": {
			"share": true,
			"shareTimeline": true
		}
	},
	"redirect": {
		"notFound": "page1",
		"accessDenied": "page1"
	},
	"optimization": {}
}