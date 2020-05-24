import * as appConfig from '../../app_config';

Page({
  data: {
    show: false,
    dateInfo: '2020-05-15',
    FMLMenu: [],
    Mealtime: new Date(),
  },
  submit: function (e) {

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