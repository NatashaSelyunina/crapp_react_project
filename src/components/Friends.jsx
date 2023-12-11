import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td><NavLink to={"/profile/" + props.id}>{props.name} {props.lastname}</NavLink></td>
      <td>{props.email}</td>
      <td>{props.id}</td>
    </tr>
  );
}

export class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userRow: []};
  }

  componentDidMount() {
    this.props.function().then((users) => {
      console.log(users);
      let usersCount = users.length;
      let userRow = [];
      for (let i = 0; i < usersCount; i++) {
        userRow.push(<TableRow 
          key={i} 
          index={i} 
          name={users[i].name} 
          lastname={users[i].lastname} 
          id={users[i].id} 
          email={users[i].email}/>
          );
      }
      this.setState({userRow: userRow})
    });
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Имя Фамилия</th>
                <th scope="col">Email</th>
                <th scope="col">Id</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userRow}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}