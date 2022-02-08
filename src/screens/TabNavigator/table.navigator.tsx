import Home from '../../pages/Home/home';
import TableUsers from '../../pages/TableRead/table.read';
import ModalCreate from '../../components/Modals/ModalCreateUser/modal.create';
import HomeBarButton from '../../components/CustomTabButtons/Home/custom.button.home';
import UserListBarButton from '../../components/CustomTabButtons/UsersList/custom.button.userlist';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewUserBarButton from '../../components/CustomTabButtons/NewUser/custom.button.newuser';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{tabBarStyle:{height:70}}}       
      >
          <Tab.Screen 
            name="Inicio" 
            component={Home} 
            options={({ navigation }) => ({
              tabBarButton: () => (
                <HomeBarButton onPress={() => navigation.navigate('Inicio')}/>
              )
            })}
          />
          <Tab.Screen 
            name="NovoUsuario" 
            component={ModalCreate} 
            options={({ navigation }) => ({
              tabBarButton: () => (
                <NewUserBarButton onPress={() => navigation.navigate('NovoUsuario')}/>
              )
            })}
          />
          <Tab.Screen 
            name="ListaUsuarios" 
            component={TableUsers} 
            options={({ navigation }) => ({
              tabBarButton: () => (
                <UserListBarButton onPress={() => navigation.navigate('ListaUsuarios')}/>
              )
            })}
          />
      </Tab.Navigator>    
    )
}