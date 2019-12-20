import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import '@/assets/css/index.less'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/Stroe'
import Routers from './routers/Routers'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {Routers.map((router, key) => {
                if (router.exact) {
                    return (
                        <Route
                            key={key}
                            exact
                            path={router.path}
                            render={props => <router.component {...props} routers={router.routers} />}
                        />
                    )
                } else {
                    return (
                        <Route
                            key={key}
                            path={router.path}
                            render={props => <router.component {...props} routers={router.routers} />}
                        />
                    )
                }
            })}
        </Router>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
