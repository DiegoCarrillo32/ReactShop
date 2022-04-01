import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout'
import { Login } from '../containers/Login'
import { RecoveryPassword } from '../containers/RecoveryPassword'
import { Home } from '../Pages/Home';
import { NotFound } from '../Pages/NotFound';

import SendEmail from '../pages/SendEmail';
import {NewPassword} from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
export const App = () => {
  return (
    //Composición 
    <BrowserRouter>
      <Layout>
					<Route path="/login" element={<Login/>} />
					<Route path="/password-recovery" element={<RecoveryPassword/>} />
					<Route path="/send-email" element={<SendEmail/>} />
					<Route path="/new-password" element={<NewPassword/>} />
					<Route path="/account" element={<MyAccount/>} />
					<Route path="/signup" element={<CreateAccount/>} />
					<Route path="/checkout" element={<Checkout/>} />
					<Route path="/orders" element={<Orders/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/*' element={ <NotFound/> } />
      </Layout>
      
    </BrowserRouter>
  )
}
