import { Container } from "reactstrap";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <Container>
      <h3 style={{ margin: "40px", color: "white" }}>Send Us Your Feedback</h3>
      <ContactForm />
      <Footer />
    </Container>
  );
};
export default Contact;
