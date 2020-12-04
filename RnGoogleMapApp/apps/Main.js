/* eslint-disable prettier/prettier */
import React, { Component, useEffect, useState } from 'react';
import {View, Text, Platform, PermissionsAndroid, StyleSheet, Button, Linking} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // 지도
import GeoLocation from 'react-native-geolocation-service'; // 위치 지정값
import Getlocation from 'react-native-get-location';
import MyMarker from './components/MyMarker';

export default class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            initLocation: { // 초기 로케이션 값 (경복궁)
                latitude: 37.578046,
                longitude: 126.976889,
                latitudeDelta: 0.05, // 0.1 = default값 0.05보다 0.02가 더 Zoomin되어 보임
                longitudeDelta: 0.05,
            },
            pinLocation: { // 부산IT교육센터 위치
                latitude: 35.156021,
                longitude: 129.059480,
            },
        };
    }
    
    componentDidMount() {
        console.log(`focused`);
        console.log(this.state.focusedLocation);
    }
    //async await = 비동기
    async getCurrentLocation() {
        //alert('위치 조회');
        await Getlocation
            .getCurrentPosition({ // 고정밀도 사용하겠느냐 = enableHigh..
                enableHighAccuracy: true,
                timeout: 15000,
            })
            .then(location => {
                console.log('current'); // 현재위치를 찍음
                console.log(location);
                var tmpLocation = {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.012,
                    longitudeDelta: 0.012,
                };
                this.setState({initLocation:tmpLocation});
            })
            .catch(error => {
                const {code, message} = error;
                console.error(code, message);
            });
    }

    onMyLocationClick = () => {
        this.getCurrentLocation();
    }

    onMarkerClick = () => {
        Linking.openURL('http://www.busanit.ac.kr/m');
    }

    render() {
        return (
          <View style={styles.container}>
              <MapView style={styles.map}
                initLocation={this.state.initLocation}
                region={this.state.initLocation}>
                  <Marker
                    coordinate={this.state.pinLocation}
                    title="부산IT교육센터"
                    description="부산인재개발원 서면 교육원"
                    image={require('./images/pin.png')}
                    onCalloutPress={this.onMarkerClick} />
                {(this.state.initLocation.latitude) ? (
                    <MyMarker
                        location={this.state.initLocation}
                        title="내 위치" />
                ) : (
                    <View />
                )}
              </MapView>
              <Button title="현재 위치" onPress={this.onMyLocationClick} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    map: {
        flex: 1,
        marginBottom: 10,
    },
});
