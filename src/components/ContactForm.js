import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      validate={validateContactForm}
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "By Phone",
        feedback: "",
      }}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor="firstName" md="4" xs="4" className="text-end">
            First Name
          </Label>
          <Col md="4" xs="6">
            <Field
              className="form-control"
              name="firstName"
              placeholder="First Name"
            />
            <ErrorMessage name="firstName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="lastName" md="4" xs="4" className="text-end">
            Last Name
          </Label>
          <Col md="4" xs="6">
            <Field
              className="form-control"
              name="lastName"
              placeholder="Last Name"
            />
            <ErrorMessage name="lastName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="phoneNum" md="4" xs="4" className="text-end">
            Phone
          </Label>
          <Col md="4" xs="6">
            <Field
              className="form-control"
              name="phoneNum"
              placeholder="Phone"
            />
            <ErrorMessage name="phoneNum">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email" md="4" xs="4" className="text-end">
            Email
          </Label>
          <Col md="4" xs="6">
            <Field className="form-control" name="email" placeholder="Email" />
            <ErrorMessage name="email">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="feedback" md="4" xs="4" className="text-end">
            Your Feedback
          </Label>
          <Col md="4" xs="6">
            <Field
              className="form-control"
              name="feedback"
              as="textarea"
              rows="6"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10 }}>
            <Button type="submit" color="light">
              Send Feedback
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;
