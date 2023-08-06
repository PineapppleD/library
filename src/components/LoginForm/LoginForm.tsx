import { addUser } from "../../redux/userSlice";
import styles from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Text } from "..";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayPasswordError, setDisplayPasswordError] = useState(false);
  const [displayNameError, setDisplayNameError] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const userInfo = {
      name: username,
      password,
    };

    const usersData = localStorage.getItem("users");

    if (usersData && password.length > 5 && username.length > 2) {
      setDisplayPasswordError(false);
      setDisplayNameError(false);
      const users = JSON.parse(usersData);
      console.log(typeof(users))
      const user = users.find(
        (user: any) =>
          user.name === userInfo.name && user.password === userInfo.password
      );
      dispatch(addUser(user));
      console.log(users)
      const userExists = users.some(
        (u: any) => u.name === userInfo.name && u.password === userInfo.password
      );
      userExists ? navigate("/") : setIsRegistered(false);
    } else {
      password.length < 6
        ? setDisplayPasswordError(true)
        : setDisplayPasswordError(false);
      username.length < 3
        ? setDisplayNameError(true)
        : setDisplayNameError(false);
      !usersData ? setIsRegistered(false) : null;
    }
  };

  return (
    <div className={styles.login_container}>
      <form
        className={styles.login_form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <label htmlFor="username">Имя пользователя:</label>
        <input
          className={styles.login_input}
          type="text"
          id="username"
          name="username"
          required
        />
        <label htmlFor="password">Пароль:</label>
        <input
          className={styles.login_input}
          type="password"
          id="password"
          name="password"
          required
        />
        <button className={styles.login_button} type="submit">
          Войти
        </button>

        <Text textSize={16} textColor="red">
          {displayPasswordError &&
            "Очень короткий пароль! должно быть минимум 6 символов"}
        </Text>
        <Text textSize={16} textColor="red">
          {displayNameError &&
            "Очень короткое имя! должно быть минимум 3 символа"}
        </Text>
        <Text textSize={16} textColor="red">
          {!isRegistered && "Такого аккаунта не существует создайте аккаунт!"}
          <Link to="/registration">Создать аккаунт</Link>
        </Text>
      </form>
    </div>
  );
};

export default LoginForm;
