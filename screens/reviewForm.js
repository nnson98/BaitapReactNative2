import React from 'react';
import { View,StyleSheet ,Text,TextInput, Button} from 'react-native';
import {golbalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const ReviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(4),
    rating:yup.string()
    .required()
    .test('is-num-1-5','Rating must be a number 1-5',(val)=>{
        return parseInt(val) <6 && parseInt(val) >0
    }),
    body: yup.string()
    .required()
    .min(8),
})
export default function ReviewForm ({addReView}){
    return(
        <View style={golbalStyles.container}>
            <Formik initialValues={{title : '', rating:'',body:''}}
            validationSchema={ReviewSchema}
            onSubmit={(values,actions)=>{
                actions.resetForm();
                addReView(values);
            }}
            >
            {(props)=>(
                <View>
                    <TextInput 
                    style={golbalStyles.input}
                    placeholder='Review title'  
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}
                    onBlur={props.handleBlur('title')}
                    />
                    <Text style={golbalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                    <TextInput 
                    style={golbalStyles.input}
                    placeholder='Rating(1-5)'  
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    keyboardType='numeric'
                    onBlur={props.handleBlur('rating')}
                    />
                    <Text style={golbalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                    <TextInput 
                    multiline
                    style={golbalStyles.input}
                    placeholder='Review body'  
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    onBlur={props.handleBlur('body')}
                    />
                    <Text style={golbalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                    <FlatButton text='submit' onPress={props.handleSubmit} />
                </View>
            )}
            </Formik>
        </View>
    )
}