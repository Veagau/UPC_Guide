//utils/markersData.js

//此js文件包括 所需数据 和 操作函数

//数据分为三部分 第一部分data：代表 导航标签栏 下方的地点选项
//第二部分 siteProfile：代表 点击 每个地点选项 的具体介绍
//第三部分 导航栏标签列表

//操作函数


var data=[
  //默认为大学中心 1个
   {
      title:'default',
      iconPath: "images/gate.png",
      id: 'center',
      longitude: 120.175582,
      latitude: 35.941601,
  },
  //地点范例
  //校门两个
  {
    //'北门',
    title: '北门',
    iconPath: "images/gate.png",
    id: 'gate1',
    longitude: 120.175463,
    latitude: 35.946748,
    width: 20,
    height: 30,
  },
  {
    //南门
    title: '南门',
    iconPath: "images/gate.png",
    id: 'gate2',
    latitude: 35.938818,
    longitude: 120.178859,
    width: 20,
    height: 30,
  },
 
  //教学楼两个 
 {
    title: '南教',
    iconPath: "images/teach.png",
    id: 'teach1',
    latitude: 35.941000,
    longitude: 120.177270,
    width: 20,
    height: 30,
  },
 {
  title: '讲堂群南堂',
  iconPath: "images/teach.png",
  id: 'teach2',
    latitude: 35.945235,
    longitude: 120.177412,
  width: 20,
  height: 30,
  },

  //体育场所 2个
  {	
    title: '体育馆',
    iconPath: "images/gym.png",
    id: 'gym1',
    longitude: 120.170640 ,
    latitude: 35.944540,
    width: 20,
    height: 30,
  },
  {
    title: '塑胶运动场',
    iconPath: "images/gym.png",
    id: 'gym2',
    longitude: 120.172480,
    latitude: 35.943410 ,
    width: 20,
    height: 30,
  },

  //食堂 2个
  {
    title: '荟萃苑餐厅',
    iconPath: "images/canteen.png",
    id: 'canteen1',
    latitude: 35.940200,
    longitude: 120.173290,
    width: 20,
    height: 30,
  },
 {
  title: '玉兰苑餐厅',
  iconPath: "images/canteen.png",
  id: 'canteen2',
    latitude: 35.942510,
    longitude: 120.173100,
  width: 20,
  height: 30,
  },

  //宿舍 2个
  {
    title: '学生公寓1号楼',
    iconPath: "images/dorm.png",
    id: 'dorm1',
    latitude: 35.942270,
    longitude: 120.174040,
    width: 20,
    height: 30,
  },
  {
    title: '学生公寓2号楼',
    iconPath: "images/dorm.png",
    id: 'dorm2',
    latitude: 35.941610,
    longitude: 120.174350,
    width: 20,
    height: 30,
    
  },
  
  //生活  两个
  {
    title: '维客超市',
    iconPath: "images/life.png",
    id: 'life1',
    latitude: 35.942019,
    longitude: 120.171923,
    width: 20,
    height: 30,
  },

  {
    title: '利群超市',
    iconPath: "images/life.png",
    id: 'life2',
    latitude: 35.940130,
    longitude: 120.172877,
    width: 20,
    height: 30,
  },
    
  //景点 2个
  {
    title: '荟萃广场',
    iconPath: "images/site.png",
    id: 'site1',
    latitude: 35.941841,
    longitude: 120.172496,
    width: 20,
    height: 30,
  },
  {
    title: '三才合韵',
    iconPath: "images/site.png",
    id: 'site2',
    latitude: 35.943296,
    longitude: 120.178311,
    width: 20,
    height: 30,
  },
];

var siteProfile = [
  //校门 2个
  {
    id: 'gate1',
    title: '北门',
    time: '',
    link: '',
    note: '',
    img: './images/logo.jpg',
    profile: '北门'
  },
  {
    id: 'gate2',
    title: '南门',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: '南门'
  },
  
  //教学 2个
  {
    title: '南教',
    id: 'teach1',
    img: './images/logo.jpg',
    time: '6:00~22:30',
    link: '',
    note: '',
    profile: ''
  },
  {
    title: '讲堂群南堂',
    id: 'teach2',
    img: './images/logo.jpg',
    time: '6:00~22:30',
    link: '',
    note: '',
    profile: ''
  },
  
  //体育场所 2个
  {
    title: '体育馆',
    id: 'gym1',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: ''
  },
  {
    title: '塑胶运动场',
    id: 'gym2',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: ''
  },
 
  //食堂 2个
  {
    title: '荟萃苑餐厅',
    id: 'canteen1',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: 'XXX'
  },
  {
    title: '玉兰苑餐厅',
    id: 'canteen2',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: 'XXX'
  },

  //宿舍 2个
  {
    title: '学生公寓1号楼',
    id: 'dorm1',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: ''
  },
  {
    title: '学生公寓2号楼',
    id: 'dorm2',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: ''
  },


  //生活 2个
    {
    title: '维客超市',
    id: 'life1',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: ''
  },
     {
    title: '利群超市',
    id: 'life2',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: ''
  },
 //景点 2个

  {
    title: '荟萃广场',
    id: 'site1',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: ''
  },
  {
    title: '三才合韵',
    id: 'site2',
    img: './images/logo.jpg',
    time: '',
    link: '',
    note: '',
    profile: ''
  },

];

