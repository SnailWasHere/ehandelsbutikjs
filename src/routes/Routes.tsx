import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomeView} from '../view/HomeView'
import {TestView} from '../view/TestView'

export const Routes = (props: {children?: React.ReactChild}) => {
    return (
        <BrowserRouter>
            {props.children}
            <Switch>
                <Route exact path={'/test'} component={TestView}/>
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}
