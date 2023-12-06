import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../LoginData' // 'submitLoginData' fonksiyonunu doğru şekilde import et
import LoginForm from '../dizayn/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const loginSuccess = useSelector(state => state.LoginData.loginSuccess);
  const navigate = useNavigate();

  const [sigIn, setsigIn] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsigIn((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  useEffect(() => {
    // loginSuccess değiştiğinde yapılacak işlemler
    if (loginSuccess) {
      // Başarılı giriş yapıldıysa, profile sayfasına yönlendir
      navigate('/profile');
    }
  }, [loginSuccess, navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // submitLoginData fonksiyonunu async hale getirin
      await dispatch(loginUser(sigIn));

      // Gerek yok, useEffect içinde kontrol edilecek
    } catch (error) {
      // dispatch(loginUser(sigIn)) sırasında bir hata oluşursa yakala
      console.error("Giriş sırasında bir hata oluştu", error);
    }
  }


  return (
    <div>

      <LoginForm handleLogin={handleLogin} handleChange={handleChange} sigIn={sigIn} />

    </div>
  );
}

export default Login;
