import React, { Component } from 'react';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: " ",
      name: " ",
      tel: " ",
      Permission: " "
    }
  }
  
  
  ischange = (event) => {
   const name = event.target.name;
   const value = event.target.value;

   this.setState({
     [name]: value
   });

   var item = {}
   item.id = this.state.id;
   item.name = this.state.name;
   item.tel = this.state.tel;
   item.Permission = this.state.Permission; 
  }
    render() {
        var {hienThiForm} = this.props;
        return (
            <div className="col-3">
              <form>
            {!hienThiForm ? <div className="card text-left">
            <div className="card border-primary mt-2">
                <div className="card-header">Them Moi User</div>
                <div className="card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" onChange={(event) => this.ischange(event)} name='name' aria-describedby="helpId" placeholder="User Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" onChange={(event) => this.ischange(event)} name='tel' aria-describedby="helpId" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <select  name="Permission" onChange={(event) => this.ischange(event)} className="custom-select">
                      <option value=''>Chon Quyen Mac Dinh</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                   <button onClick={this.props.click} className="btn btn-block btn-primary" type="reset"><div onClick={(e) => this.props.add(this.state.name,this.state.tel,this.state.Permission)}>Them Moi</div></button> 
                  </div>
                </div>
            </div>
            </div>: null}
            </form>
          </div>
        );
    }
}

export default AddUser;