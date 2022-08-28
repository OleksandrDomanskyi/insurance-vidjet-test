import { createRouter, createWebHistory } from "vue-router"
import InsuranceTermsPage from '@/pages/InsuranceTermsPage'
import LicenseDataPage from '@/pages/LicenseDataPage'
import UserDataPage from '@/pages/UserDataPage'

const routes = [
    {
        path: '/',
        component: InsuranceTermsPage
    },
    {
        path: '/license',
        component: LicenseDataPage
    },
    {
        path: '/user',
        component: UserDataPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router