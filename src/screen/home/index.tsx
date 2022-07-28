import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { text } from '../../const'
import Categories from './components/Categories'
import ProductList from './components/ProductList'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={text.homeText} search />
      <Categories />
      <ProductList />
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})