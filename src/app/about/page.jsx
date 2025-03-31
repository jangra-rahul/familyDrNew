import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar";
import about_img from "../../../public/about_image.png";

const page = () => {
  return (
    <section
      id="about"
      className=" bg-light min-vh-100 d-flex flex-column justify-center"
    >
      <div className="bg-white">
        <CustomNavbar />
      </div>
      <Container className="py-md-5 d-flex flex-column flex-grow-1 align-items-center justify-content-center">
        <Row className="align-items-center justify-content-between py-4 py-md-0">
          {/* Left Text Content */}
          <Col md={6}>
            <h2 className="mb-4 text-primary fw-bold">About FamilyDr</h2>
            <p className="text-muted">
              <strong>FamilyDr</strong> is an online doctor appointment
              scheduling and management app designed to simplify and streamline
              the healthcare experience. Our mission is to make healthcare more
              accessible, organized, and user-friendly for everyone.
            </p>
            <p className="text-muted">
              With an intuitive interface, patients can easily search for
              doctors, view availability, and book appointments from anywhere —
              whether at home or on the go. No more long waiting times or phone
              calls.
            </p>
            <p className="text-muted">
              In addition to booking appointments, FamilyDr introduces a smarter
              way to manage prescriptions. Patients can now order their
              prescription medications online, ensuring a seamless and
              stress-free health management experience.
            </p>
            <p className="text-muted">
              We are committed to bringing healthcare closer to families and
              individuals — anytime, anywhere.
            </p>
          </Col>

          {/* Right Image */}
          <Col md={5} className="">
            <Image
              src={about_img} // Replace with your actual path
              alt="FamilyDr App Overview"
              className="shadow-sm w-100 h-100"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default page;
