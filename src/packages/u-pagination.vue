<template>
    <ul class="u-pagination">
        <li class="item" role="prev" :disabled="currentPage <= 1" @click="select(currentPage - 1)">
            <
        </li>
        <template v-for="page in pages">
            <li
                v-if="page"
                :key="page"
                class="item"
                :selected="currentPage === page"
                @click="select(page)"
            >
                {{ page }}
            </li>
            <li v-else :key="page" class="item" role="blank">...</li>
        </template>
        <li
            class="item"
            role="next"
            :disabled="currentPage >= totalPage"
            @click="select(currentPage + 1)"
        >
            >
        </li>
    </ul>
</template>

<script>
export default {
    name: 'u-pagination',
    props: {
        // 数据总条数
        total: {
            type: Number,
            default: 1,
            validator: value => Number.isInteger(value) && value >= 0
        },
        // 每页数据。总页数 = 数据总条数/每页数据
        size: {
            type: Number,
            default: 20,
            validator: value => Number.isInteger(value) && value >= 0
        },
        // 当前页数
        page: {
            type: Number,
            default: 1,
            validator: value => Number.isInteger(value) && value > 0
        },
        // 两侧数量
        side: {
            type: Number,
            default: 2,
            validator: value => Number.isInteger(value) && value > 0
        },
        // 中间数量
        around: {
            type: Number,
            default: 3,
            validator: value => Number.isInteger(value) && value > 0 && value % 2 === 1
        }
    },
    data() {
        return {
            currentPage: this.page
        }
    },
    watch: {
        page(page) {
            this.currentPage = page
        }
    },
    computed: {
        totalPage() {
            return Math.ceil(this.total / this.size)
        },
        pages() {
            const pages = []

            const part = this.around >> 1
            let start = this.currentPage - part
            let end = start + this.around - 1
            if (start < 1) {
                end += 1 - start
                start = 1
            } else if (end > this.totalPage) {
                start -= end - this.totalPage
                end = this.totalPage
            }

            start = Math.max(1, Math.min(start, this.totalPage - this.side + 1))
            end = Math.min(this.totalPage, Math.max(end, this.side))

            let page = 1
            while (page <= this.totalPage) {
                if (
                    page <= this.side ||
                    (page >= start && page <= end) ||
                    page > this.totalPage - this.side
                )
                    pages.push(page)
                else {
                    pages.push(undefined)

                    if (page < start) page = start - 1
                    if (page > end) page = this.totalPage - this.side
                }
                page++
            }
            return pages
        }
    },
    methods: {
        select(page) {
            if (page < 1 || page > this.totalPage || page === this.currentPage) return

            this.currentPage = page
            this.$emit('update:page', page) // allow sync api
            this.$emit('input', page) // allow v-model api
        }
    }
}
</script>

<style lang="scss" scoped>
$item_size: 32px;

.u-pagination {
    user-select: none;
    cursor: default;
    padding: 0;
    text-align: right;

    .total {
        display: inline-block;
        margin-right: 8px;
        color: #999;
    }

    .item {
        display: inline-block;
        text-decoration: none;
        min-width: $item_size;
        height: $item_size;
        line-height: $item_size;
        text-align: center;
        margin-right: 8px;
        background: white;
        border: 1px solid #e1e3e6;
        border-radius: 2px;
        cursor: pointer;

        &:hover {
            background: #ebf2ff;
            border-color: $primary-color;

            &[disabled] {
                background: white;
                border: 1px solid #e1e3e6;
            }
        }

        &[selected] {
            background: $primary-color;
            color: white;
        }

        &[disabled] {
            cursor: not-allowed;
            color: $disabled-color;
        }

        .item[role='prev']::before {
            content: '‹';
        }

        .item[role='next']::before {
            content: '›';
        }

        &[role='blank'] {
            background: none;
            color: gray;
            cursor: initial;
        }
    }
}
</style>