//导航栏 标签个数 7个
var siteKind = [
  
  {
    id:'gate',
    title:'校门', 
  }
  , {
    id: 'teach',
    title: '学习', 
  }
  ,
  {
    id: 'dorm',
    title: '寝室',
  },
  {
    id: 'life',
    title: '生活',
  },
  {
    id: 'canteen',
    title: '餐厅',
  },
  {
    id: 'gym',
    title: '体育',
  },
  {
    id: 'site',
    title: '景点',
  }
];


function markersData(labelName){
//返回标记点所需数据
  var labelNameN = [];
  for (var i = 1; i < data.length; i++) {
    labelNameN[i - 1] = labelName + i;
  }; 
  var markers=[];
  var num =0;
  for (var i = 0; i < data.length; i++) {
    //注意i的个数不能超过data里的个数，否则报错
    for (var j = 0; j < data.length ; j++ ){
      if (data[i].id == labelNameN[j]) {
        markers[num] = data[i],
        num++
      }
    }
  }
  var databack = [markers, num];
  return databack; 
}

function markersProfile(siteName){
  var profile=[];
  var title = [];
  for (var i = 0; i < siteProfile.length; i++) {
      //注意i的个数不能超过siteProfile里的个数，否则报错
      if (siteProfile[i].id == siteName) {
        profile = siteProfile[i]
      }
    }
    return profile;
}
function markersList(labelName) {
  //给参数加上后缀 ，与已有数据匹配
  var labelNameN = [];
  for (var i = 1; i < data.length; i++) {
    labelNameN[i - 1] = labelName + i;
  }; 

  var list = {
    title:'',
    id:'',
    img:''
  };
  var title = [];
  var id = [];
  var img = [];
  var num = 0;
  for (var i = 0; i < data.length; i++) {
      //注意i的个数不能超过siteData里的个数，否则报错
      for (var j = 0; j < data.length; j++) {
        if (data[i].id == labelNameN[j]) {
            title[num] = data[i].title,
            id[num] = data[i].id
          num++
        }
      }
    }
  var num = 0;
  for (var i = 0; i < siteProfile.length; i++) {
    //注意i的个数不能超过siteData里的个数，否则报错
    for (var j = 0; j < siteProfile.length; j++) {
      if (siteProfile[i].id == labelNameN[j]) {
        img[num] = siteProfile[i].img  
        num++
      }
    }
  }

  list.title = title;
  list.id = id;
  list.img =img;
  return list; 
}
//取出标签栏 标签
function markersKind(){
  var profile = [];
  for (var i = 0; i < siteKind.length; i++) {
    //注意i的个数不能超过 siteKind 里的个数，否则报错
    profile[i] = siteKind[i]
  }
  return profile;
}

function get_Lat_Lng(labelName){
  var latitude = [];
  var longitude = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == labelName) {
      latitude = data[i].latitude,
      longitude = data[i].longitude
    }
  }
  return [longitude,latitude]
}

function getLength(){
  var length =[];
  length["data"] = data.length;
  length["siteProfile"] = siteProfile.length;
  length["siteKind"] = siteKind.length;
  return length
}
function singalMarker(id) {
  //返回单一标记点数据
  var marker = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      marker[0] = data[i]
    }
  }
  return marker
}
function fetdata(Title) {
  var id;
  var k = 0;
  for (var i = 0; i < data.length; i++) {
    //注意i的个数不能超过siteData里的个数，否则报错
    if (data[i].title == Title) {
      id = data[i].id
    }
  }
  return id;
}

module.exports = {
  markersData: markersData,//标记点的具体值
  markersProfile: markersProfile,//标记点的介绍
  markersKind: markersKind, //标签种类
  markersList: markersList,//标签列表
  get_Lat_Lng: get_Lat_Lng,//取经纬度
  getLength: getLength,
  singalMarker: singalMarker,//取单一marker
  fetdata: fetdata//根据地点名取id
}
