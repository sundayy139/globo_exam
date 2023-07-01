import {
  Button,
  Form,
  FormLayout,
  LegacyCard,
  Page,
  Text,
  TextField,
  Toast,
} from "@shopify/polaris";
import axios from "axios";
import { useFormik } from "formik";
import { useCallback, useState } from "react";
import * as Yup from "yup";
const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [content, setContent] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      axios
        .post("https://testapi.io/api/anhez/contact-us", { values })
        .then((res) => {
          setContent(res.data.msg);
          setActive(true);
          formik.resetForm();
          setIsLoading(false);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const handleChange = (value, id) =>
    formik.handleChange({ target: { id, value } });

  const toastMarkup = active ? (
    <Toast content={content} duration={10000} onDismiss={toggleActive} />
  ) : null;

  return (
    <Page title="ContactUs Page">
      {toastMarkup}
      <LegacyCard sectioned>
        <Form onSubmit={formik.handleSubmit}>
          <FormLayout>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              repellendus quae minus ab ratione corporis ad repudiandae neque,
              ex laudantium vel, aperiam magni repellat consectetur autem dolore
              ipsa excepturi quibusdam?
            </Text>
            <hr />
            <TextField
              id="email"
              value={formik.values.email}
              onChange={handleChange}
              label="Your Email"
            />
            {formik.errors.email && formik.touched.email && (
              <p
                style={{
                  fontSize: "10px",
                  color: "red",
                }}
              >
                {formik.errors.email}
              </p>
            )}
            <TextField
              id="subject"
              value={formik.values.subject}
              onChange={handleChange}
              label="Subject"
            />
            {formik.errors.subject && formik.touched.subject && (
              <p
                style={{
                  fontSize: "10px",
                  color: "red",
                }}
              >
                {formik.errors.subject}
              </p>
            )}
            <TextField
              id="message"
              value={formik.values.message}
              onChange={handleChange}
              label="Message"
              multiline={5}
            />
            {formik.errors.message && formik.touched.message && (
              <p
                style={{
                  fontSize: "10px",
                  color: "red",
                }}
              >
                {formik.errors.message}
              </p>
            )}
            <Button submit primary loading={isLoading}>
              Submit
            </Button>
          </FormLayout>
        </Form>
      </LegacyCard>
    </Page>
  );
};

export default ContactUs;
