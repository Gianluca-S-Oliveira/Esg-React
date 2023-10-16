import { BiUserCircle } from "react-icons/bi";
import FormInput from "../../compoenentes/formInput";
import imagem from "../../images/loginImg.png";
import "./login.css";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <>
      <></>

      <section className="loginContainer">
        <section className="picture">
          <img src={imagem} />
        </section>
        <section className="form">
          <></>
          <BiUserCircle color="aquamarine" className="icon" />
          <FormInput placeholderText={"email"} labelText={"Email"} />
          <FormInput placeholderText={"senha"} labelText={"Senha"} />{" "}
          <Link to="/home">Entrar</Link>
        </section>{" "}
      </section>
    </>
  );
}
