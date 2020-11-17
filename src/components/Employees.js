import React, {Component} from "react";
import Container from "./Container"
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
// import SearchForm from "./SearchForm";
import Table from "./Table";
import API from "../utils/API";

class Employees extends Component {
    state = {
        result: [],
        isLoading: true
    };

    async componentDidMount(){
       await API.users().then((res) => {
            this.setState({result: res.data.results, isLoading: false})
        }).catch((err) => {console.log(err);})
    }

    formatDate(date){
        let dob = new Date(date);
        let month = dob.getMonth() + 1;
        let day = dob.getDate();
        let year = dob.getFullYear();

        return [month, day, year].join("/");
    }

     render(){
         return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Header heading="Employee Directory" instructions="Use the search bar to filter the results, or sort the table by clicking on the table headings"/>
                    </Col>
                </Row>
                {/* <Row>
                    <Col size="md-4">
                        <SearchForm />
                    </Col>
                </Row> */}
                <Row>
                    <Col size="md-12">
                    <table className="table">
            <tbody className="table-body">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                {
                        this.state.isLoading ?
                        <tr>
                            <td>Loading</td>
                        </tr> :
                        this.state.result.map((employee, i) => {
                          return  <Table alt="Photo of Employee" src={employee.picture.thumbnail} name={employee.name.first.concat(" ", employee.name.last)} phone={employee.phone} email={employee.email} dob={this.formatDate(employee.dob.date)}/>
                        })
                        }
            </tbody>
        </table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Employees;