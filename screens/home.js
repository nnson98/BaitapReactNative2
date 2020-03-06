import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {golbalStyles} from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from '../screens/reviewForm';

export default function Home({navigation}){
    
    /*const pressHandler= () =>{
        navigation.navigate('ReviewDetails');
    }*/
    
    const [modalOpen,serModalOpen] = useState(false);

    const [reviews,setreviews] = useState([
        {title:'DUDI', rating:5, body :'lorem ipsum', key :'1'},
        {title:'DUDA', rating:4, body :'lorem ipsum', key :'2'},
        {title:'DUDO', rating:3, body :'lorem ipsum', key :'3'},
    ]);
    const addReView=(review)=>{
        review.key=Math.random().toString();
        setreviews((currentReviews)=>{
            return[review, ...currentReviews]
        });
        serModalOpen(false);
    }
    return(
        <View style={golbalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                <MaterialIcons 
                name='close'
                size={24}
                style={styles.modalToggle}
                onPress={()=> serModalOpen(false)}
            />
                    <ReviewForm addReView={addReView} />
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={()=> serModalOpen(true)}
            />
            
            <FlatList 
            data={reviews}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)}>
                    <Card>
                    <Text style={golbalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalContent:{
        flex:1
    }
})
