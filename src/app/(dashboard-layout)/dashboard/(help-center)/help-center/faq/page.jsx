"use client";

import FaqAccordion from "@/components/HelpCenter/FaqAccordion/FaqAccordian";
import { Box, Typography } from "@mui/material";
import React from "react";

const faqTabs = [
  { label: "General", value: "general" },
  { label: "Pricing", value: "pricing" },
  { label: "Features", value: "features" },
  { label: "Account", value: "account" },
];

const generalData = [
  {
    id: 1,
    heading: "What is Zeek?",
    description:
      "Zeek is a platform that lets small businesses create custom loyalty cards that customers can add to their mobile wallets, track rewards, and discover nearby businesses.",
  },
  {
    id: 2,
    heading: "How does Zeek work?",
    description:
      "Businesses sign up, customize their loyalty cards, and share QR codes with customers. Customers scan the QR codes to add the cards to their mobile wallets and start earning rewards.",
  },
  {
    id: 3,
    heading: "Are there any other plans available?",
    description:
      "You are currently using the Basic Plan, which includes all current features. Premium plans with advanced features will be available soon.",
  },
];

const pricingData = [
  {
    id: 1,
    heading: "What does the Basic Plan include?",
    description:
      "The Basic Plan costs AED 370/month and includes essential features such as loyalty card customization, QR code generation, and customer rewards tracking to help businesses manage their loyalty programs effectively.",
  },
  {
    id: 2,
    heading: "Are there other subscription plans?",
    description:
      "Currently, we only offer the Basic Plan. Additional plans with advanced features will be introduced soon.",
  },
  {
    id: 3,
    heading: "Will I be charged for future updates?",
    description:
      "Your AED 370/month Basic Plan ensures access to all current features. Premium features introduced in future plans will be optional and subscription-based.",
  },
];

const featuresData = [
  {
    id: 1,
    heading: "Can I customize my loyalty cards?",
    description:
      "Yes! You can add your business logo, colours, and rewards structure to make the cards uniquely yours.",
  },
  {
    id: 2,
    heading: "Does Zeek support multiple locations for businesses?",
    description:
      "Yes, Zeek allows businesses with multiple branches to manage their loyalty system seamlessly.",
  },
  {
    id: 3,
    heading: "Can customers see their rewards in real-time?",
    description:
      "Absolutely. Customers can track their rewards and see available offers directly on the app!",
  },
];

const accountData = [
  {
    id: 1,
    heading: "How do I update my account details?",
    description:
      "You can update your account details, such as your email address, business name, or contact information, directly in the admin panel under the ”profile” tab in the 'Business profile' section.",
  },
  {
    id: 2,
    heading: "How can I reset my password?",
    description:
      "Click on 'Forgot Password' on the login screen, and follow the instructions to reset it. You may also change the password of your account under the 'Security' tab in the “Business profile” section of the admin panel.",
  },
  {
    id: 3,
    heading: "Can I change my account email?",
    description:
      "Yes, you can update your email from the 'Profile' tab under the Business profile section on the admin panel.",
  },
];

const Faq = () => {
  const [selectedTab, setSelectedTab] = React.useState("general");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Box className="p-8">
      <div className="flex flex-col justify-start items-start gap-2">
        <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
          Frequently Asked Questions
        </Typography>
        <div className="px-4 justify-center items-center">
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#838383" }}
          >
            These are the most commonly asked questions about Zeek. <br />
            Can’t find what your looking for?{" "}
            <span className="text-[#FF5B00]">Contact customer support!</span>
          </Typography>
        </div>
        <div className="flex flex-row gap-6 p-4 mt-6">
          {faqTabs.map((tab) => (
            <Box
              className="px-2 py-1 justify-center items-center bg-[#FFFFFF] rounded-md cursor-pointer"
              sx={{
                border:
                  selectedTab === tab.value
                    ? "1px solid #FF5B00"
                    : "1px solid #E2E2E2",
              }}
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, color: "#838383" }}
              >
                {tab.label}
              </Typography>
            </Box>
          ))}
        </div>
        <div className="p-4 justify-center items-center w-[80%]">
          {selectedTab === "general" && (
            <>
              {generalData.map((item) => (
                <FaqAccordion
                  key={item?.id}
                  id={item?.id}
                  heading={item?.heading}
                  description={item?.description}
                />
              ))}
            </>
          )}
          {selectedTab === "pricing" && (
            <>
              {pricingData.map((item) => (
                <FaqAccordion
                  key={item?.id}
                  id={item?.id}
                  heading={item?.heading}
                  description={item?.description}
                />
              ))}
            </>
          )}
          {selectedTab === "features" && (
            <>
              {featuresData.map((item) => (
                <FaqAccordion
                  key={item?.id}
                  id={item?.id}
                  heading={item?.heading}
                  description={item?.description}
                />
              ))}
            </>
          )}
          {selectedTab === "account" && (
            <>
              {accountData.map((item) => (
                <FaqAccordion
                  key={item?.id}
                  id={item?.id}
                  heading={item?.heading}
                  description={item?.description}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </Box>
  );
};

export default Faq;
