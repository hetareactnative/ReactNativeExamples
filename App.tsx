import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import Home from './src//Home/Home';
import GorhomSheet from './src/BottomSheet/GorhomSheet';
import ChatScreen from './src/Chat/ChatScreen';
import Calander from './src/DateTimeCalendar/Calander';
import DateTimePicker from './src/DateTimeCalendar/DateTimePickerScreen';
import GiftedChat from './src/GiftedChat/GiftedChat';
import OTPTextInput from './src/OTPTextInput/OTPTextInput';
import Index from './src/ScreenSwipper/Index';
import SwiperFlatlist from './src/ScreenSwipper/SwiperFlatlist';
import PlaySound from './src/Sound/PlaySound';
import StaggerList from './src/StaggerList/StaggerList';
import SwiperList from './src/SwiperList/SwiperList';
import Toast from './src/ToastNotification/Toast';
import ToastNotification from './src/ToastNotification/ToastNotification';
import Video from './src/Video/Video';
import NormalTextAnimation from './src/ChatAnimation/NormalTextAnimation';
import HtmlTxtAnimation from './src/ChatAnimation/HtmlTxtAnimation';

const App = () => {
  const Stack = createNativeStackNavigator();
  const options = { headerShown: false };

  return (
    <ToastProvider
      renderToast={toastOptions => {
        return <Toast toastOptions={toastOptions} />;
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'GorhomSheet'} component={GorhomSheet} />
          <Stack.Screen name={'StaggerList'} component={StaggerList} />
          <Stack.Screen name={'Swiper'} component={Index} />
          <Stack.Screen name={'SwiperFlatlist'} component={SwiperFlatlist} />

          <Stack.Screen name={'OTPTextInput'} component={OTPTextInput} />
          <Stack.Screen name={'Calander'} component={Calander} />
          <Stack.Screen name={'DateTimePicker'} component={DateTimePicker} />
          <Stack.Screen
            name={'Chat'}
            component={ChatScreen}
            options={options}
          />
          <Stack.Screen
            name={'GiftedChat'}
            component={GiftedChat}
            options={options}
          />
          <Stack.Screen name={'SwiperList'} component={SwiperList} />
          <Stack.Screen
            name={'ToastNotification'}
            component={ToastNotification}
          />
          <Stack.Screen name={'PlaySound'} component={PlaySound} />
          <Stack.Screen name={'Video'} component={Video} />
          <Stack.Screen
            name={'NormalTextAnimation'}
            component={NormalTextAnimation}
          />
          <Stack.Screen
            name={'HtmlTxtAnimation'}
            component={HtmlTxtAnimation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
