<template>
    <div class="home pageSty">
        <nav-bar class="titleBgc">
            <div slot="center">
                首页
            </div>
        </nav-bar>

        <div class="main">
            首页
        </div>

        <tab-bar></tab-bar>
    </div>
</template>

<script>
import TabBar from "@/components/TabBar";
import NavBar from "@/components/NavBar";
import {getHomeMultiData} from "@/network/home"

export default {
    name:'home',
    data() {
        return {};
    },
    components:{
        TabBar,
        NavBar
    },
    mounted(){
        getHomeMultiData().then(res=>{
            console.log(res)
        })
    }
};
</script>
<style scoped lang="scss">
.home{
    .titleBgc{
        background-color: rgb(243, 174, 197);
        color: #fff;
    }
}
</style>