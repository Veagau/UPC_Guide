// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideview:true,
  },
  tapcopy:function(e){
    var tapTarget = e.target.id;
    console.log('点击'+tapTarget);
    if(tapTarget=='addr')
    {
      wx.setClipboardData({
        data: 'demo@example.com',
      })
    };
  },
  taplogo:function(e){
    var _this = this;
    _this.setData({
      hideview:(!_this.data.hideview),
    });
    console.log('Done!');
  }
})