import { Image, Text, TouchableOpacity, View } from "react-native"
import { transparent } from "react-native-paper/lib/typescript/styles/colors";
import UsersIcon from '../../../../assets/usersIcon.png';
import { styles } from "./style";

const UserListBarButton = ({ onPress }: any) => {
    return (
        <TouchableOpacity
            style={styles.buttonSpace}
            onPress={onPress}
        >
            <View
                style={styles.middleSpaceBtn}
            >
                <Image 
                    source={UsersIcon} 
                    style={styles.iconImage}  
                />
            </View>
            <Text>Usuários</Text>
        </TouchableOpacity>
    )
    
}

export default UserListBarButton;