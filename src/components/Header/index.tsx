import { Layout } from 'antd'

export default function Header() {
    return (
        <Layout>
            <Layout.Header style={{ display: 'flex', alignItems: 'center', background: 'unset' }}>
                {/* <div className="demo-logo" /> */}
                {/* <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items1}
                style={{ flex: 1, minWidth: 0 }}
                /> */}
                Logo
            </Layout.Header>
        </Layout>
    )
}