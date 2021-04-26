import {useContext} from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import {ProfileDropDown} from './profiledropdown/ProfileDropDown'
import './Profile.css'


export const Profile = (): JSX.Element => {
    const [authenticatedUser, ] = useContext(UserContext)
    return (
        <div className='profileWrapper'>
            <img className='profileImg'  src={'https://thispersondoesnotexist.com/image'} alt={'error loading image'} />
            <span>{authenticatedUser}</span>
            <ProfileDropDown/>
        
        </div>
    )
}
