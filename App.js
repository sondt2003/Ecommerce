import { StyleSheet, Text, View } from 'react-native';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Navigator/Main';
import { NativeBaseProvider } from 'native-base';
import HeaderShared from './src/Shared/HeaderShared';
import { Provider } from "react-redux";
import store from "./Redux/store";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
      <NativeBaseProvider>
      {/* <HeaderShared></HeaderShared> */}
        <Main></Main>
      </NativeBaseProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
