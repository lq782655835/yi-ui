<template>
    <ul class="u-crumb">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: 'u-crumb',
    props: {
        separator: { type: String, default: '/' }
    },
    provide() {
        return {
            uCrumb: this
        }
    }
}
</script>
