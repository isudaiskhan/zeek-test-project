import React from "react";
import ProfileBusinessName from "@/components/BusinessProfile/ProfileBusinessName";
import ProfileInformation from "@/components/BusinessProfile/ProfileInformation";
import ProfileBusinessAddress from "@/components/BusinessProfile/ProfileBusinessAddress";
import EditProfile from "./EditProfile";
import { businessData } from "@/utils/dummy-data";

const ProfileContent = ({
  businessName,
  businessType,
  location,
  activeTab,
  setActiveTab,
}) => {
  if (activeTab === "editprofile") {
    return <EditProfile />;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <ProfileBusinessName
        name={businessName}
        type={businessType}
        location={location}
        onEdit={() => setActiveTab("editprofile")}
      />
      <ProfileInformation
        firstName={businessData.ownerFirstName}
        lastName={businessData.ownerLastName}
        title={businessData.ownerTitle}
        location={businessData.ownerLocation}
        email={businessData.ownerEmail}
        phone={businessData.ownerPhone}
        role={businessData.ownerRole}
      />

      <ProfileBusinessAddress
        country={businessData.country}
        city={businessData.city}
        street={businessData.street}
        buildingNo={businessData.builidingNo}
        postalCode={businessData.postalCode}
        floor={businessData.floor}
      />
    </div>
  );
};

export default ProfileContent;
