import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProfileIcon} from '~/icons';
import {ProfileScreen, MainScreen, PostScreen} from '~/screens';
import {Routes} from './routes';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator<{
  [Routes.Posts]: undefined;
  [Routes.Post]: {id: number};
}>();

const PostsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitle: ''}}>
      <Stack.Screen
        name={Routes.Posts}
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Routes.Post} component={PostScreen} />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Routes.Main}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name={Routes.Main} component={PostsNavigator} />
        <Tab.Screen
          name={Routes.Profile}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => <ProfileIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
