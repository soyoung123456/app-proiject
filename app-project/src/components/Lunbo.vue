<template>
  <div class="lunbo">
      <div class="banner">
          <img v-for="(v,i) in img" :key="i" :src="v" v-show="i==n">
          <div class="banner-circle">
              <ul>
                  <li v-for="(v,i) in img" :key="i" :class="i==n ? 'selected' : ''"></li>
              </ul>
          </div>
      </div>

      <!-- <div class="index-category">
          <div class="iconfont" :class="list.icon" :style="{background:list.color}"></div>
          <label >{{list.title</label>
      </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      n: 0,
      img: [
        'https://img12.360buyimg.com/pop/s590x470_jfs/t1/151140/33/8873/86453/5fc6020aE3db37807/4bf59ed01cefe954.jpg.webp',
        'https://img14.360buyimg.com/da/s590x470_jfs/t1/152174/21/2398/62376/5f88c804Eb8ae6795/c6f427c98e0d36dd.jpg.webp',
        'https://img11.360buyimg.com/pop/s590x470_jfs/t1/146308/7/17674/68801/5fd1867fEd49ea63d/8de471813c3f6c90.jpg.webp',
        'https://img20.360buyimg.com/pop/s590x470_jfs/t1/134300/2/19347/68951/5fd18f3dE387bb0a2/6f4c6139ab696361.jpg.webp',
        'https://imgcps.jd.com/ling4/100008348542/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6ec/cb65b30a/cr/s/q.jpg'
      ]
    }
  },
  methods: {
    fun: function () {
      setInterval(this.play, 2000)
    },
    play: function () {
      this.n++
      if (this.n === this.img.length) {
        this.n = 0
      }
    }
  },
  mounted: function () {
    this.fun()
  }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
.lunbo{
  width:592px;
  height:472px;
  margin:0 auto;
  /* border:1px red solid */
}
ul{
    list-style-type: none;
}
body{
    font-size: 14px;
    background:#fff;
    overflow-y:scroll;
    overflow-x: hidden;
}
html,body{
    max-width:1200px;
    height:100%;
    margin:0 auto;
    white-space:nowrap;
}
.banner{
    position:relative;
}
.banner .banner-circle{
    position:absolute;
    bottom:5px;
    left:0;
    right:0;
    color:#fff;
}
.banner .banner-circle li{
    display: inline-block;
    background:rgba(0, 0, 0, .3);
    border-radius: 50%;
    padding:5px;
    margin:2px;
}
.banner .banner-circle ul{
    text-align: center;
}
.banner .banner-circle .selected {
    background: rgba(0, 0, 0, .9);
}
.banner img{
    margin:0;
    padding:0;
}

</style>
