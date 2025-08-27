import { StyleSheet, Text, View, Image  } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
export default function Detalhes() {
  const Rota = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image  style={styles.img} source={{ uri: Rota.params.poster_path }}  />
      <Text  style={styles.titulo} >{Rota.params.title}</Text>
      <Text style = {styles.nota} > Nota: {Rota.params.vote_average}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',

  },


  titulo: {
    fontSize: 22,
   color: 'white',
   
   
  },
  nota: {
    fontSize: 22,
    color: 'yellow',
  },


  img: {
    width: 250,
    height: 400,
    marginTop: 20,
  },
});
