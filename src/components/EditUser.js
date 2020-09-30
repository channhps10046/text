import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state= {
      id: this.props.userEditOject.id,
      name: this.props.userEditOject.name,
      tel: this.props.userEditOject.tel,
      Permission: this.props.userEditOject.Permission
    }
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name] : value })
  }

  saveButton = () => {
    var info = {}
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.Permission = this.state.Permission;
    this.props.getuserEditInfo(info);
    this.props.changeEditUserStatus();
  }
  
    render() {
        return (
            <div className="col-12">
              <form>
           <div className="card text-left">
            <div className="card txt-white bg-secondary mt-2">
                <div className="card-header">Sua User</div>
                <div className="card-body">
                  <div className="form-group">
                    <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditOject.name}  className="form-control"  name='name' aria-describedby="helpId" placeholder="User Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditOject.tel} className="form-control"  name='tel' aria-describedby="helpId" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditOject.Permission}  name="Permission"  className="custom-select">
                      <option value=''>Chon Quyen Mac Dinh</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                   <button onClick={this.saveButton} className="btn btn-block btn-primary" type="reset"><div>Luu</div></button> 
                  </div>
                </div>
            </div>
            </div>
            </form>
          </div>
         
        );
    }
}

export default EditUser;