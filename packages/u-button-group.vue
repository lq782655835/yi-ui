<template>
    <div class="u-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'u-button-group'
}
</script>

<style lang="scss" scoped>
.u-button-group {
    display: inline-block;
    vertical-align: middle;
}
.u-button-group::after,
.u-button-group::before {
    display: table;
    content: '';
}
.u-button-group::after {
    clear: both;
}
.u-button-group > .u-button {
    float: left;
    position: relative;
}
.u-button-group > .u-button + .u-button {
    margin-left: 0;
}
.u-button-group > .u-button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-color: rgba(255, 255, 255, 0.5);
}
.u-button-group > .u-button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left-color: rgba(255, 255, 255, 0.5);
}
.u-button-group > .u-button:first-child:last-child {
    border-radius: 4px;
}
.u-button-group > .u-button:not(:first-child):not(:last-child) {
    border-radius: 0;
}
.u-button-group > .u-button:not(:last-child) {
    margin-right: -1px;
}
</style>
