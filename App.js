import { StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';
import Rotas from './src/paginas/rotas/index.js';
import Cabecalho from './src/componentes/cabeçalho/index.js';
import Pesquisa from './src/componentes/pesquisa/pesquisa.js';
import Banner from './src/componentes/banner/banner.js';
import Card from './src/componentes/card/card.js';
import DATA from './DATA/movies.js'
import HOME from './src/paginas/home/index.js';

const imagem = Math.floor(Math.random() * 4 + 1)




export default function App() {


  return (
<Rotas />
 


  );
}






