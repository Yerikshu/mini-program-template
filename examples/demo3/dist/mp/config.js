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
		"pageContainer": [
			{
				"regexp": "^\\/page-container(?:\\/)?$",
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
		"wxComponent": "default"
	},
	"pages": {
		"index": {
			"windowScroll": true,
			"loadingView": "C:\\Users\\30348\\Desktop\\创业记录\\mini_program\\kbone\\examples\\demo3\\src\\loading-view",
			"loadingViewName": "loading"
		},
		"pageContainer": {
			"windowScroll": true,
			"loadingView": "C:\\Users\\30348\\Desktop\\创业记录\\mini_program\\kbone\\examples\\demo3\\src\\loading-view",
			"loadingViewName": "loading"
		}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {}
}