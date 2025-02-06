import React from "react";
import ProfileBusinessName from "@/components/BusinessProfile/ProfileBusinessName";
import ProfileInformation from "@/components/BusinessProfile/ProfileInformation";
import ProfileBusinessAddress from "@/components/BusinessProfile/ProfileBusinessAddress";
import EditProfile from "./EditProfile";

const ProfileContent = ({
  businessName,
  firstName,
  lastName,
  email,
  phone,
  address,
  businessType,
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
        city={address?.city}
        country={address?.country}
        onEdit={() => setActiveTab("editprofile")}
      />
      <ProfileInformation
        firstName={firstName}
        lastName={lastName}
        title={"Business Owner"}
        city={address?.city}
        country={address?.country}
        email={email}
        phone={phone}
        role={"Owner"}
      />

      <ProfileBusinessAddress
        country={address?.country}
        city={address?.city}
        street={address?.street}
        buildingNo={address?.building}
        postalCode={address?.postalCode}
        floor={address?.floor}
      />
    </div>
  );
};

export default ProfileContent;
