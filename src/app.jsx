import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Home from './container/Home'
import Users from './container/Users'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Users} />
				<Route path="/home" render={() => (
					<Home>
						<Route path="/home/users" component={Users} />
					</Home>
				)} />
			</Switch>
		</Router>
	)
}

export default App
