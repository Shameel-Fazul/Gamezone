import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik'; // Form Library
import * as yup from 'yup'; // Validation Library
import FlatButton from '../shared/button';

export default function ReviewForm({ addReview }) {

    const ReviewSchema = yup.object({
        title: yup.string().required().min(4),
        body: yup.string().required().min(8),
        rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0 // parseInt(val) changes form value from string to integer.
        })
    });



    return (
        <View style={ globalStyles.container }>
            <Formik
            initialValues={{ title: '', body: '', rating: '' }} // initialValues keep track of the data, like states.
            validationSchema={ ReviewSchema } // On submit, it takes the values and makes sure they pass the Validation.
            onSubmit={ (values, actions) => { 
                addReview(values);
                actions.resetForm();
            } } // values object holds all the values; values.title / values.body / values.rating.
                // actions object contains different methods, like reset the form.
            >

            { (FormikProps) => ( // Obtain Formik Props as parameters when functions are inside the <Formik> Component.
                <View>
                    <TextInput 
                        style = { globalStyles.input }
                        placeholder = 'Review Title'
                        onChangeText = { FormikProps.handleChange('title') } // Formik Prop - Changes title value.
                        value = { FormikProps.values.title }
                        onBlur = { FormikProps.handleBlur('title') } // Checks validation in Realtime. 
                    />
                    <Text style={ globalStyles.errorText }>{ FormikProps.touched.title && FormikProps.errors.title }</Text>
                    { /* "Yup" attaches the error message to an 'errors' property on the Formik Props Object */}

                    <TextInput
                        multiline minHeight={60} // Multi Lines 
                        style = { globalStyles.input }
                        placeholder = 'Review Body'
                        onChangeText = { FormikProps.handleChange('body') } // Formik Prop - Changes body value.
                        value = { FormikProps.values.body }
                        onBlur = { FormikProps.handleBlur('body') } // Checks validation in Realtime. 
                    />
                    <Text style={ globalStyles.errorText }>{ FormikProps.touched.body && FormikProps.errors.body }</Text>
                    { /* "Yup" attaches the error message to an 'errors' property on the Formik Props Object */}

                    <TextInput 
                        style = { globalStyles.input }
                        placeholder = 'Rating (1-5)'
                        onChangeText = { FormikProps.handleChange('rating') } // Formik Prop - Changes rating value.
                        value = { FormikProps.values.rating }
                        keyboardType = 'numeric'
                        onBlur = { FormikProps.handleBlur('rating') } // Checks validation in Realtime. 
                    />
                    <Text style={ globalStyles.errorText }>{ FormikProps.touched.rating && FormikProps.errors.rating }</Text>
                    { /* "Yup" attaches the error message to an 'errors' property on the Formik Props Object */}
                    <FlatButton text = 'submit' onPress = { FormikProps.handleSubmit }/> 
                    {/* <Button title = 'submit' color = 'maroon' onPress = { FormikProps.handleSubmit }/> */}
                                                                    { /* Invokes the onSubmit function */}
                </View>
            ) }
            </Formik>
        </View>
    )
}


