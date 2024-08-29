import { Platform } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 8,
      justifyContent: 'center',
      ...Platform.select({
        android: {
          paddingTop: 40,
        },
      }),
    },
    albumContainer: {
      paddingHorizontal: 20,
      marginBottom: 12,
      gap: 4,
    },
    albumAssetsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });