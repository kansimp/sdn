import Login from '../pages/Login/Login';
import Homepage from '../pages/Homepage/Homepage';
import ProductDetail from '../pages/ProducDetail/ProductDetail';
import Cart from '../pages/Cart.jsx/Cart';
import Register from '../pages/Register/Register';
import Profile from '../atom/profile/Profile';
import Admin from '../pages/Admin/Admin';
import ListBrands from '../pages/ListBrands/ListBrands';
import BrandListWatch from '../pages/BrandListWatch/BrandListWatch';
// import Dashboard from "@components/page/Dashboard";
// import StudentList from "@components/page/StudentList";
// import StudentInfo from "@components/page/StudentInfo";
// import ViewDetailListService from "../components/page/ViewDetailList/ViewDetailListService";
// import ViewTraineeScore from "@components/page/ViewTraineeScore/ViewTraineeScore";
// import UserPermissionService from "@components/page/User Management/UserPermission/UserPermissionService";
// import ViewClassListService from "@components/page/ViewClassList/ViewClassListService";
// import ReserveList from "@components/page/ReserveList";
// import ViewUserListService from "@components/page/ViewUserList/ViewUserListService";
// import ViewExistingEmailTempService from "@components/page/ViewExistingEmailTemp/ViewExistingEmailTempService";
// import ViewEmailDetail from "@components/page/ViewEmailDetail/ViewEmailDetail";
// import EmailHistoryListService from "@components/page/ReservationEmailHistory/EmailHistoryListService";

const publicRoutes = [
    {
        title: '',
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
];

const userRoutes = [
    {
        path: '/home',
        component: Homepage,
    },
    {
        path: '/brand/:brandName',
        component: BrandListWatch,
    },
    {
        path: '/info',
        component: Profile,
    },
    {
        path: '/product/:id',
        component: ProductDetail,
    },
];

const adminRoutes = [
    {
        path: '/admin',
        component: Admin,
    },
    {
        path: '/admin/brands',
        component: ListBrands,
    },

    // {
    //   path: "/users/:id",
    //   component: StudentInfo,
    // },
    // {
    //   title: "ViewTitleClass",
    //   path: "/class/:classID/:id",
    //   component: StudentInfo,
    // },
    // {
    //   path: "/classes",
    //   component: ViewClassListService,
    // },
    // {
    //   path: "/class/:classID",
    //   component: ViewDetailListService,
    // },
    // {
    //   path: "user-permission",
    //   component: UserPermissionService,
    // },
    // {
    //   path: "reserve-list",
    //   component: ReserveList,
    // },
    // {
    //   path: "/score-management/:classID",
    //   component: ViewTraineeScore,
    // },

    // {
    //   path: "users-list",
    //   component: ViewUserListService,
    // },
    // {
    //   path: "/email-config",
    //   component: ViewExistingEmailTempService,
    // },
    // {
    //   path: "/email-config/:templateId",
    //   component: ViewEmailDetail,
    // },
    // {
    //   path: "/email-history/:id",
    //   component: EmailHistoryListService,
    // },
];

export { publicRoutes, adminRoutes, userRoutes };
