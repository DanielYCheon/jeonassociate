import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const stepper = [
    {
      title: "Initial Consultation",
      describe:
        "We will have an initial consultation to understand your needs via Teams. If you prefer an in-person meeting, we can set up an appointment to come see you at your preferred location",
    },
    {
      title: "Sign Engagement Letter",
      describe:
        "Once you determine that we are a good fit together for your needs, we will send you an engagement letter for you to sign.",
    },
    {
      title: "Intake Questionnaire",
      describe:
        "After we receive the engagement letter back, we will send you an intake questionnaire to collect basic and necessary information about your service needs.",
    },
    {
      title: "Request List",
      describe:
        "After we review the intake questionnaire you completed, we will send you a preliminary reqeust list of documents we need from you.",
    },
    {
      title: "Upload Initial Documents to Client Portal",
      describe:
        "We will invite you to a client portal where you can upload your documents.",
    },
    {
      title: "Answer Questions and Provide Additional Documents",
      describe:
        "We will review and go over documents you provided. We will ask you questions and may request additional documents to complete our service.",
    },
    {
      title: "Review Draft Work Product",
      describe:
        "We will provide you with our draft work product for your review.",
    },
    {
      title: "Sign Representation Letter",
      describe:
        "If you are satisfied with the draft work product, we will send you a representation letter for you to sign.",
    },
    {
      title: "Payment",
      describe:
        "We will invoice you for services we provided and receive payment.",
    },
    {
      title: "Receive Final Work Product",
      describe:
        "Once we receive payment for our service, we will release the final work product to you.",
    },
  ];

  return (
    <div className="container bg-gray-0">
      <div className="flex-col overflow-hidden md:flex justify-center px-10">
        <h1 className="mt-36 md:mt-40 lg:text-4xl font-bold lg:text-left text-3xl text-center">
          We're here for You
        </h1>
        <p className="mt-2 md:mt-40 lg:text-4xl font-bold lg:text-left text-base text-center">
          Reliable document processing, just for you
        </p>
        <Box sx={{ maxWidth: 400 }} className="mt-20 mb-10">
          <Stepper activeStep={activeStep} orientation="vertical">
            {stepper.map((stepper, index) => (
              <Step key={stepper.title}>
                <StepLabel
                  optional={
                    index === 10 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {stepper.title}
                </StepLabel>
                <StepContent>
                  <Typography>{stepper.describe}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === stepper.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === stepper.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>Want Go Back?</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    </div>
  );
};
export default HowWeWork;
