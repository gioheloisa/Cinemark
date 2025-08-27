import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    
    imagecard: {

        padding: 10, 
        marginVertical: 8,
        borderRadius: 8,
        shadowRadius: 4,
        width: 90, 
        height: 120,
        resizeMode: 'cover'
    },

    textcard:{
        textAlign: 'center',
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        width: 100,


    },

    textnota: { 
        textAlign: 'center',
        bordertop: 8,
        fontSize: 10,
        color: "yellow",
        fontWeight: "bold",
        width: 100,
    },
}
 );
 export default styles;
