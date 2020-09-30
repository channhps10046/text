import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(parseInt(this.props.Permission) === 1) {
            return "Admin"
        } else if(parseInt(this.props.Permission) === 2){
            return "Monderator";
        } else{
            return "Normal User";
        }
    }

    editClick = () => {
       this.props.editFunClick();
       this.props.changeEditUserStatus();
    }
    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }
    render() {

        return (
            <tr>
            <td>{this.props.stt+1}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.tel}</td>
            <td>{this.permissionShow()}</td>
            <td>
              <div onClick={this.editClick}  className="btn btn-warning sua"><i className="fa fa-edit" />Edit</div>
              <div onClick={(idUser) => this.deleteButtonClick(this.props.id)} className="btn btn-danger xoa"><i className="fa fa-delete" />Delete</div>
            </td>
          </tr>
        );
    }
}

export default TableDataRow;