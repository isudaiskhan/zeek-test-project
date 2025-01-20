import React from "react";
import ProfileBusinessName from "@/components/BusinessProfile/ProfileBusinessName";
import ProfileInformation from "@/components/BusinessProfile/ProfileInformation";
import ProfileBusinessAddress from "@/components/BusinessProfile/ProfileBusinessAddress";

const ProfileContent = ({ businessData }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <ProfileBusinessName
        name={businessData.businessName}
        type={businessData.businessType}
        location={businessData.location}
      />
      <ProfileInformation owner={businessData.owner} />
      <ProfileBusinessAddress address={businessData.address} />
    </div>
  );
};

export default ProfileContent;
