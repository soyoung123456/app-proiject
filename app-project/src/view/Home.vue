<template>
  <div id="Home">
    <el-container class="Home">
      <el-container style="height: 520px">
        <el-aside width="300px">
          <div id="sort">商品分类</div>
          <div @click="show()">
            <div style="width: 200px; height: 30px; border: 1px solid #f4f4f4">
              <Item :isActive="curActive === 'i1'" @active="curActive = 'i1'">
                家用电器
              </Item>
            </div>
            <div style="width: 200px; height: 30px; border: 1px solid #f4f4f4">
              <Item :isActive="curActive === 'i2'" @active="curActive = 'i2'">
                手机/运营商/数码
              </Item>
            </div>
            <div style="width: 200px; height: 30px; border: 1px solid #f4f4f4">
              <Item :isActive="curActive === 'i3'" @active="curActive = 'i3'">
                电脑/办公
              </Item>
            </div>
            <div style="width: 200px; height: 30px; border: 1px solid #f4f4f4">
              <Item :isActive="curActive === 'i4'" @active="curActive = 'i4'">
                家具/家居/家装/厨具
              </Item>
            </div>
            <div style="width: 200px; height: 30px; border: 1px solid #f4f4f4">
              <Item :isActive="curActive === 'i5'" @active="curActive = 'i5'">
                男装/女装/童装/内衣
              </Item>
            </div>
            <div style="width: 200px; height: 30px; border: 1px solid #f4f4f4">
              <Item :isActive="curActive === 'i6'" @active="curActive = 'i6'">
                美妆/个护清洁/宠物
              </Item>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div
            @click="ShowNow()"
            style="margin: 0 auto; width: 570px; height: 450px"
          >
            <Lunbo v-show="isShow"></Lunbo>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <el-container>
      <el-header>
        <h3 style="margin-top: 10px">推荐商品</h3>
        <!-- <div class="list-control" style="float: felt"> -->
        <!-- <div class="list-control-filter">
            <span>品牌：</span>
            <span
              class="list-control-filter-item"
              :class="{ on: item === filterBrand }"
              v-for="(item, index) in brands"
              :key="index"
              @click="handleFilterBrand(item)"
              >{{ item }}</span
            >
          </div> -->
        <!-- <div    -->
        <!-- </div> -->
      </el-header>
      <el-main>
        <!-- property: info 来接收对象格式的数据，扩展性高，父级可以将获取的数据传递过来 -->
        <product
          v-for="item in filteredAndOrderedList"
          :info="item"
          :key="item.id"
        ></product>
        <div class="product-not-found" v-show="!filteredAndOrderedList.length">
          暂无相关商品
        </div>
      </el-main>
    </el-container>
    <el-container> </el-container>
  </div>
</template>

<script>
import Item from "../components/Item";
import Lunbo from "../components/Lunbo";
import product from "../components/product";
import phone from "../components/phone";
import phone_data from "../utils/phone.js";
export default {
  components: {
    Lunbo,
    Item,
    product,
    phone,
  },
  data() {
    return {
      isShow: true,
      value: "",
      curActive: "i1",
      brands: "",
    };
  },
  methods: {
    show() {
      this.isShow = false;
    },
    ShowNow() {
      if (this.isShow === false) this.isShow = true;
    },
  },
  computed: {
    // 从Vuex中获取商品列表数据
    list() {
      console.log(this.$store.state.productList);
      return this.$store.state.productList;
    },
    filteredAndOrderedList() {
      // 复制原始数据 [...this.list] 展开运算符
      let list = [...this.list];
      let searchParams = this.$store.state.searchParams;
      if (searchParams !== "") {
        list = list.filter((n) => {
          if (n.name.includes(searchParams)) {
            return n;
          }
        });
        console.error(list);
      }
      return list;
    },
  },
  mounted() {
    this.$store.dispatch("getProductList");
  },
};
</script>

<style scoped>
#Home {
  width: 1200px;
  margin: 0 auto;
}
div {
  width: 300px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 40px; */
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 30px;
  float: left;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 150px; */
  float: left;
}

body > .el-container {
  margin-bottom: 40px;
}
.list-control {
  background: #fff;
  border-radius: 6px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.list-control-filter {
  margin-bottom: 16px;
}
.list-control-filter-item,
.list-control-order-item {
  cursor: pointer;
  display: inline-block;
  border: 1px solid #e9eaec;
  border-radius: 4px;
  margin-right: 6px;
  padding: 2px 6px;
}
.list-control-filter-item.on,
.list-control-order-item.on {
  background: #f2352e;
  border: 1px solid #f2352e;
  color: #fff;
}
.product-not-found {
  text-align: center;
  padding: 32px;
}
</style>
