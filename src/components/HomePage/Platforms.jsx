"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaUserMd,
  FaCapsules,
  FaTruck,
  FaHospital,
  FaFlask,
  FaClipboardList,
  FaStore,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const platforms = [
  {
    title: "User App",
    description:
      "Book appointments, order prescriptions, and manage your health on-the-go.",
    icon: <FaUserMd className="text-success" size={40} />,
  },
  {
    title: "Doctor App",
    description:
      "Manage appointments, consult with patients, and streamline practice.",
    icon: <FaUserMd className="text-primary" size={40} />,
  },
  {
    title: "Seller App",
    description: "List medications and manage pharmacy orders efficiently.",
    icon: <FaStore className="text-warning" size={40} />,
  },
  {
    title: "Delivery App",
    description:
      "Track and deliver prescription medications swiftly and securely.",
    icon: <FaTruck className="text-danger" size={40} />,
  },
  {
    title: "Hospital App",
    description:
      "Organize hospital-level appointment scheduling and patient coordination.",
    icon: <FaHospital className="text-info" size={40} />,
  },
  {
    title: "Lab App",
    description:
      "Handle lab test requests, reports, and patient diagnostics digitally.",
    icon: <FaFlask className="text-secondary" size={40} />,
  },
  {
    title: "Kiosk",
    description:
      "Self-service healthcare kiosks for remote areas and in-clinic setups.",
    icon: <FaClipboardList className="text-dark" size={40} />,
  },
  {
    title: "Review App",
    description:
      "Collect and manage patient feedback for better service improvement.",
    icon: <FaCogs className="text-primary" size={40} />,
  },
  {
    title: "Admin Panel",
    description:
      "Centralized control for managing users, data, and app operations.",
    icon: <FaCogs className="text-success" size={40} />,
  },
];

const Platforms = () => {
  return (
    <section className="pb-5 ">
      <Container>
        {/* Section 1 - Card Layout with Hover Effects */}

        <div className="my-5">
          <h2 className="text-center text-primary fw-bold mb-5">
            Apps & Platforms
          </h2>
          <Row>
            {platforms.map((platform, index) => (
              <Col data-aos="fade-up" key={index} md={4} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="shadow-lg border-0 rounded-3 p-4 text-center bg-white">
                    <div className="mb-3">{platform.icon}</div>
                    <Card.Body>
                      <Card.Title className="fw-bold">
                        {platform.title}
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {platform.description}
                      </Card.Text>
                      <Button variant="outline-primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Platforms;
