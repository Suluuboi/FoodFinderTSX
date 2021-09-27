import { DrawerNavigationProp } from '@react-navigation/drawer';

export enum DrawerContentRoutes {
    HomeDrawer = 'HomeDrawer',
    Support = 'Support',
    Settings = 'Settings',
    Bookmark = 'Bookmark'
}

export type DrawerContentStackParamList = {
    [DrawerContentRoutes.HomeDrawer]: undefined;
    [DrawerContentRoutes.Support] : {} | undefined ; 
    [DrawerContentRoutes.Settings] : undefined;
    [DrawerContentRoutes.Bookmark] : undefined;
};

export type DrawerContentNavigationProp<RouteName extends keyof DrawerContentStackParamList = DrawerContentRoutes> 
= DrawerNavigationProp<DrawerContentStackParamList, RouteName>

//properties sent to the main Screen
export type HomeDrawerScreenProp = {
    navigation :  DrawerContentNavigationProp<DrawerContentRoutes.HomeDrawer>
}