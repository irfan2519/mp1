
import SignIn from '../components/pages/SignIn/index'
import SignUp from '../components/pages/SignUp/Register'
import Home from "../components/pages/Home/home";

const routes = [
    {
        path: "/",
        component: SignIn,
         protectedRoute: false,
    },
    {
        path:"/Register",
        component: SignUp,
        protectedRoute: false,
    },
    {
        path: "/home",
        component: Home,
        protectedRoute: true,
      },
]


export default routes;