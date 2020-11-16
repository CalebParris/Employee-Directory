import React, {Component} from "react";
import Container from "./Container"
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
// import SearchForm from "./SearchForm";
// import Table from "./Table";
// import API from "../utils/API";

class Employees extends Component {
    // state = {
    //     result: {}
    // };

    // componentDidMount(){
    //     API.search().then((res) => {this.setState({result: res.data})}).catch((err) => {console.log(err);})
    // }

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
                </Row>
                <Row>
                    <Col size="md-12">
                        <Table />
                    </Col>
                </Row> */}
            </Container>
        )
    }
}

export default Employees;