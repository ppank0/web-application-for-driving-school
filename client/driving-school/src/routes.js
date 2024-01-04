import About from './pages/About'
import Admin from './pages/Admin'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Registration from './pages/Registration'
import User from './pages/UserProfile'
import ServiceBC from './pages/servicePages/ServiceBC'
import ServiceB from './pages/servicePages/ServiceB'
import ServiceC from './pages/servicePages/ServiceC'
import ServiceCE from './pages/servicePages/ServiceCE'
import ServiceD from './pages/servicePages/ServiceD'
import CreateStudent from './pages/CreateStudent'
import { ABOUT_ROUTE, ADMIN_ROUTE, CONTACTS_ROUTE, CREATE_STUDENT_ROUTE, GALLERY_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SERVICE_BC_ROUTE, SERVICE_B_ROUTE, SERVICE_CE_ROUTE, SERVICE_C_ROUTE, SERVICE_D_ROUTE, USER_PROFILE_ROUTE } from './utils/consts'
import Gallery from './pages/Gallery'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: USER_PROFILE_ROUTE,
        Component: User
    },
    {
        path: CREATE_STUDENT_ROUTE,
        Component: CreateStudent
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: LOGIN_ROUTE,
        Component: LogIn
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: SERVICE_BC_ROUTE,
        Component: ServiceBC
    },
    {
        path: SERVICE_B_ROUTE,
        Component: ServiceB
    },
    {
        path: SERVICE_C_ROUTE,
        Component: ServiceC
    },
    {
        path: SERVICE_CE_ROUTE,
        Component: ServiceCE
    },
    {
        path: SERVICE_D_ROUTE,
        Component: ServiceD
    },
    {
        path: GALLERY_ROUTE,
        Component: Gallery
    }
]