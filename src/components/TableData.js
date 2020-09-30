import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser);
  }
    render() {
      let {dataUserProps,  hienThiForm} = this.props;
      const dataUser = dataUserProps.map((value, key) => (
          <TableDataRow deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)} changeEditUserStatus={this.props.changeEditUserStatus} editFunClick={(user) => this.props.editFun(value)} key={key} stt={key} userName={value.name} tel={value.tel} Permission={value.Permission} id={value.id}/>
        ));
        return (
            <div className={hienThiForm ? "col-12" : "col-9"}>
            <table className="table table-striped table-inverse table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {dataUser}
              </tbody>
            </table>
          </div>
        );
    }
}

export default TableData;