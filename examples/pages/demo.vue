<template>
    <div class="g-demo layout">
        <d-component-item name="u-link">
            <u-link href="/" type="success">系统内导链</u-link>
            <u-link href="https://www.baidu.com" type="primary">系统外导链百度</u-link>
            <u-link href="/" disabled>禁用</u-link>
            <u-link icon="border_color">带图标</u-link>
        </d-component-item>

        <d-component-item name="u-button">
            <u-button>默认按钮</u-button>
            <u-button type="primary">主要按钮</u-button>
            <u-button type="primary" disabled>禁用按钮</u-button>
            <u-button type="success" size="s">小按钮</u-button>
            <u-button type="danger" href="https://www.baidu.com">导链按钮</u-button>
        </d-component-item>

        <d-component-item name="u-icon" desc="基于material-design-icons">
            <u-layout>
                <u-icon name="backup" />
                <u-icon name="check_circle" size="40px" type="#FF00FF" />
                <u-icon name="info" href="http://www.baidu.com" />
                <u-icon name="face" to="/demo" disabled />
                <u-link href="https://material.io/icons/" target="_blank" type="primary"
                    >更多图标</u-link
                >
            </u-layout>
        </d-component-item>

        <d-component-item name="u-select">
            <u-select v-model="selectValue" :list="selectList" />
            <u-select :list="selectList" size="s" disabled />
        </d-component-item>

        <d-component-item name="u-input/textarea">
            <u-input v-model="inputValue" placeholder="请输入专题名" />
            <u-input minlength="1" maxlength="10" placeholder="原生长度限制" />
            <u-input size="s" placeholder="小输入框" />
            <u-input disabled placeholder="禁用输入框" />
            <br /><br />
            <u-input type="textarea" placeholder="textarea输入框" />
        </d-component-item>

        <d-component-item name="u-switch">
            <u-switch v-model="switchValue" />
            <u-switch disabled />
        </d-component-item>

        <d-component-item name="u-checkbox/u-checkboxs">
            <u-layout>
                多选框（值：{{ checkboxValue }}）：
                <u-checkbox v-model="checkboxValue" label="多选框" />
                <u-checkbox v-model="checkboxValue" disabled>多选框禁用</u-checkbox>
            </u-layout>
            <u-layout>
                多选组（checkboxs核心只有list属性）：
                <u-checkboxs :list="checkboxsList" />
                <u-checkboxs :list="checkboxsList2" checkedField="isSelect" />
            </u-layout>
        </d-component-item>

        <d-component-item name="u-radio/u-radios">
            <u-layout>
                单个radio无意义（值：{{ radioValue }}）：
                <u-radio v-model="radioValue" label="选项1" />
                <u-radio v-model="radioValue" label="disabled状态" disabled />
            </u-layout>
            <u-layout>
                单选组（值：{{ radiosValue }}）：
                <u-radios v-model="radiosValue" :list="radiosList" />
            </u-layout>
        </d-component-item>

        <d-component-item name="u-crumb">
            <u-crumb>
                <u-crumb-item to="/">home</u-crumb-item>
                <u-crumb-item to="/">home</u-crumb-item>
                <u-crumb-item>home</u-crumb-item>
            </u-crumb>
            <u-crumb separator=">">
                <u-crumb-item to="/">home</u-crumb-item>
                <u-crumb-item to="/" disabled>home</u-crumb-item>
                <u-crumb-item>home</u-crumb-item>
            </u-crumb>
        </d-component-item>

        <d-component-item name="u-layout">
            <u-layout>
                <u-button>默认横向排列</u-button>
                <u-button>默认横向排列</u-button>
                <u-button>默认横向排列</u-button>
            </u-layout>
            <br />
            <u-layout dir="v" display="block" gap="s">
                <u-button>竖向排列 && block对象</u-button>
                <u-button>竖向排列</u-button>
                <u-button>竖向排列</u-button>
            </u-layout>
            <br />
            <u-layout flex="main:center">
                <span>flex横向排列</span> <span>flex横向排列</span> <span>flex横向排列</span>
            </u-layout>
            <u-layout flex="cross:center" dir="v">
                <span>flex纵向排列</span> <span>flex纵向排列</span> <span>flex纵向排列</span>
            </u-layout>
        </d-component-item>

        <d-component-item name="u-form">
            <u-form labelWidth="200px" title="表单标题" @save="test">
                <u-form-item label="姓名" error="请填写姓名" required> <u-input /> </u-form-item>
                <u-form-item label="年龄" required tip="仅支持数字"> <u-input /> </u-form-item>
                <u-form-item label="性别" error="请填写性别">
                    <u-select v-model="selectValue" :list="selectList" />
                </u-form-item>
                <u-form-item label="开通vip"> <u-switch /> </u-form-item>
                <u-form-item label="学校">
                    <u-radios v-model="radiosValue" :list="radiosList" />
                </u-form-item>
                <u-form-item label="喜好"> <u-checkboxs :list="checkboxsList" /> </u-form-item>
            </u-form>
        </d-component-item>

        <d-component-item name="u-toast">
            <u-button @click="$toast('这是一个toast提示框')">编程式打开toast</u-button>
            <u-button @click="$toast('这是一个错误提示框', 'error')">错误toast</u-button>
        </d-component-item>

        <d-component-item name="u-modal/confirm/alert">
            <u-button @click="modalVisible = true">visible方式打开模态框</u-button>
            <u-button @click="confirmByJS">js api方式打开Confirm模态框</u-button>
            <u-button @click="alertByJS">js api方式打开Alert模态框</u-button>
        </d-component-item>

        <d-component-item name="u-popper">
            <u-layout>
                <u-popper>
                    <u-button>popper基础组件</u-button>
                    <div slot="popper"><u-select v-model="selectValue" :list="selectList" /></div>
                </u-popper>
                <u-popper placement="right">
                    <u-button>popper-placement</u-button>
                    <div slot="popper">测试测试</div>
                </u-popper>
                <u-popper trigger="hover">
                    <u-button>popper-trigger</u-button>
                    <div slot="popper">测试测试</div>
                </u-popper>
                <u-popper appendTo="reference">
                    <u-button>popper-appendTo</u-button>
                    <div slot="popper">测试测试</div>
                </u-popper>
                <u-popper trigger="manual" :open.sync="pupperValue">
                    <u-button @click="pupperValue = !pupperValue">popper-trigger-manual</u-button>
                    <div slot="popper">测试测试</div>
                </u-popper>
            </u-layout>
        </d-component-item>

        <d-component-item name="u-tooltip">
            <u-layout>
                <u-tooltip placement="right" content="使用 content 属性添加内容">
                    <u-button>基础</u-button>
                </u-tooltip>
                <u-tooltip title="标题" content="使用 title 属性添加标题">
                    <u-button>带标题</u-button>
                </u-tooltip>
                <u-tooltip trigger="click">
                    <u-button>自定义内容</u-button>
                    <span slot="title">标题</span>
                    <span slot="content">使用 <u-link>slot</u-link> 可以添加一些复杂功能</span>
                </u-tooltip>
            </u-layout>
        </d-component-item>

        <d-component-item name="u-tabs/tab">
            <u-tabs v-model="tabValue">
                <u-tab title="普通tab1">测试1tab内容</u-tab>
                <u-tab title="普通tab2">测试2tab内容</u-tab>
                <u-tab title="普通tab3">测试3tab内容</u-tab>
            </u-tabs>
            <u-tabs :value="1">
                <u-tab title="去往首页" to="/"></u-tab>
                <u-tab title="去往Demo" to="/demo"></u-tab>
                <u-tab title="去往Tab" to="/tabs"></u-tab>
            </u-tabs>
        </d-component-item>

        <d-component-item name="u-steps/step">
            <u-steps v-model="stepValue">
                <u-step title="步骤1">测试1step内容</u-step>
                <u-step title="步骤2">测试2step内容</u-step>
                <u-step title="步骤3">测试3step内容</u-step>
            </u-steps>
        </d-component-item>

        <d-component-item name="u-table/u-pagination">
            <u-table :list="tableList">
                <template slot-scope="{ row }">
                    <u-table-column label="分类" width="100px">{{ row.tab }}</u-table-column>
                    <u-table-column label="名称" width="100px">{{ row.title }}</u-table-column>
                    <u-table-column label="操作" width="60px">
                        <u-icon name="edit" size="18px" />
                        <u-icon name="delete" size="18px" />
                    </u-table-column>
                </template>
            </u-table>
            {{ paginationValue }}<u-pagination :total="1000" v-model="paginationValue" />
        </d-component-item>

        <u-modal :visible.sync="modalVisible" title="测试模态框">
            这里可以随意自定义html内容
        </u-modal>
        <u-back-top />
    </div>
