import './ProfileDropDown.css' 
import {useHistory} from 'react-router-dom'
import {useContext} from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'

export const ProfileDropDown = () => {
   const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
   
    const history = useHistory()
    
    const logout = () => {
        setAuthenticatedUser(false)
        localStorage.removeItem('username')
        history.push(RoutingPath.homeView)
    }

    return (
        <div className='profileDropDownWrapper'>
            <span>Firstname Lastname</span><br />
            <span>Email</span>
            <hr />
            <span onClick={() => history.push(RoutingPath.profileView)}>Profile</span><br />
            <span onClick={() => history.push(RoutingPath.settingsView)}>Settings</span><br />
            <span >Language: EN</span><br />
            <span onClick={() => history.push(RoutingPath.savedProductsView)}>Liked products</span><br />
            <span onClick={() => logout()}>Logout</span>
        </div>
    )
}
