<template>
    <div class="u-layout" :dir="dir" :type="type" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        // type=flow属性集：dir、display、gap、align
        // type=flex属性集：dir、main(主轴)、cross(交叉轴)
        type: {
            type: String,
            default: 'flow',
            validator: value => ['flow', 'flex'].includes(value)
        },
        dir: { type: String, default: 'h', validator: value => ['h', 'v'].includes(value) }
    }
}
</script>
<style lang="scss" scoped>
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

    &[display='inline'] {
        display: inline-flex;
    }

    &[dir='h'] {
        flex-direction: row;
    }
    &[dir='v'] {
        flex-direction: column;
    }

    &[main='left'] {
        justify-content: flex-start;
    }
    &[main='center'] {
        justify-content: center;
    }
    &[main='right'] {
        justify-content: flex-end;
    }
    &[main='justify'] {
        justify-content: space-between;
    }

    &[cross='top'] {
        align-items: flex-start;
    }
    &[cross='center'] {
        align-items: center;
    }
    &[cross='bottom'] {
        align-items: flex-end;
    }
    &[cross='baseline'] {
        align-items: baseline;
    }
    &[cross='stretch'] {
        align-items: stretch;
    }
}

.u-layout {
    @include flow-layout();

    &[type='flex'] {
        @include flex-layout();
    }
}
</style>
