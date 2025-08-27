import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from './style';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Pesquisa() {
  const [pesquisa, setTexto] = useState('');

  const navigation = useNavigation();

  

  return (
    <View style={styles.containerSearch}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          onChangeText={(Text) => setTexto(Text)}
          style={[styles.inputSearch, { flex: 1, marginRight: 10 }]}
          placeholder="Digite o filme que deseja buscar"
        />
        <TouchableOpacity onPress={()=> navigation.navigate('Pesquisa',{pesquisa})} style={{ marginLeft: -40 }}>
          <MaterialIcons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
