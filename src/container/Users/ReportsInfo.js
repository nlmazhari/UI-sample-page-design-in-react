
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReportsInfo extends Component {
    render() {
        const { reporter } = this.props
        return (
            <div className="reports-box" ref="reportSection">
                <div className="flex-head">
                    <p className="page-title">reporter list</p>
                    <p className="page-title">{reporter.length}</p>
                </div>
                {
                    reporter.length === 0 &&
                    <div className="flex-row">
                        There is no reporter data
                                                </div>
                }
                {
                    reporter.map((item, i) =>
                        <div className="flex-row" key={i}>
                            <div className="section-20">
                                <p className="title">report type</p>
                                <p className="text">{item.text}</p>
                            </div>
                            <div className="section-20">
                                <p className="title">reported</p>
                                <p className="blue-text">{item.reported.full_name || "---"}</p>
                            </div>
                            <div className="section-20">
                                <p className="title">date</p>
                                <p className="blue-text">{new Date(item.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className="section">
                                <p className="title">status</p>
                                <p className="text">{item.resolved ? 'Resolved' : 'Not Resolved'}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(ReportsInfo)