<template>
    <div class="phone">
        <router-link :to="'/details1/'+infos.id" class="product-main">
            <img :src="infos.image">
            <h4>{{ infos.name }}</h4>
            <div class="product-color" :style="{ background: colors[infos.color]}"></div>
            <div class="product-cost">¥ {{ infos.cost }}</div>
            <div class="product-add-cart" @click.prevent="handleCart">加入购物车</div>
        </router-link>
    </div>
</template>
<script>
    export default {
         props: {
            infos: Object
        },
        data () {
            return {
                colors: {
                    '白色': 'white',
                    '粉色': 'pink',
                    '银白色': '#CECCD3',
                    '黑色': '#615E61'
                }
            }
        },
        methods: {
            handleCart () {
                this.$store.commit('addCart', this.infos.id);
            }
        }
    };
</script>
<style scoped>
    .phone{
        width: 25%;
        float: left;
    }
    .product-main{
        display: block;
        margin: 16px;
        padding: 16px;
        border: 1px solid #dddee1;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        text-align: center;
        position: relative;
    }
    .product-main img{
        width: 100%;
    }
    h4{
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .product-main:hover h4{
        color: #0070c9;
    }
    .product-color{
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid #dddee1;
        border-radius: 50%;
        margin: 6px auto;
    }
    .product-cost{
        color: #de4037;
        margin-top: 6px;
    }
    .product-add-cart{
        /* display: none; */
        padding: 4px 8px;
        background: #2d8cf0;
        color: #fff;
        font-size: 12px;
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .product-main:hover .product-add-cart{
        display: inline-block;
    }
</style>
