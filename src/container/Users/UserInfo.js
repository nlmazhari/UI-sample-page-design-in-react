import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserInfo extends Component {
    render() {
        const { user } = this.props
        return (
            <div className="flex-row">
                <div className="section">
                    <div className="profile-img" style={{ backgroundImage: `url(${user.picture + '?' + this.time || '/assets/img/back.png'})` }}></div>
                </div>
                <div className="section-12">
                    <p className="title-num">status</p>
                    <p className="number-text">{user.banned ? 'Banned' : 'Active'}</p>
                </div>
                <div className="section-15">
                    <p className="title-num">sign up method</p>
                    <p className="number-text">{user.loginType ? user.loginType : '---'}</p>
                </div>
                <div className="section-17">
                    <p className="title-num">joined date</p>
                    <p className="number-text">{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="section-17">
                    <p className="title-num">last activity</p>
                    <p className="number-text">{user.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : '---'}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(UserInfo)