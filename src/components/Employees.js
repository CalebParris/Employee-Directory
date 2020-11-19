import React, {Component} from "react";
import Container from "./Container"
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Table from "./Table";
import API from "../utils/API";

class Employees extends Component {
    state = {
        result: [],
        filteredResult: [],
        search: "",
        order: true
    };

     componentDidMount(){
        API.getUsers().then((res) => {
            this.setState({result: res.data.results, filteredResult: res.data.results})
        }).catch((err) => {console.log(err);})
    }

    formatDate(date){
        let dob = new Date(date);
        let month = dob.getMonth() + 1;
        let day = dob.getDate();
        let year = dob.getFullYear();

        return [month, day, year].join("/");
    }

    handleSortNames(){
        if(this.state.order){
            this.setState({order: false})
        } else {
            this.setState({order: true})
        }

        const compareNames = (a, b) => {
            let nameA = a.name.first.toLowerCase();
                let nameB = b.name.first.toLowerCase();

            if (!this.state.order){
                return nameA.localeCompare(nameB)
            } else {
                return nameB.localeCompare(nameA)
            }
            }
            const sortedNames = this.state.filteredResult.sort(compareNames)
            this.setState({filteredResult: sortedNames})
        }    

    handleSortPhone(){
        this.setState({result: this.state.result.sort((a, b) => {
            if (a.phone < b.phone){
                return -1
            } else {
                return 1;
            }
        })})
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value});
       const updatedList = this.state.result.filter(({name}) => {
           let fullName = name.first.concat(name.last);
          return fullName.toLowerCase().includes(value);
       })
       this.setState({result: updatedList});
    }

     render(){
         return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Header heading="Employee Directory" instructions="Use the search bar to filter the results, or sort the table by clicking on the table headings"/>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <SearchForm  value={this.state.search} handleInputChange={this.handleInputChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                    <table className="table">
            <tbody className="table-body">
                <tr>
                    <th>Picture</th>
                    <th><button onClick={() => {
                        return this.handleSortNames()
                    }}>Name</button></th>
                    <th><button onClick={() => {
                        return this.handleSortPhone()
                    }}>Phone</button></th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                {
                        this.state.result.map((employee) => {
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