<template>
    <div class="g-demo layout">
        <router-view />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.g-demo {
    margin: 20px 50px;

    & > * {
        margin: 10px 0;
    }

    .u-table {
        .u-icon {
            margin-right: 8px;
        }
    }

    .cloud-music {
        width: 50px;
    }
}
</style>
