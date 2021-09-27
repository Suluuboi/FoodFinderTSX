import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import { RootRoutes } from './types/root-nav.types';

const RootStack = createStackNavigator();

const RootStackScreen = () => (//{navigation}
    <RootStack.Navigator>{/*headerMode='none'*/}
        <RootStack.Screen name={RootRoutes.Splash} component={SplashScreen}/>
        <RootStack.Screen name={RootRoutes.SignIn} component={SignInScreen}/>
        <RootStack.Screen name={RootRoutes.SignUp} component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;