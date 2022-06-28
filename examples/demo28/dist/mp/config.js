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
		"usingComponents": {
			"mp-badge": {
				"path": "weui-miniprogram/badge/badge",
				"props": [
					"extClass",
					"content"
				],
				"propsVal": {
					"extClass": null,
					"content": null
				},
				"events": [],
				"isWeui": true
			},
			"mp-gallery": {
				"path": "weui-miniprogram/gallery/gallery",
				"props": [
					"extClass",
					"show",
					"imgUrls",
					"current",
					"showDelete",
					"hideOnClick"
				],
				"propsVal": {
					"extClass": null,
					"show": null,
					"imgUrls": [],
					"current": null,
					"showDelete": true,
					"hideOnClick": true
				},
				"events": [
					"change",
					"delete",
					"hide"
				],
				"isWeui": true
			},
			"mp-loading": {
				"path": "weui-miniprogram/loading/loading",
				"props": [
					"extClass",
					"show",
					"animated",
					"duration",
					"type",
					"tips"
				],
				"propsVal": {
					"extClass": null,
					"show": true,
					"animated": null,
					"duration": 350,
					"type": "dot-gray",
					"tips": "加载中"
				},
				"events": [],
				"isWeui": true
			},
			"mp-icon": {
				"path": "weui-miniprogram/icon/icon",
				"props": [
					"extClass",
					"type",
					"icon",
					"size",
					"color"
				],
				"propsVal": {
					"extClass": null,
					"type": "outline",
					"icon": null,
					"size": 20,
					"color": "black"
				},
				"events": [],
				"isWeui": true
			},
			"mp-form": {
				"path": "weui-miniprogram/form/form",
				"props": [
					"extClass",
					"rules",
					"models"
				],
				"propsVal": {
					"extClass": null,
					"rules": [],
					"models": {}
				},
				"events": [
					"success",
					"fail"
				],
				"isWeui": true
			},
			"mp-form-page": {
				"path": "weui-miniprogram/form-page/form-page",
				"props": [
					"title",
					"subtitle"
				],
				"propsVal": {
					"title": null,
					"subtitle": null
				},
				"events": [],
				"isWeui": true
			},
			"mp-cell": {
				"path": "weui-miniprogram/cell/cell",
				"props": [
					"extClass",
					"icon",
					"title",
					"hover",
					"link",
					"value",
					"showError",
					"prop",
					"footer",
					"inline",
					"hasHeader"
				],
				"propsVal": {
					"extClass": null,
					"icon": null,
					"title": null,
					"hover": null,
					"link": null,
					"value": null,
					"showError": null,
					"prop": null,
					"footer": null,
					"inline": true,
					"hasHeader": true
				},
				"events": [],
				"isWeui": true
			},
			"mp-cells": {
				"path": "weui-miniprogram/cells/cells",
				"props": [
					"extClass",
					"title",
					"footer"
				],
				"propsVal": {
					"extClass": null,
					"title": null,
					"footer": null
				},
				"events": [],
				"isWeui": true
			},
			"mp-checkbox-group": {
				"path": "weui-miniprogram/checkbox-group/checkbox-group",
				"props": [
					"extClass",
					"multi",
					"prop"
				],
				"propsVal": {
					"extClass": null,
					"multi": true,
					"prop": null
				},
				"events": [
					"change"
				],
				"isWeui": true
			},
			"mp-checkbox": {
				"path": "weui-miniprogram/checkbox/checkbox",
				"props": [
					"extClass",
					"multi",
					"checked",
					"value",
					"label"
				],
				"propsVal": {
					"extClass": null,
					"multi": true,
					"checked": null,
					"value": null,
					"label": "label"
				},
				"events": [
					"change"
				],
				"isWeui": true
			},
			"mp-slideview": {
				"path": "weui-miniprogram/slideview/slideview",
				"props": [
					"extClass",
					"disable",
					"buttons",
					"icon",
					"show",
					"duration",
					"throttle"
				],
				"propsVal": {
					"extClass": null,
					"disable": null,
					"buttons": [],
					"icon": null,
					"show": null,
					"duration": 350,
					"throttle": 40
				},
				"events": [
					"buttontap",
					"hide",
					"show"
				],
				"isWeui": true
			},
			"mp-uploader": {
				"path": "weui-miniprogram/uploader/uploader",
				"props": [
					"extClass",
					"title",
					"tips",
					"showDelete",
					"sizeType",
					"sourceType",
					"maxSize",
					"maxCount",
					"files",
					"select",
					"upload"
				],
				"propsVal": {
					"extClass": null,
					"title": null,
					"tips": null,
					"showDelete": true,
					"sizeType": [],
					"sourceType": [],
					"maxSize": 5242880,
					"maxCount": 1,
					"files": [],
					"select": null,
					"upload": null
				},
				"events": [
					"select",
					"cancel",
					"success",
					"fail",
					"delete"
				],
				"isWeui": true
			},
			"mp-dialog": {
				"path": "weui-miniprogram/dialog/dialog",
				"props": [
					"extClass",
					"title",
					"buttons",
					"mask",
					"maskClosable",
					"show"
				],
				"propsVal": {
					"extClass": null,
					"title": null,
					"buttons": [],
					"mask": true,
					"maskClosable": true,
					"show": null
				},
				"events": [
					"close",
					"buttontap"
				],
				"isWeui": true
			},
			"mp-msg": {
				"path": "weui-miniprogram/msg/msg",
				"props": [
					"extClass",
					"type",
					"size",
					"icon",
					"title",
					"desc"
				],
				"propsVal": {
					"extClass": null,
					"type": null,
					"size": 64,
					"icon": null,
					"title": null,
					"desc": null
				},
				"events": [],
				"isWeui": true
			},
			"mp-toptips": {
				"path": "weui-miniprogram/toptips/toptips",
				"props": [
					"extClass",
					"type",
					"show",
					"msg",
					"delay"
				],
				"propsVal": {
					"extClass": null,
					"type": null,
					"show": null,
					"msg": null,
					"delay": 2000
				},
				"events": [
					"hide"
				],
				"isWeui": true
			},
			"mp-half-screen-dialog": {
				"path": "weui-miniprogram/half-screen-dialog/half-screen-dialog",
				"props": [
					"extClass",
					"closabled",
					"title",
					"subTitle",
					"desc",
					"tips",
					"maskClosable",
					"mask",
					"show",
					"buttons"
				],
				"propsVal": {
					"extClass": null,
					"closabled": true,
					"title": null,
					"subTitle": null,
					"desc": null,
					"tips": null,
					"maskClosable": true,
					"mask": true,
					"show": null,
					"buttons": []
				},
				"events": [
					"buttontap",
					"close"
				],
				"isWeui": true
			},
			"mp-actionsheet": {
				"path": "weui-miniprogram/actionsheet/actionsheet",
				"props": [
					"extClass",
					"title",
					"showCancel",
					"cancelText",
					"maskClass",
					"maskClosable",
					"mask",
					"show",
					"actions"
				],
				"propsVal": {
					"extClass": null,
					"title": null,
					"showCancel": true,
					"cancelText": null,
					"maskClass": null,
					"maskClosable": true,
					"mask": true,
					"show": null,
					"actions": []
				},
				"events": [
					"close",
					"actiontap"
				],
				"isWeui": true
			},
			"mp-navigation-bar": {
				"path": "weui-miniprogram/navigation-bar/navigation-bar",
				"props": [
					"extClass",
					"title",
					"back",
					"delta",
					"background",
					"color",
					"loading",
					"show",
					"animated"
				],
				"propsVal": {
					"extClass": null,
					"title": null,
					"back": true,
					"delta": 1,
					"background": "#f8f8f8",
					"color": null,
					"loading": null,
					"show": true,
					"animated": true
				},
				"events": [
					"back"
				],
				"isWeui": true
			},
			"mp-tabbar": {
				"path": "weui-miniprogram/tabbar/tabbar",
				"props": [
					"extClass",
					"list",
					"current"
				],
				"propsVal": {
					"extClass": null,
					"list": [],
					"current": null
				},
				"events": [
					"change"
				],
				"isWeui": true
			},
			"mp-searchbar": {
				"path": "weui-miniprogram/searchbar/searchbar",
				"props": [
					"extClass",
					"focus",
					"placeholder",
					"value",
					"search",
					"throttle",
					"cancelText",
					"cancel"
				],
				"propsVal": {
					"extClass": null,
					"focus": null,
					"placeholder": "搜索",
					"value": null,
					"search": null,
					"throttle": 500,
					"cancelText": "取消",
					"cancel": true
				},
				"events": [
					"focus",
					"blur",
					"clear",
					"input",
					"selectresult"
				],
				"isWeui": true
			},
			"mp-grids": {
				"path": "weui-miniprogram/grids/grids",
				"props": [
					"extClass",
					"grids"
				],
				"propsVal": {
					"extClass": null,
					"grids": []
				},
				"events": [],
				"isWeui": true
			}
		}
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