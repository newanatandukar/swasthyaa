import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import * as views from './routes/index';

const appContainer = createSwitchNavigator({
  profile: views.Profile,
  homePage: views.HomePage,
});

export default createAppContainer(appContainer);
