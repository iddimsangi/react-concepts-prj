import React from 'react'
import { List, Avatar } from 'antd';
// import car_profile from '../../../Assets/car.jpg';
function CardCar() {
    const data = [
        {
          title: 'Ant Design Title 1',
        }
        
      ];
    return (
        <div>
          <List
            itemLayout="horizontal"  
            dataSource={data}       
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
            </List.Item>
    )}/>
        </div>
    )
}

export default CardCar
