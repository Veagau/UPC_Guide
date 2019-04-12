var app = getApp()

var idinfolist = [
  { "code": "1953", "text": '时称北京石油学院，是新中国第一所石油高等学府。' },
  { "code": "1969", "text": '学校迁至胜利油田所在地——山东东营，更名为华东石油学院。' },
  { "code": "1981", "text": '在北京石油学院原校址内成立华东石油学院北京研究生部。' },
  { "code": "1988", "text": '学校更名为石油大学，逐步形成山东、北京两地办学格局。' },
  { "code": "2004", "text": '教育部批准石油大学（华东）立项建设青岛校区。' },
  { "code": "2005", "text": '学校更名为中国石油大学。' },
  { "code": "2011", "text": '学校完成办学结构调整，主体转移到青岛校区。' }
]

Page({
  data: {
    listData: idinfolist,
    inputValue: '', //用于显示输入语句
    searchinput: '', //用户输入的查询语句
    isChecked1: true,
    isChecked2: false,
    isChecked3: false,
    isChecked4: false,
    iftrue: true,
    ifnumber: 90,
    movies: [
      './images/southgate.jpg',
      './images/godness.jpg',
      './images/library.jpg',
    ]
  },
  onLoad: function () {
  },
  btnClick1: function () {
    this.setData({ 
      ifnumber: 85 ,
      isChecked1: true,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      });
  },
  btnClick2: function () {
    this.setData({ 
      ifnumber: 75 ,
      isChecked1: false,
      isChecked2: true,
      isChecked3: false,
      isChecked4: false,
      scrollTop: 0,
      })
  },
  btnClick3: function () {
    this.setData({ 
      ifnumber: 65 ,
      isChecked1: false,
      isChecked2: false,
      isChecked3: true,
      isChecked4: false,
      scrollTop: 0,
      })
  },
  btnClick4: function () {
    this.setData({ 
      ifnumber: 55 ,
      isChecked1: false,
      isChecked2: false,
      isChecked3: false,
      isChecked4: true,
      scrollTop: 0,
      })
  },
})
