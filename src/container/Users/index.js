import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	Row,
	Col
} from 'react-bootstrap'
import CallInfo from './CallInfo'
import UserInfo from './UserInfo'
import InputRow from './InputRow'
import FriendsInfo from './FriendsInfo'
import ReportsInfo from './ReportsInfo'
import Sidebox from './Sidebox'

class Users extends Component {
	state = {
		user: {
			age: "15-25",
			ban: false,
			createdAt: "2018-01-22T18:50:30.986Z",
			email: "mila@gmail.com",
			full_name: "cami c",
			gender: "female",
			id: "5a70836591e42b2a7179b80f",
			location: "Madrid",
			loginType: "Classic",
			phone: "9111111112",
			picture: "https://s3-us-west-2.amazonaws.com/chatopics.com/Users/5a70836591e42b2a7179b80f/5a70836591e42b2a7179b80f.png?1530784808358",
			updatedAt: "2018-01-30T18:50:30.986Z",
			username: "cami",
		},
		statistics: {
			call_usage: 3,
			calls: 3,
			friends: 0,
			points: 0,
			reports: 2
		},
		friends: [
			{
				createdAt: "2018-01-30T15:02:46.366Z",
				id: "5a70891691e42b2a7179b826",
				source: "5a70836591e42b2a7179b80f",
				status: 0,
				status_text: "Pending",
				target: {
					full_name: "John Due",
					statistics: {
						call_usage: 3,
						calls: 3,
						friends: 0,
						points: 0,
						reports: 0,
					}
				}
			}
		],
		user_logs: [
			{
				action: "register",
				code: 200,
				user: {
					createdAt: "2018-01-30T14:38:29.574Z",
				}
			},
			{
				action: "set_picture",
				code: 200,
				user: {
					createdAt: "2018-01-30T14:38:29.574Z",
				}
			},
			{
				action: "login",
				code: 200,
				user: {
					createdAt: "2018-01-30T14:40:09.802Z",
				}
			}
		],
		call_logs: [
			{
				action: "end",
				category: "call",
				code: 200,
				user: {
					createdAt: "2018-01-30T14:38:29.574Z",
				}
			},
			{
				action: "login",
				category: "call",
				code: 200,
				user: {
					createdAt: "2018-01-30T15:13:51.809Z",
				}
			},
			{
				action: "request",
				category: "call",
				code: 200,
				user: {
					createdAt: "2018-01-30T14:38:29.574Z",
				}
			},
			{
				action: "start",
				category: "call",
				code: 200,
				user: {
					createdAt: "2018-01-30T14:38:29.574Z",
				}
			},
		],
		reported: [
			{
				full_name: "brad smith",
				reporter: [
					{
						createdAt: "2018-01-30T14:38:54.845Z",
						full_name: "brad smith"
					}
				]
			}
		],
		reporter: [
			{
				text: "advertisement",
				createdAt: "2018-01-30T14:38:54.845Z",
				full_name: "brad smith",
				reported: [
					{
						text: "advertisement",
						full_name: "brad smith",
						reporter: [
							{
								createdAt: "2018-01-30T14:38:54.845Z",
								full_name: "brad smith"
							}
						]
					}
				]
			}
		]
	}

	//ajax calls goes here
	componentDidMount() { }

	//some functions that do stuff after clicking a button, for example
	friendsSection = () => { }
	reportsSection = () => { }

	time = new Date().getTime()
	render() {
		const { user, statistics, friends, call_logs, user_logs, reported, reporter } = this.state
		return (
			<div className="container">
				<div className="user-view">
					<Row>
						{/* left side of the page */}
						<Col xs={12} md={8}>
							{/* top user info: calls, friends, etc */}
							<CallInfo statistics={statistics} />
							{/* white box containing users image and profile inf */}
							<div className="white-box">
								<UserInfo user={user} />
								<InputRow user={user} />
							</div>
							<FriendsInfo friends={friends} />
							<ReportsInfo reporter={reporter} />
						</Col>
						{/* right side of the page */}
						<Col xs={12} md={4}>
							<Sidebox user_logs={user_logs} call_logs={call_logs}/>
						</Col>
					</Row>
				</div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Users)