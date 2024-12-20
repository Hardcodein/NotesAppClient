import {useEffect, useState} from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

function App() {
    const [email, setEmail] = useState(""); // Поле для Login
    const [password, setPassword] = useState(""); // Поле для Password

    const handleSubmit = async () => {
        // Создаем объект UserModel с пустыми значениями, кроме необходимых полей.
        const payload = {
            uid: "00000000-0000-0000-0000-000000000000", // Пустой Guid
            userName: null,
            login: email, // Логин пользователя (получаем из InputText для email)
            password: password, // Пароль (получаем из InputText для password)
            saltPassword: null,
        };

        try {
            const response = await fetch("https://localhost:7216/api/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Успешный вход:", data);
                await fetch(`http://localhost:5022/api/Notification/SendNotification?email=${encodeURIComponent(email)}&message=Успешный вход!`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });
                window.location.href = 'http://localhost:5173/profile';
                // Обработка успешного ответа.
            } else {
                console.error("Ошибка авторизации:", response.status);
                // Обработка ошибок от сервера.
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            // Обработка ошибок сети.
        }
    };
    useEffect(() => {
        // Устанавливаем стили для body при монтировании компонента
        document.body.style.backgroundColor = "#0c607a"; // Пример фона;
    }, []);
    return (
        <div className="mt-8 flex align-items-center justify-content-center">
            <div  className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <div className="text-900 text-3xl font-medium mb-3">Авторизация</div>
                    <span className="text-600 font-medium line-height-3">Нет аккаунта?</span>
                    <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Создать его!</a>
                </div>

                <div>
                    <label htmlFor="email" className="block text-900 font-medium mb-2">Почта</label>
                    <InputText
                        id="email"
                        type="text"
                        placeholder="Email address"
                        className="w-full mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" className="block text-900 font-medium mb-2">Пароль</label>
                    <InputText
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="w-full mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="flex align-items-center justify-content-between mb-6">
                        <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Забыли пароль?</a>
                    </div>

                    <Button label="Войти" icon="pi pi-user" className="w-full" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

export default App;
