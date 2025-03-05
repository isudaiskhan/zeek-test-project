import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import SuccessDialog from "@/components/Modals/SuccessModal";
import {
  updateBusinessRole,
  useGetRole,
} from "@/services/business-profile/roles-permissions";
import Spinner from "@/components/Spinner/Spinner";
import { useFormik } from "formik";
import { useInvalidateQuery, useSubmitHandler } from "@/utils/hooks";
import { ACCESS_LEVEL_PERMISSIONS } from "@/enums/business-profile";

const AdminPanelPermissions = ({ roleId, removeAdminRole }) => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const { data: businessRole, isLoading: loadingBusinessRole } =
    useGetRole(roleId);

  const accessLevel = businessRole?.accessLevel?.map(
    ({ _id, ...rest }) => rest
  );

  const initialValues = {
    accessLevel: accessLevel,
  };

  const { submitHandler } = useSubmitHandler();
  const { invalidateQuery } = useInvalidateQuery();

  const formik = useFormik({
    enableReinitialize: true, // Ensures formik updates when initialValues change
    initialValues: initialValues,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      submitHandler({
        successMsg: "Your permissions have been updated successfully!",
        onSubmit: async () => {
          await updateBusinessRole(roleId, values);
          invalidateQuery(["get-roles"]);
          setSuccessModalOpen(true);
          resetForm();
        },
        onFinally: () => {
          setSubmitting(false);
        },
      });
    },
  });

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
    removeAdminRole();
  };

  const getSelectedPermissions = (pageName, permissionsLength) => {
    const selectedPermissions =
      formik.values.accessLevel?.find((item) => item.page === pageName)
        ?.permissions || [];

    return selectedPermissions.length === permissionsLength
      ? [...selectedPermissions] // Keep "all" in the selected array
      : selectedPermissions;
  };
  const handlePermissionChange = (event, selectedPage) => {
    const { value } = event.target;

    const allPermissions = ["create", "read", "update", "delete"];

    let newPermissions;

    if (value.includes("all")) {
      // If "all" is selected, assign all permissions
      newPermissions = allPermissions;
    } else {
      // Remove "all" if it was previously selected and allow manual selection
      newPermissions = value.filter((perm) => perm !== "all");
    }

    formik.setFieldValue(
      "accessLevel",
      (() => {
        const existingEntry = formik.values.accessLevel.find(
          (item) => item.page === selectedPage
        );

        if (existingEntry) {
          return formik.values.accessLevel.map((item) =>
            item.page === selectedPage
              ? { ...item, permissions: newPermissions }
              : item
          );
        } else {
          return [
            ...formik.values.accessLevel,
            { page: selectedPage, permissions: newPermissions },
          ];
        }
      })()
    );
  };

  const handleSwitchPermissionChange = (event, selectedPage) => {
    const isChecked = event.target.checked;

    formik.setFieldValue(
      "accessLevel",
      (() => {
        if (isChecked) {
          // Grant all permissions if checked
          const newPermissions = ["create", "read", "update", "delete"];

          return [
            ...formik.values.accessLevel,
            { page: selectedPage, permissions: newPermissions },
          ];
        } else {
          // Remove the object if unchecked
          return formik.values.accessLevel.filter(
            (item) => item.page !== selectedPage
          );
        }
      })()
    );
  };

  if (loadingBusinessRole) {
    return <Spinner />;
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box className="!space-y-6 !mt-10">
          <div className="flex items-center justify-between">
            <Typography variant="h6" className="!text-lg !mb-3">
              Loyalty Program Management
            </Typography>
            <Switch
              color="primary"
              name="loyalty_management"
              checked={
                getSelectedPermissions("loyalty_management", 4).length > 0
              }
              onChange={(event) =>
                handleSwitchPermissionChange(event, "loyalty_management")
              }
            />
          </div>
          <List
            className="mt-2"
            sx={{
              listStyleType: "disc",
              pl: 2,
              "& .MuiListItem-root": {
                display: "list-item",
                padding: 0,
                color: "#838383",
              },
              "& .MuiListItemText-root": {
                margin: 0,
              },
            }}
          >
            <ListItem disablePadding>
              <ListItemText
                className="!text-[#838383] !mb-2 !font-inter !text-sm"
                primary="Ability to design and launch new loyalty programs"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                className="!text-[#838383] !mb-2 !font-inter !text-sm"
                primary="Modify loyalty card settings, such as rewards or point structures"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                className="!text-[#838383] !mb-2 !font-inter !text-sm"
                primary="Access analytics and details of existing loyalty cards"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                className="!text-[#838383] !mb-2 !font-inter !text-sm"
                primary="Add, edit, or remove stamps from customer profiles"
              />
            </ListItem>
          </List>
        </Box>
        <Box className="space-y-6 mt-6">
          <Box>
            <div className="mt-8">
              <Typography
                variant="subtitle1"
                className="!mb-2 !text-lg !font-inter"
              >
                Customer Relationship Manager
              </Typography>
              <Typography
                variant="body2"
                className="text-[#838383] !mb-6 !text-sm"
              >
                Allow full access, branch specific access, or no access to the
                CRM
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select...</InputLabel>
                <Select
                  name="customer_relationship_manager"
                  labelId="customerRelationshipManager-select-label"
                  label="Select role..."
                  value={
                    Array.isArray(
                      getSelectedPermissions("customer_relationship_manager", 4)
                    )
                      ? getSelectedPermissions(
                          "customer_relationship_manager",
                          4
                        )
                      : []
                  }
                  onChange={(event) =>
                    handlePermissionChange(
                      event,
                      "customer_relationship_manager"
                    )
                  }
                  multiple
                  className="!font-inter max-w-80 bg-[#F9F9F9]"
                >
                  <MenuItem value="all">All</MenuItem>
                  {Object.entries(ACCESS_LEVEL_PERMISSIONS).map(
                    ([key, value]) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </div>

            <div className="mt-8">
              <Typography
                variant="subtitle1"
                className="!mb-2 !text-lg !font-inter"
              >
                Campaigns
              </Typography>
              <Typography
                variant="body2"
                className="text-[#838383] !mb-6 !text-sm"
              >
                Allow full access, branch specific access, or no access to the
                campaigns
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select...</InputLabel>
                <Select
                  name="campaigns"
                  labelId="campaigns-select-label"
                  label="Select role..."
                  value={
                    Array.isArray(getSelectedPermissions("campaigns", 4))
                      ? getSelectedPermissions("campaigns", 4)
                      : []
                  }
                  onChange={(event) =>
                    handlePermissionChange(event, "campaigns")
                  }
                  multiple
                  className="!font-inter max-w-80 bg-[#F9F9F9]"
                >
                  <MenuItem value="all">All</MenuItem>
                  {Object.entries(ACCESS_LEVEL_PERMISSIONS).map(
                    ([key, value]) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </div>

            <div className="mt-8">
              <Typography
                variant="subtitle1"
                className="!mb-2 !text-lg !font-inter"
              >
                analytics
              </Typography>
              <Typography
                variant="body2"
                className="text-[#838383] !mb-6 !text-sm"
              >
                Allow full access, branch specific access, or no access to the
                analytics
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select...</InputLabel>
                <Select
                  name="analytics"
                  labelId="analytics-select-label"
                  label="Select role..."
                  value={
                    Array.isArray(getSelectedPermissions("analytics", 4))
                      ? getSelectedPermissions("analytics", 4)
                      : []
                  }
                  onChange={(event) =>
                    handlePermissionChange(event, "analytics")
                  }
                  multiple
                  className="!font-inter max-w-80 bg-[#F9F9F9]"
                >
                  <MenuItem value="all">All</MenuItem>
                  {Object.entries(ACCESS_LEVEL_PERMISSIONS).map(
                    ([key, value]) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </div>

            <div className="mt-8">
              <Typography
                variant="subtitle1"
                className="!mb-2 !text-lg !font-inter"
              >
                Reviews
              </Typography>
              <Typography
                variant="body2"
                className="text-[#838383] !mb-6 !text-sm"
              >
                Allow full access, branch specific access, or no access to the
                reviews
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select...</InputLabel>
                <Select
                  name="reviews"
                  labelId="reviews-select-label"
                  label="Select role..."
                  value={
                    Array.isArray(getSelectedPermissions("reviews", 4))
                      ? getSelectedPermissions("reviews", 4)
                      : []
                  }
                  onChange={(event) => handlePermissionChange(event, "reviews")}
                  multiple
                  className="!font-inter max-w-80 bg-[#F9F9F9]"
                >
                  <MenuItem value="all">All</MenuItem>
                  {Object.entries(ACCESS_LEVEL_PERMISSIONS).map(
                    ([key, value]) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </div>

            <div className="mt-8">
              <Typography
                variant="subtitle1"
                className="!mb-2 !text-lg !font-inter"
              >
                Branches
              </Typography>
              <Typography
                variant="body2"
                className="text-[#838383] !mb-6 !text-sm"
              >
                Allow full access or no access to the branches
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select...</InputLabel>
                <Select
                  name="branches"
                  labelId="branches-select-label"
                  label="Select role..."
                  value={
                    Array.isArray(getSelectedPermissions("branches", 4))
                      ? getSelectedPermissions("branches", 4)
                      : []
                  }
                  onChange={(event) =>
                    handlePermissionChange(event, "branches")
                  }
                  multiple
                  className="!font-inter max-w-80 bg-[#F9F9F9]"
                >
                  <MenuItem value="all">All</MenuItem>
                  {Object.entries(ACCESS_LEVEL_PERMISSIONS).map(
                    ([key, value]) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </div>

            <div className="mt-8">
              <Typography
                variant="subtitle1"
                className="!mb-2 !text-lg !font-inter"
              >
                Employees
              </Typography>
              <Typography
                variant="body2"
                className="text-[#838383] !mb-6 !text-sm"
              >
                Allow full access, branch specific access, or no access to the
                employees
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select...</InputLabel>
                <Select
                  name="employees"
                  labelId="employees-select-label"
                  label="Select role..."
                  value={
                    Array.isArray(getSelectedPermissions("employees", 4))
                      ? getSelectedPermissions("employees", 4)
                      : []
                  }
                  onChange={(event) =>
                    handlePermissionChange(event, "employees")
                  }
                  multiple
                  className="!font-inter max-w-80 bg-[#F9F9F9]"
                >
                  <MenuItem value="all">All</MenuItem>
                  {Object.entries(ACCESS_LEVEL_PERMISSIONS).map(
                    ([key, value]) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </div>

            <div className="flex justify-center flex-wrap gap-6">
              <Button
                className="!bg-[#ffe2d3] !text-[#ff6f00] !py-2 !px-10 !mt-10 !textlg"
                type="submit"
              >
                Update Permissions
              </Button>
            </div>
          </Box>
        </Box>
      </form>
      {/* Success Modal */}
      <SuccessDialog
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        imageSrc="/images/approved.svg"
        message="Your permissions have been updated successfully!"
        buttonText="Continue"
      />
    </div>
  );
};

export default AdminPanelPermissions;
