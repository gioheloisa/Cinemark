import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../home/index.js";
import Detalhes from "../detalhes/index.js";
import Pesquisa from "../pesquisa/index.js";
export default function Rotas() {
const stack = createNativeStackNavigator(); 
return ( 
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="Detalhes" component={Detalhes} />
            <stack.Screen name="Pesquisa" component={Pesquisa} 
            options={{
                headerShown:true}}
            />    
            
        </stack.Navigator>
    </NavigationContainer>
)




}

