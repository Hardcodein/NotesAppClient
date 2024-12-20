import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import './styles.css'; // Подключаем файл стилей

const SupportPage: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('RobberPip@yandex.com'); // Добавляем переменную email, она может быть передана как пропс или получена через контекст

    const handleSubmit = async () => {
        // Параметры запроса, например, email и сообщение
        const payload = {
            subject,
            message
        };

        try {
            // Выполнение POST-запроса с использованием fetch
            const response = await fetch(`http://localhost:5022/api/Notification/SendNotification?email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            // Проверяем статус ответа
            if (response.ok) {
                alert('Сообщение отправлено!');
            } else {
                alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте снова.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке сообщения.');
        }
    };

    return (
        <div className="p-d-flex p-jc-center p-ai-center p-mt-5">
            <div className="p-col-12 p-md-8 p-lg-6">
                <Card className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="card-header">Обращение в техподдержку</div>
                    <div className="card-body">
                        <div className="input-field">
                            <label htmlFor="subject" className="input-label">Тема</label>
                            <InputText id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="input-text" />
                        </div>

                        <div className="input-field">
                            <label htmlFor="message" className="input-label">Сообщение</label>
                            {/* Используем InputTextarea для многострочного ввода */}
                            <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="input-text" rows={5} />
                        </div>

                        <div className="card-footer">
                            <Button label="Отправить" icon="pi pi-paper-plane" onClick={handleSubmit} className="save-button" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SupportPage;
