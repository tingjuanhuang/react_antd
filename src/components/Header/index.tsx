import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    // 根據當前路徑設定選中的選單項目
    const getSelectedKey = () => {
        if (location.pathname === '/about') return 'about'
        return 'home'
    }

    // 選單項目配置
    const menuItems: MenuProps['items'] = [
        {
            key: 'home',
            label: 'Home',
            onClick: () => navigate('/'),
        },
        {
            key: 'about',
            label: 'About',
            onClick: () => navigate('/about'),
        },
        {
            key: 'contact',
            label: 'Contact',
            onClick: () => navigate('/contact'),
        },
    ]

    return (
        <Layout>
            <Layout.Header style={{ 
                display: 'flex', 
                alignItems: 'center', 
                background: '#fff',
                borderBottom: '1px solid #f0f0f0',
                padding: '0 24px'
            }}>
                <div style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    marginRight: '40px',
                    color: '#1890ff'
                }}>
                    Stella
                </div>
                <Menu
                    mode="horizontal"
                    selectedKeys={[getSelectedKey()]}
                    items={menuItems}
                    style={{ flex: 1, minWidth: 0, border: 'none' }}
                />
            </Layout.Header>
        </Layout>
    )
}