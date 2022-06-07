import ProfileCreateScreen from "../screens/ProfileCreateScreen";
import AccountScreen from "../screens/AccountScreen";
import { createStackNavigator } from 'react-navigation-stack';

const AccountFlow = createStackNavigator({
    Account: AccountScreen,
    ProfileCreate: ProfileCreateScreen,
  })

export default AccountFlow