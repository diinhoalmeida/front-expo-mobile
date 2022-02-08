import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import TableUsers from '../../pages/TableRead/table.read';
import { MyTabs } from '../TabNavigator/table.navigator';

const Stack = createNativeStackNavigator();

function AppUserListStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs}/>
        <Stack.Screen name="Tabs" component={TableUsers}/>
      </Stack.Navigator>
    )
}

export default AppUserListStack;