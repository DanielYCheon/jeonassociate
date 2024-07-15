import React from "react";
import { TbListCheck } from "react-icons/tb";
import { PiListMagnifyingGlass } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";

const Service = () => {
  return (
    <div className="bg-[#273443] text-white">
      {/* -------------------------------Audit and Asurance ------------------------*/}
      <div className="p-10 max-w-screen">
        <div className="lg:w-[60vw] lg:p-10">
          <h1 className="mb-6 block text-base font-semibold  font-serif">
            Service
          </h1>
          <p className="lg:text-3xl font-extrabold text-3xl ">
            Audit and Asusrance
          </p>
          <p className="pt-4 lg:text-lg font-san font-semibold text-lg">
            Audit and assurance activities aim to enhance confidence in the
            integrity and transparency of information for stakeholders
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10 ">
            <section className="p-6 px-8 text-center">
              <div className="flex justify-center">
                <TbListCheck size={60} />
              </div>
              <p className="font-bold text-2xl">Audit</p>
              <p className="text-base text-left">
                We will provide assurance that the financial statements present
                a true and fair view of the organization's financial position,
                performance, and cash flows in accordance with generally
                accepted accounting principles (GAAP) or another applicable
                financial reporting framework.
              </p>
            </section>
          </div>
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
            <section className="p-6 px-8 text-center">
              <div className="flex justify-center">
                <PiListMagnifyingGlass size={60} />
              </div>
              <p className="font-bold text-2xl">Review</p>
              <p className="text-base text-left">
                We will provide limited assurance that there are no material
                modifications needed to the financial statements for them to be
                in conformity with generally accepted accounting principles
                (GAAP) or another applicable financial reporting framework.
              </p>
            </section>
          </div>
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
            <section className="p-6 px-8 text-center">
              <div className="flex justify-center">
                <FiEdit size={60} />
              </div>
              <p className="font-bold text-2xl">Compilation</p>
              <p className="text-base text-left">
                We will prepare financial statements based on information
                provided by a company's management. Unlike an audit or review, a
                compilation does not involve any assurance on the accuracy or
                completeness of the financial statements. The purpose of a
                compilation is primarily for the organization's management to
                have financial statements prepared in a structured format for
                internal use or to meet basic reporting requirements.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <p className="border-gray-200 border-b-2 w-[60vw]"></p>
      </div>

      {/*------------------------------------------------------------------------------*/}
      <div className="p-10 max-w-screen bg-[#273443]">
        <div className="mb-8 flex flex-col md:w-[90vw] justify-end items-end">
          <p className="lg:text-3xl font-extrabold text-3xl">Tax</p>

          <p className="pt-4 text-lg font-san font-semibold w-[60vw] text-right text-white">
            Tax preparation ensures individuals, businesses, and nonprofits
            comply with tax obligations while maximizing deductions and credits
            to minimize tax liabilities within legal boundaries
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10 ">
            <section className="p-6 px-8 text-center">
              <div className="flex justify-center">
                <TbListCheck size={60} />
              </div>
              <p className="font-bold text-2xl">Individual</p>
              <p className="">
                We will prepare Form 1040 and relevant schedules and submit to
                IRS.
              </p>
            </section>
          </div>
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
            <section className="p-6 px-8 text-center">
              <div className="flex justify-center">
                <PiListMagnifyingGlass size={60} />
              </div>
              <p className="font-bold text-2xl">Business</p>
              <p>
                We will prepare Form 1065, Form 1120-S, Form 1120-C, and
                relevant schedules and submit to IRS.
              </p>
            </section>
          </div>
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
            <section className="p-6 px-8 text-center">
              <div className="flex justify-center">
                <FiEdit size={60} />
              </div>
              <p className="font-bold text-2xl">Charity and Nonprofit</p>
              <p className="">
                We will prepare Form 990 and relevant schedules and submit to
                IRS.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <p className="border-gray-200 border-b-2 w-[60vw]"></p>
      </div>
      {/*------------------------------------------------------------------------------*/}
      <div className="p-10 max-w-screen">
        <div className="w-[90vw] lg:w-[60vw] lg:p-10">
          <p className="lg:text-5xl font-extrabold text-3xl ">
            Have a Question? Get Expert Advice
          </p>
          <p className="pt-4 text-lg font-san font-semibold">
            A comprehensive advisory service helps you plan, manage, and
            optimize your financial situation under expert guidance and
            solutions tailored to your specific needs and goals
          </p>
        </div>
        <div className="flex-col justify-center lg:px-40 px-1 flex gap-y-2">
          <section className="flex lg:justify-start justify-center ">
            <div className="mt-10 lg:mt-0 lg:w-[40vw]  shadow-lg border border-gray-200 p-6 lg:m-4 rounded-lg hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-4">Audit Preparation</h2>
              <p className="font-thin text-lg">
                "We will help you prepare for your upcoming audit by reviewing
                your financial statements, internal controls, and compliance
                policies. We will identify any potential issues or risks that
                could affect your audit outcome and advise you on how to address
                them. We will also provide you with guidance on the audit
                process, expectations, and best practices. Our audit preparation
                service will help you reduce your audit stress, save time and
                money, and improve your audit quality and reliability"
              </p>
            </div>
          </section>
          <section className="flex lg:justify-end justify-center">
            <div className="mt-10 lg:mt-0 lg:w-[40vw]  shadow-lg border border-gray-200 p-6 lg:m-4 rounded-lg hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold mb-4">Bookkeeping</p>
              <p className="font-thin text-lg">
                "We will help you manage your daily accounting tasks, such as
                recording transactions, reconciling accounts, and preparing
                financial reports. We will ensure that your books are accurate,
                complete, and up to date, and that they comply with the relevant
                accounting standards and regulations. Our bookkeeping service
                will help you save time and resources, avoid errors and
                penalties, and make informed business decisions"
              </p>
            </div>
          </section>
          <section className="flex lg:justify-start justify-center">
            <div className="mt-10 lg:mt-0 lg:w-[40vw]  shadow-lg border border-gray-200 p-6 lg:m-4 rounded-lg hover:scale-105 transition-transform duration-300">
              <p className="text-2xl font-bold mb-4">Management Consulting</p>
              <p className="font-thin text-lg">
                "We will help you improve your business performance, strategy,
                and operations by analyzing your current situation, identifying
                your challenges and opportunities, and providing you with
                practical solutions and action plans. We will also assist you in
                implementing the changes and measuring the results. Our
                management consulting service covers various areas, such as
                business planning, organizational design, change management,
                risk management, process improvement, and investigation. Our
                management consulting service will help you achieve your goals,
                increase your competitiveness, and enhance your customer
                satisfaction"
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Service;
