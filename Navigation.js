import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ReelsScreen from "./screens/ReelsScreen";
import ShopScreen from "./screens/ShopScreen";
import { Ionicons } from "@expo/vector-icons";
import ProfileHeader from "./Components/ProfileHeader";
import HomeHeader from "./Components/HeaderHome";

const tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Reels") {
            iconName = focused ? "videocam" : "videocam-outline";
          } else if (route.name === "Shop") {
            iconName = focused ? "cart" : "cart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={'#000'} />;
        },
        tabBarShowLabel: false,
      })}>
        <tab.Screen name="Home" component={HomeScreen} options={{
          headerTitle: () => <HomeHeader />,
        }}/>
        {/* <tab.Screen name="Search" component={SearchScreen} />
        <tab.Screen name="Reels" component={ReelsScreen} />
        <tab.Screen name="Shop" component={ShopScreen} /> */}
        <tab.Screen name="Profile" component={ProfileScreen} options={{
          headerTitle: () => <ProfileHeader />,
        }} />
      </tab.Navigator>
    </NavigationContainer>
  );
}
