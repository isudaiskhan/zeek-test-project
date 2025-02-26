"use client";
import React, { useState } from "react";
import ProfileContent from "@/components/BusinessProfile/ProfileContent";
import { useGetProfile } from "@/services/business-profile/profile";
import Spinner from "@/components/Spinner/Spinner";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // react query
  const { data, isLoading, isError, error } = useGetProfile();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <ProfileContent
        businessName={data?.businessName}
        firstName={data?.firstName}
        lastName={data?.lastName}
        email={data?.email}
        phone={data?.phone}
        profileImage={data?.profileImage}
        businessType={"Business"}
        address={data?.address}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default ProfilePage;
