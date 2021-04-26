import React, {useContext, useEffect} from 'react'
import {UserContext} from '../shared/provider/UserProvider'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomeView} from '../view/HomeView'
import {GalleryView} from '../view/navigationtabviews/GalleryView'
import {NewsView} from '../view/navigationtabviews/NewsView'
import {ShopView} from '../view/navigationtabviews/ShopView'
import {SignInView} from '../view/navigationtabviews/SignInView'
import {ProfileView} from '../view/profiledropdownviews/ProfileView'
import {SettingsView} from '../view/profiledropdownviews/SettingsView'
import {SavedProductsView} from '../view/profiledropdownviews/SavedProductsView'

import RoutingPath from './RoutingPath'



export const Routes = (props: {children?: React.ReactChild}) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated: React.FC) => {
         return  authenticatedUser ? HomeView : navigateToViewIfAuthenticated
        }

    const autheticationRequired = (navigateToViewIfAuthenticated: React.FC) => {
            return authenticatedUser ? navigateToViewIfAuthenticated : SignInView
    }

    
    const checkIfUserIsAuthenticated = () => {
        const getLocalStorage = localStorage.getItem('username')
        if(getLocalStorage) {
            setAuthenticatedUser(getLocalStorage)
        }
    }
    
    useEffect(() => {
        checkIfUserIsAuthenticated()
    })


    return (
        <BrowserRouter>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.galleryView} component={GalleryView}/>
                <Route exact path={RoutingPath.newsView} component={NewsView}/>
                <Route exact path={RoutingPath.shopView} component={ShopView}/>
                <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated (SignInView)}/>
                <Route exact path={RoutingPath.profileView} component={autheticationRequired(ProfileView)}/>
                <Route exact path={RoutingPath.settingsView} component={autheticationRequired(SettingsView)}/>
                <Route exact path={RoutingPath.savedProductsView} component={autheticationRequired(SavedProductsView)}/>
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}
