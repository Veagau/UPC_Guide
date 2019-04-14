// pages/allview/allview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allviewlink:'https://wxapp1.720yun.com/t/bc924wadqya',
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    var _this = this;
    console.log(options);
    return {
      title: '石大导览',
      desc: '中国石油大学（华东）全景',
      path: (_this.allviewlink),
    }
  },
})