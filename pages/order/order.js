import * as appConfig from '../../app_config';
import {request} from "../../request/index";

Page({
  data: {
    show: false,
    dateInfo: '2020-05-15',
    FMLMenu: [],
    Mealtime: Date.now(),
    orderstatus: false,
    orderid: 1
  },
  orderstatuschange(e) {
    let orderstatus = e.detail.value.map(Number)[0];
    let orderinfo = this.data.FMLMenu[orderstatus]
    console.log(orderinfo)
    this.setData({
      // orderstatus
    })
  },
  getOrderInfo(){
    request({ url: appConfig.apiBase + "/FMLMenu/"})
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