<template>
    <div class="g-demo layout">
        <d-component-item name="为什么有yi-ui组件库">
            当前开源市场（Vue技术栈）有非常多成熟的组件库，比如ElementUI、iView等。
            这些组件库主打大而全，有完备的兼容性和较广的覆盖性，特别适合企业级中后台系统开发，尤其是针对没有交互和视觉同学的开发团队，能显著提高团队的效率。
            但这些组件库也不是可以覆盖全部的业务场景，比如有些公司已经有很好的UED团队，有自己的交互或视觉规范，这时使用ElementUI等组件库就不合适。
            虽然它提供了一些样式扩展，但肯定不能完全满足团队视觉规范；而且ElementUI由于需要考虑较多的场景，内部代码逻辑复杂，不容易阅读以及扩展。
            另外有一些业务型组件开发（比如结合ai语音的富文本编辑器组件），
            如果在ElementUI等组件库上进行扩展，时间上不比开发自己的组件库更快，而且风险上还可控，这也是为什么各个成熟公司都在做自己团队的组件库。
            <br />
            <br />
            <strong>yi-ui组件库主打轻量可控，在设计时遵循“一分钟看懂组件源码”。</strong>
            根据笔者多个产品开发以及内部AI组件库建设经验，没有哪个组件库是能覆盖所有的业务场景，
            比如适合中后台系统的组件库，可能对官网系统或者Electron桌面应用无法完全拿来即用，总需要修改组件库以适配业务场景。
            所以yi-ui组件库更多的考虑是作为原型库，提供一些必要的功能和样式，使得不需要从零开发；
            同时有很好的扩展行，源码简单易懂而且依赖少，使得可以快速拷贝yi-ui，基于此创建自己项目的组件库。
        </d-component-item>
        <router-view></router-view>
    </div>
</template>

<script>
import DComponentItem from '@/components/demo/d-component-item'

export default {
    components: { DComponentItem }
}
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
