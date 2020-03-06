import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import {golbalStyles,images} from '../styles/global';
import Card from '../shared/card';
export default function ReviewDetails({navigation,route}){
/*const pressHandler=()=>{
    navigation.goBack();
}*/
    const {title} = route.params;
    const {body} = route.params;
    const {rating} = route.params;
    return(
        <View style={golbalStyles.container}>
          <Card>
          <Text>{title}</Text>
            <Text>{body}</Text>
            <View style={styles.rating}>
              <Text>GameZone Rating:</Text>
              <Image source={images.ratings[rating]} />
            </View>
          </Card>
        </View>
    )
}
const styles = StyleSheet.create({
  rating:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee',
  }
})

