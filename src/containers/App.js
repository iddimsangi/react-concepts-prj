import { Layout, Menu } from 'antd';
import Add_car from './Add_car/Add_car';
const { Header, Content, Footer } = Layout;
function App() {
  return (
<Layout className="layout">
    <Header style={{backgroundColor:'#ccc'}}>
      <div className="logo" />
      <Menu style={{backgroundColor:'#ccc', textAlign:'center'}}  mode="horizontal" defaultSelectedKeys={['2']}>
        <h1 style={{textTransform:'uppercase', float:'right'}}>car registration management sysytem</h1>
      </Menu>
    </Header>
    <Content style={{ padding: '80px', height:'80vh', backgroundColor:'white' }}>
      <Add_car />
    </Content>
    <Footer style={{ textAlign: 'center', color:'#f2f2f2', backgroundColor:'blue' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
