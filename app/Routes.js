import { StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import CityList from './screens/CityList';

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    CityList: {
      screen: CityList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    cardStyle: { paddingTop: StatusBar.currentHeight }
  },
);

