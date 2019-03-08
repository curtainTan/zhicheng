// pages/article/article.js

var WxParse = require('../wxParse/wxParse.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    liked: ["/image/some/heart2.png", "/image/some/heart.png"],
    _article : {},
    tuiList: [
      1,2,3,4
    ],
    pingValue: "",
    pinglunCount: 0,
    pingList: [
      // {
      //   name : "aaaaaaaaaaa"
      // },
      // {
      //   name: "bbbbbbbbbbbb"
      // },
      // {
      //   name: "cccccccccccc",
      //   about:[
      //     {
      //       name : "你好"
      //     },
      //     {
      //       name : "你好啊啊"
      //     }
      //   ]
      // },
      // {
      //   name: "ddddddddddd"
      // },
      // {
      //   name: "eeeeeeeeeeeee"
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)
    wx.request({
      url: wx.allapi.article + options.index + "/" ,
      success: ( res ) => {
        console.log( "请求成功" )
        console.log( res )
        that.setData({
          _article : res.data
        })
        var article = res.data.content
        WxParse.wxParse('article', 'html', article, that, 0 )
      }
    })
    this.getPinglun(options )
  },

  //获取评论
  getPinglun: function (options ) {
    var that = this
    wx.request({
      url: wx.allapi.getComment,
      method: "GET",
      data: {
        article: options.index
      },
      success: (res) => {
        console.log("--------评论----------")
        console.log(res)
        that.setData({
          pingList : res.data.results,
          pinglunCount: res.data.count
        })
      },
      fail: (err) => {
        console.log("------err--------")
        console.log(err)
      }
    })
  },

  dianzan(){
    var ss = this.data.liked.reverse()
    this.setData({
      liked : ss
    })
  },

  showMore(){
    console.log("show more")
  },
  handInput( e ){
    this.setData({
      pingValue : e.detail.value
    })
  },
  pingSend(){
    console.log("发送评论......")
    var that = this
    wx.myreq(
      "POST",
      wx.allapi.postcomment,
      {
        comment_content: that.data.pingValue,
        article: that.data._article.id
      },
      ( res ) => {
        console.log( "--------发送评论成功------" )
        console.log( res )
        that.getPinglun({ index: that.data._article.id } )
      }
    )
    // var ss = this.data.pingList
    // var as = {
    //   name: this.data.pingValue
    // }
    // ss.unshift( as )
    // this.setData({
    //   pingList : ss,
    //   pingValue : ""
    // })
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