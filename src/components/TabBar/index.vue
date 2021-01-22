<template>
    <div class="navBar d-f ai-c jc-sb">
        <router-link to="/home" tag="div" class="d-f ff-c ai-c">
                <i class="iconfont icon-shouye mb-5"></i>
                首页
        </router-link>
        <router-link to="/categroy" tag="div" class="d-f ff-c ai-c">
                <i class="iconfont icon-fenlei mb-5"></i>
                分类
        </router-link>
        <router-link to="/shopCart" tag="div" class="d-f ff-c ai-c">
                <i class="iconfont icon-biaoqianA01_gouwuche-79 mb-5"></i>
                购物车
        </router-link>
        <router-link to="/mine" tag="div" class="d-f ff-c ai-c">
                <i class="iconfont icon-biaoqiankuozhan_wode-290 mb-5"></i>
                我的
        </router-link>
    </div>
</template>

<script>
export default {
    name: "navBar",
    data() {
        return {};
    },
};
</script>
<style scoped lang="scss">
.navBar {
    height: 1rem;
    background-color: #fff;
    color: #000;
    box-shadow: 0px -2px 20px rgb(0, 0, 0,.08);
    padding: 0 30px;
    height: 1rem;

    > div {
        font-size: 12px;
        i {
        font-size: 20px;
        }
    }
}
.router-link-exact-active {
  color:  rgb(243, 174, 197);
}
</style>