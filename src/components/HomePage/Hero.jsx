import Image from "next/image";
import React from "react";
import hero_image from "../../../public/image.png";
import CustomNavbar from "@/app/CustomNavbar";

const Hero = () => {
  return (
    <div
      style={{ backgroundColor: "#eef6fe" }}
      className="min-vh-100 d-flex flex-column"
    >
      <div className="bg-white">
        <CustomNavbar />
      </div>
      <div className="container d-flex flex-column flex-grow-1 justify-content-center  py-5 h-100">
        <div className="row  align-items-center h-100">
          <div className="col-md-6">
            <h1 className=" heroHeadding fw-bold">FamilyDr</h1>
            <p>
              FamilyDr is an online doctor appointment scheduling and management
              <br className="d-md-block d-none"></br>
              app that simplifies the process of booking appointments{" "}
              <br className="d-md-block d-none"></br> for patients. With a
              user-friendly interface, patients can book appointments{" "}
              <br className="d-md-block d-none"></br> with their doctors from
              anywhere, making healthcare accessible and convenient.{" "}
              <br className="d-md-block d-none"></br> FamilyDr also offers an
              innovative new way to order prescription medications online,{" "}
              <br className="d-md-block d-none"></br>ensuring that patients can
              easily manage their health needs. es content ke
              <br className="d-md-block d-none"></br>
              related image provide krdo esi theme me
            </p>
          </div>
          <div className="col-md-5 d-flex justify-content-center ps-md-5">
            <Image
              className="w-100 h-100"
              src={hero_image}
              alt="hero"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
