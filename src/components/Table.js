import React from "react";
import "./Table.css"

function Table(props) {
    return (
        <table className="table">
            <tbody className="table-body">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                <tr className="table-row">
                    <td>
                        <img alt={props.alt} className="img-fluid" src={props.src} />
                    </td>
                    <td>{props.name}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;