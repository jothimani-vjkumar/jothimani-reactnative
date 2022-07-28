import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontFamily} from '../../../../const';

const Categories = () => {
  const data = ['Cloths', 'Shoes', 'Mobiles', 'Car','Cloths', 'Shoes', 'Mobiles', 'Car' ];
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <View key={index.toString()} style={styles.box}>
            <Text style={styles.categoriesText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    paddingVertical:10
  },
  box:{
    backgroundColor:colors.black,
    marginRight:20,
    paddingHorizontal:15,
    paddingVertical:6,
    borderRadius:6
  },
  categoriesText:{
    fontFamily:fontFamily,
    color:colors.white,
    fontSize:16
  }
});
