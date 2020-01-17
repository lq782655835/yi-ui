const _import = file => require('../pages/' + file + '.vue').default
// const _md = file => require('../../docs/' + file + '.md').default
export default [
    {
        path: '/',
        redirect: '/demo'
    },
    {
        path: '/demo',
        component: _import('demo')
    }
    // {
    //     path: '/button',
    //     component: _md('button')
    // },
    // {
    //     path: '/icon',
    //     component: _md('icon')
    // },
    // {
    //     path: '/input',
    //     component: _md('input')
    // },
    // {
    //     path: '/link',
    //     component: _md('link')
    // },
    // {
    //     path: '/tabs',
    //     component: _md('tabs')
    // },
    // {
    //     path: '/steps',
    //     component: _md('steps')
    // },
    // {
    //     path: '/popover',
    //     component: _md('popover')
    // },
    // {
    //     path: '/tooltip',
    //     component: _md('tooltip')
    // },
    // {
    //     path: '/backtop',
    //     component: _md('backtop')
    // },
    // {
    //     path: '/divider',
    //     component: _md('divider')
    // },
    // {
    //     path: '/transition',
    //     component: _md('transition')
    // }
]
