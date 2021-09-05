import { useContext } from "react";
import AppContext from "../AppContext";
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";

export default function About() {
  const value = useContext(AppContext);
  let { emailLabel, phoneLabel } = value.state.languages;

  console.log(value, "value");

  return (
    <>
      <Navigation />

      <Container className="page">
        <h2>{value.state.languages.contactTitle}</h2>
        <div>
          <li>{`${emailLabel}: hi@example.com`}</li>
          <li>{`${phoneLabel}: +010112345`}</li>
        </div>
      </Container>
    </>
  );
}
