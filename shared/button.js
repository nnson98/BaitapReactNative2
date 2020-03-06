import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function FlatButton({text , onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#f01d71',
    },
    buttonText:{
        color :'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center'
    }
})