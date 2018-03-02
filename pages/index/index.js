//index.js
//获取应用实例
const app = getApp()

Page({
  onShareAppMessage: function (res) {
    if (res.from === 'menue') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '转发',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  data: {
 
  },
  //事件处理函数
  changeToContent: function() {
    wx.navigateTo({
      url: '../content/content'
    })
  },
  onLoad: function () {

   
  }

})
