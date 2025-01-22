import React, { useState } from "react";
import "./contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Contact() {
  const initialValues = {
    name: "",
    phone: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Form submitted successfully", values);
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="contact" className="contact-page-big">
      <div className="contact-page flex-column-center">
        <div className="page-style flex-row-between">
          <div className="details">
            <div className="card">
              <h3>
                <ImLocation2
                  style={{
                    color: "#f58c17",
                    verticalAlign: "middle",
                    margin: "7px 10px 10px 0px",
                    fontSize: "1.5rem",
                    fontWeight: "normal",
                  }}
                />
                Location
              </h3>
              <p>
                Chamber No 197,Street no 6 District & Sessions Court at Surajpur
                Uttar Pradesh 201308 India
              </p>
              <div className="dashed-line"></div>
              <h3>
                <BsTelephoneFill
                  style={{
                    color: "#f58c17",
                    verticalAlign: "middle",
                    margin: "7px 10px 10px 0px",
                  }}
                />
                Make a call
              </h3>
              <p>+91 094571 77171</p>
              <p>+91 093102 04200</p>
              <p style={{ fontStyle: "italic" }}>(Free Consulting 24/7)</p>
              <div className="dashed-line"></div>
              <h3>
                <IoMail
                  style={{
                    color: "#f58c17",
                    verticalAlign: "middle",
                    margin: "7px 10px 10px 0px",
                    fontSize: "1.5rem",
                  }}
                />
                Send an email
              </h3>
              <p>info@inquery&accident.com</p>
            </div>
          </div>

          <div className="form">
            <div className="flex-row">
              <p>Contact Us</p>
              <div
                style={{
                  borderBottom: "2px solid #f58c17",
                  marginBottom: "9px",
                  marginLeft: "7px",
                  width: "350px",
                }}
              ></div>
            </div>
            <h3 style={{ marginBottom: "35px", marginTop: "10px" }}>
              REQUEST A CONSULTATION TOTALLY FREE
            </h3>

            {/* <p>Fill out the form below.</p> */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="flex-row-between contact-form">
                  <Field
                    type="text"
                    placeholder="Name*"
                    name="name"
                    className={errors.name && touched.name ? "error" : ""}
                  />
                  <Field
                    type="text"
                    placeholder="Phone*"
                    name="phone"
                    className={errors.phone && touched.phone ? "error" : ""}
                  />
                  <Field
                    as="textarea"
                    placeholder="Case Description*"
                    name="description"
                    className={
                      errors.description && touched.description ? "error" : ""
                    }
                  />
                  <div className="flex-row-between">
                    <button className="submit-btn" type="submit">
                      Submit Request
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
