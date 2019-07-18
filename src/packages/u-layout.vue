<template functional>
    <div
        class="u-layout"
        :dir="props.dir || 'h'"
        :flex="props.flex"
        v-bind="data.attrs"
        v-on="listeners"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'u-layout'
    // props: {
    //     // flow属性集：dir、display、gap、align
    //     // flex属性集：dir、main(主轴)、cross(交叉轴)、display、gap
    //     dir: { type: String, default: 'h', validator: value => ['h', 'v'].includes(value) },
    //     flex: { type: String }
    // }
}
</script>

<style lang="scss">
$margin-small: 10px;
$margin-base: 20px;
$margin-large: 30px;

@mixin flow-layout {
    &[display='inline'] > * {
        display: inline-block;
    }
    &[display='block'] > * {
        display: block;
    }

    &[dir='h'] {
        & > *:not(:last-child) {
            margin-right: $margin-base;
        }

        &[gap='shrink'] {
            & > *:not(:last-child) {
                margin-right: -1px;
            }
        }

        &[gap='none'] {
            & > *:not(:last-child) {
                margin-right: 0;
            }
        }

        &[gap='s'] {
            & > *:not(:last-child) {
                margin-right: $margin-small;
            }
        }

        &[gap='l'] {
            & > *:not(:last-child) {
                margin-right: $margin-large;
            }
        }
    }
    &[dir='v'] {
        & > *:not(:last-child) {
            margin-bottom: $margin-base;
        }

        &[gap='shrink'] {
            & > *:not(:last-child) {
                margin-bottom: -1px;
            }
        }

        &[gap='none'] {
            & > *:not(:last-child) {
                margin-bottom: 0;
            }
        }

        &[gap='s'] {
            & > *:not(:last-child) {
                margin-bottom: $margin-small;
            }
        }

        &[gap='l'] {
            & > *:not(:last-child) {
                margin-bottom: $margin-large;
            }
        }
    }

    &[align='left'] {
        text-align: left;
    }
    &[align='center'] {
        text-align: center;
    }
    &[align='right'] {
        text-align: right;
    }
}

@mixin flex-layout {
    display: flex;
    flex-direction: row;

    &[display='inline'] {
        display: inline-flex;
    }

    &[dir='h'] {
        flex-direction: row;
    }
    &[dir='v'] {
        flex-direction: column;
    }

    &[flex~='main:left'] {
        justify-content: flex-start;
    }
    &[flex~='main:center'] {
        justify-content: center;
    }
    &[flex~='main:right'] {
        justify-content: flex-end;
    }
    &[flex~='main:justify'] {
        justify-content: space-between;
    }

    &[flex~='cross:top'] {
        align-items: flex-start;
    }
    &[flex~='cross:center'] {
        align-items: center;
    }
    &[flex~='cross:bottom'] {
        align-items: flex-end;
    }
    &[flex~='cross:baseline'] {
        align-items: baseline;
    }
    &[flex~='cross:stretch'] {
        align-items: stretch;
    }
}

.u-layout {
    @include flow-layout();

    &[flex] {
        @include flex-layout();
    }
}
</style>
