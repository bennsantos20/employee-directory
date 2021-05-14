import React, { Component } from "react";

import API from "../utils/API";

class Directory extends Component {

    componentDidMount() {
        this.searchPeople();
      }
    
      searchPeople = (query) => {
        API.search(query).then((res) => {
          console.log(res);
        });
      };
    

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Directory;