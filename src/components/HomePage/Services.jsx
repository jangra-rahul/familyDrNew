// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   FaVideo,
//   FaUserMd,
//   FaClinicMedical,
//   FaFlask,
//   FaCapsules,
//   FaAmbulance,
//   FaHospitalAlt,
//   FaSyringe,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Online Video Consultation",
//     description: "Consult with doctors via secure video calls from anywhere.",
//     icon: <FaVideo size={40} className="text-primary" />,
//   },
//   {
//     title: "Physical Consultation",
//     description: "Book face-to-face appointments with top doctors near you.",
//     icon: <FaUserMd size={40} className="text-success" />,
//   },
//   {
//     title: "Diagnostic Services",
//     description: "Get expert medical diagnoses and second opinions online.",
//     icon: <FaClinicMedical size={40} className="text-warning" />,
//   },
//   {
//     title: "Lab Tests",
//     description: "Book lab tests and receive reports digitally.",
//     icon: <FaFlask size={40} className="text-info" />,
//   },
//   {
//     title: "Medicine Delivery",
//     description: "Order prescription medicines and get them delivered to you.",
//     icon: <FaCapsules size={40} className="text-danger" />,
//   },
//   {
//     title: "Ambulance Service",
//     description: "Emergency ambulance booking for urgent medical needs.",
//     icon: <FaAmbulance size={40} className="text-dark" />,
//   },
//   {
//     title: "Hospital Management",
//     description: "Seamless hospital appointment and patient data management.",
//     icon: <FaHospitalAlt size={40} className="text-primary" />,
//   },
//   {
//     title: "Vaccination",
//     description: "Schedule and track vaccinations for you and your family.",
//     icon: <FaSyringe size={40} className="text-success" />,
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-5 bg-light">
//       <Container>
//         <h2 className="text-center text-primary fw-bold mb-5">Our Services</h2>
//         <Row>
//           {services.map((service, index) => (
//             <Col key={index} md={6} lg={4} className="mb-4">
//               <div className="p-4 border rounded shadow-sm h-100 text-center bg-white">
//                 {service.icon}
//                 <h5 className="mt-3">{service.title}</h5>
//                 <p className="text-muted">{service.description}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { Container } from "react-bootstrap";
import {
  FaVideo,
  FaUserMd,
  FaClinicMedical,
  FaFlask,
  FaCapsules,
  FaAmbulance,
  FaHospitalAlt,
  FaSyringe,
} from "react-icons/fa";

const services = [
  {
    title: "Online Video Consultation",
    description: "Consult with doctors via secure video calls from anywhere.",
    icon: <FaVideo size={40} className="text-primary" />,
  },
  {
    title: "Physical Consultation",
    description: "Book face-to-face appointments with top doctors near you.",
    icon: <FaUserMd size={40} className="text-success" />,
  },
  {
    title: "Diagnostic Services",
    description: "Get expert medical diagnoses and second opinions online.",
    icon: <FaClinicMedical size={40} className="text-warning" />,
  },
  {
    title: "Lab Tests",
    description: "Book lab tests and receive reports digitally.",
    icon: <FaFlask size={40} className="text-info" />,
  },
  {
    title: "Medicine Delivery",
    description: "Order prescription medicines and get them delivered to you.",
    icon: <FaCapsules size={40} className="text-danger" />,
  },
  {
    title: "Ambulance Service",
    description: "Emergency ambulance booking for urgent medical needs.",
    icon: <FaAmbulance size={40} className="text-dark" />,
  },
  {
    title: "Hospital Management",
    description: "Seamless hospital appointment and patient data management.",
    icon: <FaHospitalAlt size={40} className="text-primary" />,
  },
  {
    title: "Vaccination",
    description: "Schedule and track vaccinations for you and your family.",
    icon: <FaSyringe size={40} className="text-success" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary fw-bold mb-5">Our Services</h2>
        <div className="pb-5">
          <div className="timeline-div position-relative">
            <div className="timeline mb-0 mt-0">
              {services.map((service, index) => (
                <div data-aos="fade-up" key={index} className="timeline-item">
                  <div className="timeline-content">
                    <div
                      className={`d-flex align-items-center gap-3 ${
                        index % 2 === 0 ? "flex-row-reverse text-start" : ""
                      }`}
                    >
                      <div
                        style={{ maxWidth: "400px" }}
                        className="p-4 border w-100 rounded shadow-sm bg-white d-flex flex-column  gap-3"
                      >
                        <div className="icon_container d-flex justify-content-center align-items-center">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="fs-4 fw-bold mb-0 text-black">
                            {service.title}
                          </h4>
                          <p className="fs-6 mt-2 text-muted">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
