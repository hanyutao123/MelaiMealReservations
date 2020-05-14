
Page({
  data: {
    show: false,
    dateInfo: {
      dateStr: '2020-05-15'
    },
    BreaMenu: {
      BreaMenu1: '红豆薏米粥',
      BreaMenu2: '馒头',
      BreaMenu3: '小咸菜',
      BreaMenu4: '白煮蛋',
    },
    DinnerMenu: {
      DinnerMenu1: '小米粥',
      DinnerMenu2: '包子',
    },
    LunchMenu: {
      LunchMenu1: '土豆烧排骨',
      LunchMenu2: '番茄炒蛋',
      LunchMenu3: '手撕包菜',
      LunchMenu4: '紫菜蛋花',
    }
    
    

  },
  submit: function(e) {
    console.log(e);
    console.log('日期类型：' + e.detail.dateType)
    console.log('是否显示年份：' + e.detail.showYear)
    console.log('日期字符串：' + e.detail.dateStr)
    console.log(e.detail.dateInfo)
    this.setData({
      dateInfo: e.detail
    })
  },
  showDatePickerPlus: function() {
    this.setData({
      show: true
    })
  },
  onLoad: function () {
    
  },
})