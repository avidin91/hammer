import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'catalogue',
      path: `${APP_PREFIX_PATH}/catalogue`,
      title: 'sidenav.catalogue',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [{
        key: 'extra-catalogue-products',
        path: `${APP_PREFIX_PATH}/catalogue/product`,
        title: 'sidenav.catalogue.products',
        icon: '',
        breadcrumb: false,
        submenu: []
      },{
        key: 'extra-catalogue-categories',
        path: `${APP_PREFIX_PATH}/catalogue/categories`,
        title: 'sidenav.catalogue.categories',
        icon: '',
        breadcrumb: false,
        submenu: []
      },{
        key: 'extra-catalogue-collections',
        path: `${APP_PREFIX_PATH}/catalogue/collections`,
        title: 'sidenav.catalogue.collections',
        icon: '',
        breadcrumb: false,
        submenu: []
      },{
        key: 'extra-catalogue-combos',
        path: `${APP_PREFIX_PATH}/catalogue/combos`,
        title: 'sidenav.catalogue.combos',
        icon: '',
        breadcrumb: false,
        submenu: []
      },]
    }, {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/orders`,
      title: 'sidenav.orders',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'sidenav.clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [{
        key: 'extra-clients-clientList',
        path: `${APP_PREFIX_PATH}/clients/clientlist`,
        title: 'sidenav.clients.clientList',
        icon: '',
        breadcrumb: false,
        submenu: []
      },{
        key: 'extra-clients-clientGroups',
        path: `${APP_PREFIX_PATH}/clients/clientgroups`,
        title: 'sidenav.clients.clientGroups',
        icon: '',
        breadcrumb: false,
        submenu: []
      },{
        key: 'extra-clients-editor',
        path: `${APP_PREFIX_PATH}/clients/editor`,
        title: 'sidenav.clients.editor',
        icon: '',
        breadcrumb: false,
        submenu: []
      },]
    }, {
      key: 'planner',
      path: `${APP_PREFIX_PATH}/planner`,
      title: 'sidenav.planner',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'promoCodes',
      path: `${APP_PREFIX_PATH}/promocodes`,
      title: 'sidenav.promoCodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'offlineSpots',
      path: `${APP_PREFIX_PATH}/offlinespots`,
      title: 'sidenav.offlineSpots',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [{
        key: 'extra-offlineSpots-addresses',
        path: `${APP_PREFIX_PATH}/offlineSpots/addresses`,
        title: 'sidenav.offlineSpots.addresses',
        icon: '',
        breadcrumb: false,
        submenu: []
      },{
        key: 'extra-offlineSpots-geofences',
        path: `${APP_PREFIX_PATH}/offlineSpots/geofences`,
        title: 'sidenav.offlineSpots.geofences',
        icon: '',
        breadcrumb: false,
        submenu: []
      },]
    }, {
      key: 'staff',
      path: `${APP_PREFIX_PATH}/staff`,
      title: 'sidenav.staff',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'mailing',
      path: `${APP_PREFIX_PATH}/mailing`,
      title: 'sidenav.mail',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/settings`,
      title: 'sidenav.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'mobileApp',
      path: `${APP_PREFIX_PATH}/mobileapp`,
      title: 'sidenav.apps',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/logs`,
      title: 'sidenav.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }]
},]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
