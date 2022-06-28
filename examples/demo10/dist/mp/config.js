module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/",
	"router": {
		"index": [
			{
				"regexp": "^\\/(?:\\/)?$",
				"options": "i"
			}
		],
		"other": [
			{
				"regexp": "^\\/other(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"generate": {
		"worker": "common/workers"
	},
	"runtime": {
		"subpackagesMap": {
			"other": "package"
		},
		"tabBarMap": {},
		"usingComponents": {
			"comp-a": {
				"path": "comp-a",
				"props": [
					"prefix",
					"suffix",
					"testObj",
					"testArr",
					"testDefaultVal"
				],
				"propsVal": {
					"prefix": null,
					"suffix": null,
					"testObj": {},
					"testArr": [],
					"testDefaultVal": "hello kbone"
				},
				"events": [
					"someevent"
				]
			},
			"comp-b": {
				"path": "comp-b/index",
				"props": [
					"prefix",
					"name"
				],
				"propsVal": {
					"prefix": null,
					"name": null
				}
			},
			"comp-c": {
				"path": "comp-c",
				"propsVal": {}
			},
			"comp-e": {
				"path": "comp-e/index",
				"props": [
					"my-class"
				],
				"externalWxss": [
					"other"
				],
				"propsVal": {
					"my-class": null
				}
			}
		}
	},
	"pages": {
		"index": {},
		"other": {}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {}
}