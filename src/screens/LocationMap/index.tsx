import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline, Region } from 'react-native-maps';
import { Text, View } from 'react-native';
import { styles } from './styles'
import * as Location from "expo-location";
import { colors } from '../../styles/colors';

export function LocationMap() {
    const [location, setLocation] = useState<null | Location.LocationObject>(
        null
    );
    const [region, setRegion] = useState<Region>();
    const [marker, setMarker] = useState<Region[]>();
    const [errorMsg, setErrorMsg] = useState<null | string>(null);

    useEffect( () => {
        const handleLocation = async () => {
            let { status } = await Location.requestBackgroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            if (location) {
                setLocation(location);
                setRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
                });
                setMarker([
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    },
                ]);
            }
        };
        handleLocation();
    },    []);

    

    
}