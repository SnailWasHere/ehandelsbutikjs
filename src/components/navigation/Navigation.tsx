import { DesktopNavigation } from './desktop/DesktopNavigation'
import {useWindowDimensions} from '../../hooks/usewindowdimensions'
import { MobileNavigation } from './mobile/MobileNavigation'

export const Navigation = () => {
    const { width} = useWindowDimensions()
    
    const navigationViewPort = () => {
        return width <= 1100 ? <MobileNavigation /> : <DesktopNavigation />
    }

    return (navigationViewPort())
}

