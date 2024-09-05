import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "../constants";
import { Icons, Text } from "../components";
import { Dashboard, MyGuardians, Notifications } from "../screens";
import { isIOS } from "../constants/theme";
import { tab_dashboard_icon, tab_guardian_icon, tab_notification_icon } from "../assets/icons";
import { TextWeights } from "../config";
import DashboardStack from "./DashboardStack";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="DashboardStack"
            screenOptions={{
                headerShown: false,
                tabBarLabel: () => {
                    return false;
                },
                tabBarStyle: styles.tabbar,
            }}
        >

            <Tab.Screen
                name="MyGuardians"
                component={MyGuardians}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icons name={tab_guardian_icon} />
                            <Text style={[focused && styles.selected_text, styles.text]} text={"My Guardians"} />
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="DashboardStack"
                component={DashboardStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icons name={tab_dashboard_icon} />
                            <Text style={[focused && styles.selected_text, styles.text]} text={"Dashboard"} />
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icons name={tab_notification_icon} />
                            <Text style={[focused && styles.selected_text, styles.text]} text={"Notifications"} />
                        </>
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: COLORS.background_color,
        paddingVertical: isIOS ? SIZES.padding2 : 0,
        height: isIOS ? SIZES.padding * 5 : SIZES.padding * 4,
        justifyContent: "center",
        borderTopColor: COLORS.primary,
        paddingHorizontal:SIZES.padding
    },
    text: {
        marginTop: SIZES.padding2 * 0.5,
        fontFamily: TextWeights.regular,
        fontSize: SIZES.h10
    },
    selected_text: {
        color: COLORS.primary,
    }

});

export default Tabs;
