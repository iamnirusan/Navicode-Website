"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/Layout/Layout";
import Heading from "@/components/Common/Heading";
import SubHeading from "@/components/Common/SubHeading";
import ApplicationForm from "@/components/Careers/ApplicatonForm";

const Webdeveloper = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to handle the visibility of the form overlay
  const router = useRouter();

  const handleApplyClick = () => {
    setIsFormVisible(true); // Show the application form overlay
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Close the application form overlay
  };

  return (
    <Layout>
      <section className="careerdetails">
        <div className="flex flex-col xl:flex-row justify-between px-5 py-5 md:px-10 md:py-10 m-5 md:m-10">
          {/* Left Section */}
          <div className="w-full xl:w-1/2 mb-5 xl:mb-0">
            <div className="relative inline-block w-full">
              <img
                src="/images/hiring.jpg"
                alt="Hiring"
                className="w-full h-auto mx-auto md:mx-7 xl:mx-0 rounded-md"
              />
              <div className="absolute top-6 left-8 bg-white p-1 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full xl:w-2/5 xl:px-8">
            <Heading title="Web Developer" />
            
            {/* Qualifications Section */}
            <SubHeading title="Qualifications" />
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Proficiency in Programming Languages.</li>
              <li>Understanding of Software Development Methodologies.</li>
              <li>Problem-Solving Skills.</li>
              <li>Strong Communication Skills.</li>
              <li>Continual Learning.</li>
            </ul>

            {/* Additional Information Section */}
            <SubHeading title="Other Desirable Skills" />
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>

            {/* Apply Button */}
            <div className="mt-5">
              <button
                onClick={handleApplyClick}
                className="px-6 py-2 rounded-full text-white bg-orange-600 hover:bg-orange-700 transition duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Application Form Overlay */}
        {isFormVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-0 w-full max-w-md sm:max-w-lg relative">
              <ApplicationForm onClose={handleCloseForm} />
              <button
                onClick={handleCloseForm}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Webdeveloper;
