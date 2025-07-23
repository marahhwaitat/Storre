import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import AppSaveView from '../../components/views/AppSaveView';
import { commonStyle, sharedPaddingHorizontal } from '../../style/sharedStyles';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../style/colors';
import AppText from '../../components/texts/AppText';
import AppTextInput from '../../components/input/AppTextInput';
import AppButton from '../../components/buttons/AppButton';
import { Is_Android, Is_IOS } from '../../constants/constant';

const CheckoutScreen: React.FC = () => {
  return (
   <AppSaveView>
    <View style={{paddingHorizontal : sharedPaddingHorizontal}}>

    
    <View style={styles.inputsContainer}>
    <AppTextInput placeholder= 'Full Name'/>
    <AppTextInput placeholder= 'Phone Number'/>
    <AppTextInput placeholder= 'Detailed Address'/>
    </View>
    </View>
    <View style=
    {styles.bottomButtonContainer}>
        <AppButton  title='confirm'/>
    </View>
   </AppSaveView>
  );
};

export default CheckoutScreen;



const styles = StyleSheet.create ({
    inputsContainer : {
    ...commonStyle.shadow,
    padding: s(8),
    borderRadius:s(8),
    backgroundColor :AppColors.white,
    marginTop :Is_IOS ? vs(15) :undefined, 
    paddingTop : vs(15)

    },
    bottomButtonContainer :{

        paddingHorizontal :sharedPaddingHorizontal,
        position :"absolute",
        bottom : Is_Android ? vs(15) :   0,
        width :"100%",
        borderTopWidth:1,
        borderColor :AppColors.lightGray,
        paddingTop : vs(10)

    }

})