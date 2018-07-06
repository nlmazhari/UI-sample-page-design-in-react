import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebox extends Component {
    render() {
        const { user_logs, call_logs } = this.props
        return (
            <div className="side-box">
                <p className="title-log">User's Logs</p>
                <ul className="log-box">
                    {
                        user_logs.length === 0 &&
                        <li>
                            <span className="black">There is no user's log</span>
                        </li>
                    }
                    {
                        user_logs.map((item, i) =>
                            <li key={i}>
                                <span className="blue">{new Date(item.createdAt).toLocaleDateString()} </span>
                                <span className="black">{item.action.replace(/_/g, " ")} </span>
                                <span className={item.code === 200 ? 'green' : 'red'}>{item.code === 200 ? 'Success' : 'Failed'}</span>
                            </li>
                        )
                    }
                </ul>
                <hr />
                <p className="title-log">Call's Logs</p>
                <ul className="log-box-tall">
                    {
                        call_logs.length === 0 &&
                        <li>
                            <span className="black">There is no call's log</span>
                        </li>
                    }
                    {
                        call_logs.map((item, i) =>
                            <li key={i}>
                                <span className="blue">{new Date(item.createdAt).toLocaleDateString()} </span>
                                <span className="black">{item.action.replace(/_/g, " ") + ' call'} </span>
                                <span className={item.code === 200 ? 'green' : 'red'}>{item.code === 200 ? 'Success' : 'Failed'}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Sidebox)