const app = getApp()

Page({
  data: {},

  onLoad: function () {

  },
  onGotUserInfo: function (e) {
    console.log(e);
    const {
      userInfo
    } = e.detail;
    if (userInfo) {
      wx.setStorageSync('userinfo', userInfo)
      wx.navigateTo({
        url: '../index/index',
      });
    } else {
      wx.showToast({
        title: '登录信息获取失败！',
        icon: "none",
        duration: 1000,
        mask: true
      })
    }


    // if (e.detail.userInfo) {
    //   app.globalData.userInfo = e.detail.userInfo
    //   wx.navigateTo({
    //     url: '../index/index'
    //   })
    // } else {
    //   wx.showToast({
    //     title: '登录信息获取失败！',
    //     icon: "none",
    //     duration: 1000,
    //     mask: true
    //   })
    // }
  }
})