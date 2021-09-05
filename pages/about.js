import { useContext } from "react";
import AppContext from "../AppContext";

import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";

export default function About() {
  const value = useContext(AppContext);
  let { aboutTitle, aboutContent } = value.state.languages;

  return (
    <>
      <Navigation />
      <Container className="page">
        <h2>{aboutTitle}</h2>
        <p>{aboutContent}</p>
      </Container>
    </>
  );
}
