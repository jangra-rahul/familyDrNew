"use client";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../public/logo.jpeg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CustomNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar
      expand="lg"
      className="custom-navbar py-2 border-bottom"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          <Image height={50} width={50} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-5">
            <Nav.Link
              href="/"
              className={pathname === "/" ? "text-primary fw-semibold" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={
                pathname === "/about" ? "text-primary fw-semibold" : ""
              }
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/faqs"
              className={pathname === "/faqs" ? "text-primary fw-semibold" : ""}
            >
              FAQs
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={
                pathname === "/contact" ? "text-primary fw-semibold" : ""
              }
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
