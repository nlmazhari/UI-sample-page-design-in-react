import React, { Component } from 'react'
import { connect } from 'react-redux'

class FriendsInfo extends Component {
    render() {
        const { friends } = this.props
        return (
            <div>
                <p className="page-title">friends</p>
                <div className="friends-box" ref="friendsSection">
                    {
                        friends.length === 0 &&
                        <p>There is no friends</p>
                    }
                    {
                        friends.map((item, i) =>
                            <div className="flex-row" key={i}>
                                <div className="section-30">
                                    <p className="title-name">Full Name</p>
                                    <p className="gray-text">{item.target.full_name}</p>
                                    <p className="small-text">Join Date: {new Date(item.target.createdAt).toLocaleDateString()}</p>
                                    <p className="small-text">Last Update: {new Date(item.target.updatedAt).toLocaleDateString()}</p>
                                </div>
                                <div className="section-18">
                                    <p className="title-num">Sign up Method</p>
                                    <p className="number-text">by Phone</p>
                                </div>
                                <div className="section-12">
                                    <p className="title-num">Gender</p>
                                    <p className="number-text">{item.target.gender || '---'}</p>
                                </div>
                                <div className="section-10">
                                    <p className="title-num">Call</p>
                                    <p className="number-text">{item.target.statistics.calls || 0}</p>
                                </div>
                                <div className="section-20">
                                    <p className="title-num">Status</p>
                                    <p className="number-text">{item.status_text}</p>
                                </div>
                                <div className="section-10">
                                    <div className="triangle-box">
                                        <p className="title-num">Report</p>
                                        <p className="number-text">{item.target.statistics.reports || 0}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(FriendsInfo)