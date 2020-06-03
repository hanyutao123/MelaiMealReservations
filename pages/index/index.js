import * as appConfig from '../../app_config';
import {request} from "../../request/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cityInfo: [],
    city_id: 0,
    noteInfo: [],

  },


  bindPickerChange: function (e) {
    this.setData({
      city_id: e.detail.value,
      
    })
    console.log(e.detail.value)
  },
  orderclick: function () {
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNoteinfo();
    this.getCityList();
  },
  getNoteinfo(){
    request({ url: appConfig.apiBase + "noterInfo/"})
    .then(result => {
      this.setData({
        noteInfo: result.data.noteInfo,
      })
    })
  },
  getCityList(){
    request({ url: appConfig.apiBase + "city/"})
    .then(result => {
      this.setData({
        cityInfo: result.data.cityInfo,
      })   
    })
  }
})