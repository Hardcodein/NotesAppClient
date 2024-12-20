import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import './styles.css';
import {Link} from "react-router-dom"; // Подключаем файл стилей

const UserProfile: React.FC = () => {
    // Состояния для хранения данных пользователя
    const [name, setName] = useState('Бондаренко Денис');
    const [email, setEmail] = useState('RobberPip@yandex.com');
    const [phone, setPhone] = useState('+7 123 456 7890');
    const [address, setAddress] = useState('Москва, ул. Ленина, 12');
    const [birthdate, setBirthdate] = useState('1990-04-15');

    // Состояния для данных на главной панели
    const [orders, setOrders] = useState(152);
    const [revenue, setRevenue] = useState(2100);
    const [customers, setCustomers] = useState(28441);
    const [comments, setComments] = useState(152);

    // Состояния для обновлений
    const [newOrders, setNewOrders] = useState(24);
    const [revenueGrowth, setRevenueGrowth] = useState(52);
    const [newCustomers, setNewCustomers] = useState(520);
    const [respondedComments, setRespondedComments] = useState(85);

    // Состояния для блока финансов
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    useEffect(() => {
        document.body.style.backgroundColor = "#0c607a"; // Пример фона;
    }, []);

    const handleSave = () => {
        // Логика сохранения изменений
        console.log('Данные пользователя сохранены', { name, email, phone, address, birthdate, cardNumber, expiryDate, cvv });
    };

    return (
        <div className="p-d-flex p-jc-center p-ai-center p-mt-5">
            <div className="p-col-12 p-md-10 p-lg-8">
                <Card className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    {/* Личная информация */}
                    <Card className="surface-0 shadow-2 p-3 border-1 border-50 border-round p-mt-4">
                        <div className="card-header">Личная информация</div>
                        <div className="card-body">
                            <div className="input-field">
                                <label htmlFor="name" className="input-label">Имя</label>
                                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} className="input-text" />
                            </div>

                            <div className="input-field">
                                <label htmlFor="email" className="input-label">Электронная почта</label>
                                <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-text" />
                            </div>

                            <div className="input-field">
                                <label htmlFor="phone" className="input-label">Телефон</label>
                                <InputText id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-text" />
                            </div>

                            <div className="input-field">
                                <label htmlFor="address" className="input-label">Адрес</label>
                                <InputText id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="input-text" />
                            </div>

                            <div className="input-field">
                                <label htmlFor="birthdate" className="input-label">Дата рождения</label>
                                <InputText id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} className="input-text" />
                            </div>

                            <div className="card-footer">
                                <Button label="Сохранить" icon="pi pi-save" onClick={handleSave} className="save-button" />
                            </div>
                        </div>
                    </Card>

                    <Divider />

                    {/* Блок финансов */}
                    <Card className="surface-0 shadow-2 p-3 border-1 border-50 border-round p-mt-4">
                        <div className="card-header">Данные оплаты</div>
                        <div className="card-body">
                            <div className="input-field">
                                <label htmlFor="cardNumber" className="input-label">Номер карты</label>
                                <InputText id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="input-text" />
                            </div>

                            <div className="input-field">
                                <label htmlFor="expiryDate" className="input-label">Срок действия</label>
                                <InputText id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="input-text" />
                            </div>

                            <div className="input-field">
                                <label htmlFor="cvv" className="input-label">CVV</label>
                                <InputText id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} className="input-text" />
                            </div>

                            <div className="card-footer">
                                <Button label="Сохранить данные оплаты" icon="pi pi-credit-card" onClick={handleSave} className="save-button" />
                            </div>
                        </div>
                    </Card>

                    <Divider />
                    {/* Кнопка обращения в техподдержку */}
                    <div className="p-d-flex p-jc-between p-ai-center">
                        <Link to="/support">
                            <Button label="Обратиться в техподдержку" icon="pi pi-headset" className="mb-8 support-button" />
                        </Link>
                    </div>
                    {/* Панель с данными */}
                    <div className="p-grid card-container">
                        <div className="p-col-12 p-md-6 p-lg-3">
                            <Card className="stat-card">
                                <div className="stat-card-header">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">Заказы</span>
                                        <div className="text-900 font-medium text-xl">{orders}</div>
                                    </div>
                                    <div className="stat-card-icon">
                                        <i className="pi pi-shopping-cart text-xl"></i>
                                    </div>
                                </div>
                                <span className="stat-card-footer">{newOrders} новых с последнего визита</span>
                            </Card>
                        </div>

                        <div className="p-col-12 p-md-6 p-lg-3">
                            <Card className="stat-card">
                                <div className="stat-card-header">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">Доход</span>
                                        <div className="text-900 font-medium text-xl">${revenue}</div>
                                    </div>
                                    <div className="stat-card-icon">
                                        <i className="pi pi-money-bill text-xl"></i>
                                    </div>
                                </div>
                                <span className="stat-card-footer">%{revenueGrowth}+ с последней недели</span>
                            </Card>
                        </div>

                        <div className="p-col-12 p-md-6 p-lg-3">
                            <Card className="stat-card">
                                <div className="stat-card-header">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">Клиенты</span>
                                        <div className="text-900 font-medium text-xl">{customers}</div>
                                    </div>
                                    <div className="stat-card-icon">
                                        <i className="pi pi-users text-xl"></i>
                                    </div>
                                </div>
                                <span className="stat-card-footer">{newCustomers} новых зарегистрированных</span>
                            </Card>
                        </div>

                        <div className="p-col-12 p-md-6 p-lg-3">
                            <Card className="stat-card">
                                <div className="stat-card-header">
                                    <div>
                                        <span className="block text-500 font-medium mb-3">Комментарии</span>
                                        <div className="text-900 font-medium text-xl">{comments} непрочитанных</div>
                                    </div>
                                    <div className="stat-card-icon">
                                        <i className="pi pi-comment text-xl"></i>
                                    </div>
                                </div>
                                <span className="stat-card-footer">{respondedComments} отвечено</span>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default UserProfile;