</template>

<script>
import DComponentItem from '../components/d-component-item'

export default {
    components: { DComponentItem },
    data() {
        return {
            tableList: [
                {
                    tab: '测试1',
                    title: '测试2'
                },
                {
                    tab: '测试1',
                    title: '测试2'
                }
            ],
            paginationValue: 1,
            inputValue: '',
            modalVisible: false,
            selectList: [
                {
                    label: '简写版select',
                    value: 1
                },
                {
                    label: '麻雀虽小',
                    value: 2
                }
            ],
            selectValue: 1,
            switchValue: true,
            checkboxValue: true,
            pupperValue: false,
            checkboxsList: [
                { label: '选项1', checked: true, field: 'other' },
                { label: '选项2', checked: false, field: 'other' }
            ],
            checkboxsList2: [
                { label: '禁用可选', isSelect: true, disabled: true },
                { label: '选项2', isSelect: false, disabled: false }
            ],
            radioValue: false,
            radiosValue: 'value1',
            radiosList: [
                { label: '选项1', value: 'value1' },
                { label: '选项2', value: 'value2' }
            ],
            tabValue: 0,
            stepValue: 0
        }
    },
    methods: {
        test() {
            this.radiosValue = 'value2'
            this.selectValue = 2
        },
        confirmByJS() {
            this.$confirm('这是一个Confirm确认框')
                .then(() => alert('你选择了确定'))
                .catch(() => alert('你选择了取消'))
        },
        alertByJS() {
            this.$alert('这是一个Alert提示框').then(() => console.log('alert确定'))
        }
    }
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
