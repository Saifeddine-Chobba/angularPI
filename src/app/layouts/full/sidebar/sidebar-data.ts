import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'User Management',
  },
  {
    displayName: 'All Users',
    iconName: 'rosette',
    route: '/dashboard/users',
  },
  {
    displayName: 'Add User',
    iconName: 'poker-chip',
    route: '/dashboard/addUser',
  },
  {
    displayName: 'All Roles',
    iconName: 'list',
    route: '/dashboard/roles',
  },
  {
    displayName: 'Add Role',
    iconName: 'layout-navbar-expand',
    route: '/dashboard/addrole',
  },
  {
    navCap: 'Campground Management',
  },
  {
    displayName: 'All Campgrounds',
    iconName: 'lock',
    route: '/dashboard/campgrounds',
  },
  {
    displayName: 'Reservations',
    iconName: 'user-plus',
    route: '/dashboard/reservations',
  },
  {
    navCap: 'Activity Management',
  },
  {
    displayName: 'Activities',
    iconName: 'user-plus',
    route: '/dashboard/activities',
  },
  {
    navCap: 'Shop Management',
  },
  {
    displayName: 'Products',
    iconName: 'mood-smile',
    route: '/dashboard/products',
  },
  {
    displayName: 'Orders',
    iconName: 'aperture',
    route: '/dashboard/orders',
  },
  {
    displayName: 'Suppliers',
    iconName: 'aperture',
    route: '/dashboard/suppliers',
  },
  {
    displayName: 'Delivery Personnel',
    iconName: 'aperture',
    route: '/dashboard/delivery',
  },
  {
    displayName: 'Deposits',
    iconName: 'aperture',
    route: '/dashboard/deposits',
  },
  {
    displayName: 'Orders',
    iconName: 'aperture',
    route: '/dashboard/orders',
  },
  {
    navCap: 'Forum Management',
  },
  {
    navCap: 'Complaint Management ',
  },
  {
    displayName: 'All Complaints',
    iconName: 'aperture',
    route: '/dashboard/complaints',
  },
  {
    displayName: 'Sentiment Analysis',
    iconName: 'aperture',
    route: '/dashboard/sentiments',
  },
];
