import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../screens";
import { AddMember, MemberAISetting, MemberDetail, MemberPluginSetting, Members } from "../screens/MembersSection";
import { TopupWallet, Wallet, WalletTransactions } from "../screens/WalletSection";


const DashboardStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <Stack.Navigator
                initialRouteName="Dashboard"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Members" component={Members} />
                <Stack.Screen name="MemberDetail" component={MemberDetail} />
                <Stack.Screen name="AddMember" component={AddMember} />
                <Stack.Screen name="MemberAISetting" component={MemberAISetting} />
                <Stack.Screen name="MemberPluginSetting" component={MemberPluginSetting} />
                <Stack.Screen name="TopupWallet" component={TopupWallet} />
                <Stack.Screen name="Wallet" component={Wallet} />
                <Stack.Screen name="WalletTransactions" component={WalletTransactions} />
            </Stack.Navigator>
        </>
    );
};

export default DashboardStack;
