import React from 'react';

const TableRow = (props) => {
    return (
        <tr>
            <th scope="row"><img src={props.picture} alt={props.name.last} /></th>
                  <td className="align-middle">{props.name.first + ' ' + props.name.last}</td>
                  <td className="align-middle">{props.phone}</td>
                  <td className="align-middle">{props.email}</td>
                  <td className="align-middle">{props.dob}</td>
        </tr>
    );
};

export default TableRow;