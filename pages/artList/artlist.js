// pages/artList/artlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectLabel: 0,
    labelTitle: [
      "最近阅读记录",
      "喜欢的文章",
      "打赏的文章"
    ],
    resList: [
      {
        img: 'http://curtaintan.club/headImg/1546769437877.jpg',
        title: "积分入学中社保积分怎么算？",
        brif: "如意事十之八九，因此人生来就是注定痛苦的，乐事只占一二，不过我们要是常思一二，不念八九，",
        p: 25,
        like: 64,
        user: {
          name: "知程",
          image: "http://www.curtaintan.club/headImg/1543287803750.png"
        }
      },
      {
        title: "异地办理身份证",
        brif: "他本人不是房东，一定要有房东本人的写的委托书，最好是公",
        p: 29,
        like: 34,
        user: {
          name: "333",
          image: "http://119.23.54.128:8000/media/users/2019/03/headImg_GZoYOcP.png"
        }
      },
      {
        title: "办理购房贷款所需资料",
        brif: "之东流不说，还花费了很多不必要的时间。暂且还得让海住上一个星期，在他找到新的",
        p: 19,
        like: 31,
        user: {
          name: "333",
          image: "http://119.23.54.128:8000/media/users/2019/03/headImg_GZoYOcP.png"
        }
      },
      {
        title: "医疗保险",
        brif: "后多站在对方的角度去思考问题，事情发展的结局就会真的不一样。心情也就变得舒畅很",
        img: 'http://www.ewill.com.tw/images/index_bg01.jpg',
        p: 19,
        like: 31,
        user: {
          name: "333",
          image: "http://119.23.54.128:8000/media/users/2019/03/headImg_GZoYOcP.png"
        }
      },
      {
        title: "深圳如何申请专利",
        brif: "签有合同约定，也有对方的身份证复印件和电话号码，但这",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Manhattan3_amk.jpg/300px-Manhattan3_amk.jpg',
        p: 19,
        like: 31,
        user: {
          name: "333",
          image: "http://119.23.54.128:8000/media/users/2019/03/headImg_GZoYOcP.png"
        }
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSheV7KADV75Q_2OXayZ_bpYuy4wG27hidPxOYgpk_KsOFbiZIuA",
        title: "房屋出租那些事",
        brif: "产生矛盾时常想到这句话。遇事情能主动的退让人与人之",
        p: 19,
        like: 31,
        user: {
          name: "333",
          image: "http://119.23.54.128:8000/media/users/2019/03/headImg_GZoYOcP.png"
        }
      },
      {
        img: "http://www.ewill.com.tw/images/index_bg01.jpg",
        title: "办理购房贷款所需资料",
        brif: "之东流不说，还花费了很多不必要的时间。暂且还得让海住上一个星期，在他找到新的",
        p: 19,
        like: 31,
        user: {
          name: "333",
          image: "http://119.23.54.128:8000/media/users/2019/03/headImg_GZoYOcP.png"
        }
      },
      {
        img: "http://www.mc26.com/uploads/allimg/150825/1-150R512405H00.jpg",
        title: "医疗保险",
        brif: "后多站在对方的角度去思考问题，事情发展的结局就会真的不一样。心情也就变得舒畅很",
        p: 19,
        like: 31,
        user: {
          name: "333",
          image: "http://119.23.54.128:8000/media/users/2019/03/headImg_GZoYOcP.png"
        }
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log( options )
    wx.setNavigationBarTitle({
      title: this.data.labelTitle[options.label],
    })
    this.setData({
      selectLabel : options.label
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