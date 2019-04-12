// start.js
import Util from '../../utils/picadjust.js';
var obj, disx, disy,offset, transformHorizon = 0,
  transformVertical = 0;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc1: 'img/UPClogo.png',//启动页logo
    indexImg: 'img/allview.png',//启动页背景图
    imageWidth1: 0,//图片自适应
    imageHeight1: 0,
    imageWidth2: 0,
    imageHeight2: 0,
    transformHorizon: 0,
    transformVertical: 0,
    tapanimation1: {},
    tapanimation2: {},
    tapanimation3: {},
    tapanimation4: {},
    ver: app.globalData.ver,//版本号
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //1. 背景图重力感应漂移
  onLoad: function(options) {
    //1.1 初始参数
    obj = this;
    disx = 3;
    disy = 3;
    offset = 24;
    // 1.2 加速度计转态检测
    wx.onAccelerometerChange(function(res) {
      if (res.x > 0 && transformHorizon < (offset)) {
        transformHorizon += disx;
      } else if (res.x < 0 && transformHorizon > -(offset)) {
        transformHorizon -= disx;
      }
      if (res.y > 0 && transformVertical > -(offset)) {
        transformVertical -= disy;
      } else if (res.y < 0 && transformVertical < (offset)) {
        transformVertical += disy;
      }
      obj.setData({
        transformHorizon: transformHorizon,
        transformVertical: transformVertical
      });
    })
  },

  //2. 图片放缩处理
  imageLoad1: function(e) {
    //2.1 获取图片的原始宽度和高度 
    let originalWidth = e.detail.width;
    let originalHeight = e.detail.height;
    //2.2 调整图片尺寸
    let imageSize = Util.imageZoomWidthUtil(originalWidth, originalHeight, 130);
    this.setData({
      imageWidth1: imageSize.imageWidth,
      imageHeight1: imageSize.imageHeight
    });
  },
  imageLoad2: function(e) {
    //获取图片的原始宽度和高度 
    let originalWidth = e.detail.width;
    let originalHeight = e.detail.height;
    let imageSize = Util.imageZoomWidthUtil(originalWidth, originalHeight, 750);
    this.setData({
      imageWidth2: imageSize.imageWidth,
      imageHeight2: imageSize.imageHeight
    });
  },

  //3. 点击事件处理
  //3.1 进入石大简介
  tapintro: function(event) {
    var taptarget = event.target.id;
    var that = this;
    console.log(taptarget);
    console.log("进入石大简介");
    // wx.navigateTo({
    //   url: '../../pages/introduce/introduce',
    // });
    //点按效果动画
    let tapanimation1 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    });
    tapanimation1.scale(1.05, 1.05).step().scale(1.0, 1.0).step();
    that.setData({
      tapanimation1: tapanimation1.export()
    });
  },
  //3.2 进入石大导航
  tapmap: function (event) {
    var taptarget = event.target.id;
    var that = this;
    console.log(taptarget);
    console.log("进入石大导航");
    // wx.navigateTo({
    //   url: '../../pages/navigation/navigation',
    // })
    //点按效果动画
    let tapanimation2 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    });
    tapanimation2.scale(1.05, 1.05).step().scale(1.0, 1.0).step();
    that.setData({
      tapanimation2: tapanimation2.export()
    });
  },
  //3.3 进入石大全景
  tapallview: function (event) {
    var taptarget = event.target.id;
    var that = this;
    console.log(taptarget);
    console.log("进入石大全景");
    // wx.navigateTo({
    //   url: '../../pages/allview/allview',
    // });
    //点按效果动画
    let tapanimation3 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    });
    tapanimation3.scale(1.05, 1.05).step().scale(1.0, 1.0).step();
    that.setData({
      tapanimation3: tapanimation3.export()
    });
  },
  //3.4 进入帮助反馈
  taphelp: function (event) {
    var taptarget = event.target.id;
    var that = this;
    console.log(taptarget);
    console.log("进入帮助反馈");
    // wx.navigateTo({
    //   url: '../../pages/help/help',
    // });
    //点按效果动画
    let tapanimation4 = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    });
    tapanimation4.scale(1.05, 1.05).step().scale(1.0, 1.0).step();
    that.setData({
      tapanimation4: tapanimation4.export()
    });
  },
})