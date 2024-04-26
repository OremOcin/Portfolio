import Header from "./Header";
import "../css/contact.scss";

const Contact = () => {
  return (
    <div className="contactFlexContainer">
      <Header />
      <h1 className="contactFlexContainer__title">Contact</h1>
      <div className="contactFlexContainer__Container">
        <h2 className="contactFlexContainer__label">Mail :</h2>
        <p className="contactFlexContainer__text">Ocinorem68439@gmail.com</p>
        <h2 className="contactFlexContainer__label">Git :</h2>
        <a
          className="contactFlexContainer__link"
          href="https://github.com/OremOcin?tab=repositories"
        >
          <p className="contactFlexContainer__text">- Clique ici -</p>
        </a>
        <h2 className="contactFlexContainer__label">Discord</h2>
        <p className="contactFlexContainer__text">oremocin #0506</p>
      </div>
    </div>
  );
};

export default Contact;
