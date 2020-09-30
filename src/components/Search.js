import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tempValue: '',
      userOjb: {}
    }
  }
  
  isChange = (event) => {
    this.setState({tempValue: event.target.value});
  }

  getuserEditInfo = (info) => {
    this.setState({
      userOjb: info
    });

    this.props.getUserEditInfoApp(info);
  }
    render() {
      let {isDisplayButton, editUserStatus} = this.props;
        return (
            <div className="col-12">
              {editUserStatus ? <EditUser getuserEditInfo={(info) => this.getuserEditInfo(info)} userEditOject={this.props.userEditOject} changeEditUserStatus={this.props.changeEditUserStatus}/> : null}
            <div className="form-group">
              <div className="btn-group" style={{width: '600px'}}>
                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name='' id='' aria-describedby="helpId" placeholder="Nhap tu Khoa Tim Kiem" />
                <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tim</div>
                {isDisplayButton ? <div className="btn btn-block btn-success" onClick={this.props.click}>Them Moi</div> :
              <div className="btn btn-block btn-warning" onClick={this.props.click}>Dong Lai</div>}
              </div>
            </div>
          </div>
        );
    }
}

export default Search;