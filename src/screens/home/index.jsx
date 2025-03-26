import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {
  Wallet3,
  SearchNormal,
  ShoppingCart,
  AddSquare,
  Heart,
} from 'iconsax-react-native';
import { colors } from '../../theme';
import { horizontalItems, products, renderStars } from '../../data';
import { productCard, searchBar, styles } from '../../assets/css';

export default function Home() {
  const [wishList, setWishList] = useState({});
  const [claimedVouchers, setClaimedVouchers] = useState({});

  // Toggle Wishlist
  const toggleWishlist = (id) => {
    setWishList((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Handle Claim Button
  const handleClaim = (id) => {
    setClaimedVouchers((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={productCard.card}>
      <Image source={item.image} style={productCard.image} />

      <Text style={productCard.title}>{item.name}</Text>
      <Text style={productCard.price}>Rp. {item.price.toLocaleString()}</Text>

      <View style={productCard.ratingContainer}>{renderStars(item.rating, 16)}</View>

      <View style={productCard.actionContainer}>
        <Text style={productCard.sold}>Terjual {item.terjual}</Text>
        <TouchableOpacity
          style={productCard.button}
          onPress={() => toggleWishlist(item.id)}
        >
          <Heart
            size={24}
            color={colors.primary()}
            variant={wishList[item.id] ? 'Bold' : 'Outline'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={productCard.button}>
          <ShoppingCart size={24} color={colors.primary()} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderHorizontalItem = ({ item }) => (
    <TouchableOpacity style={styles.horizontalCard}>
      <View style={styles.horizontalCardContainer}>
        {[-20, 60].map((offset, index) => (
          <View key={index} style={[styles.innerCurve, { bottom: offset }]} />
        ))}
        {item.icon}
        <View style={styles.garisContainer}>
          {[8, 20, 32, 44].map((offset, index) => (
            <View key={index} style={[styles.garis, { bottom: offset }]} />
          ))}
        </View>
        <View>
          <Text style={styles.horizontalText}>{item.title}</Text>
          <Text style={styles.horizontalDesk}>{item.desk}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            claimedVouchers[item.id] && styles.disabledButton,
          ]}
          onPress={() => handleClaim(item.id)}
          disabled={claimedVouchers[item.id]}
        >
          <Text style={styles.buttonText}>
            {claimedVouchers[item.id] ? 'Klaimed' : 'Klaim'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

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
        <Image source={require('../../assets/images/default_profile.jpg')} style={searchBar.profile} />
      </View>

      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.bannerContainer}>
              <Image
                style={styles.bannerImage}
                source={require('../../assets/images/banner.png')}
              />
              <FlatList
                horizontal
                data={horizontalItems}
                keyExtractor={(item) => item.id}
                renderItem={renderHorizontalItem}
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}
              />
            </View>

            <View style={styles.content}>
              <View style={styles.wallet}>
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
          </>
        }
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={productCard.container}
      />
    </View>
  );
}
