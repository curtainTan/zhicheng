//app.js

import allapi from "./utils/api.js"

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    //设置全局token
    var ss = wx.getStorageSync('token')
    if( ss ){
      console.log( "设置全局的token" )
      this.globalData.usertoken = ss
      //自动登录
      var that = this
      wx.request({
        url: allapi.allapi.autoLogin,
        header: {
          Authorization: `JWT ${that.globalData.usertoken}`
        },
        method: "GET",
        success: ( res )=>{
          console.log( res )
          that.globalData.zhiuser = res.data
        }
      })
    }else{
      console.log("--------本地token-----失败---")
    }

    console.log( allapi )
    wx.allapi = allapi.allapi
    wx.myreq = ( method, url, data, callback ) => {
      var globaldat = this
      console.log("---------全局的this--------")
      console.log( globaldat )
      wx.request({
        method: method,
        url: url,
        data: data,
        header: {
          Authorization: `JWT ${globaldat.globalData.usertoken }`
        },
        success: callback
      })
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    name: "你好",
    zhiuser: null,
    usertoken: ""
  }
})
