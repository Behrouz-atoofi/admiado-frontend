import Provider from 'react-redux/es/components/Provider';
import { StyledEngineProvider } from '@mui/material/styles';
import routes from 'app/configs/routesConfig';
import store from './store';
import AppContext from './AppContext';
import moment from 'moment-jalaali';
import fa from "moment/locale/fa";

import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

moment.locale("fa", fa);
moment.loadPersian({dialect: 'persian-modern'});

const withAppProviders = (Component) => (props) => {
  const WrapperComponent = () => (
    <AppContext.Provider
      value={{
        routes,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <Component {...props} />
          </StyledEngineProvider>
        </Provider>
      </LocalizationProvider>
    </AppContext.Provider>
  );

  return WrapperComponent;
};

export default withAppProviders;
