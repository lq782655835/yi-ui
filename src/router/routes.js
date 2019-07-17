const _import = file => require('@/pages/' + file + '.vue').default
const _md = file => require('../../docs/' + file + '.md').default
export default [
    {
        path: '/',
        redirect: '/demo'
    },
    {
        path: '/demo',
        component: _import('demo')
    },
    {
        path: '/link',
        component: _md('link')
    }
]
