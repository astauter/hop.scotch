import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  text: {
    fontWeight: '600',
    fontSize: 48,
    letterSpacing: -0.5,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'black',
  }
});

