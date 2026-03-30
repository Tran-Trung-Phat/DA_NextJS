'use client';


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInfo } from "@/app/store/authslice";
import { napGioHang } from "@/app/store/cartSlice";
import { useCookies } from "react-cookie";

export default function AppInit(){
  const [cookies] = useCookies(['user']);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(cookies.user){
      let token =cookies.user.accessToken;
      dispatch(getInfo({token}));
    }
  },[cookies, dispatch]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      dispatch(napGioHang(JSON.parse(cartData)));
    }
  }, [dispatch]);
  return null;
}