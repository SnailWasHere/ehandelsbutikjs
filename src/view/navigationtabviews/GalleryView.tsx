export const GalleryView = () => {

    const authenticatedUser = localStorage.getItem( 'authenticatedUser')

    return (
        <div>
            <h1>This is a Gallery View{authenticatedUser}</h1>
        </div>
    )
}
