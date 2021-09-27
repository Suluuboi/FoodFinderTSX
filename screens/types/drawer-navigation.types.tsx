//import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export enum MainTabRoutes {
    Notifications = 'Notifications',
    Home = 'Home',
    Profile = 'Profile',
    Explore = 'Explore',
    EditProfile = "EditProfile"
}

export type MainTabStackParamList = {
    [MainTabRoutes.Home]: undefined;
    [MainTabRoutes.Notifications] : {} | undefined ; 
    [MainTabRoutes.Profile] : undefined;
    [MainTabRoutes.Explore] : undefined;
    [MainTabRoutes.EditProfile] : undefined;
};

export type MainTabNavigationProp<RouteName extends keyof MainTabStackParamList = MainTabRoutes> 
= DrawerNavigationProp<MainTabStackParamList, RouteName>

//properties sent to the main Screen
export type HomeScreenProp = {
    navigation :  MainTabNavigationProp<MainTabRoutes.Home>
}

export type NotificationsScreenProp = {
    navigation :  MainTabNavigationProp<MainTabRoutes.Notifications>
}
export type ProfileScreenProp = {
    navigation :  MainTabNavigationProp<MainTabRoutes.Profile>
}

export type ExploreScreenProp = {
    navigation :  MainTabNavigationProp<MainTabRoutes.Explore>
}