// pages/search/search.js
var tcity = require("../../utils/citys.js");
var app = getApp()
var aArt = {
  title: "aaaa",
  content: "这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介"
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputValue: "",
    tishiIndex: 0,
    tishi: ["即将加载更多数据.....", "没有更多数据了......"],
    provinces: [],
    province: "",
    citys: [],
    city: "北京市",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    hotsearch: [
      "社会保障", "餐饮", "入职工作", "园林申请", "罚款罚单", "五险一金", "专利权转让", "商标转让", "公务员"
    ],
    lishi: [
      '医疗', '版权专利', '房屋出租', '教育', '商务', '车辆买卖', '农业', '交通安全', '机关'
    ],
    searchList: [],
    someimg: [
      "http://www.foundertech.com/uploads/201607/04/14676133087772.jpg",
      "http://5b0988e595225.cdn.sohucs.com/images/20170920/1751d4607bf54ae6b15f43f146fa9f49.png",
      "https://img.cf1399.com/201800/201801102710/20180126151940493.jpg",
      "http://www.cct.org.mo/images/index/banner.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Manhattan3_amk.jpg/300px-Manhattan3_amk.jpg",
      "http://www.ewill.com.tw/images/index_bg01.jpg",
      "http://5b0988e595225.cdn.sohucs.com/images/20180215/ff83baa9a7e04aaba1b699f72c7c1525.jpg",
      "https://img.pc841.com/2017/0215/20170215041939740.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkm8HnTU-uhf6nS3MDHEcRvRMdAvIxtLr7d-GpVveMiJckudq4DQ",
      "https://img.chinatimes.com/newsphoto/2018-08-07/656/20180807002350.jpg"
    ],
  },

  handelInput( e ){
    this.setData({
      inputValue : e.detail.value
    })
  },

  handDelete(){
    wx.showModal({
      title: '提示',
      content: '你确定要删除吗???',
      success: ( res ) => {
        if( res.confirm ){
          console.log("你点击了删除.....")
        }else{
          console.log("你点击了取消.....")
        }
      }
    })
  },

  toArticle(event) {
    wx.navigateTo({
      url: '/pages/article/article?index=' + event.target.dataset.index,
    })
  },

  search(  ){
    if (this.data.inputValue ){
      wx.showLoading({
        title: '请稍等',
        mask: true
      })
      var that = this
      wx.myreq(
        "GET",
        wx.allapi.search,
        {
          label: this.data.inputValue,
        },
        ( res )=>{
          console.log( "--------搜索成功----------" )
          console.log( res )
          this.setData({
            searchList: res.data.results
          })
          wx.hideLoading()
        }
      )
    }else{
      wx.showToast({
        title: '请输入搜索内容....',
        duration: 2000,
        icon: "none",
        mask: true,
      })
    }
  },

  bindChange: function (e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;

    if (val[0] != t[0]) {
      console.log('province no ');
      const citys = [];
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys: citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })
      return;
    }
    if (val[1] != t[1]) {
      console.log('city no');
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }

      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }
  },
  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  },
  cancel(){
    this.setData({
      condition: !this.data.condition
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    var that = this;

    tcity.init(that);

    var cityData = that.data.cityData;


    const provinces = [];
    const citys = [];
    const countys = [];

    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    console.log('city完成');
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }

    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      'province': cityData[0].name,
      'city': cityData[0].sub[0].name,
      'county': cityData[0].sub[0].sub[0].name
    })
    console.log('初始化完成');
    console.log( app )
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
  onReachBottom () {
    setTimeout(() => {
      this.setData({
        tishiIndex: 1
      })
    }, 200 )
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})