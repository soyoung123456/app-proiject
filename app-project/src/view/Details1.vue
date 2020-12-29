<template>
    <div v-if="phone" id="phone">
        <div class="product">
            <div class="product-image">
                <img :src="phone.image">
            </div>
            <div class="product-info">
                <h1 class="product-name">{{ phone.name }}</h1>
                <div class="product-cost">¥ {{ phone.cost }}</div>
                <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
            </div>
        </div>
    </div>
</template>
<script>
	import phone_data from '../utils/phone.js'

	export default {
        data () {
            return {
                // 获取路由中的参数
                id: parseInt(this.$route.params.id),
                phone: null
            }
        },
        methods: {
            getPhone () {
                // 真实环境通过 ajax 获取，这里用异步模拟
                setTimeout(() => {
                    this.phone = phone_data.find(item => item.id === this.id);
                }, 500);
            },
            // 加入购物车
            handleAddToCart () {
                this.$store.commit('addCart', this.index);
            }
        },
        mounted () {
            this.getPhone();
        }
    }
</script>
<style scoped>
#phone{
    width:1200px;
    margin:0 auto;
}
    .product{
        margin: 32px;
        padding: 32px;
        background: #fff;
        border: 1px solid #dddee1;
        border-radius: 10px;
        overflow: hidden;
    }
    .product-image{
        width: 50%;
        height: 550px;
        float: left;
        text-align: center;
    }
    .product-image img{
        height: 100%;
    }
    .product-info{
        width: 50%;
        padding: 150px 0 250px;
        height: 150px;
        float: left;
        text-align: center;
    }
    .product-cost{
        color: #f2352e;
        margin: 8px 0;
    }
    .product-add-cart{
        display: inline-block;
        padding: 8px 64px;
        margin: 8px 0;
        background: #2d8cf0;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
    }
    .product-desc{
        background: #fff;
        margin: 32px;
        padding: 32px;
        border: 1px solid #dddee1;
        border-radius: 10px;
        text-align: center;
    }
    .product-desc img{
        display: block;
        width: 50%;
        margin: 32px auto;
        padding: 32px;
        border-bottom: 1px solid #dddee1;
    }
</style>
