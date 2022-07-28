import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductList = () => {
    const data = [{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'},{id:4,name:'D'}]
  return (
   <FlatList
    data={data}
    renderItem={({item})=><View><Text>{item.name}</Text></View>}
    keyExtractor={(_,index)=>index.toString()}
   />
  )
}

export default ProductList

const styles = StyleSheet.create({})