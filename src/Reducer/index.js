import Registerreducer from './Registerreducer'
import Loginreducer from './Loginreducer'
import Desktopreducer from './Desktopreducer'
import MiscellaneousDesktopreducer from './MiscellaneousDesktopreducer'

import Laptopreducer from './Laptopreducer'

import { combineReducers } from 'redux';

export default combineReducers({
    Registerreducer,
    Loginreducer,
    Desktopreducer,
    Laptopreducer,
    MiscellaneousDesktopreducer,
  
})
