"use client";
import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar";
import Image from "next/image";
import contact_img from "../../../public/contact_img.png";
import Footer from "../Footer";

const page = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column justify-center bg-light">
        <div className="bg-white  shadow-sm">
          <CustomNavbar />
        </div>
        <Container className="py-5 d-flex flex-column flex-grow-1 align-items-center justify-content-center">
          <Row className="justify-content-between align-items-center mb-4 w-100">
            {/* Left Text and Form */}
            <Col md={6} className="d-flex flex-column align-items-start">
              <h2 data-aos="zoom-in" className="fw-bold mb-4 text-primary">
                Contact Us
              </h2>
              <p data-aos="zoom-in" className="text-muted">
                We'd love to hear from you! Whether you have a question about
                our services, need assistance, or just want to share feedback,
                feel free to reach out.
              </p>
              <Image
                data-aos="zoom-in"
                className="w-100 h-100"
                src={contact_img}
                alt="Contact Illustration"
                width={500}
                height={700}
              />
            </Col>

            {/* Right Image */}
            <Col md={5} className="d-flex mt-4 mt-md-0 justify-content-center">
              <Card data-aos="zoom-in" className="shadow-sm p-4 w-100">
                <Form>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your Phone Number"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message..."
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-3"
                  >
                    Send Message
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default page;
