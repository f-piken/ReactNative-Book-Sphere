import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {products, renderStars} from '../../data';
import {ArrowLeft2, Export, Menu, ShoppingCart} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';

const product = products[0];

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ArrowLeft2 style={styles.icon} size="20" color="#fff" />
        <View style={styles.iconRigth}>
          <Export style={styles.icon} size="20" color="#fff" />
          <ShoppingCart style={styles.icon} size="20" color="#fff" />
          <Menu style={styles.icon} size="20" color="#fff" />
        </View>
      </View>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.desk}>
        <Text style={styles.variant}>Tersedia {product.variant} Variasi</Text>
        <Image source={product.image} style={styles.imageVarian} />

        <Text style={styles.productPrice}>Rp {product.price}</Text>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.ratingContainer}>
          {renderStars(product.rating, 20)}
        </View>
        <View style={styles.deskripsi}>
          <Text style={styles.deskripsiTittle}>Deskripsi</Text>
          <Text style={styles.deskripsiText}>{product.deskripsi}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    top: 20,
    left: 0,
    justifyContent: 'space-between',
    zIndex: 10,
  },
  icon: {
    padding: 16,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: colors.black(0.4),
  },
  iconRigth: {
    flexDirection: 'row',
  },
  desk: {
    marginHorizontal: 10,
  },
  productImage: {
    width: 410,
    height: 410,
    marginBottom: 10,
  },
  variant: {
    fontFamily: fontType['Poppins-Medium'],
    fontSize: 12,
    color: colors.textLight(),
  },
  imageVarian: {
    height: 60,
    width: 60,
    marginVertical: 5,
    borderRadius: 5,
  },
  productName: {
    fontFamily: fontType['Poppins-Bold'],
    fontSize: 22,
    color: colors.textDark(),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 30,
    fontFamily: fontType['Poppins-Medium'],
    color: colors.primary(0.8),
  },
  deskripsiTittle: {
    fontFamily: fontType['Poppins-SemiBold'],
    fontSize: 16,
    color: colors.black(0.8),
  },
  deskripsiText: {
    fontFamily: fontType['Poppins-Medium'],
    fontSize: 14,
    color: colors.textDark(),
  },
});

export default ProductScreen;
