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
                        {
                        this.state.isLoading ?
                        <h1>Loading</h1> :
                        <Table alt="Photo of Employee" src={this.state.result[0].picture.thumbnail} name={this.state.result[0].name.first.concat(" ", this.state.result[0].name.last)} phone={this.state.result[0].phone} email={this.state.result[0].email} dob={this.state.result[0].dob.date}/>
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Employees;