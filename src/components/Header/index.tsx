import { Layout, Menu } from 'antd'
// Hook 是幫 React 元件加能力的小工具，通常以 use 開頭
// useNavigate 負責「去哪里」
import { Link, useLocation, useNavigate } from 'react-router-dom'
// AntD Menu 的規格書，用來提醒是否有錯誤
import type { MenuProps } from 'antd'

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    // 照著規格書的格式配置選單項目
    const menuItems: MenuProps['items'] = [
        {
            key: '/components',
            label: 'Components',
            onClick: () => navigate('/components'),
        },
        {
            key: '/gotchas',
            label: 'Gotchas',
            onClick: () => navigate('/gotchas'),
        },
    ]

    return (
        <Layout>
            <Layout.Header className="appHeader">
                <Link to="/" className="headerBrand">
                    React_Antd
                </Link>
                <Menu
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    classNames={{ root: 'headerMenu' }}
                />
            </Layout.Header>
        </Layout>
    )
}