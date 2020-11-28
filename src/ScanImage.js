import React from 'react';
import { Button } from 'antd';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Image } from 'antd';

const { Header, Content, Footer } = Layout;

class ScanImage extends React.Component {
  
    constructor(props) {
        super(props);
        // this.handleFirstName = this.handleFirstName.bind(this);
        // this.handleLastName = this.handleLastName.bind(this);
        // many more
        this.state = {
          bodyTemp: "",
          skinTemp: "",
          visibleImageApiUrl:"",
          thermalImageApiUrl:"",
          // many more
        }
    }






    buttonClick(){
      console.log("came here")

      

      // read all entities
    fetch("http://192.168.3.167:16810/query?StartDate=2020-11-27&EndDate=2020-11-31&Index=0&Order=Timestamp", {
        "method": "GET",
        // "headers": {
        //   "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        //   "x-rapidapi-key": "apikey"
        // }
    })
    .then(response => response.json())
    .then(response => {
        var res = response['Results'];
        console.log(res);
        var singleRecord = res[res.length-1];
        var visibleImage = singleRecord['FileVisible'];
        var thermalImage = singleRecord['FileThermal'];
        this.state.bodyTemp = singleRecord['BodyTemp'];
        this.state.skinTemp = singleRecord['SkinTemp'];
        var visibleImageApiUrl = "http://192.168.3.167:16810/image/"+visibleImage;
        var thermalImageApiUrl = "http://192.168.3.167:16810/image/"+thermalImage;
        console.log(visibleImageApiUrl);
        console.log(thermalImageApiUrl);
        this.state.visibleImageApiUrl = visibleImageApiUrl;
        this.state.thermalImageApiUrl = thermalImageApiUrl;
        this.setState(this.state);
    })
    .catch(err => { console.log(err); 
    });
    }
    
    subComponent() {
      return (<div>Hello World</div>);
    }
    
    render() {
      return ( 
        <div className="App">
    <div></div>
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      {/* <div className="site-layout-content">Content</div> */}
        
      <div class="row">
        <div class="column" >
          <Image
          width={700}
          src={this.state.visibleImageApiUrl}
          />
        </div>
        <div class="column-two" >
        <Image
          width={400}
          src={this.state.thermalImageApiUrl}
          />
          <pre>




          </pre>
          <div>

          BODY TEMP : <h2>{this.state.bodyTemp}</h2>
          SKIN TEMP : <h2>{this.state.skinTemp}</h2>
          </div>
        </div>
      </div>
      <Button onClick={this.buttonClick.bind(this)}>Get Details</Button>
    </Content>
    <Footer style={{ textAlign: 'center' }}>CRM Vendor</Footer>
  </Layout>
  </div>
       )
    }
    
  
  
  }

  export default ScanImage;