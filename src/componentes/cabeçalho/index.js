import { Image, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';

export default function Cabecalho() {
    return (
        <View style={styles.viewHeader}>
            <TouchableOpacity>
                <Feather style={{ marginLeft: -70 }} name="menu" size={36} color="#FFF" />
            </TouchableOpacity>
            <Image style={styles.img.logo} source={require("../../../assets/rykc3gMUPxd4WkVHnYCXfKZD-removebg-preview.png")} />
        </View>
    );
}
