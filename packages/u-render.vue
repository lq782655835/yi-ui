<script>
export default {
    name: 'u-render',
    functional: true,
    props: {
        vnode: null
    },
    render(h, context) {
        return context.props.vnode || context.children
    }
}
</script>
