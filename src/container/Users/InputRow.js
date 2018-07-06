import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Row,
    Col,
    FormGroup,
    FormControl,
    ControlLabel,
    Button,
} from 'react-bootstrap'

class InputRow extends Component {
    render() {
        const { user } = this.props
        return (
            <Row className="input-row">
                <Col xs={12} md={6}>
                    <FormGroup>
                        <ControlLabel className="lightgray-text">full name</ControlLabel>
                        <FormControl type="text" defaultValue={user.full_name} inputRef={(ref) => this.full_name = ref} maxLength={50} />
                    </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                    <FormGroup>
                        <ControlLabel className="lightgray-text">email</ControlLabel>
                        <FormControl type="text" defaultValue={user.email} inputRef={(ref) => this.email = ref} maxLength={50} />
                    </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                    <FormGroup>
                        <ControlLabel className="lightgray-text">user name</ControlLabel>
                        <FormControl type="text" defaultValue={user.username} inputRef={(ref) => this.username = ref} maxLength={20} />
                    </FormGroup>
                </Col>
                <Col xs={12} md={3}>
                    <FormGroup>
                        <ControlLabel className="lightgray-text">gender</ControlLabel>
                        <FormControl type="text" componentClass="select" inputRef={(ref) => this.gender = ref}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </FormControl>
                    </FormGroup>
                </Col>
                <Col xs={12} md={3}>
                    <FormGroup>
                        <ControlLabel className="lightgray-text">age</ControlLabel>
                        <FormControl type="text" componentClass="select" inputRef={(ref) => this.age = ref}>
                            <option value="15-25">15-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-50">36-50</option>
                            <option value="+50">+50</option>
                        </FormControl>
                    </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                    <FormGroup>
                        <ControlLabel className="lightgray-text">phone number</ControlLabel>
                        <FormControl type="text" defaultValue={user.phone} inputRef={(ref) => this.phone = ref} maxLength={15} />
                    </FormGroup>
                </Col>
                <Col xs={12} className="btn-end">
                    <Button className="red-btn">delete</Button>
                    {
                        user.banned &&
                        <Button className="blue-btn" onClick={() => this.handleBanUnban('/users/unban')}>unban</Button>
                    }
                    {
                        !user.banned &&
                        <Button className="blue-btn" onClick={() => this.handleBanUnban('/users/ban')}>ban</Button>
                    }
                    <Button className="blue-btn" onClick={this.handleSave}>save</Button>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(InputRow)