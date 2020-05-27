import * as appConfig from '../../app_config';

Page({
  /**
   * 页面的初始数据
   */
  data: {

    cityNameInfo: ["邢台市", "邢台市"],
    cityInfo: [{
        city_id: 1,
        city_name: "邢台市"
      },
      {
        city_id: 2,
        city_name: "北京市"
      },
      {
        city_id: 3,
        city_name: "黄山市"
      },
      {
        city_id: 4,
        city_name: "上海市"
      },
      {
        city_id: 5,
        city_name: "恩施"
      }
    ],
    city_id: 1,
    noteInfo: [],


  },


  bindPickerChange: function (e) {
    this.setData({
      city_id: e.detail.value,

    })
  },
  orderclick:function(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(),
    wx.request({
      url: appConfig.apiBase + "/noterInfo/",
      success: (res) => {
        console.log(res.data.noteInfo);
        this.setData({
          
          noteInfo: res.data.noteInfo,
        })
      },
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