import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
function App() {
  return (
<Layout className="layout">
    <Header style={{backgroundColor:'orange'}}>
      <div className="logo" />
      <Menu style={{backgroundColor:'orange', textAlign:'center'}}  mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
    <Content style={{ padding: '80px 50px', height:'80vh', textAlign:'center' }}>
      
        
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center', color:'#ccc', backgroundColor:'magenta' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
