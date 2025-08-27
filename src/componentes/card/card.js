import { Image, Text, View , TouchableOpacity } from 'react-native';
import styles from './stylecard.js';
import { useNavigation } from '@react-navigation/native';

export default function Card({ titulo, nota, imagem }) {
  const navigation = useNavigation();
  return (
    
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { title: titulo, vote_average: nota, poster_path: `https://image.tmdb.org/t/p/original${imagem}` })} style={styles.container}>
      
      <Image style={styles.imagecard} source={{ uri:(`https://image.tmdb.org/t/p/original${imagem}`) }} />
      <Text style= {styles.textcard}>{titulo}</Text>
      <Text style={styles.textnota}  > Nota: {nota}</Text>
    </TouchableOpacity>

    
  );
}
