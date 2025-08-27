import { StyleSheet, Text, View, TextInput, Image, FlatList, ScrollView } from 'react-native';
import Cabecalho from '../../componentes/cabeçalho/index.js';
import Pesquisa from '../../componentes/pesquisa/pesquisa.js';
import Banner from '../../componentes/banner/banner.js';
import Card from '../../componentes/card/card.js';
import DATA from '../../../DATA/movies.js';
import Rotas from '../rotas/index.js';
import { useState, useEffect } from 'react';
const imagem = Math.floor(Math.random() * 4 + 1);

export default function HOME() {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function listafilmes() {

      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGYyODU0ODEzY2Q1NThlZmE4MTM0MDQ0ODhiOTA4MSIsIm5iZiI6MTc1NTAyMTY4OS45Niwic3ViIjoiNjg5YjgxNzlmMjMzNzlhZDFmMWEzNDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VQQqYp9s136HclZ_DmHd0FkScGY55Ga-yvcs_qZlgBA'

        }
      };



      const response = await fetch(url, options)
      const movis = await response.json();
      console.log(movis)
      setMovies(movis.results)



    }
    listafilmes()
  }, []);



  const [Series, setSeries] = useState([])
  useEffect(() => {
    async function listafilmes() {

      const url ='https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGYyODU0ODEzY2Q1NThlZmE4MTM0MDQ0ODhiOTA4MSIsIm5iZiI6MTc1NTAyMTY4OS45Niwic3ViIjoiNjg5YjgxNzlmMjMzNzlhZDFmMWEzNDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VQQqYp9s136HclZ_DmHd0FkScGY55Ga-yvcs_qZlgBA'

        }
      };



      const response = await fetch(url, options)
      const seri = await response.json();
      console.log(seri)
      setSeries(seri.results)



    }
    listafilmes()
  }, []);



  return (
    <View style={styles.container}>
      {/* <Rotas/>   */}
      <Cabecalho />



      <Pesquisa />
      <Banner />

      <View style={{ width: '90%' }}>
        <FlatList
          data={movies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              titulo={item.title}
              nota={item.vote_average}
              imagem={item.poster_path}
            />
          )}
        />
      </View>





      <View style={{ width: '90%' }}>
        <FlatList
          data={Series}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              titulo={item.name}
              nota={item.vote_average}
              imagem={item.poster_path}
            />
          )}
        />
      </View>


    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
