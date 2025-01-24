"use client";
import React, { useState } from "react";
import ProfileContent from "@/components/BusinessProfile/ProfileContent";
import { businessData } from "@/utils/dummy-data";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div>
      <ProfileContent
        businessName={businessData.businessName}
        businessType={businessData.businessType}
        location={businessData.location}
        owner={businessData.owner}
        address={businessData.address}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default ProfilePage;
