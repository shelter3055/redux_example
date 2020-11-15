import axios from 'axios'
import { userInfoURL } from './url';

export function userInfoReq () {
  return axios.get(userInfoURL,{
    params: {
      userId: '5e980ee6771cdf43999456b1',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlhbnlhYmluZyIsInBhc3N3b3JkIjoiMTIzIiwiY3RpbWUiOjE2MDEyODY1ODk0NTMsImlhdCI6MTYwMTI4NjU4OX0._EfxBAJ9NgackBLuLvuSYJef7vNqT1tlyY6sDoh_V6E'
    }
  })
}