import * as appConfig from '../../app_config';
import {
  request
} from "../../request/index";

Page({
  data: {
    show: false,
    dateInfo: '2020-05-15',
    FMLMenu: [],
    Mealtime: Date.now(),
    orderid: 1,
    orderstatus: []

  },
  orderstatuschange(e) {
    let orderstatus = e.detail.value;
    console.log(orderstatus)
    this.setData({
      orderstatus
    })
  },
  sendOrderInfo(e) {
    let orderInfo = this.data.orderstatus;
    console.log(orderInfo)
    if (orderInfo.length == 0) {
      wx.showToast({
        title: '未选中配餐信息',
        icon: 'none',
        duration: 1000
      })
      return false
    }else{
      wx:wx.navigateTo({
        url: '/pages/orderlogs/orderlogs',
      }),
      request({
        url:appConfig.apiBase + "/addorder/"
      }).then(result => {
        console.log(result)
      })
    }


  },
  getOrderInfo() {
    request({
        url: appConfig.apiBase + "/FMLMenu/"
      })
      .then(result => {
        this.setData({
          FMLMenu: result.data.FMLMenu,
        })
      })
  },
  showDatePickerPlus: function () {
    this.setData({
      show: true
    })
  },
  onLoad: function () {
    this.getOrderInfo()
  },
})