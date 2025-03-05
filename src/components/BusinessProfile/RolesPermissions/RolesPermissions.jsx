"use client";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Spinner from "@/components/Spinner/Spinner";
import {
  useGetAllBusinessRoles,
  useGetRoles,
} from "@/services/business-profile/roles-permissions";
import AddIcon from "@mui/icons-material/Add";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AdminPanelPermissions from "./AdminPanelPermissions";
import ChoosePermissionsArea from "./ChoosePermissionsArea";
import CreateNewRole from "./CreateNewRole";
import PartnerAppPermissions from "./PartnerAppPermissions";
import RenderRoles from "./RenderRoles";

const RolesAndPermissions = () => {
  const [activeTab, setActiveTab] = useState("admin_panel");
  const [adminPanelRole, setAdminPanelRole] = useState("");
  const [partnerAppRole, setPartnerAppRole] = useState("");
  const [showCreateNewRole, setShowCreateNewRole] = useState(false);

  // react query
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetAllBusinessRoles();
  const {
    data: businessRolesData,
    // isLoading: isBusinessRolesLoading,
    // isError: isBusinessRolesError,
    // error: businessRolesError,
  } = useGetRoles(activeTab);

  const businessRoles = data?.pages?.flatMap((page) => page.data) || [];
  const roles = businessRolesData?.pages?.flatMap((page) => page.data) || [];

  const handleTabChange = (_event, newValue) => setActiveTab(newValue);

  const handleAdminPanelRoleChange = (event) => {
    setAdminPanelRole(event.target.value);
  };

  const handlePartnerAppRoleChange = (event) => {
    setPartnerAppRole(event.target.value);
  };

  const toggleCreateNewRole = () => {
    setShowCreateNewRole(!showCreateNewRole);
  };

  const removeAdminRole = () => {
    setAdminPanelRole("");
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="p-8 mx-auto">
      {!showCreateNewRole && (
        <div className="flex justify-between items-center">
          <Typography variant="h6" className="!text-2xl !font-inter">
            Roles and Permissions
          </Typography>
          <IconButton
            onClick={toggleCreateNewRole}
            className="!bg-[#FFECE1] !p-1 !hover:bg-orange-200 !text-[#FF762A] !border !border-[#FFE0CE] !border-solid !rounded-xl"
          >
            <AddIcon className="!text-4xl" />
          </IconButton>
        </div>
      )}

      {showCreateNewRole && (
        <CreateNewRole onClose={() => setShowCreateNewRole(false)} />
      )}

      {!showCreateNewRole && (
        <>
          <div>
            <Typography
              variant="subtitle1"
              className="!py-6 !mt-8 font-inter !text-lg"
            >
              All Created Roles
            </Typography>
            <div>
              <div className="flex flex-wrap gap-6 ">
                {businessRoles?.map((role) => (
                  <RenderRoles
                    key={role?._id}
                    role={role?.name}
                    id={role?._id}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center pt-5">
                {hasNextPage && (
                  <CustomButton
                    loading={isFetchingNextPage}
                    text="Load More"
                    bgColor="#FFECE1"
                    textColor="#FF5B00"
                    onClick={fetchNextPage}
                  />
                )}
              </div>
            </div>
          </div>
          {businessRoles?.length > 0 ? (
            <div className="mt-12">
              <ChoosePermissionsArea
                activeTab={activeTab}
                handleTabChange={handleTabChange}
              />
              {activeTab === "admin_panel" && (
                <div className="mt-12">
                  <Typography variant="subtitle1" className="!mb-2 !text-lg">
                    Edit role permissions
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-[#838383] !mb-4 !text-sm !font-inter"
                  >
                    Select role to edit permissions:
                  </Typography>
                  <FormControl fullWidth variant="outlined" className="mt-4">
                    <InputLabel>Select...</InputLabel>
                    <Select
                      value={adminPanelRole}
                      onChange={handleAdminPanelRoleChange}
                      label="Select role..."
                      className="max-w-80"
                    >
                      <MenuItem value="">None</MenuItem>
                      {roles?.map((role) => (
                        <MenuItem key={role._id} value={role._id}>
                          {role.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {adminPanelRole && (
                    <AdminPanelPermissions
                      roleId={adminPanelRole}
                      removeAdminRole={removeAdminRole}
                    />
                  )}
                </div>
              )}

              {activeTab === "partner_app" && (
                <div className="mt-8">
                  <Typography variant="subtitle1" className="!mb-2 !text-lg">
                    Edit role permissions
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-[#838383] !mb-4 !text-sm !font-inter"
                  >
                    Select role to edit permissions:
                  </Typography>
                  <FormControl fullWidth variant="outlined" className="mt-4">
                    <InputLabel>Select...</InputLabel>
                    <Select
                      value={partnerAppRole}
                      onChange={handlePartnerAppRoleChange}
                      label="Select role..."
                      className="max-w-80"
                    >
                      <MenuItem value="">None</MenuItem>
                      {roles?.map((role) => (
                        <MenuItem key={role._id} value={role._id}>
                          {role.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {partnerAppRole && <PartnerAppPermissions />}
                </div>
              )}
            </div>
          ) : (
            <div>
              <Typography
                variant="body2"
                className="text-[#838383] !font-inter"
              >
                No Roles Found!
              </Typography>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RolesAndPermissions;
