import {LoginEntity,ErrorInfo} from '../types';



// Just a fake loginAPI
export const isValidLogin = (loginInfo : LoginEntity) : ErrorInfo =>
{
  const passwordRegEx = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$");

  if(loginInfo.login.length<5)
  {
    return {isValid:false,message:"Username should be at least 5 characters long "}
  }
  if(!passwordRegEx.test(loginInfo.password))
  {
    return {isValid:false,message:"password should contain one small letter ,one capital letter and one number of legth minimum 8 characters  "}
  }

  if (loginInfo.login === 'admin' && loginInfo.password === 'Admin123')
  {
   return {isValid:true,message:"success"}
  }
  return {isValid:false,message:"invalid credentails"}
}
