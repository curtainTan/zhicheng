//index.js
//获取应用实例

var articleOne = {
  title: "aaaa",
  content: "这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介"
}

Page({
  data: {
    animatelist : [""],
    tishiIndex: 0,
    tishi: ["即将加载更多数据.....", "没有更多数据了......"],
    wh: 0,
    imgUrls: [
      '/image/swiper/1.png',
      '/image/swiper/2.png',
      '/image/swiper/3.png',
      '/image/swiper/4.png',
      '/image/swiper/5.png'
    ],
    hpage: 1,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    someimg: [
      "http://www.foundertech.com/uploads/201607/04/14676133087772.jpg",
      "http://5b0988e595225.cdn.sohucs.com/images/20170920/1751d4607bf54ae6b15f43f146fa9f49.png",
      "https://img.cf1399.com/201800/201801102710/20180126151940493.jpg",
      "http://www.cct.org.mo/images/index/banner.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Manhattan3_amk.jpg/300px-Manhattan3_amk.jpg",
      "http://www.ewill.com.tw/images/index_bg01.jpg",
      "http://5b0988e595225.cdn.sohucs.com/images/20180215/ff83baa9a7e04aaba1b699f72c7c1525.jpg",
      "https://img.pc841.com/2017/0215/20170215041939740.jpg",
      "https://img.chinatimes.com/newsphoto/2018-08-07/656/20180807002350.jpg",
      "http://img3.3lian.com/2013/s1/51/d/118.jpg",
      "http://pptdown.pptbz.com/pptbeijing/%E5%94%AF%E7%BE%8E%E7%83%AD%E6%B0%94%E7%90%83PPT%E8%83%8C%E6%99%AF%E5%9B%BE%E7%89%87.jpg",
      "http://img0.imgtn.bdimg.com/it/u=1813833741,3890256991&fm=200&gp=0.jpg",
      "http://pic164.nipic.com/file/20180507/26785037_031724641036_2.jpg",
      "http://b-ssl.duitang.com/uploads/blog/201404/18/20140418205745_ye5xi.thumb.700_0.jpeg",
      "http://img0.imgtn.bdimg.com/it/u=1486826859,4031998705&fm=200&gp=0.jpg",
      "http://hbimg.b0.upaiyun.com/6c5360f6f999e0d32e73f9ad1204bfead0a8a8941d2a42-LQ2oJS_fw658",
    ],
    articleList: []
  },
  toSearch: function(){
    console.log('点击')
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  touser( event ){
    console.log(event.target.dataset )
    wx.navigateTo({
      url: '/pages/otherUser/otheruser?user=' + event.target.dataset.userid,
    })
  },
  toArticle( event ){
    wx.navigateTo({
      url: '/pages/article/article?index=' + event.target.dataset.index ,
    })
  },
  getArtList: function( mypage ){
    var that = this
    console.log("第几页"+mypage)
    wx.request({
      url: wx.allapi.homeGetArtList,
      method: "GET",
      data: {
        page: mypage,
      },
      success: (res) => {
        console.log( "文章获取成功" )
        console.log(res)
        if( res.data.detail ){
          //数据加载完了
          that.setData({
            tishiIndex: 1
          })
        } else {
          //请求成功
          var oldlist = that.data.articleList
          var newlist = oldlist.concat( res.data.results )
          that.setData({
            articleList: newlist,
            hpage : mypage
          })
        }
      }
    })
  },
  onLoad(){
    var ss = []
    var animate = []
    this.getWh()
    this.getArtList( 1 )
  },

  getWh: function(){
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          wh: res.windowHeight
        })
      },
    })
  },

  // touchmove: function (res) {
  //   var that = this
  //   var newlist = this.data.animatelist
  //   var obj = wx.createSelectorQuery()
  //   obj.selectAll(".art-box").boundingClientRect((asd) => {
  //     asd.forEach((item, index) => {
  //       if (item.top < -20 && item.top > -70 ) {
  //         console.log('---------选中了一个元素-------------')
  //         console.log(item)
  //         newlist[index] = "fadeOutUp"
  //       }
  //       // if( item.top > -15 && item.top < 30 ){
  //       //   newlist[index] = "fadeInDown"
  //       // }
  //       // if (item.top > 400 && item.top - that.data.wh < -40 && item.top - that.data.wh > -10 ){
  //       //   newlist[index] = "fadeInUp"
  //       // }
  //       that.setData({
  //         animatelist: newlist
  //       })
  //     })
  //   }).exec()
  // },

  // getEle: function(){
  //   var obj = wx.createSelectorQuery()
  //   obj.selectAll(".art-box").boundingClientRect().exec( function(res1){
  //     console.log('------最终结果----------')
  //     console.log( res1 )
  //   } )
  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
    var page = this.data.hpage
    this.getArtList( ++page )
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    setTimeout(()=> {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      wx.showToast({
        title: "刷新成功....",
        duration: 1000,
        icon: "none",
        mask: true
      })
    }, 2000)
  },
})
