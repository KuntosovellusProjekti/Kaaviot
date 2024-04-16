import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  styles,
  StyleSheet,
} from "react-native";
import {
  HomeScreen,
  CalendarScreen,
  AddWorkoutScreen,
  MapScreen,
  ProfileScreen,
  SettingsScreen,
  TrackingScreen,
} from "../../screens";

import BlueAddIcon from "../../assets/Icons/BlueAdd.png";
import BlueCalendarIcon from "../../assets/Icons/BlueCalendar.png";
import BlueHomeIcon from "../../assets/Icons/BlueHome.png";
import BlueMapIcon from "../../assets/Icons/BlueMap.png";
import BlueProfileIcon from "../../assets/Icons/BlueProfile.png";
import GreyAddIcon from "../../assets/Icons/GreyAdd.png";
import GreyCalendarIcon from "../../assets/Icons/GreyCalendar.png";
import GreyHomeIcon from "../../assets/Icons/GreyHome.png";
import GreyProfileIcon from "../../assets/Icons/GreyProfile.png";
import MapGreyIcon from "../../assets/Icons/MapGrey.png";
import BlueSettingsIcon from "../../assets/Icons/BlueSettings.png";
import GreySettingsIcon from "../../assets/Icons/GreySettings.png";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          // Determine which icon to use based on focus state and current route
          switch (route.name) {
            case "Map":
              iconSource = focused ? BlueMapIcon : MapGreyIcon;
              break;
            case "AddWorkout":
              iconSource = focused ? BlueAddIcon : GreyAddIcon;
              break;
            case "Home":
              iconSource = focused ? BlueHomeIcon : GreyHomeIcon;
              break;
            case "Calendar":
              iconSource = focused ? BlueCalendarIcon : GreyCalendarIcon;
              break;
            case "Profile":
              iconSource = focused ? BlueProfileIcon : GreyProfileIcon;
              break;
            default:
              break;
          }

          // Render the icon
          return (
            <Image source={iconSource} style={{ width: 24, height: 24 }} />
          );
        },
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="AddWorkout" component={AddWorkoutScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="KuntoSovellus"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate("Settings")}
              >
                <Image
                  source={GreySettingsIcon}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }}>
                <Image
                  source={BlueSettingsIcon}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="TrackingScreen" component={TrackingScreen} />
        <Stack.Screen name="SiirryTracking">
          {({ navigation }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("TrackingScreen")}
            >
              <Text>Aloita harjoitus</Text>
            </TouchableOpacity>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
