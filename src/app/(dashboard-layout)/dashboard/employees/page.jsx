"use client";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import React, { useState } from "react";
import { AccountCircleOutlined } from "@mui/icons-material";
import { MailOutlineOutlined } from "@mui/icons-material";
import { PiGitBranch } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa6";
import EmployeeTableRow from "@/components/TableRow/EmployeeTableRow/EmployeeTableRow";
import EmployeeFilters from "@/components/EmployeeFilters/EmployeeFilters";
import EmployeeModal from "@/components/Modals/EmployeeModal/EmployeeModal";
import { useGetEmployees } from "@/services/employees";
import Spinner from "@/components/Spinner/Spinner";

const roleFilters = [
  { id: 1, label: "Manager" },
  { id: 2, label: "Employee" },
];

const branchFilters = [
  { id: 1, label: "Khalifa City A" },
  { id: 2, label: "Jumeira Beach Road" },
  { id: 3, label: "Downtown" },
];

const TableHeadStyles = {
  fontSize: "12px",
  fontWeight: 500,
  color: "#ACACAC",
};

const Employees = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data, isLoading, isError } = useGetEmployees(
    page + 1,
    rowsPerPage > 0 ? rowsPerPage : 0
  );

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenEmployeeModal = () => {
    setOpenEmployeeModal(true);
  };

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  if (isError) {
    return <div>Error Loading Data....</div>;
  }
  return (
    <div className="p-4">
      <Box className="flex flex-wrap items-center justify-between p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h4" className="!font-bold !text-4xl">
            Employees
            <span className="text-[#B3B3B3] text-4xl ml-3 font-bold">
              {data?.totalCount ? data?.totalCount : 0}
            </span>
          </Typography>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <CustomButton
            text="Create New Role"
            bgColor="#FFFFFF"
            textColor="#787878"
          />
          <CustomButton
            text="Clear Filters"
            bgColor="#FFFFFF"
            textColor="#787878"
          />
          <CustomButton
            icon={<FilterAlt />}
            bgColor="#FFFFFF"
            textColor="#787878"
            onClick={handleMenuOpen}
          />
          <EmployeeFilters
            anchorEl={anchorEl}
            isOpen={isOpen}
            handleMenuClose={handleMenuClose}
            roleFilters={roleFilters}
            branchFilters={branchFilters}
          />
          <CustomButton
            text="Add Employee"
            bgColor="#FFDAC5"
            textColor="#787878"
            onClick={handleOpenEmployeeModal}
          />
        </div>
      </Box>

      {isLoading ? (
        <Spinner />
      ) : (
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow sx={{ "& td, & th": { border: 0 } }}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <AccountCircleOutlined
                      sx={{ marginRight: 1, color: "#ACACAC" }}
                      fontSize="small"
                      color="primary"
                    />
                    <Typography sx={TableHeadStyles}>Name</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <MailOutlineOutlined
                      sx={{ marginRight: 1, color: "#ACACAC" }}
                      fontSize="small"
                    />
                    <Typography sx={TableHeadStyles}>Email</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <PiGitBranch
                      style={{
                        marginRight: "8px",
                        color: "#ACACAC",
                        fontSize: "20px",
                      }}
                    />
                    <Typography sx={TableHeadStyles}>Branch</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <FaRegAddressCard
                      style={{
                        marginRight: "8px",
                        color: "#ACACAC",
                        fontSize: "20px",
                      }}
                    />
                    <Typography sx={TableHeadStyles}>Role</Typography>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow sx={{ "& td, & th": { border: 0 } }}>
                <TableCell
                  colSpan={5}
                  sx={{ padding: "4px 0" }}
                  className="bg-gray-100"
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data?.map((item) => (
                <EmployeeTableRow
                  key={item._id}
                  name={item?.fullName}
                  email={item?.email}
                  branch={item?.branch?.name}
                  role={item?.role?.name}
                  id={item?._id}
                  onSelect={handleRowSelect}
                  isSelected={selectedRows.includes(item?._id)}
                  avatar={item?.profileImage}
                />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  count={data?.totalCount ? data?.totalCount : 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={(event, newPage) => handleChangePage(newPage)}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  showFirstButton
                  showLastButton
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
      {openEmployeeModal && (
        <EmployeeModal
          open={openEmployeeModal}
          onClose={() => setOpenEmployeeModal(false)}
        />
      )}
    </div>
  );
};

export default Employees;
