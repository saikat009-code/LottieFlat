import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Lottie from 'lottie-react-native';
import normalize from '../../utils/helpers/dimen';
import imagePath from '../../themes/ImagePath';
import LottieView from 'lottie-react-native';
import MyStatusBar from '../../utils/helpers/MyStatusBar';

const StaticData = [
  {id: 1, title: 'Slider', img: imagePath.fMan},
  {id: 2, title: 'Button Tab', img: imagePath.footballPl},
  {id: 3, title: '3D Animation', img: imagePath.spider},
  {id: 4, title: 'Drawer', img: imagePath.handBall},
  {id: 5, title: 'Fifth Item', img: imagePath.fMan},
  {id: 6, title: 'Sixth Item', img: imagePath.spider},
  {id: 4, title: 'Fourth Item', img: imagePath.handBall},
  {id: 5, title: 'Fifth Item', img: imagePath.fMan},
  {id: 6, title: 'Sixth Item', img: imagePath.spider},
  {id: 4, title: 'Fourth Item', img: imagePath.handBall},
  {id: 5, title: 'Fifth Item', img: imagePath.fMan},
  {id: 6, title: 'Sixth Item', img: imagePath.spider},
  {id: 1, title: 'First Item', img: imagePath.fMan},
  {id: 2, title: 'Second Item', img: imagePath.footballPl},
  {id: 3, title: 'Third Item', img: imagePath.spider},
  {id: 4, title: 'Fourth Item', img: imagePath.handBall},
  {id: 5, title: 'Fifth Item', img: imagePath.fMan},
  {id: 6, title: 'Sixth Item', img: imagePath.spider},
  {id: 4, title: 'Fourth Item', img: imagePath.handBall},
  {id: 5, title: 'Fifth Item', img: imagePath.fMan},
  {id: 6, title: 'Sixth Item', img: imagePath.spider},
  {id: 4, title: 'Fourth Item', img: imagePath.handBall},
  {id: 5, title: 'Fifth Item', img: imagePath.fMan},
  {id: 6, title: 'Sixth Item', img: imagePath.spider},
];

const Screen1 = () => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          index == 0
            ? navigation.navigate('Splash2', {paramsKey: index})
            : index == 1
            ? navigation.navigate('BtnTab', {paramsKey: index})
            : index == 2
            ? navigation.navigate('Animation', {paramsKey: index})
            : index == 3
            ? navigation.navigate('Drawer', {paramsKey: index})
            : null;
        }}>
        <Image
          source={item.img}
          style={{
            height: 350,
            width: 350,
            borderBottomRightRadius: normalize(35),
          }}
        />
        <Text style={styles.txt}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const scrollPosition = useRef(new Animated.Value(0)).current;
  const handleScroll = ({nativeEvent}) => {
    const calculatedScrollPosition =
      nativeEvent.contentOffset.y /
      (nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height);
    scrollPosition.setValue(calculatedScrollPosition);
  };

  const _keyExtractor = item => item.id;

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <MyStatusBar backgroundColor={'trasparent'} barStyle={'dark-content'} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#70FE7A', '#70FE7A', '#12B31D', '#1C5304']}
        style={styles.linearGradient}>
        <ImageBackground source={imagePath.curve} style={styles.top}>
          <View style={styles.topV}>
            <Text style={styles.buttonText}>Let's Choose</Text>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => navigation.navigate('Login')}>
              <Image source={imagePath.user} style={styles.user} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={imagePath.tree} style={styles.tree} />
          <Image
            source={imagePath.tree}
            style={[styles.tree, {transform: [{scaleX: -1}]}]}
          />
        </View>

        <LottieView
          progress={scrollPosition.interpolate({
            inputRange: [0, 5],
            outputRange: [0, 5],
            extrapolate: 'extend',
          })}
          source={require('../../assets/images/moveCar.json')}
          colorFilters={[{keypath: 'Plane', color: 'rgb(255, 100, 0)'}]}
          style={{height: 150, width: '100%', alignSelf: 'center', bottom: 42}}
        />
        <View style={{bottom: 120}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            onScroll={handleScroll}
            data={StaticData}
            renderItem={renderItem}
            contentContainerStyle={{alignSelf: 'center'}}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: normalize(25),
    textAlign: 'center',
    margin: normalize(10),
    color: '#000',
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
  list: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingVertical: 14,
  },
  item: {
    paddingVertical: 14,
    marginVertical: 10,
    zIndex: 1,
  },
  itemText: {
    color: 'rgb(0, 0, 0)',
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: 'bold',
    paddingTop: 12,
  },
  likeText: {
    color: 'rgb(255, 100, 0)',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 2,
  },
  itemImage: {
    height: 400,
    width: '100%',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 12,
    color: 'rgb(255, 100, 0)',
    fontWeight: '900',
    letterSpacing: 0.2,
    lineHeight: 12,
    textAlign: 'center',
    zIndex: 2,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -24,
  },
  overlayLottie: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
  },
  txt: {
    fontSize: normalize(25),
    alignSelf: 'center',
    color: '#17FEEF',
    fontWeight: '500',
  },
  top: {
    resizeMode: 'cover',
    height: normalize(80),
    width: '100%',
  },
  user: {
    resizeMode: 'contain',
    height: normalize(35),
    width: normalize(35),
    alignSelf: 'center',
    left: normalize(25),
  },
  topV: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: normalize(20),
  },
  tree: {
    resizeMode: 'contain',
    height: normalize(80),
    width: normalize(80),
    bottom: normalize(30),
  },
});

export default Screen1;
