import { Image, Text, TouchableOpacity, View } from "react-native"
import { transparent } from "react-native-paper/lib/typescript/styles/colors";
import PlusIcon from '../../../../assets/plusIcon2.png';
import { styles } from './style';

const NewUserBarButton = ({ onPress }: any) => {
    return (
        <TouchableOpacity
            style={styles.buttonSpace}
            onPress={onPress}
        >
            <View style={styles.middleSpaceBtn}>
                <Image 
                    source={PlusIcon} 
                    resizeMode='contain'
                    style={styles.iconImage}  
                />
            </View>
        </TouchableOpacity>
    )
    
}

export default NewUserBarButton;