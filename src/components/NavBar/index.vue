<template>
    <div class="navBar d-f ai-c jc-sb">
        <div class="navBar-left">
            <slot name="left"></slot>
        </div>
        <div class="navBar-center">
            <slot name="center"></slot>
        </div>
        <div class="navBar-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'navBar',
    data() {
        return {};
    }
};
</script>
<style scoped lang="scss">
.navBar{
    height: 1rem;
    padding: 0 0.3rem;
    &-left,
    &-right{
        min-width: 0.3rem;
    }
}
</style>