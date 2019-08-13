import VueRouter from 'vue-router'

import  MainComponent from './pages/Main'
import  CurrentTask from './pages/Current'
import  BeginTask from './pages/Completed'
import  NewTask from './pages/New'
import  Plain from './pages/Plain'

export default new  VueRouter ({
    routes: [
        {
            path: '',
            component: MainComponent
        },
        {
            path: '/current',
            component: CurrentTask
        },
        {
            path: '/completed',
            component: BeginTask
        },
        {
            path: '/new',
            component: NewTask
        },
        {
            path: '/plain',
            component: Plain
        }
    ],
    mode: 'history'
})