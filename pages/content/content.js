const app = getApp()
Page({
  onShareAppMessage: function (res) {
    if (res.from === 'menue') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '转发',
      path: '/pages/content/content',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  data: {
      select1:true,
      select2:false,
      select3:false,
      select4:false,
      select5:false,
      current:0,
      scale:13,
      array: ["一日游（路线1）", "一日游（路线2）"],
      index: 0,
      mapheight: '64%',
      showactivities:false,
      showmap:true,
      activities:[],
      showcontents: [
        {
          "id": 0,
          "name": "环球金融中心",
          "nametotal": "东方明珠广播电视塔",
          "latitude": 31.2348700000,
          "longitude": 121.5074000000,
          "placeType": "景点",
          "address": "上海市杨浦区国康路100号1303K室",
          "detailImage": "../../images/places/detail_dongfangmingzhu.jpg",
          "timeToVisit": "建议浏览时长 0.5-2小时",
          "openTime": "星期一至星期日 10:00-21:00",
          "instruction": "东方明珠广播电视塔是上海的标志性文化景观之一，位于浦东新区陆家嘴，塔高约468米。该建筑于1991年7月兴建，1995年5月投入使用，承担上海6套无线电视发射业务，地区覆盖半径80公里。",
          "imageUrl": "../../images/places/huanqiujinrong.jpg"
        },
        {
          "id": 1,
          "latitude": 31.16873,
          "longitude": 121.42134,
          "placeType": "景点",
          "address": "上海市杨浦区国康路100号1303K室",
          "name": "东方明珠广播电视塔",
          "imageUrl": "../../images/places/huanqiujinrong.jpg"
        },
        {
          "id": 2,
          "latitude": 31.2396900000,
          "longitude": 121.4997200000,
          "placeType": "景点",
          "address": "上海市杨浦区国康路100号1303K室",
          "name": "东方明珠广播电视塔",
          "imageUrl": "../../images/places/huanqiujinrong.jpg"
        },
        {
          "id": 3,
          "latitude": 31.16271,
          "longitude": 121.41132,
          "placeType": "景点",
          "address": "上海市杨浦区国康路100号1303K室",
          "name": "东方明珠广播电视塔",
          "imageUrl": "../../images/places/huanqiujinrong.jpg"
        },
        {
          "id": 4,
          "latitude": 31.16471,
          "longitude": 121.41889,
          "placeType": "景点",
          "address": "上海市杨浦区国康路100号1303K室",
          "name": "东方明珠广播电视塔",
          "imageUrl": "../../images/places/huanqiujinrong.jpg"
        }
      ],
      showflag:true,
      closeflag:false,
      markers:[
        {
        iconPath:"/images/eye.png",
        id: 0,
        title:"",
        latitude: 31.2348700000,
        longitude: 121.5074000000,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
        {
          iconPath: "/images/eye.png",
          id: 1,
          title: "",
          latitude: 31.16873,
          longitude: 121.42134,
          width: 30,
          height: 30,
          anchor: { x: .5, y: 0.8 },
        },
        {
          iconPath: "/images/eye.png",
          id: 2,
          title: "",
          latitude: 31.2396900000,
          longitude: 121.4997200000,
          width: 30,
          height: 30
        },
        {
          iconPath: "/images/eye.png",
          id: 3,
          title: "",
          latitude: 31.16271,
          longitude: 121.41132,
          width: 30,
          height: 30,
          anchor: { x: .5, y: 0.8 },
        },
        {
          iconPath: "/images/eye.png",
          id: 4,
          title: "",
          latitude: 31.16471,
          longitude: 121.41889,
          width: 30,
          height: 30,
          anchor: { x: .5, y: 0.8 },
        },
    
      ],
      polyline: [{
        points: [],
        color: "#69D264",
        width: 4,
        dottedLine: false,
        arrowLine:true
      }],
   
  },
  onLoad: function () {
    var that=this;
    app.getLocationInfo(function (locationInfo) {
      console.log('map', locationInfo);
      that.setData({
        longitude: locationInfo.longitude,
        latitude: locationInfo.latitude,
        'showcontents[0].onshow': true,
      })
    })
  },
  showPlaces:function(){
    var places = [
      {
        "id": 0,
        "name": "环球金融中心",
        "nametotal": "东方明珠广播电视塔",
        "latitude": 31.2348700000,
        "longitude": 121.5074000000,
        "placeType": "景点",
        "address": "上海市杨浦区国康路100号1303K室",
        "detailImage": "../../images/places/detail_dongfangmingzhu.jpg",
        "timeToVisit": "建议浏览时长 0.5-2小时",
        "openTime": "星期一至星期日 10:00-21:00",
        "instruction": "东方明珠广播电视塔是上海的标志性文化景观之一，位于浦东新区陆家嘴，塔高约468米。该建筑于1991年7月兴建，1995年5月投入使用，承担上海6套无线电视发射业务，地区覆盖半径80公里。",
        "imageUrl": "../../images/places/huanqiujinrong.jpg"
      },
      {
        "id": 1,
        "latitude": 31.16873,
        "longitude": 121.42134,
        "placeType": "景点",
        "address": "上海市杨浦区国康路100号1303K室",
        "name": "东方明珠广播电视塔",
        "imageUrl": "../../images/places/huanqiujinrong.jpg"
      },
      {
        "id": 2,
        "latitude": 31.2396900000,
        "longitude": 121.4997200000,
        "placeType": "景点",
        "address": "上海市杨浦区国康路100号1303K室",
        "name": "东方明珠广播电视塔",
        "imageUrl": "../../images/places/huanqiujinrong.jpg"
      },
      {
        "id": 3,
        "latitude": 31.16271,
        "longitude": 121.41132,
        "placeType": "景点",
        "address": "上海市杨浦区国康路100号1303K室",
        "name": "东方明珠广播电视塔",
        "imageUrl": "../../images/places/huanqiujinrong.jpg"
      },
      {
        "id": 4,
        "latitude": 31.16471,
        "longitude": 121.41889,
        "placeType": "景点",
        "address": "上海市杨浦区国康路100号1303K室",
        "name": "东方明珠广播电视塔",
        "imageUrl": "../../images/places/huanqiujinrong.jpg"
      }
    ]
    this.scaleEffect();
    var mark=[
      {
        iconPath: "/images/eye.png",
        id: 0,
        title: "",
        latitude: 31.2348700000,
        longitude: 121.5074000000,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/eye.png",
        id: 1,
        title: "",
        latitude: 31.16873,
        longitude: 121.42134,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/eye.png",
        id: 2,
        title: "",
        latitude: 31.2396900000,
        longitude: 121.4997200000,
        width: 30,
        height: 30
      },
      {
        iconPath: "/images/eye.png",
        id: 3,
        title: "",
        latitude: 31.16271,
        longitude: 121.41132,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/eye.png",
        id: 4,
        title: "",
        latitude: 31.16471,
        longitude: 121.41889,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
    ]
     this.setData({
       select1:true,
       select2: false,
       select3: false,
       select4: false,
       select5: false,
       mapheight: '64%',
       showcontents:places,
       markers:mark,
       latitude: places[0].latitude,
       longitude: places[0].longitude,
       showflag: true,
       closeflag: false,
       showactivities: false,
       showmap: true,
       current:0,
       'markers[0].iconPath': "/images/places/bigeye.png",
       'markers[0].width':50,
       'markers[0].height':45,
       'showcontents[0].onshow':true,
       'polyline[0].points': []
     })
  },
  showMalls:function(){
    this.scaleEffect();

    var malls=[
      {
        "id": 0,
        "latitude": 31.16873,
        "longitude": 121.42034,
        "placeType": "购物",
        "name":"正大广场",
        "imageUrl":"../../images/malls/zhengda.jpg"
        },
      {
        "id": 1,
        "latitude": 31.16231,
        "longitude": 121.41332,
        "name": "正大广场",
        "placeType": "购物",
        "imageUrl": "../../images/malls/zhengda.jpg"
      },
      {
        "id": 2,
        "latitude": 31.16372,
        "longitude": 121.41784,
        "name": "正大广场",
        "placeType": "购物",
        "imageUrl": "../../images/malls/zhengda.jpg"
      }
    ]
    var mark = [
      {
        iconPath: "/images/bag.png",
        id: 0,
        title: "",
        latitude: 31.16873,
        longitude: 121.42034,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/bag.png",
        id: 1,
        title: "",
        latitude: 31.16231,
        longitude: 121.41332,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/bag.png",
        id: 2,
        title: "",
        latitude: 31.16372,
        longitude: 121.41784,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
  
    ]
    this.setData({
      select1: false,
      select2: true,
      select3: false,
      select4: false,
      select5: false,
      mapheight: '64%',
      showcontents:malls,
      markers:mark,
      latitude: malls[0].latitude,
      longitude: malls[0].longitude,
      showflag: true,
      closeflag: false,
      showactivities: false,
      showmap: true,
      current: 0,
      'markers[0].iconPath': "/images/malls/bigbag.png",
      'markers[0].width': 50,
      'markers[0].height': 45,
      'showcontents[0].onshow': true,
      'polyline[0].points': []
    })
  },
  showFoods:function(){
    var foods = [
      {
        "id": 0,
        "latitude": 31.16331,
        "longitude": 121.42134,
        "placeType": "美食",
        "name": "沪上名吃外婆家",
        "imageUrl": "../../images/foods/waipojia.jpg"
      },
      {
        "id": 1,
        "latitude": 31.16271,
        "longitude": 121.41132,
        "placeType": "美食",
        "name": "沪上名吃外婆家",
        "imageUrl": "../../images/foods/waipojia.jpg"
      },
      {
        "id": 2,
        "latitude": 31.16371,
        "longitude": 121.42884,
        "placeType": "美食",
        "name": "沪上名吃外婆家",
        "imageUrl": "../../images/foods/waipojia.jpg"
      }
    ]
    this.scaleEffect();
    var mark=[

      {
        iconPath: "/images/fork.png",
        id: 0,
        title: "",
        latitude: 31.16331,
        longitude: 121.42134,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/fork.png",
        id: 1,
        title: "",
        latitude: 31.16271,
        longitude: 121.41132,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/fork.png",
        id: 2,
        title: "",
        latitude: 31.16371,
        longitude: 121.42884,
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
    ]
    this.setData({
      select1: false,
      select2: false,
      select3: true,
      select4: false,
      select5: false,
      showcontents:foods,
      mapheight: '64%',
      markers:mark,
      latitude: foods[0].latitude,
      longitude: foods[0].longitude,
      showflag: true,
      closeflag: false,
      showactivities: false,
      showmap: true,
      current: 0,
      'markers[0].iconPath': "/images/foods/bigfork.png",
      'markers[0].width': 50,
      'markers[0].height': 45,
      'showcontents[0].onshow': true,
      'polyline[0].points':[]
    })
  },
  showTravels:function(){
    this.setData({
      select1: false,
      select2: false,
      select3: false,
      select4: true,
      select5: false,
      showflag: true,
      closeflag: false,
      showmap: true,
      mapheight: '64%',
    })
  },


  showActivities:function(){
var activities=[
  {
    "id": 0,
    "name":"活动1",
    "nametotal": "上海美术馆年度大展《见者的书信：约瑟夫·博伊斯x白南准》",
    "placeType": "展览演出",
    "address": "杨浦区国康路100号1303K室",
    "latitude": 31.2348700000,
    "longitude": 121.5074000000,
    "imageUrlOut": "../../images/places/huanqiujinrong.jpg",
    "detailImage": "../../images/places/detail_dongfangmingzhu.jpg",
    "instruction": "见者的书信：约瑟夫·博伊斯x白南准展览将同时呈现德国艺术家约瑟夫·博伊斯（Beuys,1921-1986）与美籍韩裔艺术家白南准（NamJune Paik，1932-2006）艺术生涯中的重要代表作品，并深入探讨两位艺术家在20世纪艺术浪潮中的合作与密切关系。",
    "timeToVisit": "建议浏览时长 1.5-3小时",
    "openTime": "03-10 19:30 至03-15 22：00",
  },
  {
    "name": "活动2",
    "imageUrlOut": "../../images/foods/waipojia.jpg"
  },
  {
    "name": "活动3",
    "imageUrlOut": "../../images/malls/zhengda.jpg"
  }

]
    this.setData({
      select1: false,
      select2: false,
      select3: false,
      select4: false,
      select5: true,
      showflag: false,
      closeflag: false,
      activities:activities,
      showactivities: true,
      showmap:false,
    })
  },
  close:function(){
    this.setData({
    mapheight:'88%',
    showflag:false,
    closeflag: true,
  })
  },
  open: function () {
    this.setData({
      mapheight: '64%',
      closeflag: false,
      showflag: true
    })
  },

  placedetail:function(e){
    var content = JSON.stringify(e.currentTarget.dataset.content)
    wx.navigateTo({
      url: "../placedetail/detail?content=" + content
    })
  },

  activitiesdetail:function(e){
    var content = JSON.stringify(e.currentTarget.dataset.content)
    wx.navigateTo({
      url: "../activitiesdetail/detail?content=" + content
    })
    console.log(content);
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    var route=[];
    var moveTo={};
    var placesarray=[];
    var markersarray=[];
    var routes1=
    [
        {
          "id": 0,
          "name": "环球金融中心",
          "nametotal": "东方明珠广播电视塔",
          "latitude": 31.2348700000,
          "longitude": 121.5074000000,
          "placeType": "景点",
          "address": "上海市杨浦区国康路100号1303K室",
          "detailImage": "../../images/places/detail_dongfangmingzhu.jpg",
          "timeToVisit": "建议浏览时长 0.5-2小时",
          "openTime": "星期一至星期日 10:00-21:00",
          "instruction": "东方明珠广播电视塔是上海的标志性文化景观之一，位于浦东新区陆家嘴，塔高约468米。该建筑于1991年7月兴建，1995年5月投入使用，承担上海6套无线电视发射业务，地区覆盖半径80公里。",
          "imageUrl": "../../images/places/huanqiujinrong.jpg"
        },
        {
          "id": 1,
          "latitude": 31.16873,
          "longitude": 121.42134,
          "placeType": "景点",
          "address": "上海市杨浦区国康路100号1303K室",
          "name": "东方明珠广播电视塔",
          "imageUrl": "../../images/places/huanqiujinrong.jpg"
        },
        {
          "id": 2,
          "latitude": 31.16873,
          "longitude": 121.42034,
          "placeType": "购物",
          "name": "正大广场",
          "imageUrl": "../../images/malls/zhengda.jpg"
        },
        {
          "id": 3,
          "latitude": 31.16331,
          "longitude": 121.42134,
          "placeType": "美食",
          "name": "沪上名吃外婆家",
          "imageUrl": "../../images/foods/waipojia.jpg"
        },
    ]

    var markers1=[
      {
        iconPath: "/images/eye.png",
        id: 0,
        title: "",
        latitude: 31.2348700000,
        longitude: 121.5074000000,
        callout: {
          content: "第一天 08：30\n上海环球金融中心是上海地标建筑",
          color:"#0B9EFB",
          padding: 5, 
          fontSize: 11, 
          borderRadius: 5, 
          bgColor: "#ffffff", 
          display: 'ALWAYS'
          }, 
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/eye.png",
        id: 1,
        title: "",
        latitude: 31.16873,
        longitude: 121.42134,
        callout: {
          content: "第一天 10：30\n上海著名风景点",
          color: "#0B9EFB",
          padding: 5,
          fontSize: 11,
          borderRadius: 5,
          bgColor: "#ffffff",
          display: 'ALWAYS'
        }, 
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/fork.png",
        id: 2,
        title: "",
        latitude: 31.16873,
        longitude: 121.42034,
        callout: {
          content: "第一天 12：30\n上海美食广场",
          color: "#0B9EFB",
          padding: 5,
          fontSize: 11,
          borderRadius: 5,
          bgColor: "#ffffff",
          display: 'ALWAYS'
        }, 
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },
      {
        iconPath: "/images/bag.png",
        id: 3,
        title: "",
        latitude: 31.16331,
        longitude: 121.42134,
        callout: {
          content: "第一天 14：30\n上海正大广场",
          color: "#0B9EFB",
          padding: 5,
          fontSize: 11,
          borderRadius: 5,
          bgColor: "#ffffff",
          display: 'ALWAYS'
        }, 
        width: 30,
        height: 30,
        anchor: { x: .5, y: 0.8 },
      },

    ]

    var route1=[
      {
        latitude: 31.2348700000,
        longitude: 121.5074000000,    
      },
      {
        latitude: 31.16873,
        longitude: 121.42134,  
      },
      {
        latitude: 31.16873, 
        longitude: 121.42034,   
      },
        {
          latitude: 31.16331,
          longitude: 121.42134,    
      }
    ];

   if(e.detail.value==0){
      route=route1;
      placesarray=routes1;
      markersarray=markers1;
      this.scaleEffect();
      moveTo = {
        latitude: route1[0].latitude,
        longitude: route1[0].longitude
        }
   }
   else if (e.detail.value==1){
     route = route2;
     this.scaleEffect();
     moveTo = {
       latitude: route2[0].latitude,
       longitude: route2[0].longitude
     }
   }
    this.setData({
      closeflag: false,
      showflag: true,
      index: e.detail.value,
      longitude:moveTo.longitude,
      latitude:moveTo.latitude,
      showcontents:placesarray,
      markers:markersarray,
      'showcontents[0].onshow': true,
      current: 0,
      'polyline[0].points':route
    })
console.log(this.data.polyline)
  },

  navTo:function(item){
    var detail = item.target.dataset.content;
    wx.openLocation({
      latitude: detail.latitude,
      longitude: detail.longitude,
      scale: 18,
      name: detail.name,
      address:detail.address
    }) 
  },

  scaleEffect:function(){
    var scaleNumber = 12
    var that = this;
    var big = setInterval(function () {
      that.setData({
        scale: scaleNumber
      })
      scaleNumber++;
      if (scaleNumber == 15) {
        clearInterval(big);
        that.setData({
          scale: 15
        })
      }
    }, 250)
  },

nowis:function(event){
  var index = event.detail.current;
  var currentitem=this.data.showcontents[index];
  var placetype=currentitem.placeType;

//遍历所有地点使它们字体全变灰色
  for (let value of this.data.showcontents) {
    let indexarray=value.id;
    let offshow = "showcontents[" + indexarray + "].onshow";
    this.setData({
      [offshow]: false,
    })
  }

  for (let value of this.data.markers) {
    let indexarray = value.id;
    let placetype = this.data.showcontents[indexarray].placeType;
    console.log(value.id)
    let offshow = "markers[" + indexarray + "].iconPath";
    let offshowwidth = "markers[" + indexarray + "].width";
    let offshowheight = "markers[" + indexarray + "].height";
    var picturesmall;
    if(placetype=="景点"){
      picturesmall = "/images/eye.png"

    }
    else if (placetype == "购物"){
      picturesmall = "/images/bag.png"
    }
    else if (placetype == "美食") {
      picturesmall = "/images/fork.png"
    }
    this.setData({
      [offshow]: picturesmall,
      [offshowwidth]: 30,
      [offshowheight]: 30
    })
  }

  //当前展示的地点改变样式
  var onshow = "showcontents[" + index + "].onshow";
  var onshoweye = "markers[" + index + "].iconPath";
  var onshoweyewidth = "markers[" + index + "].width";
  var onshoweyeheight = "markers[" + index + "].height";
  var picturebig;
  if (placetype == "景点") {
    picturebig = "/images/places/bigeye.png"
  }
  else if (placetype == "购物") {
    picturebig = "/images/malls/bigbag.png"
  }
  else if (placetype == "美食") {
    picturebig = "/images/foods/bigfork.png"
  }
  this.setData({
    latitude: this.data.markers[index].latitude,
    longitude: this.data.markers[index].longitude,
    [onshoweye]: picturebig,
    [onshoweyewidth]:50,
    [onshoweyeheight]:45,
    [onshow]:true,
  })

},
markertap:function(e){
  var id=e.markerId;
  console.log(id);
  this.setData({
    current:id
  })
}
})
