import { View, Text,Image, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useState } from 'react'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'

const PLACEHOLDER_IMG = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126'

// To describe what all is acceptable as input
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

  return (
    //  Where caption and URL will go as a form (both have validation and go at same time)
    // No need to give states in Formik it will handle it by itself eg. onBlur, onChangeText etc..
    <Formik
        initialValues={{caption: '',imageUrl:''}}
        onSubmit={(values) =>{ 
            console.log(values)
            console.log('Your post was submitted succesfully')
            navigation.goBack()
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
    >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) => 
        <>
            <View 
                style={{
                    margin: 20, 
                    justifyContent: 'space-between', 
                    flexDirection: 'row',
                }}
            >
                <Image 
                    source={{uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG }} 
                    style={{width:150, height:150}} 
                />

                <View style={{flex: 1,marginLeft: 12}}>
                    <TextInput 
                        style={{color:'white', fontSize: 20}}
                        placeholder='Write a caption...'
                        placeholderTextColor='gray' 
                        multiline={true}
                        onChangeText={handleChange('caption')}
                        onBlur={handleBlur('caption')}
                        value={values.caption}
                    />
                </View>       
            </View>

            <Divider width={.2} orientation='vertical' />

            <TextInput 
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                style={{color:'white', fontSize: 18}}
                placeholder='Enter Image URL' 
                placeholderTextColor='gray' 
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
            />
            {errors.imageUrl && (
                <Text style={{fontSize: 15, color: 'red' }}>
                    {errors.imageUrl}
                </Text>
            )}

            <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
        </>
        }
    </Formik>
  )
}

export default FormikPostUploader