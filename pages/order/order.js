import * as appConfig from '../../app_config';

Page({
  data: {
    show: false,
    dateInfo: '2020-05-15',
    FMLMenu: [],
    Mealtime: Date.now(),
    orderstatus: false
  },
  submit: function (e) {

  },
  orderstatuschange(e) {
    console.log(e)
    let orderstatus = e.detail.value;
    this.setData({
      // orderstatus
    })
  },

  showDatePickerPlus: function () {
    this.setData({
      show: true
    })
  },
  onLoad: function () {
      wx.request({
        url: appConfig.apiBase + '/FMLMenu',
        success: (res) => {
          console.log(res.data.FMLMenu);
          this.setData({
            FMLMenu: res.data.FMLMenu,
          })
        }
      })
      
  },
})