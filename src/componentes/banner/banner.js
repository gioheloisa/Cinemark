import { Text, View, Image } from 'react-native';
import styles from './style';
export default function Banner() {
    return (
<View>

    <Image style={styles.imagebanner} source= {require("../../../assets/banner.avif" )}   />


</View>

    );
}
