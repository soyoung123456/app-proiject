<template>
  <div id="banner">
      <!-- <div>
          <span id="span"> 京安网安备 110000002000088号&nbsp;|&nbsp;京ICP证070359&nbsp;|&nbsp; 互联网药品信息公司信息服务资格证编号（京）-经营性-2014-0008 &nbsp;|&nbsp;新出发京零 字第大 120007号</span>
      </div>
     <div>
          <span id="span">Copyright&nbsp;@&nbsp;2004&nbsp;-&nbsp;2020爱淘宝ATM.com版权所有&nbsp;|&nbsp;消费真热线：4006067733&nbsp;经营执照&nbsp;|(京）网城平台备字（2018）第00001号&nbsp;|&nbsp;营业执照</span>
     </div> -->
     <div class="banner-center">
         <div class="banner-fir">
             <div class="one"><a href="/home">商城首页</a>&nbsp;|</div>
             <div class="tow"><a href="/home">支付宝</a>&nbsp;|</div>
             <div class="three"><a href="/home">物流</a></div>
         </div>
         <hr />
         <div class="banner-sec">
             <div>合作伙伴&nbsp;联系我们&nbsp;网站地图&nbsp;@&nbsp;2020&nbsp;cslg-王英梅&nbsp;版权所有</div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
html body {
  width: 100%;
  margin: 0;
  padding: 0;
}
#banner{
   width:1200px;
   height:60px;
   margin:0 auto;
   margin-top:15px;
   /* border:1px red solid; */
}
.banner-center{
    width:1000px;
    height:50px;
    margin:0 auto;
    /* border:1px red solid; */
    margin-top:3px;
}
a{
    color:#C2CDD7;
    /* width:1000px; */
    /* float:left； */
}
.banner-fir{
    color:#CCCACB;
    width:1000px;
    height:25px;
     /* border:1px red solid; */
}
.banner-sec{
    /* float:left; */
    text-align: left;
}
.one,.tow,.three{
    float:left;
}
hr{
    color:blue;
    size:4px;
    width:100%;
}
</style>
