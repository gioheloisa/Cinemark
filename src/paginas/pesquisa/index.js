import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function PesquisaFilmes() {

    const [filmes, setFilmes] = useState(['']);

    useEffect(() => {
        async function pesquisaf() {
            const url =`[https://api.themoviedb.org/3/search/movie?query=${route.params.pesquisa}&include_adult=false&language=pt-BR&page=1`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGYyODU0ODEzY2Q1NThlZmE4MTM0MDQ0ODhiOTA4MSIsIm5iZiI6MTc1NTAyMTY4OS45Niwic3ViIjoiNjg5YjgxNzlmMjMzNzlhZDFmMWEzNDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VQQqYp9s136HclZ_DmHd0FkScGY55Ga-yvcs_qZlgBA'
                }


            };
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.response);
        }
        pesquisaf();
         
    }, [])

    const route = useRoute();
    return (


        <View>
            <Text>{route.params.pesquisa}</Text>
        </View>
    )
}

