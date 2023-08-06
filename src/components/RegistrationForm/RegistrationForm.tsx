import { addUser } from "../../redux/userSlice";
import styles from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
    const user = {
      name: username,
      password,
      deferredBooks: [],
    };

    const usersData = localStorage.getItem("users") as string;

    if (password.length > 5 && username.length > 2) {
      dispatch(addUser(user));
      setDisplayPasswordError(false);
      setDisplayNameError(false);
      const users = usersData ? JSON.parse(usersData) : [];
      const userExists = users.some((u: any) => u.name === user.name);

      if (userExists) {
        setIsRegistered(true);
      } else {
        users.push(user)
        console.log(users)
        localStorage.setItem('users', JSON.stringify(users))     
        navigate('/')
      };

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

  useEffect(() => {
    setIsRegistered(false)
  }, [])

  return (
    <div className={styles.login_container}>
      <form
        className={styles.login_form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <label htmlFor="username">Создайте имя пользователя:</label>
        <input
          className={styles.login_input}
          type="text"
          id="username"
          name="username"
          required
        />
        <label htmlFor="password">Создайте пароль:</label>
        <input
          className={styles.login_input}
          type="password"
          id="password"
          name="password"
          required
        />
        <button className={styles.login_button} type="submit">
          Login
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
          {isRegistered && "Такой аккаунт уже существует!"}
          <Link to="/registration">Войти</Link>
        </Text>
      </form>
    </div>
  );
};

export default LoginForm;
