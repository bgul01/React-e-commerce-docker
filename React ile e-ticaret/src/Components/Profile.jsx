import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../LoginData';

const Profile = () => {
  const user = useSelector((state) => state.LoginData.LoginDatam.user);
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);


  const dispatch = useDispatch();
  const handleMenuItemClick = (menu) => {
    setSelectedMenuItem(menu);
  };

  useEffect(() => {
    // Kullanıcı oturum açmamışsa, /login sayfasına yönlendir
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);


  console.log(user)


  const handleClick = async () => {
    // logoutUser thunk'ını tetikle
    await dispatch(logoutUser());

    // Çıkış işlemi tamamlandıktan sonra yönlendirme yap
    navigate('/');
  };



  return (
    <div className="columns is-multiline">
      <div className="column is-one-third">
        {/* Sol Menü */}
        <aside className="menu">
          <p className="menu-label">Profil Menüsü</p>
          <ul className="menu-list">
            <li>
              <a href="#!" onClick={() => handleMenuItemClick('iletisim')}>İletişim Bilgileri</a>
            </li>
            <li>
              <a href="#!" onClick={() => handleMenuItemClick('adres')}>Adres Bilgileri</a>
            </li>
            <li>
              <a href="#!" onClick={() => handleMenuItemClick('sifre')}>Şifre Değiştir</a>
            </li>
            <li>
              <a href="#!" onClick={() => handleMenuItemClick('siparisler')}>Siparişlerim</a>
            </li>
            <li>
              <a onClick={handleClick}>Çıkış Yap</a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="column is-half">
        {/* Dinamik İçerik */}
        {selectedMenuItem === 'iletisim' && (
          <div>
            <h1 className="title">İletişim Bilgileri</h1>
            <div className="column is-two-thirds">
              {/* Profil Bilgileri */}
              <div>

                <p>Email: {user.email}</p>
                <p>Phone {user.phone}</p>
                <p>Ad: {user.firstName}</p>
                <p>Soyad: {user.lastName}</p>
                {/* Diğer kullanıcı bilgilerini ekleyin */}
              </div>
            </div>
          </div>
        )}
        {selectedMenuItem === 'adres' && (
          <div>
            <h1 className="title">Adres Bilgileri</h1>
            {/* Adres bilgilerini ekleyin */}
          </div>
        )}
        {selectedMenuItem === 'sifre' && (
          <div>
            <h1 className="title">Şifre Değiştir</h1>
            {/* Şifre değiştirme formunu ekleyin */}
          </div>
        )}
        {selectedMenuItem === 'siparisler' && (
          <div>
            <h1 className="title">Siparişlerim</h1>
            {/* Sipariş bilgilerini ekleyin */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
