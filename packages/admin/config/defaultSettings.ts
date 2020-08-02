/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Settings as LayoutSettings } from '@ant-design/pro-layout'

export default {
    navTheme: 'light',
    // 拂晓蓝
    primaryColor: '#1890ff',
    layout: 'mix',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    menu: {
        locale: true
    },
    title: 'CloudBase CMS',
    pwa: false,
    iconfontUrl: ''
} as LayoutSettings & {
    pwa: boolean
}