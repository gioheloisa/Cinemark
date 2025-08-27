import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


    viewHeader: {
        
        flexDirection: "row",
        justifyContent: "space-between",

        alignItems: "center",
        marginTop: 40,
        
    },
    textHeader: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        marginRight: 75
    },


    img:{ 
        logo:{ 
            marginTop: 350,
            width: 500,
            height:290,
            justifyContent: "center",
        }
    }
    
});
export default styles;