import { StyleSheet } from "react-native";
import { colors } from "../../theme";

const searchBar = StyleSheet.create({
  main: {
    backgroundColor: colors.banner(),
    shadowColor: colors.black(),
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  container: {
    backgroundColor: colors.white(),
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    padding: 10,
    width: '90%',
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
  },
});

export default searchBar;
