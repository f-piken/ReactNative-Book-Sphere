import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const search = StyleSheet.create({

});

const searchBar = StyleSheet.create({
  main: {
    backgroundColor: colors.banner(),
    shadowColor: colors.black(),
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  container: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: colors.white(),
    borderRadius: 50,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    padding: 10,
    width: '80%',
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
  },
  profile: {
    width: 35,
    height: 35,
    marginTop: 25,
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 50,
    borderColor: colors.primary(),
    borderWidth: 2,
  },
});

export {search, searchBar};
