import { Layout, Menu } from 'antd';
import Add_car from './Add_car/Add_car';
import CarList from '../components/CarList/CarList';
const { Header, Content, Footer } = Layout;
function App() {
  return (
  <Layout className="layout">
    <Header style={{backgroundColor:'#ccc', position:'relative', paddingBottom:'6%'}}>
      <div className="logo" />
      <Menu style={{backgroundColor:'#ccc', position:'absolute', left:'35%'}}  mode="horizontal" defaultSelectedKeys={['2']}>
        <h1 style={{textTransform:'uppercase', float:'right'}}>car registration management sysytem</h1>
      </Menu>
    </Header>
    <Content style={{ padding: '80px', height:'auto', backgroundColor:'white' }}>
      {/* <Add_car /> */}
      <CarList />
    </Content>
    <Footer style={{ textAlign: 'center', color:'#f2f2f2', backgroundColor:'blue', padding:'100px' }}>Ant Design ©2021 Created by iddiMsangi</Footer>
  </Layout>
  );
}

export default App;
