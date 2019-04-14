// pages/navSingle/navSingle.js
var app = getApp();
//引入数据操作函数
var getMarkers = require('../../utils/markersData.js');
//引入高德地图api
var amapFile = require('../../utils/amap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isStartHidden: true,//导航准备按钮
    map_scale: 16,
    map_longitude: 120.175582,
    map_latitude: 35.941601,
    map_polyline: [],
    markers:[],
    distance: '0',
    cost: '0',
    siteId:'',
    rotate: '',
    devInfo: '',
    comHide: false,//罗盘隐藏
    //默认为石油大学中心
    o_longitude: '',
    o_latitude: '',
    d_longitude: '',
    d_latitude: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    //设备信息获取
    wx.getSystemInfo({
      success: function (res) {
        _this.devInfo = res.model;
        console.log(_this.devInfo);
      }
    })
    //字符串切分
    var ss = _this.devInfo;
    var sss = ss.split('');
    console.log(sss);
    if (sss[0] == "i" && sss[1] == "P") {
      console.log("Luckydog");
      _this.setData({
        comHide: true,
      })
    }
    // 罗盘Api
    wx.onCompassChange(function (res) {
      // 罗盘数据保留两位小数
      var radios = res.direction.toFixed(0);
      _this.setData({
        rotate: 360 - radios,
      })
    });
    //取目的地id
     var siteId = app.data.siteId
    console.log(siteId)
    //取markers数据
    var markers = getMarkers.singalMarker(siteId);
    console.log(markers)
    _this.setData({
      markers: markers
    })
    //获取app.js 里面提前获取的定位
    _this.data.o_latitude = app.data.o_latitude;
    _this.data.o_longitude = app.data.o_longitude;
    //通过id获取目的地经纬度
    var [d_longitude, d_latitude] = getMarkers.get_Lat_Lng(siteId);
    _this.data.d_longitude = d_longitude;
    _this.data.d_latitude = d_latitude;
    //调用高德地图api，获取map_polyline,distance,cost
    var o_longitude = _this.data.o_longitude;
    var o_latitude = _this.data.o_latitude;
    var d_longitude = _this.data.d_longitude;
    var d_latitude = _this.data.d_latitude;
    _this.navigateGao(o_longitude, o_latitude, d_longitude, d_latitude);
  },
 
  //点击开始导航
  navigateStart: function () {
    var _this = this;
    var o_longitude = _this.data.o_longitude;
    var o_latitude = _this.data.o_latitude;
    //定位自身
    _this.setData({
      map_longitude: o_longitude,
      map_latitude:  o_latitude,
      isStartHidden: false,//只出现一个结束按钮
      map_scale:18
    })
  },
  navigateExit: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  //点击后，地图定位为当前位置
  recoverPosition: function () {
    var _this = this;
    
    //设置地图经纬度中心 自身
    var o_longitude = _this.data.o_longitude;
    var o_latitude = _this.data.o_latitude;
    _this.setData({
      map_longitude: o_longitude,
      map_latitude: o_latitude
    })
  },
  //高德api，获取polyline，时间,距离
  navigateGao: function (o_longitude, o_latitude, d_longitude, d_latitude) {

    var _this = this;
    var polyline = [];
    var distance = '0';
    var cost = '0';
    var myAmapFun = new amapFile.AMapWX({ key: 'fa92a9ebc25e98f44e8556d41ae0464c' });
    var origin = o_longitude + ',' + o_latitude;
    var destination =d_longitude + ',' + d_latitude;
    //调用高德不行API
    myAmapFun.getWalkingRoute({
      origin: origin,
      destination: destination,
      success: function (data) {

        var points = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          //console.log(steps)
          for (var i = 0; i < steps.length; i++) {
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        };
        //得到连线点
        polyline = [{
          points: points,
          color: "#0091ff",
          width: 6
        }];

        //得到距离
        if (data.paths[0] && data.paths[0].distance) {
          distance = data.paths[0].distance + '米'
        }
        //得到时间
        if (data.paths[0] && data.paths[0].duration) {
          cost = parseInt(data.paths[0].duration / 60) + '分钟'
        }
        _this.setData({
          map_polyline: polyline,
          distance: distance,
          cost: cost
        })
      },
      fail: function (info) {
        console.log("失败了")
      }
    })
  },
})