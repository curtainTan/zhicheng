// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex : 0,
    subIndex: 0,
    subTitle: [
      ["热度", "最新", "浏览", "回答热度"],
      ["最新回答", "浏览排序", "时间排序", "回答排序"]
    ],
    resList: []
  },

  getArtList: function (mypage) {
    var that = this
    console.log("第几页" + mypage)
    wx.request({
      url: wx.allapi.homeGetArtList,
      method: "GET",
      data: {
        page: mypage,
      },
      success: (res) => {
        console.log("文章获取成功")
        console.log(res)
        //请求成功
        var oldlist = that.data.resList
        var newlist = oldlist.concat(res.data.results)
        that.setData({
          resList: newlist
        })
      }
    })
  },


  subSelect: function( e ){
    this.setData({
      subIndex: e.target.dataset.subselectindex
    })
  },

  news: function (e) {
    var list = this.data.resList.reverse()
    this.setData({
      selectIndex: e.target.dataset.num,
      subIndex: 0,
      resList : []
    })
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout( ()=>{
      this.setData({
        resList : list
      })
      wx.hideLoading()
    }, 600 )
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getArtList( 1 )
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