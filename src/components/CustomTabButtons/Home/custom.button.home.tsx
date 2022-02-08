import { Image, Text, TouchableOpacity, View } from "react-native"
import { transparent } from "react-native-paper/lib/typescript/styles/colors";
import HomeIcon from '../../../../assets/homeIcon.png';
import { styles } from './style';

const HomeBarButton = ({ onPress }: any) => {
    return (
        <TouchableOpacity
            style={styles.buttonSpace}
            onPress={onPress}
        >
            <View
                style={styles.middleButton}
            >
                <Image 
                    source={HomeIcon} 
                    style={styles.iconHome}  
                />
            </View>
            <Text>Início</Text>
        </TouchableOpacity>
    )
    
}

export default HomeBarButton;