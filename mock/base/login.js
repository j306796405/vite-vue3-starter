import { resultSuccess } from "../utils";

module.exports = [
  {
    url: '/permission.web/users/login',
    type: 'post',
    response: () => {
      const message = {
        "id": "24965888515310722421904159111896988628510264220008225018301072820646524303461",
        "code": "HQ01UH422",
        "name": "蒋林捷",
        "orgCode": "HQ08S032,HQ01S400,HQ01S116"
    }
      return resultSuccess(message)
    }
  },
  {
    url: '/yfbgad-server-manager/display/selectByPageOfMy',
    type: 'get',
    timeout: 1000,
    response: () => {
      const message = {
        "totalRecord": 6,
        "results": [
            {
                "siteId": 307,
                "channelType": 0,
                "siteMark": "HQ08S032_test_vue",
                "siteName": "test_vue",
                "siteUrl": "",
                "iconUrl": "https://pic.mbsrp.cn/sources/images/display/theme/1601352503423.png",
                "isShow": 0,
                "siteSort": 0,
                "status": 1,
                "createUser": "HQ01UH422",
                "createDate": "2020-12-22 18:09:19",
                "lastUpdateUser": "HQ01UH496",
                "lastUpdateDate": "2021-03-29 15:39:28",
                "channelCode": "HQ08S032",
                "sid": 0
            },
            {
                "siteId": 301,
                "channelType": 22,
                "siteMark": "HQ08S032_vue_uploadBg",
                "siteName": "vue_uploadBg",
                "siteUrl": "",
                "iconUrl": "",
                "isShow": 0,
                "siteSort": 0,
                "status": 1,
                "createUser": "HQ01UH422",
                "createDate": "2020-12-14 16:26:42",
                "lastUpdateUser": "HQ01UH496",
                "lastUpdateDate": "2021-01-15 14:36:52",
                "channelCode": "HQ08S032",
                "sid": 0
            },
            {
                "siteId": 299,
                "channelType": 1,
                "siteMark": "HQ08S032_ffffffff",
                "siteName": "发发发",
                "siteUrl": "",
                "iconUrl": "https://pic.mbsrp.cn/sources/images/display/theme/1601352490275.png",
                "isShow": 0,
                "siteSort": 0,
                "status": 1,
                "createUser": "HQ01UH352",
                "createDate": "2020-12-10 14:11:24",
                "lastUpdateUser": "HQ01UH362",
                "lastUpdateDate": "2021-01-04 18:03:19",
                "channelCode": "HQ08S032",
                "sid": 0
            },
            {
                "siteId": 283,
                "channelType": 7,
                "siteMark": "HQ08S032_vue1",
                "siteName": "vue1",
                "siteUrl": "",
                "iconUrl": "",
                "isShow": 0,
                "siteSort": 0,
                "status": 1,
                "createUser": "HQ01UH422",
                "createDate": "2020-11-20 18:03:43",
                "lastUpdateUser": "HQ01UH422",
                "lastUpdateDate": "2020-12-09 18:07:03",
                "channelCode": "HQ08S032",
                "sid": 0
            },
            {
                "siteId": 275,
                "channelType": 61,
                "siteMark": "erer",
                "siteName": "test1109",
                "siteUrl": "",
                "iconUrl": "https://pic.mbsrp.cn/sources/images/display/theme/1601352503423.png",
                "isShow": 0,
                "siteSort": 0,
                "status": 2,
                "createUser": "HQ01UH362",
                "createDate": "2020-11-09 09:53:11",
                "lastUpdateUser": "HQ01UH422",
                "lastUpdateDate": "2020-12-10 16:54:41",
                "channelCode": "HQ08S032",
                "sid": 0
            },
            {
                "siteId": 272,
                "channelType": 61,
                "siteMark": "HQ08S032_test1109",
                "siteName": "test1109",
                "siteUrl": "",
                "iconUrl": "",
                "isShow": 0,
                "siteSort": 0,
                "status": 2,
                "createUser": "HQ01UH362",
                "createDate": "2020-11-09 09:53:11",
                "lastUpdateUser": "HQ01UE277",
                "lastUpdateDate": "2020-12-17 16:45:12",
                "channelCode": "HQ08S032",
                "sid": 0
            }
        ]
      }
      return resultSuccess(message)
    }
  }
]
