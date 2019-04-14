//index.js
//获取应用实例
var app = getApp()
var localdata = require('../../utils/markersData.js');
Page({
  data:{
    focus:false,        
    selectHide:false,
    inputValue:"",        //搜索输入框的值
    getSearch:[],
    modalHidden:true,
    clearflag:false,       //清除按钮标志位
    hiszoneflag:true,
    idindex:"",
    StorageFlag: false,         //显示搜索记录标志位
    adapterSource: [ "南门", "北门", "南教", "讲堂群南堂" ,"体育馆", "塑胶运动场", "荟萃苑餐厅", "玉兰苑餐厅",
      "学生公寓1号楼", "学生公寓2号楼", "维客超市", "利群超市",      "三才合韵"],//本地匹配源
    bindSource: [],//绑定到页面的数据，根据用户输入动态变化
  },
  
  bindInput:function(e){
    var prefix = e.detail.value//用户实时输入值
    var newSource = []//匹配的结果
    if (prefix != "") {
      this.data.adapterSource.forEach(function (e) {
        if (e.indexOf(prefix) != -1) {
          newSource.push(e)
        }
      })
    }
    // 将所匹配到的存入数组
    if (newSource.length != 0) {
      this.setData({
        bindSource: newSource,
        hiszoneflag: false
      })
    } else {
      this.setData({
        bindSource: []
      })
    }

     this.setData({
       focus: true,   
       inputValue:e.detail.value,
     })
     console.log('bindInput'+this.data.inputValue)
    //设计当有输入时材显示清除按钮
     if (this.data.inputValue.length!==0)
       {
       this.setData({
         clearflag: true
       })
         }
     if (this.data.inputValue.length == 0) {
       this.setData({
         clearflag: false
       })
     }
  },
  itemtap: function (e) {
    this.setData({
      inputValue: e.target.id,
      bindSource: [],
    })
  },

  //搜索存储
  setSearchStorage:function(){
    let data;
    var that = this;
    let localStorageValue = [];
    if(this.data.inputValue != ''){
      //调用API从本地缓存中获取数据
      var searchData = wx.getStorageSync('searchData') || []
      StorageFlag: true,
      searchData.push({
        id:searchData.length,
        title:that.data.inputValue
      })
      wx.setStorageSync('searchData', searchData)
      //console.log('searchData' + that.data.inputValue);
      var inputtitle = that.data.inputValue;
      var idx = localdata.fetdata(inputtitle);
      //console.log('id' + idx);
      //把获取的id存到app.js 跳转到导航
      app.data.siteId = idx;
      if (idx != null) {   
        //输入地图导航
        wx.navigateTo({
          url: '../navMap/navMap'
        })
      }
      else  
      {//地点输入不匹配提示
        wx.showModal({
          title: '提示',
          content: '未找到目标地点T^T',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
    }else{
      console.log('输入为空！')
    }
   
  },

  //点击缓存搜索列表 
 research:function(e){
   var that = this;
   var index = parseInt(e.currentTarget.id);
   for (var j = 0; j < that.data.getSearch.length; j++) {
     if (j == index) {
       //将所选的搜索历史加到搜素框
       this.setData({
         inputValue: that.data.getSearch[j].title,
         StorageFlag: false,
         clearflag: true,
       })
     }
   }
   if (this.data.inputValue != '') {
     //请求搜索记录
   }
 },
  modalChangeConfirm:function(){
      wx.setStorageSync('searchData',[])
      this.setData({
        modalHidden:true
      })
      var _this = this;
      _this.setData({
        getSearch:''
      })
  },
  modalChangeCancel:function(){
      this.setData({
        modalHidden:true
      })
  },
  //清除缓存记录
  clearSearchStorage:function(){
     this.setData({
        modalHidden:false,
        StorageFlag: false, 
        clearflag: false,
    })
    // this.onLoad();
  },
  onLoad: function() {
    //console.log('search is onLoad');
  },
  onShow:function(){
    var getSearch = wx.getStorageSync('searchData');
    this.setData({
      getSearch:getSearch,
      inputValue:''
    })
    //console.log('search is onshow')
  },
  onHide:function(){
   
  },
  bindchange:function(e){
    
  },
  clearInput:function(){
    this.setData({
       inputValue:'',
       clearflag: false,
     })
  },
})