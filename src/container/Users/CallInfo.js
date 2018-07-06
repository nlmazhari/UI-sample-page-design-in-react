import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Button
} from 'react-bootstrap'

class CallInfo extends Component {
    render() {
        const { statistics } = this.props
        return (
            <div className="box-wrap">
                <div className="users-white-box">
                    <p className="title">calls</p>
                    <p className="number">{statistics.calls}</p>
                </div>
                <div className="users-white-box">
                    <p className="title">minutes talked</p>
                    <p className="number">{statistics.call_usage}</p>
                </div>
                <div className="users-white-box">
                    <p className="title">friends</p>
                    <p className="number">{statistics.friends}</p>
                    <Button onClick={() => this.friendsSection()} className="view-link">view</Button>
                </div>
                <div className="users-white-box">
                    <p className="title">number of reporter</p>
                    <p className="number">{statistics.reports}</p>
                    <Button onClick={() => this.reportsSection()} className="view-link">view</Button>
                </div>
                <div className="users-white-box">
                    <p className="title">points</p>
                    <p className="number">{statistics.points}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(CallInfo)