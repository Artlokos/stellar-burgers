/* eslint-disable prettier/prettier */
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ConstructorPage, Feed, ForgotPassword, Login, NotFound404, Profile, ProfileOrders, Register, ResetPassword} from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, Modal, OrderInfo, IngredientDetails} from '@components';
import { useDispatch } from '@store';

const App = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const locBackground = location.state?.background;


  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={locBackground || location}>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/ingredients/:id'/>
        <Route path='/feed' element={<Feed />} />
        <Route path='/feed/:number'/>
        <Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Route>
        <Route>
         <Route path='/profile'>
            <Route index element={<Profile />} />
            <Route path='orders' element={<ProfileOrders />} />
            <Route path='orders/:number'/>
          </Route>
        </Route>
        <Route path='*' element={<NotFound404 />} />
      </Routes>
      {locBackground && (
        <Routes>
          <Route
            path='/feed/:number'
            element={
              <Modal
                title={`#${location.pathname.match(/\d+/)}`}
                onClose={() => {}}
              >
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path='/ingredients/:id'
            element={
              <Modal
                title={`Детали ингредиента`}
                onClose={() => {}}
              >
                <IngredientDetails />
              </Modal>
            }
          />
          <Route>
            <Route
              path='/profile/orders/:number'
              element={
                <Modal
                  title={`#${location.pathname.match(/\d+/)}`}
                  onClose={() => {}}
                >
                  <OrderInfo />
                </Modal>
              }
            />
          </Route>
        </Routes>
      )}
    </div>
  )
};
export default App;