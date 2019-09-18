/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AllForum from './screens/forum/allforum';
import Subscribed from './screens/forum/subscribed';

import AllPost from './screens/timeline/allpost';
import TSubscribed from './screens/timeline/tsubscribed';
import Participated from './screens/timeline/participated';
import UnRead from './screens/timeline/unread';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

class LoginScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar backgroundColor="#2196F3" barStyle="light-content" />
        <Button
          title="Login"
          style={{width: 200, height:50}}
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button
          title="Signup"
          style={{width: 100}}
          onPress={() => alert('Button Pressed')}
        />
      </View>
    );
  }
}

const SubForumTabNavigator = createBottomTabNavigator(
  {
    All: {
      screen: AllForum,
      navigationOptions: ({navigation}) => {
        return {
          tabBarIcon: <Icon name="list" size={26} style={{color: 'white'}} />,
        };
      },
    },
    Subscribed: {
      screen: Subscribed,
      navigationOptions: ({navigation}) => {
        return {
          tabBarIcon: (
            <Icon name="favorite" size={26} style={{color: 'white'}} />
          ),
        };
      },
    },
  },
  {
    tabBarOptions: {
      //   activeTintColor: 'red',
      labelStyle: {
        fontSize: 16,
        color: 'white',
      },
      style: {
        backgroundColor: '#2196F3',
      },
    },
  },
);

const SubTimeTabNavigator = createBottomTabNavigator(
  {
    All: {
      screen: AllPost,
      navigationOptions: ({navigation}) => {
        return {
          tabBarIcon: <Icon name="list" size={26} style={{color: 'white'}} />,
        };
      },
    },
    Unread: {
      screen: UnRead,
      navigationOptions: ({navigation}) => {
        return {
          tabBarIcon: (
            <Icon name="markunread" size={26} style={{color: 'white'}} />
          ),
        };
      },
    },
    Subscribed: {
      screen: TSubscribed,
      navigationOptions: ({navigation}) => {
        return {
          tabBarIcon: (
            <Icon name="favorite" size={26} style={{color: 'white'}} />
          ),
        };
      },
    },
    Participated: {
      screen: Participated,
      navigationOptions: ({navigation}) => {
        return {
          tabBarIcon: <Icon name="sms" size={26} style={{color: 'white'}} />,
        };
      },
    },
  },
  {
    tabBarOptions: {
      //   activeTintColor: 'white',
      labelStyle: {
        fontSize: 16,
        color: 'white',
      },
      style: {
        backgroundColor: '#2196F3',
      },
    },
  },
);

const DashboardTabNavigator = createMaterialTopTabNavigator(
  {
    Forums: {
      screen: SubForumTabNavigator,
    },
    Timeline: {
      screen: SubTimeTabNavigator,
    },
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          backgroundColor: '#2196F3',
          shadowColor: 'transparent',
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          color: 'white',
        },
      };
    },
  },
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigation: DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            style={{paddingLeft: 10, color: 'white'}}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  },
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: {screen: LoginScreen},
  Dashboard: {screen: AppDrawerNavigator},
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
