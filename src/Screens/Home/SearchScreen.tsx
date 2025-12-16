import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from '../../utils/mixins'
import SearchInput from '../../component/InputFields/SearchInput'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container : {
      padding: scale(20)
    }
  })