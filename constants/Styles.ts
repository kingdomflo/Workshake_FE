import { StyleSheet } from 'react-native';
import { primary, secondary } from './Colors';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: primary,
    textAlign: 'center',
    marginBottom: 20
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: secondary,
    textAlign: 'center',
    marginBottom: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  marginBottom10: {
    marginBottom: 10
  }
});