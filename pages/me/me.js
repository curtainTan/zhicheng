// pages/me/me.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loged: app.globalData.usertoken,
    rippleStyle: '',
    bottomText: [
      {
        img: "/image/some/time.png",
        text: "最近阅读记录"
      },
      {
        img: "/image/some/like2.png",
        text: "喜欢的文章"
      },
      {
        img: "/image/some/money.png",
        text: "打赏的文章"
      },
    ],
    zhiuser: null
  },

  // touchstart: function( res ){
  //   console.log( res )
  //   var x = res.touches[0].pageX
  //   var y = res.touches[0].pageY + 85
  //   this.setData({
  //     rippleStyle: ""
  //   })
  //   this.setData({
  //     rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
  //   })
  // },

  logout: function(){
    var that = this
    wx.showModal({
      title: '温馨提示...',
      content: '确定退出吗....',
      success( res ){
        if (res.confirm) {
          wx.removeStorageSync("token")
          app.globalData.zhiuser = {}
          app.globalData.usertoken = ""
          that.setData({
            loged: ""
          })
        }
      }
    })
  },

  toArtList: function( e ){
    wx.navigateTo({
        url: '/pages/artList/artlist?label=' + e.target.dataset.label
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
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
    this.setData({
      zhiuser: app.globalData.zhiuser,
      loged: app.globalData.usertoken
    })
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