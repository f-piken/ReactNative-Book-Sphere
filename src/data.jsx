import {TruckFast, DiscountCircle, Star1} from 'iconsax-react-native';
import {StyleSheet} from 'react-native';
import {colors} from './theme';

const renderStars = rating => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <Star1 key={i} size={16} color={colors.yellow()} variant="Bold" />,
      ); // Full star
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <Star1
          key={i}
          size={16}
          color={colors.yellow()}
          fill={colors.yellow()}
          variant="Bulk"
        />,
      ); // Half star
    } else {
      stars.push(<Star1 key={i} size={16} color="#E0E0E0" />); // Empty star
    }
  }
  return stars;
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 12,
    marginRight: 35,
  },
});

const horizontalItems = [
  {
    id: '1',
    title: 'Voucher 1',
    desk: 'deskripsi',
    icon: (
      <DiscountCircle size={32} color={colors.primary()} style={styles.icon} />
    ),
  },
  {
    id: '2',
    title: 'Voucher 2',
    desk: 'deskripsi',
    icon: <TruckFast size={32} color={colors.primary()} style={styles.icon} />,
  },
  {
    id: '3',
    title: 'Voucher 3',
    desk: 'deskripsi',
    icon: <TruckFast size={32} color={colors.primary()} style={styles.icon} />,
  },
];

const product = [
  {
    id: 1,
    name: 'Matahari Minor',
    price: 1000000,
    terjual: 500,
    rating: 2.5,
    image: require('./assets/images/products/matahari-minor.jpeg'),
  },
  {
    id: 2,
    name: 'Si Anak Pintar',
    price: 1000000,
    terjual: 500,
    rating: 4.5,
    image: require('./assets/images/products/si_anak_pintar.webp'),
  },
  {
    id: 3,
    name: 'Matahari Minor',
    price: 1000000,
    terjual: 500,
    rating: 4,
    image: require('./assets/images/products/matahari-minor.jpeg'),
  },
  {
    id: 4,
    name: 'Si Anak Pintar',
    price: 1000000,
    terjual: 500,
    rating: 4.5,
    image: require('./assets/images/products/si_anak_pintar.webp'),
  },
];

export {renderStars, horizontalItems, product};
