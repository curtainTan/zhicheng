// pages/otherUser/otheruser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topitems: [
      {}
    ],
    selectindex: 0,
    resList: [],
    someimg: [
      "http://www.cct.org.mo/images/index/banner.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Manhattan3_amk.jpg/300px-Manhattan3_amk.jpg",
      "http://www.ewill.com.tw/images/index_bg01.jpg",
      "http://5b0988e595225.cdn.sohucs.com/images/20180215/ff83baa9a7e04aaba1b699f72c7c1525.jpg",
      "https://img.pc841.com/2017/0215/20170215041939740.jpg",
      "https://img.chinatimes.com/newsphoto/2018-08-07/656/20180807002350.jpg",
      "http://www.foundertech.com/uploads/201607/04/14676133087772.jpg",
      "http://5b0988e595225.cdn.sohucs.com/images/20170920/1751d4607bf54ae6b15f43f146fa9f49.png",
      "https://img.cf1399.com/201800/201801102710/20180126151940493.jpg",
      "http://img3.3lian.com/2013/s1/51/d/118.jpg",
      "http://pptdown.pptbz.com/pptbeijing/%E5%94%AF%E7%BE%8E%E7%83%AD%E6%B0%94%E7%90%83PPT%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87.jpg",
      "http://img0.imgtn.bdimg.com/it/u=1813833741,3890256991&fm=200&gp=0.jpg",
      "http://pic164.nipic.com/file/20180507/26785037_031724641036_2.jpg",
      "http://b-ssl.duitang.com/uploads/blog/201404/18/20140418205745_ye5xi.thumb.700_0.jpeg",
      "http://img0.imgtn.bdimg.com/it/u=1486826859,4031998705&fm=200&gp=0.jpg",
      "http://hbimg.b0.upaiyun.com/6c5360f6f999e0d32e73f9ad1204bfead0a8a8941d2a42-LQ2oJS_fw658",
    ],
  },

  onselect: function( e ){
    this.setData({
      selectindex: e.target.dataset.label
    })
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log( options )
    this.getArtList(1)
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