"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/Layout/Layout";
import Heading from "@/components/Common/Heading";
import SubHeading from "@/components/Common/SubHeading";
import Content from "@/components/Common/Content";
import ApplicationForm from "@/components/Careers/ApplicatonForm";

const SoftwareDeveloper = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to manage visibility of the application form
  const router = useRouter();

  const handleApplyClick = () => {
    setIsFormVisible(true); // Show application form on click
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Close the application form overlay
  };

  return (
    <Layout>
      <section className="careerdetails">
        <div className="flex flex-col xl:flex-row justify-between px-5 py-5 md:px-10 md:py-10 m-5 md:m-10">
          {/* Left Section (Image) */}
          <div className="w-full xl:w-1/2 mb-5 xl:mb-0">
            <div className="relative inline-block w-full">
              <img
                src="/images/hiring.jpg"
                alt="Hiring"
                className="w-full h-auto mx-auto md:mx-7 xl:mx-0 rounded-md"
              />
            </div>
          </div>

          {/* Right Section (Job Details) */}
          <div className="w-full xl:w-2/5 xl:px-8">
            <Heading title="Software Developer" />
            <SubHeading title="Qualifications" />
            <ul className="list-disc pl-5 text-base md:text-lg">
              <li>Proficiency in Programming Languages (e.g., JavaScript, Python, Java).</li>
              <li>Understanding of Software Development Methodologies (Agile, Waterfall, etc.).</li>
              <li>Strong Problem-Solving Skills and analytical thinking.</li>
              <li>Good communication skills for cross-functional collaboration.</li>
              <li>Continual Learning and staying updated with industry trends.</li>
            </ul>

            <SubHeading title="Additional Skills" />
            <ul className="list-disc pl-5 text-base md:text-lg">
              <li>Experience with version control tools like Git.</li>
              <li>Familiarity with cloud platforms (AWS, Azure, etc.).</li>
              <li>Understanding of software testing principles and practices.</li>
              <li>Experience with RESTful APIs and microservices architecture.</li>
              <li>Ability to work in a fast-paced, collaborative environment.</li>
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
      </section>

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
    </Layout>
  );
};

export default SoftwareDeveloper;