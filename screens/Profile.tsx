import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import PfIcon from '../assets/images/screen-2-profile-icon.svg';
import MsgIcon from '../assets/images/screen-2-msg-icon.svg';
import LogoutIcon from '../assets/images/screen-2-logout-icon.svg';
import UpIcon from '../assets/images/screen-2-up-icon.svg';
import DownIcon from '../assets/images/screen-2-down-icon.svg';
import CoinLogo from '../assets/images/screen-2-coin-logo.svg';
import BadgeIcon from '../assets/images/screen-2-badge-icon.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState(2);

  const handleTabPress = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <ScrollView>
      <View style={styles.top_rext}>
        <View style={styles.top_inner_rect}>
          <PfIcon />
          <Text
            style={{
              color: '#727682',
              fontSize: 16,
              fontFamily: 'MontserratMedium',
            }}>
            Profile
          </Text>
          <MsgIcon style={{marginBottom: 3}} />
        </View>
        <Image
          source={require('../assets/images/screen-2-pfp.png')}
          style={{width: 70, height: 70, marginTop: 30}}
        />
        <Text
          style={{
            color: '#333333',
            marginTop: 10,
            fontSize: 16,
            fontFamily: 'MontserratMedium',
          }}>
          Jina Simons
        </Text>
        <Text
          style={{
            color: '#727682',
            marginTop: 10,
            fontSize: 14,
            fontFamily: 'MontserratMedium',
          }}>
          6000 Pts
        </Text>
        <Text
          style={{
            color: '#727682',
            marginTop: 10,
            fontSize: 16,
            fontFamily: 'MontserratMedium',
          }}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <View style={styles.logout_btn}>
          <LogoutIcon />
          <Text
            style={{
              color: '#727682',
              fontSize: 16,
              fontFamily: 'MontserratMedium',
            }}>
            Logout
          </Text>
        </View>
        <CoinLogo style={{marginBottom: -25, marginTop: 30, zIndex: 10}} />
        <View style={styles.percentages_view}>
          <View style={{alignItems: 'flex-start', gap: 10}}>
            <Text
              style={{
                color: '#727682',
                fontSize: 16,
                fontFamily: 'MontserratSemiBold',
              }}>
              Under or Over
            </Text>
            <UpIcon />
          </View>
          <View style={{alignItems: 'flex-start', gap: 10}}>
            <Text
              style={{
                color: '#727682',
                fontSize: 16,
                fontFamily: 'MontserratSemiBold',
              }}>
              Top 5
            </Text>
            <DownIcon />
          </View>
        </View>
      </View>
      <View style={{marginTop: 10, backgroundColor: '#f2f2f2'}}>
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => handleTabPress(1)}
            style={[
              styles.tabButton,
              activeTab === 1 && styles.activeTabButton,
            ]}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 1 && styles.activeTabButtonText,
              ]}>
              Games Played
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress(2)}
            style={[
              styles.tabButton,
              activeTab === 2 && styles.activeTabButton,
            ]}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 2 && styles.activeTabButtonText,
              ]}>
              Badges
            </Text>
          </TouchableOpacity>
        </View>
        {activeTab === 1 && (
          <View style={styles.tabContent}>
            <Text style={{color: '#000'}}>Games Played Here</Text>
          </View>
        )}
        {activeTab === 2 && (
          <View>
            <View style={styles.tabContent}>
              <BadgeIcon />
              <View style={{width: '100%', flex: 1, paddingRight: 20}}>
                <Text style={styles.badge_content}>
                  First Stripe Earned <Text style={{color: '#FFA600'}}>x3</Text>
                </Text>
                <Text style={styles.badge_para}>
                  Top 10% of highest spending players in a month
                </Text>
              </View>
            </View>

            <View style={styles.tabContent}>
              <BadgeIcon />
              <View style={{width: '100%', flex: 1, paddingRight: 20}}>
                <Text style={styles.badge_content}>Born Winner</Text>
                <Text style={styles.badge_para}>
                  Top 10% of highest spending players in a month
                </Text>
              </View>
            </View>

            <View style={styles.tabContent}>
              <BadgeIcon />
              <View style={{width: '100%', flex: 1, paddingRight: 20}}>
                <Text style={styles.badge_content}>Trader of the Month</Text>
                <Text style={styles.badge_para}>
                  Won 7 under-over games in a row
                </Text>
              </View>
            </View>

            <View style={styles.tabContent}>
              <BadgeIcon />
              <View style={{width: '100%', flex: 1, paddingRight: 20}}>
                <Text style={styles.badge_content}>Rising Star</Text>
                <Text style={styles.badge_para}>
                  Top 10% of highest spending players in a month
                </Text>
              </View>
            </View>

            <View style={styles.tabContent}>
              <BadgeIcon />
              <View style={{width: '100%', flex: 1, paddingRight: 20}}>
                <Text style={styles.badge_content}>Jackpot</Text>
                <Text style={styles.badge_para}>
                  Top 10% of highest spending players in a month
                </Text>
              </View>
            </View>

            <View style={styles.tabContent}>
              <BadgeIcon />
              <View style={{width: '100%', flex: 1, paddingRight: 20}}>
                <Text style={styles.badge_content}>Impossible</Text>
                <Text style={styles.badge_para}>
                  Top 10% of highest spending players in a month
                </Text>
              </View>
            </View>

            <View style={styles.tabContent}>
              <BadgeIcon />
              <View style={{width: '100%', flex: 1, paddingRight: 20}}>
                <Text style={styles.badge_content}>First Stripe Earned</Text>
                <Text style={styles.badge_para}>
                  Top 10% of highest spending players in a month
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  top_rext: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  top_inner_rect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logout_btn: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  percentages_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    margin: 10,
    borderColor: '#EEEAF3',
    borderWidth: 0.5,
    borderRadius: 5,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  tabButton: {
    alignItems: 'center',
    gap: 10,
    width: '50%',
    padding: 20,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#6231AD',
  },
  tabButtonText: {
    color: '#727682',
    fontSize: 16,
    fontFamily: 'MontserratMedium',
  },
  activeTabButtonText: {
    color: '#6231AD',
  },
  tabContent: {
    height: windowHeight * 0.17,
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  badge_content: {
    color: '#333333',
    fontSize: 16,
    fontFamily: 'MontserratSemiBold',
  },
  badge_para: {
    color: '#727682',
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'MontserratMedium',
  },
});

export default Profile;
