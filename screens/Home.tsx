import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Clock from 'react-live-clock';
import Modal from 'react-native-modal';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

import InfoIcon from '../assets/images/screen-1-info-icon.svg';
import ClockIcon from '../assets/images/screen-1-clock-icon.svg';
import UpArrow from '../assets/images/screen-1-up-arrow.svg';
import DownArrow from '../assets/images/screen-1-down-arrow.svg';
import PersonIcon from '../assets/images/screen-1-person-icon.svg';
import GraphIcon from '../assets/images/screen-1-graph-icon.svg';
import LineIcon from '../assets/images/screen-1-line.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home: React.FC = () => {
  const [modalVisible1, setmodalVisible1] = useState(false);
  const [modalVisible2, setmodalVisible2] = useState(false);

  return (
    <View style={{padding: 16, backgroundColor: '#fff', flex: 1}}>
      {(modalVisible1 || modalVisible2) && <View style={styles.BGlayer}></View>}
      <Text style={{...styles.heading}}>Today's Games</Text>
      <View style={styles.main_container}>
        <View style={styles.main_rect}>
          <View style={styles.rect_top}>
            <Image
              style={styles.btc_image}
              source={require('../assets/images/screens-1-btc.png')}
            />
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View style={styles.rect_top_inner}>
                <Text
                  style={{
                    marginRight: 5,
                    fontSize: 14,
                    fontFamily: 'MontserratSemiBold',
                  }}>
                  UNDER OR OVER
                </Text>
                <InfoIcon />
              </View>
              <View style={styles.rect_top_inner}>
                <Text
                  style={{
                    marginRight: 7,
                    color: '#B296DC',
                    fontSize: 14,
                    fontFamily: 'MontserratMedium',
                  }}>
                  Starting in
                </Text>
                <ClockIcon style={{marginRight: 7}} />
                <Clock
                  format={'HH:mm:ss'}
                  ticking={true}
                  timezone={'Asia/Kolkata'}
                  element={Text}
                  style={{color: '#B296DC', fontSize: 16}}
                />
              </View>
            </View>
            <Text
              style={{
                color: '#D2BAF5',
                marginTop: 30,
                fontSize: 16,
                fontFamily: 'MontserratMedium',
              }}>
              Bitcoin price will be under
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontFamily: 'MontserratMedium',
              }}>
              <Text style={{fontFamily: 'MontserratBold'}}>$24,524</Text> at 7 a
              ET on 22nd Jan’21
            </Text>
          </View>

          <View style={styles.rect_middle}>
            <View style={styles.rect_middle_inner}>
              <View>
                <Text
                  style={{
                    color: '#B5C0C8',
                    fontSize: 14,
                    fontFamily: 'MontserratMedium',
                  }}>
                  PRIZE POOL
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    marginTop: 5,
                    fontFamily: 'AvenirNextLTProRegular',
                  }}>
                  $12,000
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#B5C0C8',
                    fontSize: 14,
                    fontFamily: 'MontserratMedium',
                  }}>
                  UNDER
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    marginTop: 5,
                    fontFamily: 'AvenirNextLTProRegular',
                  }}>
                  3.5x
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#B5C0C8',
                    fontSize: 14,
                    fontFamily: 'MontserratMedium',
                  }}>
                  OVER
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    marginTop: 5,
                    fontFamily: 'AvenirNextLTProRegular',
                  }}>
                  1.25x
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#B5C0C8',
                    fontSize: 14,
                    fontFamily: 'MontserratMedium',
                  }}>
                  ENTRY FEES
                </Text>
                <Text
                  style={{
                    color: '#000',
                    textAlign: 'right',
                    fontSize: 16,
                    marginTop: 5,
                    fontFamily: 'AvenirNextLTProRegular',
                  }}>
                  5🟡
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: '#727682',
                  fontSize: 16,
                  fontFamily: 'MontserratSemiBold',
                  marginTop: 20,
                }}>
                What’s your prediction?
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                {/* Button with modal */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setmodalVisible1(true)}>
                  <DownArrow height={15} width={15.68} />
                  <Text style={styles.button_text}>Under</Text>
                </TouchableOpacity>
                <Modal
                  isVisible={modalVisible1}
                  onSwipeComplete={() => setmodalVisible1(false)}
                  onBackdropPress={() => setmodalVisible1(false)}
                  swipeDirection={['down']}
                  style={{zIndex: 20}}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={styles.modalIndicator} />
                      <Text style={styles.modalText}>
                        Your Prediction is under
                      </Text>
                      <Text
                        style={{
                          color: '#727682',
                          fontFamily: 'MontserratSemiBold',
                          fontSize: 14,
                        }}>
                        ENTRY TICKETS
                      </Text>
                      <ScrollPicker
                        dataSource={Array.from({length: 50}, (_, i) => i + 1)}
                        // selectedIndex={0}
                        wrapperHeight={180}
                        wrapperBackground="#FFFFFF"
                        itemHeight={60}
                        highlightColor="#d8d8d8"
                        highlightBorderWidth={2}
                        itemTextStyle={styles.scroll_text_active}
                        activeItemTextStyle={styles.scroll_text_active}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-end',
                        }}>
                        <View>
                          <Text
                            style={{
                              color: '#B5C0C8',
                              fontFamily: 'MontserratMedium',
                              fontSize: 14,
                            }}>
                            You can win
                          </Text>
                          <Text
                            style={{
                              color: '#03A67F',
                              fontFamily: 'MontserratSemiBold',
                              fontSize: 16,
                            }}>
                            $2000
                          </Text>
                        </View>
                        <Text style={{color: '#727682', fontSize: 16}}>
                          Total 🟡{' '}
                          <Text style={{color: 'black', fontWeight: 'bold'}}>
                            5
                          </Text>
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.modal_btn}>
                        <Text style={styles.modal_btn_txt}>
                          Submit my prediction
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>

                {/* Button with modal */}
                <TouchableOpacity
                  style={{...styles.button, backgroundColor: '#6231AD'}}
                  onPress={() => setmodalVisible2(true)}>
                  <UpArrow height={15} width={15.68} />
                  <Text style={styles.button_text}>Over</Text>
                </TouchableOpacity>
                <Modal
                  isVisible={modalVisible2}
                  onSwipeComplete={() => setmodalVisible2(false)}
                  onBackdropPress={() => setmodalVisible2(false)}
                  swipeDirection={['down']}
                  style={{zIndex: 20}}
                  propagateSwipe={true}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={styles.modalIndicator} />
                      <Text style={styles.modalText}>
                        Your Prediction is over
                      </Text>
                      <Text
                        style={{
                          color: '#727682',
                          fontFamily: 'MontserratSemiBold',
                          fontSize: 14,
                        }}>
                        ENTRY TICKETS
                      </Text>
                      <ScrollPicker
                        dataSource={Array.from({length: 50}, (_, i) => i + 1)}
                        // selectedIndex={0}
                        wrapperHeight={180}
                        wrapperBackground="#FFFFFF"
                        itemHeight={60}
                        highlightColor="#d8d8d8"
                        highlightBorderWidth={2}
                        itemTextStyle={styles.scroll_text_active}
                        activeItemTextStyle={styles.scroll_text_active}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-end',
                        }}>
                        <View>
                          <Text
                            style={{
                              color: '#B5C0C8',
                              fontFamily: 'MontserratMedium',
                              fontSize: 14,
                            }}>
                            You can win
                          </Text>
                          <Text
                            style={{
                              color: '#03A67F',
                              fontFamily: 'MontserratSemiBold',
                              fontSize: 16,
                            }}>
                            $2000
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: '#727682',
                            fontSize: 14,
                            fontFamily: 'MontserratMedium',
                          }}>
                          Total 🟡{' '}
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 16,
                              fontFamily: 'MontserratSemiBold',
                            }}>
                            5
                          </Text>
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.modal_btn}>
                        <Text style={styles.modal_btn_txt}>
                          Submit my prediction
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>

          <View style={styles.rect_bottom}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <PersonIcon style={{marginRight: 10}} />
                <Text
                  style={{
                    color: '#727682',
                    fontFamily: 'MontserratSemiBold',
                    fontSize: 16,
                  }}>
                  355 Players
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <GraphIcon style={{marginRight: 10}} />
                <Text
                  style={{
                    color: '#727682',
                    fontFamily: 'MontserratSemiBold',
                    fontSize: 16,
                  }}>
                  View Chart
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <LineIcon />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#B5C0C8',
                  fontFamily: 'MontserratMedium',
                  fontSize: 14,
                }}>
                232 predicted under
              </Text>
              <Text
                style={{
                  color: '#B5C0C8',
                  fontFamily: 'MontserratMedium',
                  fontSize: 14,
                }}>
                123 predicted over
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  main_rect: {
    flexDirection: 'column',
  },
  rect_top: {
    padding: 20,
    backgroundColor: '#6231AD',
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  rect_top_inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rect_middle: {
    padding: 20,
  },
  rect_middle_inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rect_bottom: {
    padding: 20,
    backgroundColor: '#F6F3FA',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'AvenirNextLTProBold',
  },
  btc_image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  button: {
    backgroundColor: '#452C55',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRadius: 50,
    marginTop: 10,
  },
  button_text: {
    fontSize: 16,
    fontFamily: 'MontserratSemiBold',
    marginLeft: 5,
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    height: windowHeight * 0.6,
    width: windowWidth,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  modalIndicator: {
    alignSelf: 'center',
    height: 4,
    width: '10%',
    borderRadius: 2,
    backgroundColor: '#B5C0C8',
    marginBottom: 20,
  },
  modalText: {
    color: '#333333',
    fontSize: 18,
    fontFamily: 'MontserratSemiBold',
    marginBottom: 20,
  },
  modal_btn: {
    backgroundColor: '#6231AD',
    marginTop: 15,
    padding: 15,
    borderRadius: 100,
  },
  modal_btn_txt: {
    fontSize: 16,
    fontFamily: 'MontserratSemiBold',
    textAlign: 'center',
    color: 'white',
  },
  BGlayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 10,
  },
  scroll_text_active: {
    color: 'black',
    fontSize: 26,
    fontFamily: 'MontserratSemiBold',
  },
});

export default Home;
