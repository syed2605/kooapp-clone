import axios from "axios"
import { GET_LOGGED_OUT_DATA } from "./actionType"

let getData3 = () => {
    return (dispatch) => { axios.get(`https://vast-colt-shoulder-pads.cyclic.app/loggedOutData`).then((res) => {
            return dispatch(redData(res.data));
          })
    };
  };
  


let redData = (data)=>{
    return{
        type:GET_LOGGED_OUT_DATA,
        payload:data
    }
}


export {getData3 , redData }