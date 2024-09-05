import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './service';
import { useDispatch } from 'react-redux';
import AuthStack from './AuthStack';
import Tabs from './Tabs';
import { getLoginKey, getUser } from '../utils/auth.util';
import { setUser } from '../redux/slices/auth-slice';
import { getUserDetail } from '../redux/actions/auth-action';

const MainNavigator = () => {
  const dispatch = useDispatch()
  const Stack = createNativeStackNavigator();

  const [route, setRoute] = useState(null)

  const getRoute = async () => {
    const isLogin = await getLoginKey();
    const user = await getUser();
    // const isIntro = await getIntroKey();
    if (user) {
      dispatch(setUser(user))
    dispatch(getUserDetail(user?._id))
    }

    if (isLogin) {
      setRoute("Tabs")
    }
    else {
      setRoute("AuthStack");
      // if (isIntro) setRoute("AuthStack");
      // else setRoute("OnBoarding");
    }
  };

  useEffect(() => {
    getRoute();
  }, []);



  return (
    route !== null && (
      <NavigationContainer ref={navigationRef} >
        <Stack.Navigator
          initialRouteName={route}
          screenOptions={{ headerShown: false, unmountOnBlur: true }}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default MainNavigator;

