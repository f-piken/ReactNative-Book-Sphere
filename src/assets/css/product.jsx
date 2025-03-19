import { StyleSheet } from "react-native";
import { colors, fontType } from "../../theme";

const produk = StyleSheet.create({
    container: {
    //   marginHorizontal: 5,
    },
    card: {
      marginHorizontal: 13,
      backgroundColor: colors.white(),
      borderRadius: 15,
      padding: 15,
      marginBottom: 20,
      shadowColor: colors.black(),
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      width: 180,
    },
    image: {
      width: 150,
      height: 180,
      borderRadius: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 16,
      fontFamily: fontType['Poppins-Bold'],
      color: colors.textDark(),
      marginBottom: 5,
    },
    price: {
      fontSize: 14,
      fontFamily: fontType['Poppins-SemiBold'],
      color: colors.primary(),
      marginBottom: 8,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginBottom: 10,
    },
    sold: {
      marginTop: 8,
      fontSize: 12,
      fontFamily: fontType['Poppins-Regular'],
      color: colors.textLight(),
    },
    actionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      padding: 5,
    },
  });

  export default produk;