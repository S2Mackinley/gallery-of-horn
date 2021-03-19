import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'


class FormInfo extends React.Component {
    render() {
        return ( 
            <Dropdown onSelect={this.props.handleInput}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="dropdown-basic-button">  
                        <Dropdown.Item href="#/action-1" eventKey='all' as='button' >All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey='1' as='button' >1</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey='2' as='button' >2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey='3' as='button' >3</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey='100' as='button' >100</Dropdown.Item>
                    </Dropdown.Menu>
                
            </Dropdown>
        )
    }
}


export default FormInfo;

