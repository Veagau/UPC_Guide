// pages/profile/profile.js
var app = getApp();
var markers = require('../../utils/markersData.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    siteProfile: '',

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
    var _this = this;
    _this.getProfile();
   
  },
  getProfile: function () {
    //根据siteId，取简介
    var _this = this;
    var clickId = app.data.siteId;
    var profile = markers.markersProfile(clickId);
    _this.setData({
      siteProfile: profile,
    })
  },
  //跳转地图界面
  navToMap: function () {
   wx.navigateTo({
     url: '../navMap/navMap'
   })
  },

})