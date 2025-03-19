import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  Wallet3,
  TruckFast,
  DiscountCircle,
  SearchNormal,
  ShoppingCart,
  AddSquare,
  Star1,
  Heart,
} from 'iconsax-react-native';
import {fontType, colors} from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={searchBar.main}>
        <View style={searchBar.container}>
          <SearchNormal size={20} color="#333" style={searchBar.icon} />
          <TextInput
            style={searchBar.input}
            placeholder="Cari buku yang anda sukai..."
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.bannerImage}
            source={require('./src/assets/images/ads.png')}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}>
            <TouchableOpacity style={styles.horizontalCard}>
              <View style={styles.horizontalCardContainer}>
                {[-20, 60].map((offset, index) => (
                  <View
                    key={index}
                    style={[styles.innerCurve, {bottom: offset}]}
                  />
                ))}
                <DiscountCircle size={32} color={colors.primary()} style={styles.icon} />
                <View style={styles.garisContainer}>
                  {[8, 20, 32, 44].map((offset, index) => (
                    <View
                      key={index}
                      style={[styles.garis, {bottom: offset}]}
                    />
                  ))}
                </View>
                <View>
                  <Text style={styles.horizontalText}>Voucher 1</Text>
                  <Text style={styles.horizontalDesk}>deskripsi</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Klaim</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.horizontalCard}>
              <View style={styles.horizontalCardContainer}>
                {[-20, 60].map((offset, index) => (
                  <View
                    key={index}
                    style={[styles.innerCurve, {bottom: offset}]}
                  />
                ))}
                <TruckFast size={32} color={colors.primary()} style={styles.icon} />
                <View style={styles.garisContainer}>
                  {[8, 20, 32, 44].map((offset, index) => (
                    <View
                      key={index}
                      style={[styles.garis, {bottom: offset}]}
                    />
                  ))}
                </View>
                <View>
                  <Text style={styles.horizontalText}>Voucher 2</Text>
                  <Text style={styles.horizontalDesk}>deskripsi</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Klaim</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.horizontalCard}>
              <View style={styles.horizontalCardContainer}>
                {[-20, 60].map((offset, index) => (
                  <View
                    key={index}
                    style={[styles.innerCurve, {bottom: offset}]}
                  />
                ))}
                <TruckFast size={32} color={colors.primary()} style={styles.icon} />
                <View style={styles.garisContainer}>
                  {[8, 20, 32, 44].map((offset, index) => (
                    <View
                      key={index}
                      style={[styles.garis, {bottom: offset}]}
                    />
                  ))}
                </View>
                <View>
                  <Text style={styles.horizontalText}>Voucher 3</Text>
                  <Text style={styles.horizontalDesk}>deskripsi</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Klaim</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.content}>
          <View style={styles.serviceList}>
            <Wallet3 size={32} color={colors.primary()} variant="Bold" />
            <View>
              <Text style={styles.saldo}>Rp. 100.000.000</Text>
              <Text style={styles.voucher}>Voucher: 12</Text>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.iconContainer}>
                <AddSquare size={24} color={colors.primary()} variant="Bold" />
                <Text style={styles.label}>Top Up</Text>
              </View>
              <View style={styles.iconContainer}>
                <ShoppingCart size={24} color={colors.primary()} variant="Bold" />
                <Text style={styles.label}>Keranjang</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={produk.container}>
          <TouchableOpacity style={produk.card}>
            <Image
              source={require('./src/assets/images/products/matahari-minor.jpeg')}
              style={produk.image}
            />
            <Text style={produk.title}>Matahari Minor</Text>
            <Text style={produk.price}>Rp. 1,000,000</Text>
            <View style={produk.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <Star1 key={i} size={16} color={colors.yellow()} variant="Bold" />
              ))}
            </View>
            <View style={produk.actionContainer}>
              <Text style={produk.sold}>Terjual 500</Text>
              <TouchableOpacity style={produk.button}>
                <Heart size={24} color={colors.primary()} />
              </TouchableOpacity>
              <TouchableOpacity style={produk.button}>
                <ShoppingCart size={24} color={colors.primary()} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={produk.card}>
            <Image
              source={require('./src/assets/images/products/si_anak_pintar.webp')}
              style={produk.image}
            />
            <Text style={produk.title}>Si Anak Pintar</Text>
            <Text style={produk.price}>Rp. 1,000,000</Text>
            <View style={produk.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <Star1 key={i} size={16} color={colors.yellow()} variant="Bold" />
              ))}
            </View>
            <View style={produk.actionContainer}>
              <Text style={produk.sold}>Terjual 500</Text>
              <TouchableOpacity style={produk.button}>
                <Heart size={24} color={colors.primary()} />
              </TouchableOpacity>
              <TouchableOpacity style={produk.button}>
                <ShoppingCart size={24} color={colors.primary()} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={produk.card}>
            <Image
              source={require('./src/assets/images/products/matahari-minor.jpeg')}
              style={produk.image}
            />
            <Text style={produk.title}>Matahari Minor</Text>
            <Text style={produk.price}>Rp. 1,000,000</Text>
            <View style={produk.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <Star1 key={i} size={16} color={colors.yellow()} variant="Bold" />
              ))}
            </View>
            <View style={produk.actionContainer}>
              <Text style={produk.sold}>Terjual 500</Text>
              <TouchableOpacity style={produk.button}>
                <Heart size={24} color={colors.primary()} />
              </TouchableOpacity>
              <TouchableOpacity style={produk.button}>
                <ShoppingCart size={24} color={colors.primary()} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={produk.card}>
            <Image
              source={require('./src/assets/images/products/si_anak_pintar.webp')}
              style={produk.image}
            />
            <Text style={produk.title}>Si Anak Pintar</Text>
            <Text style={produk.price}>Rp. 1,000,000</Text>
            <View style={produk.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <Star1 key={i} size={16} color={colors.yellow()} variant="Bold" />
              ))}
            </View>
            <View style={produk.actionContainer}>
              <Text style={produk.sold}>Terjual 500</Text>
              <TouchableOpacity style={produk.button}>
                <Heart size={24} color={colors.primary()} />
              </TouchableOpacity>
              <TouchableOpacity style={produk.button}>
                <ShoppingCart size={24} color={colors.primary()} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background(),
  },
  bannerContainer: {
    backgroundColor: colors.banner(),
    position: 'relative',
  },
  horizontalScroll: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  horizontalCardContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  horizontalCard: {
    width: 230,
    height: 80,
    marginLeft: 20,
    backgroundColor: colors.background(),
    borderWidth: 0.5,
    borderColor: colors.primary(),
    borderRadius: 18,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black(),
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginTop: 12,
    marginRight: 35,
  },
  horizontalText: {
    fontSize: 14,
    fontFamily: fontType['Poppins-SemiBold'],
    color: colors.textDark(),
    marginRight: 15,
    marginTop: 10,
  },
  horizontalDesk: {
    fontSize: 8,
    fontFamily: fontType['Poppins-SemiBold'],
    color: colors.textLight(),
  },
  arrow: {
    marginTop: 19,
    marginRight: 0,
  },
  innerCurve: {
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: colors.primary(),
    left: 44,
    width: 20,
    height: 20,
    backgroundColor: colors.background(),
    borderRadius: 50,
    zIndex: 20,
  },
  garis: {
    position: 'absolute',
    left: -14,
    backgroundColor: colors.border(),
    width: 3,
    height: 8,
    borderRadius: 50,
  },
  bannerImage: {
    width: '100%',
    height: 220,
    borderRadius: 0,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
  serviceList: {
    backgroundColor: colors.white(),
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 20,
    shadowColor: colors.black(),
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 15,
  },
  saldo: {
    fontSize: 17,
    fontFamily: fontType['Poppins-Bold'],
    color: colors.black(),
    margin: 0,
  },
  voucher: {
    fontSize: 10,
    fontFamily: fontType['Poppins-Medium'],
    color: colors.textDark(),
    margin: 0,
  },
  rightContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: 15,
  },
  iconContainer: {
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Poppins-SemiBold'],
    color: colors.black(),
  },
  row: {
    justifyContent: 'space-between',
  },
  serviceCard: {
    backgroundColor: colors.white(),
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
    marginBottom: 15,
    shadowColor: colors.black(),
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  serviceText: {
    fontSize: 16,
    fontFamily: fontType['Poppins-SemiBold'],
    color: colors.textDark(),
    marginTop: 10,
  },
  button: {
    height: 22,
    backgroundColor: colors.primary(),
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 18,
  },
  buttonText: {
    color: colors.white(),
    fontSize: 8,
    fontFamily: fontType['Poppins-SemiBold'],
  },
});

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

const produk = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    marginHorizontal: 10,
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
