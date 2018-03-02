const app = getApp()
Page({
  onShareAppMessage: function (res) {
    if (res.from === 'menue') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '转发',
      path: '/pages/activities/detail',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  data: {
    content: '',
    distance: ''
  },
  onLoad: function (options) {
    var that = this;
    var content = JSON.parse(options.content);
    app.getLocationInfo(function (locationInfo) {
      console.log('map', locationInfo);

      var lat1 = locationInfo.latitude;  //就算自己位置与目标地点的位置
      var lng1 = locationInfo.longitude;
      var lat2 = content.latitude;
      var lng2 = content.longitude;
      var rad1 = lat1 * Math.PI / 180.0;
      var rad2 = lat2 * Math.PI / 180.0;
      var a = rad1 - rad2;
      var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
      var r = 6378137;
      var distance = (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2)
        + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))) / 1000
      console.log(distance.toFixed(1))
      that.setData({
        content: content,
        distance: distance.toFixed(1)
      })
    })
  },


  navTo: function (item) {
    var detail = item.target.dataset.content;
    wx.openLocation({
      latitude: detail.latitude,
      longitude: detail.longitude,
      scale: 18,
      name: detail.name,
      address: detail.address
    })
  }
})
