import React, {createContext, useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Cookies} from "react-cookie";
import {COOKIES_ENUM} from "../constants";
import {getFromUrl} from "../utils/getFromUrl";
import {selectStore} from "../store/selector";
import {RootState} from "../store";

const cookies = new Cookies();

const AuthContext = createContext<any>({});
export const AuthProvider = ({children}: any) => {
  const dispatch = useDispatch()
  const [isAuth, setIsAuth] = useState<boolean>(!!cookies.get(COOKIES_ENUM.JWT));

  useEffect(() => {
    const cookiesHandler = (options: any) => {
      if (options.name === COOKIES_ENUM.JWT) {
        if (options.value !== undefined) {
          setIsAuth(true)
        } else {
          setIsAuth(false)
        }
      }
    }

    cookies.addChangeListener((options: any) => {
      cookiesHandler(options)
    })

    return () => {
      cookies.removeChangeListener((options: any) => {
        cookiesHandler(options)
      })
    }
  }, [])


  const handleLogin = async (values: any) => {

  };

  const handleLogout = async () => {
    setIsAuth(false);
    await cookies.remove(COOKIES_ENUM.JWT, { path: '/' })
  };

  return (
    <AuthContext.Provider
      value={{isAuth, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)