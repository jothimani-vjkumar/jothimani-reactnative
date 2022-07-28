import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontFamily} from '../../const';
import Icon from 'react-native-vector-icons/Ionicons';

interface IHeaderProps {
  title: string;
  goBack?: () => void;
  search?: boolean;
}

const Header: React.FC<IHeaderProps> = ({title, goBack, search}) => {
  return (
    <View style={styles.container}>
      {goBack && (
        <TouchableOpacity style={styles.goBack}>
          <Icon name="arrow-back" size={22} color={colors.white} />
        </TouchableOpacity>
      )}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        {search && <Icon name="search" size={20} color={colors.white} />}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    fontFamily: fontFamily,
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  goBack: {
    marginRight: 10,
    marginLeft: 5,
  },
});
