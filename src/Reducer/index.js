import Registerreducer from './Registerreducer'
import Loginreducer from './Loginreducer'
import Desktopreducer from './Desktopreducer'
import Laptopreducer from './Laptopreducer'
import Miscellaneousreducer from './Miscellaneousreducer'
import { combineReducers } from 'redux';

export default combineReducers({
    Registerreducer,
    Loginreducer,
    Desktopreducer,
    Laptopreducer,
    Miscellaneousreducer
})