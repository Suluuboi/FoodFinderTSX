//import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export enum RootRoutes {
    SignIn = 'SignIn',
    SignUp = 'SignUp',
    Splash = 'Splash'
}

export type MainTabStackParamList = {
    [RootRoutes.SignIn] : {} | undefined ; 
    [RootRoutes.SignUp] : undefined;
    [RootRoutes.Splash] : undefined;
};

export type MainTabNavigationProp<RouteName extends keyof MainTabStackParamList = RootRoutes> 
= DrawerNavigationProp<MainTabStackParamList, RouteName>

//properties sent to the main Screen
export type SignInScreenProp = {
    navigation :  MainTabNavigationProp<RootRoutes.SignIn>
}

export type SignUpScreenProp = {
    navigation :  MainTabNavigationProp<RootRoutes.SignUp>
}

export type SplashScreenProp = {
    navigation :  MainTabNavigationProp<RootRoutes.Splash>
}