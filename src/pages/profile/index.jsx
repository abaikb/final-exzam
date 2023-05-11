import './style.css'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Background from './img/Mask Group.jpg'


export const ProfilePage = () => {
    const [data, setData] = useState(null);

    const username = localStorage.getItem("username");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://16.170.37.57/api/v1/app/profile/${username}/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [username]);

    return (
        <div className="containerProfile">
            <div className="profile">
                <div className="left">
                    <img className='profilePic' src={data?.img} alt="avatar" />
                    <h3>Основная информация:</h3>
                    <div className='info'>
                        <div>Имя:{data?.username}</div>
                        <div>ID волонтера:{data?.id} </div>
                        <div className="infoPics">
                            <div>
                                <img src="https://dobro.ru/_next/static/media/gift.464633f3.svg" alt="" />
                                Дата рождения:{data?.birth_date} 
                            </div>
                            <div>
                                <img src="https://dobro.ru/_next/static/media/location.42966452.svg" alt="" />
                                Местоположение: {data?.city}  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <NavLink to="/profile/:id/edit" ><button>Редактировать профиль</button></NavLink>
                    <h3>Посещенные события</h3>
                    <div>Нет посещенных событий</div>
                    <h3>Предшествующие события</h3>
                    <div>Нет предшествующих событий</div>
                </div>
            </div>
            <div className='wrapperProfile'>
                <div className='box'>
                    <h3>Контактные данные</h3>
                    <div>Телефон:{data?.number_phone}</div>
                    <div className="wrapperBox">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0053 5.83926C8.5982 5.83926 5.84999 8.58748 5.84999 11.9946C5.84999 15.4018 8.5982 18.15 12.0053 18.15C15.4125 18.15 18.1607 15.4018 18.1607 11.9946C18.1607 8.58748 15.4125 5.83926 12.0053 5.83926ZM12.0053 15.9964C9.80356 15.9964 8.00356 14.2018 8.00356 11.9946C8.00356 9.78748 9.7982 7.99283 12.0053 7.99283C14.2125 7.99283 16.0071 9.78748 16.0071 11.9946C16.0071 14.2018 14.2071 15.9964 12.0053 15.9964ZM19.8482 5.58748C19.8482 6.38569 19.2053 7.02319 18.4125 7.02319C17.6143 7.02319 16.9768 6.38033 16.9768 5.58748C16.9768 4.79462 17.6196 4.15176 18.4125 4.15176C19.2053 4.15176 19.8482 4.79462 19.8482 5.58748ZM23.925 7.04462C23.8339 5.1214 23.3946 3.41783 21.9857 2.01426C20.5821 0.61069 18.8786 0.171404 16.9553 0.0749756C14.9732 -0.0375244 9.03213 -0.0375244 7.04999 0.0749756C5.13213 0.166047 3.42856 0.605333 2.01963 2.0089C0.610704 3.41248 0.176775 5.11605 0.0803467 7.03926C-0.0321533 9.0214 -0.0321533 14.9625 0.0803467 16.9446C0.171418 18.8678 0.610704 20.5714 2.01963 21.975C3.42856 23.3785 5.12678 23.8178 7.04999 23.9143C9.03213 24.0268 14.9732 24.0268 16.9553 23.9143C18.8786 23.8232 20.5821 23.3839 21.9857 21.975C23.3893 20.5714 23.8286 18.8678 23.925 16.9446C24.0375 14.9625 24.0375 9.02676 23.925 7.04462ZM21.3643 19.0714C20.9464 20.1214 20.1375 20.9303 19.0821 21.3535C17.5018 21.9803 13.7518 21.8357 12.0053 21.8357C10.2589 21.8357 6.50356 21.975 4.92856 21.3535C3.87856 20.9357 3.06963 20.1268 2.64642 19.0714C2.01963 17.491 2.16428 13.741 2.16428 11.9946C2.16428 10.2482 2.02499 6.49283 2.64642 4.91783C3.06428 3.86783 3.8732 3.0589 4.92856 2.63569C6.50892 2.0089 10.2589 2.15355 12.0053 2.15355C13.7518 2.15355 17.5071 2.01426 19.0821 2.63569C20.1321 3.05355 20.9411 3.86248 21.3643 4.91783C21.9911 6.49819 21.8464 10.2482 21.8464 11.9946C21.8464 13.741 21.9911 17.4964 21.3643 19.0714Z" fill="white" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.38226 0C1.95468 0 0 1.95468 0 4.38226V19.6178C0 22.0453 1.95468 24 4.38226 24H12.6398V14.6175H10.1588V11.2395H12.6398V8.35351C12.6398 6.08611 14.1057 4.00426 17.4825 4.00426C18.8497 4.00426 19.8608 4.13551 19.8608 4.13551L19.7813 7.29002C19.7813 7.29002 18.7501 7.28028 17.625 7.28028C16.4073 7.28028 16.212 7.84135 16.212 8.77279V11.2395H19.878L19.7183 14.6175H16.212V24H19.6177C22.0453 24 24 22.0454 24 19.6178V4.38228C24 1.9547 22.0453 2.4e-05 19.6177 2.4e-05H4.38223L4.38226 0Z" fill="white" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9895 24H3.00709C2.17977 24 1.47343 23.707 0.88806 23.1211C0.302693 22.5352 0.0100098 21.8281 0.0100098 21V3C0.0100098 2.17188 0.302693 1.46484 0.88806 0.878906C1.47343 0.292969 2.17977 0 3.00709 0H20.9895C21.8169 0 22.5232 0.292969 23.1086 0.878906C23.6939 1.46484 23.9866 2.17188 23.9866 3V21C23.9866 21.8281 23.6939 22.5352 23.1086 23.1211C22.5232 23.707 21.8169 24 20.9895 24ZM19.0461 6C18.9525 6.04688 18.812 6.13672 18.6247 6.26953C18.4373 6.40234 18.2852 6.50391 18.1681 6.57422C18.051 6.64453 17.9066 6.71875 17.7349 6.79688C17.5632 6.875 17.3993 6.92969 17.2432 6.96094C16.6656 6.32031 15.9554 6 15.1125 6C13.2861 6 12.373 6.76562 12.373 8.29688V9.70312C9.85978 9.5625 7.93197 8.63281 6.58953 6.91406C6.19929 7.32031 6.00416 7.76562 6.00416 8.25C6.00416 9.28125 6.3866 10.0625 7.15148 10.5938C7.04221 10.5938 6.90563 10.6016 6.74172 10.6172C6.57782 10.6328 6.44514 10.6328 6.34368 10.6172C6.24221 10.6016 6.12904 10.5625 6.00416 10.5C6.00416 11.2188 6.19538 11.8164 6.57782 12.293C6.96026 12.7695 7.48709 13.0781 8.15831 13.2188C8.00221 13.4062 7.78368 13.5 7.5027 13.5C7.25295 13.5 7.03441 13.4297 6.84709 13.2891C6.84709 13.8984 7.13977 14.3711 7.72514 14.707C8.31051 15.043 8.97002 15.2188 9.70368 15.2344C9.4227 15.6562 9.01295 15.9727 8.47441 16.1836C7.93587 16.3945 7.36221 16.5 6.75343 16.5C6.5349 16.5 6.23441 16.4453 5.85197 16.3359C5.46953 16.2266 5.2705 16.1719 5.25489 16.1719C5.50465 16.6719 6.01587 17.1016 6.78855 17.4609C7.56124 17.8203 8.54075 18 9.72709 18C10.7729 18 11.7486 17.8164 12.6539 17.4492C13.5593 17.082 14.332 16.5938 14.972 15.9844C15.612 15.375 16.1622 14.6797 16.6227 13.8984C17.0832 13.1172 17.4266 12.3086 17.653 11.4727C17.8793 10.6367 17.9925 9.8125 17.9925 9C17.9925 8.96875 18.0861 8.90234 18.2734 8.80078C18.4608 8.69922 18.6793 8.56641 18.9291 8.40234C19.1788 8.23828 19.3661 8.05469 19.491 7.85156C18.6481 7.85156 18.0861 7.86719 17.8052 7.89844C18.3515 7.57031 18.7652 6.9375 19.0461 6Z" fill="white" />
                        </svg>



                    </div>
                </div>
            </div>
        </div>
    )
}