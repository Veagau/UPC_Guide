var app = getApp();
//引入数据操作函数
var markers = require('../../utils/markersData.js');
//引入高德地图api
var amapFile = require('../../utils/amap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:60,
    Height:'',
    isMapSpread: false,//地图是否展开
    isListHidden:false,

    siteKind: '',//标签栏标签
    markers: '',//标记点数据
    
    markersNumber: '',//标记点个数
    markersList:'',//标记点列表
    siteProfile: '',//标记点简介
    siteTitle:'',
    
    
    tableNameNow:'',//此时标签名

    map_scale:16,
    map_longitude: 120.175582,
    map_latitude: 35.941601,
    map_polyline: [],
    distance: '0',
    cost: '0',
    rotate: '',
    devInfo:'',
    comHide: false,//罗盘隐藏

    //默认为石油大学中心
    o_longitude: '',
    o_latitude: '',
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //进入后第一个地图默认选择校门
     var _this =this;
     //设备信息获取
    wx.getSystemInfo({
      success: function (res) {
        _this.devInfo = res.model;
        console.log(_this.devInfo);
      }
    })
    //字符串切分
    //ios 系统上 -webkit-transform: rotate({{rotate}}deg)函数执行有误，尚未找到解决办法，故针对ios设备隐去指北针
    var ss = _this.devInfo;
    var sss = ss.split('');
    //console.log(sss);
    if(sss[0]=="i"&&sss[1]=="P")
    {
      console.log("Luckydog");
      _this.setData({
        comHide:true,
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
     _this.changeTable();
    //取出标签栏，默认选择大门
    var siteKind = markers.markersKind();
    for (var i = 0; i < siteKind.length; i++) {
      siteKind[i].display = false;
    }
    siteKind[0].display = true;
    _this.setData({
      siteKind: siteKind
    });
    //获取用户当前位置，并传至app.js 保存
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        _this.data.o_latitude = res.latitude,
        _this.data.o_longitude = res.longitude,
        app.data.o_latitude = res.latitude,
        app.data.o_longitude = res.longitude
      }
    })
  },
  //第一部分 展览
  //点击导航栏标签，如宿舍，将宿舍标记出来,并输出地点个数
  changeTable: function (e) {
    var _this = this;
    //向函数markers传值，查询标记点及其个数
    if(e!= null){//若e不为空值
      //获取当前标签名
      var [markersMap, markersNumber] = markers.markersData(e.target.id);
      var markersList = markers.markersList(e.target.id);

      _this.setData({
        tableNameNow: e.target.id
      })
    }
    else{
      var [markersMap, markersNumber] = markers.markersData("gate");
      var markersList = markers.markersList("gate");
      _this.setData({
        tableNameNow: "gate"
      })
    }
    _this.setData({
      //模块1 更换地图标记点
      markers: markersMap,
      //模块2 更换标记点个数
      markersNumber: markersNumber,
      //模块3 更换标记点列表
      markersList: markersList
    });
  },
  //点击生活，出现分类子模块
  // clickSublife:function(e){
  //   console.log(e.target.id)
  // },
  changeTableCss:function(e){
    //点击导航栏标签时，出现相应css变化
    var  _this = this;
    var siteKind = _this.data.siteKind;
    var tableId = e.target.id;
    //给每个标签附加display属性，默认为false
    for (var i = 0; i < siteKind.length; i++) {
        siteKind[i].display = false;
    }
    _this.setData({ siteKind: siteKind })
    for (var i = 0; i < siteKind.length; i++){
      if (siteKind[i].id== tableId)
      {
        siteKind[i].display = true
      }
    }
    _this.setData({ siteKind: siteKind });
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
  //点击个数显示栏时，隐藏列表，或展开列表
  spreadMap: function () {
    var _this = this;
    _this.setData({
      isMapSpread: !_this.data.isMapSpread,
      isListHidden: !_this.data.isListHidden
    })
    //如果地图展开，放大地图scale
    if (_this.data.isMapSpread == true){
      // var nav_o_d = app.data.nav_o_d;
      _this.setData({
        map_scale:17
      })
    }else{
      _this.setData({
        map_scale:16
      })
    }
  },
  //点击导航图片，向导航函数传目的地id，并跳转函数
  navToMap:function(e){
    // console.log(e);
    var _this = this;
    var id = e.target.id;
    app.data.siteId = id;

    wx.navigateTo({
      url: '../navMap/navMap'
    })
  },
  //点击搜索图标
  navToSearch:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  //点击列表文字
  navToProfile:function (e){
    var _this = this;
    var id = e.target.id
    app.data.siteId =id;
    //跳转导航界面
    wx.navigateTo({
      url: '../profile/profile'
    })
  },
})
