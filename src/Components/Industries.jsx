import React from "react";

const Industries = () => {
  return (
    <div className="">
      <div className="lg:p-10 max-w-screen">
        {/*Right side TEXT*/}
        <div className=" md:w-[60vw] p-10">
          <h1 className="mb-6 block text-base font-semibold text-neutral-950 font-serif">
            Industries
          </h1>
          <p className="md:text-3xl font-extrabold text-3xl ">
            We assist you in discovering, evaluating, and capitalizing on new
            opportunities.
          </p>
          <p className="pt-4 md:text-lg font-san text-gray-500 font-semibold">
            We can dedicated to repurposing existing projects to unlock new
            value, ensuring you get the most out of your investments. We offer a
            comprehensive range of services tailored to meet your unique needs
            and drive your business forward.
          </p>
        </div>
        <div className="flex justify-end items-center p-10 font-sans">
          <ul className="md:w-[40vw] ">
            <li className="text-left ">
              <span className="font-bold">Healthcare.</span>
              <span className="text-gray-500 ">
                The industry involves entities that provide medical care to
                patients and need accounting services to manage their revenue
                cycle, billing and collections, cost accounting, budgeting and
                forecasting, and financial reporting. We can help you improve
                you financial performance, compliance, and transparency.
              </span>
            </li>
            <p className="mt-4 border-b-2 border-gray-300 mb-4"></p>
            <li className="text-left ">
              <span className="font-bold">Real Estate</span>
              <span className="text-gray-500">
                This industry involves the buying, selling, renting, leasing,
                developing, and managing of land and buildings for residential,
                commercial, industrial, or agricultural purposes. We can help
                you with your financial planning, valuation, taxation, auditing,
                reporting, and compliance with the various laws and regulations
                governing the industry. We can also help you optimize your cash
                flow, profitability, and growth potential.
              </span>
            </li>
            <p className="mt-4 border-b-2 border-gray-300 mb-4"></p>
            <li className="text-left ">
              <span className="font-bold">Small Business</span>
              <span className="text-gray-500 ">
                This industry comprises businesses that have fewer than 500
                employees and operate in various sectors, such as IT, start-up,
                retail, hospitality, manufacturing, or services. We can help
                small businesses with your bookkeeping, payroll, tax
                preparation, financial reporting, budgeting, and cash
                management. We can also help you access financing, comply with
                the relevant laws and regulations, and improve your efficiency
                and profitability.
              </span>
            </li>
            <p className="mt-4 border-b-2 border-gray-300 mb-4"></p>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Industries;
