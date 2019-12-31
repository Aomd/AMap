//@ts-check

// const Amap = window.Amap

import AMap from './AMap'

var map = new AMap.Map('',{
  zoom:1
})


map.on("click",function(){
  
})

var tileLayer = new AMap.TileLayer({});

var roadNet = new AMap.TileLayer({});






var a = new AMap.TileLayer.RoadNet({})



