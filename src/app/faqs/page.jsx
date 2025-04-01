"use client";
import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar";
import Footer from "../Footer";

const page = () => {
  return (
    <div
      style={{ backgroundColor: "#eef6fe" }}
      className=" min-vh-100 d-flex flex-column justify-center"
    >
      <div className="bg-white">
        <CustomNavbar />
      </div>
      <Container className="py-5 py-5 d-flex flex-column flex-grow-1 align-items-center justify-content-center">
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <h2 className="text-center fw-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted">
              Here are some of the most common questions we receive. If you have
              more queries, feel free to contact us.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center w-100">
          <Col md={8}>
            <Accordion className="w-100" defaultActiveKey="0" flush>
              <Accordion.Item
                className="w-100 mt-4"
                data-aos="zoom-in"
                eventKey="0"
              >
                <Accordion.Header className="w-100">
                  What is FamilyDr?
                </Accordion.Header>
                <Accordion.Body>
                  FamilyDr is an online doctor appointment scheduling and
                  management app that makes healthcare more accessible and
                  convenient for patients.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                className="w-100 mt-4"
                data-aos="zoom-in"
                eventKey="1"
              >
                <Accordion.Header className="w-100">
                  How do I book an appointment?
                </Accordion.Header>
                <Accordion.Body>
                  Simply download the FamilyDr app, register with your details,
                  choose your doctor, and book an available slot that suits you.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                className="w-100 mt-4"
                data-aos="zoom-in"
                eventKey="2"
              >
                <Accordion.Header>
                  Can I order medicines through FamilyDr?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! You can easily order prescription medications through the
                  app and get them delivered to your doorstep.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                className="w-100 mt-4"
                data-aos="zoom-in"
                eventKey="3"
              >
                <Accordion.Header>
                  Is there a separate app for doctors?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we offer separate applications for Doctors, Sellers,
                  Hospitals, Labs, Delivery Partners, Kiosk, Admin Panel, and
                  more to ensure a seamless ecosystem.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                className="w-100 mt-4"
                data-aos="zoom-in"
                eventKey="4"
              >
                <Accordion.Header>Is FamilyDr free to use?</Accordion.Header>
                <Accordion.Body>
                  The app is free for patients to download and use. Consultation
                  or delivery charges may apply as per your doctor's or service
                  provider's policy.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default page;
