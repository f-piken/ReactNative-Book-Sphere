import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {
  ArrowLeft2,
  ChemicalGlass,
  HuobiToken,
  ReceiptDiscount,
  SearchNormal,
  SunFog,
  Teacher,
} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    {id: '1', name: 'Item 1'},
    {id: '2', name: 'Item 2'},
    {id: '3', name: 'Item 3'},
    {id: '4', name: 'Item 4'},
  ];

  const handleSearch = query => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredData([]);
    } else {
      const results = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredData(results);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ArrowLeft2 size="20" color="#000" />
        <Text style={styles.headerTittle}>Pencarian</Text>
      </View>
      <View style={styles.card}>
        <SearchNormal size={20} color="#333" style={styles.icon} />
        <TextInput
          onChangeText={handleSearch}
          value={searchQuery}
          style={styles.input}
          placeholder="Cari buku yang anda sukai..."
        />
      </View>

      <View style={styles.daftar}>
        <View style={styles.historyItem}>
          <TouchableOpacity>
            <Text style={styles.text}>bulan</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>bintang</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>pulang & pergi</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.tittle}>Promo</Text>
        <ScrollView
          style={styles.promo}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <Image
              style={styles.promoItem}
              source={require('../../assets/images/promo/banner1.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.promoItem}
              source={require('../../assets/images/promo/banner2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.promoItem}
              source={require('../../assets/images/promo/banner3.jpg')}
            />
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.tittle}>Categories</Text>
        <ScrollView
          style={styles.categories}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.category}>
            <ReceiptDiscount size="38" color="#FF8A65" variant="Bold" />
            <Text style={styles.categoryText}>Discount</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <HuobiToken size="38" color="#FF8A65" variant="Bold" />
            <Text style={styles.categoryText}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <ChemicalGlass size="38" color="#FF8A65" variant="Bold" />
            <Text style={styles.categoryText}>Saints</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <SunFog size="38" color="#FF8A65" variant="Bold" />
            <Text style={styles.categoryText}>Fantasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Teacher size="38" color="#FF8A65" variant="Bold" />
            <Text style={styles.categoryText}>Academi</Text>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.tittle}>Popular</Text>
        <View style={styles.historyItem}>
          <TouchableOpacity>
            <Text style={styles.text}>bulan</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>bintang</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>pulang & pergi</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>jurus jitu menjadi kaya</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>senja</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>komik</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    shadowColor: colors.black(),
    shadowOpacity: 0.1,
    elevation: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerTittle: {
    fontFamily: fontType['Poppins-Bold'],
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 3,
  },
  card: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: colors.textDark(0.1),
    borderColor: colors.textDark(0.5),
    borderWidth: 2,
    borderRadius: 50,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    padding: 10,
    width: '100%',
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
  },
  styles: {
    marginBottom: 10,
  },
  daftar: {
    margin: 10,
  },
  tittle: {
    fontFamily: fontType['Poppins-Bold'],
    fontSize: 20,
    marginTop: 10,
  },
  historyItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  promo: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: fontType['Poppins-SemiBold'],
    fontSize: 12,
    color: colors.primary(),
    backgroundColor: colors.textDark(0.1),
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderColor: colors.textDark(0.3),
    borderWidth: 2,
  },
  promoItem: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 20,
    marginVertical: 15,
  },
  category: {
    alignItems: 'center',
    marginVertical: 15,
    marginRight: 35,
  },
  categoryText: {
    fontFamily: fontType['Poppins-SemiBold'],
    fontSize: 14,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
});

export default SearchScreen;
