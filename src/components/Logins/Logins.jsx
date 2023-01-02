import { useState } from "react";
import validate from "../Error/validation";
import style from "./Logins.module.css";
//import imgLogin from "../../img/2b.webp";
import imgLogin from "../../img/rm.png";
//className={`${style.center} ${style.fondo}`}
const Logins = ({ login }) => {
  const [userData, setUserData] = useState({ user: "", password: "" });
  const [errors, setErrors] = useState({ user: "", password: "" });

  function handleUserData(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validate({ ...userData, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    //ok
    e.preventDefault(); //me permite validar antes de pasar datos incorrectos al server
    login(userData);
  }
  return (
    <div className={style.mainContainer}>
      <div className={style.center}>
        <form className={style.formulario} onSubmit={handleSubmit}>
          
            <legend>Welcome to our Rick and Morty App</legend>           

              <div className={style.campo}>
                <label htmlFor="user">Name:</label>
                <input
                  id="user"
                  name="user"
                  type="text"
                  placeholder="Type your username"
                  className={`${errors.user && style.errorInput} ${style.inputText}`}
                  value={userData.user}
                  onChange={handleUserData}
                ></input>
                {errors.user && (
                  <p className={`${style.errorP}`}>{errors.user}</p>
                )}
              </div>

              <div className={style.campo}>
                <label htmlFor="pass">Password:</label>
                <input
                  id="pass"
                  name="password"
                  type="password"
                  placeholder="Type your password"
                  className={`${errors.password && style.errorInput} ${style.inputText}`}
                  value={userData.password}
                  onChange={handleUserData}
                ></input>
                {errors.password && (
                  <p className={`${style.errorP}`}>{errors.password}</p>
                )}
              </div>
          
            <div className={style.btnContainer}>
            <button className={style.btnModerno}>Login</button>
            </div>
           
         
        </form>
      </div>
{/** <div className={style.center}>
        <img className={style.imgStyle} src={imgLogin} alt="page not found" />
      </div> */}
     
    </div>
  );
};

export default Logins;
