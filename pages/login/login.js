// pages/login/login.js
var app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    psw: "",
    btnDis: false,
    btnLoading: false 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.name = "恩恩额"
  },

  bindUser( e ){
    this.setData({
      username: e.detail.value
    })
  },
  bindPsw( e ){
    this.setData({
      psw: e.detail.value
    })
  },

  login(){
    var that = this
    var about = this.verify(this.data)
    if( about.success ){
      this.setData({
        btnLoading : true
      })
      wx.request({
        url: wx.allapi.login,
        method: "POST",
        data: {
          username : that.data.username,
          password: that.data.psw
        },
        success: ( res ) => {
          console.log("登录成功....")
          console.log( res )
          app.globalData.usertoken = res.data.token
          wx.setStorageSync('token', res.data.token )
          setTimeout(
            ()=>{
              that.setData({
                btnLoading: false
              })
            }, 200)
          //获取信息
          wx.myreq("GET", wx.allapi.autoLogin, {}, ( res )=>{
            console.log("------------自动登录成功---------------")
            console.log( res )
            app.globalData.zhiuser = res.data
            wx.navigateBack({
              delta: 1
            })
          } )
        }
      })
    }else{
      console.log( about )
      wx.showToast({
        title: about.err,
        duration: 2000,
        icon: "none",
        mask: true
      })
    }
  },

  verify( data ){
    if (data.username && data.psw) {

    }else{
      return {
        err: "请输入手机号和密码...."
      }
    }
    if ( true || /^1[34578]\d{9}$/.test( data.username ) ){

    }else{
      return {
        err: "请输入正确的电话号码....."
      }
    }
    if (/^[a-z0-9A-Z]{6,16}$/.test(data.psw ) ){

    }else{
      return {
        err: "请输入由字母或数字组成的6到16位的密码...."
      }
    }
    return {
      success : true
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})