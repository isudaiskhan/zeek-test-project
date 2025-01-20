import React from "react";
import ProfileContent from "@/components/BusinessProfile/ProfileContent";
import { businessData } from "@/utils/dummy-data";
const ProfilePage = () => {
  return (
    <div>
      <ProfileContent businessData={businessData} />
    </div>
  );
};

export default ProfilePage;
