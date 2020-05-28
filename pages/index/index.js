import * as appConfig from '../../app_config';
import {
  request
} from "../../request/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cityInfo: [
      // {
      //   city_id: 1,
      //   city_name: "邢台市"
      // },
      // {
      //   city_id: 2,
      //   city_name: "北京市"
      // },
      // {
      //   city_id: 3,
      //   city_name: "黄山市"
      // },
      // {
      //   city_id: 4,
      //   city_name: "上海市"
      // },
      // {
      //   city_id: 5,
      //   city_name: "恩施"
      // }
    ],
    city_id: 0,
    noteInfo: [],


  },


  bindPickerChange: function (e) {
    this.setData({
      city_id: e.detail.value,

    })
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
    request({ url: appConfig.apiBase + "/noterInfo/"})
    .then(result => {
      this.setData({
        noteInfo: result.data.noteInfo,
      })
    })
  },
  getCityList(){
    request({ url: appConfig.apiBase + "/city/"})
    .then(result => {
      this.setData({
        cityInfo: result.data.cityInfo,
      })
      
    })
    .then((result) => {
      console.log(result)
    })
    
  }
})