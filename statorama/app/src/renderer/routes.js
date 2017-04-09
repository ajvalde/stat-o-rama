import SignUp from 'components/SignUp';
import Stats from 'components/Stats';
export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp
    
  }
]
