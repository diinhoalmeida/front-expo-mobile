import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import UtilsCallsProvider from './src/contexts/ApiCallContext';
import AppUserListStack from './src/screens/StackNavigator/stack.navigator';

export default function App() {
  return (
    <PaperProvider>
      <UtilsCallsProvider>
        <NavigationContainer>
          <AppUserListStack/>  
        </NavigationContainer>
    </UtilsCallsProvider>
  </PaperProvider>
  );
}
