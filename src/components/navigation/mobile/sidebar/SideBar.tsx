import './SideBar.css'


export const SideBar = (props:{drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void} ) => {
    return (
        <nav className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <h1 onClick={() => props.drawerHandler(false)}>Exit</h1>
            <h1>shop</h1>
            <h1>Gallery</h1>
            <h1>Personal profile</h1>
            <h1>Logout</h1>
        </nav>
    )
}
