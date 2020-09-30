import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import TableData from './components/TableData';
import AddUser from './components/AddUser';
import DataUser from './components/Data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: true,
      dataUser: DataUser,
      searchText: '',
      edituserStatus: false,
      userEditOject: {}
    }
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
  }

  changeEditUserStatus = () => {
    this.setState({edituserStatus: !this.state.edituserStatus})
  }

  thayDoi = () => {
    this.setState({trangthai: !this.state.trangthai})
  }

  editUser = (user) => {
    this.setState({userEditOject: user});
  }
  getNewDataUser = (name, tel, Permission) => {
    var item = {}
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission; 
    console.log(item);
    // let items = this.state.dataUser; 
    // items.push(item);
    this.setState((prevState) => ({
      dataUser: [...prevState.dataUser, item],
    }));

    console.log(this.state.dataUser);
  }

  getUserEditInfoApp = (info) => {
   this.state.dataUser.forEach((value, key) => {
    if(value.id === info.id){
      value.name = info.name;
      value.tel = info.tel;
      value.Permission = info.Permission;
    }
   });
   localStorage.setItem('userData', JSON.stringify(this.state.dataUser));
  }

  deleteUser = (idUser) => {
    
    let temData = this.state.dataUser.filter(item => item.id !== idUser);
    this.setState({
      dataUser: temData
    })
    localStorage.setItem('userData', JSON.stringify(temData));
  
  }

  render() {
    let {dataUser} = this.state;
    var ketqua = [];

    dataUser.forEach((item) => {
      if(item.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1){
        ketqua.push(item); 
      }
    });
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
              <div className="row">
                  <Search getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)} userEditOject={this.state.userEditOject} changeEditUserStatus={this.changeEditUserStatus} editUserStatus={this.state.edituserStatus} isDisplayButton={this.state.trangthai} click={this.thayDoi} checkConnectProps={(dl) => this.getTextSearch(dl)}/>
                  <div className="col-12">
                    <hr/>
                  </div>

                  <TableData deleteUser={(idUser) => this.deleteUser(idUser)} changeEditUserStatus={this.changeEditUserStatus} editFun={(user) => this.editUser(user)} dataUserProps={ketqua} hienThiForm={this.state.trangthai}/>
                  
                  <AddUser click={this.thayDoi} add={(name,tel,Permission) => this.getNewDataUser(name, tel, Permission)} hienThiForm={this.state.trangthai}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;