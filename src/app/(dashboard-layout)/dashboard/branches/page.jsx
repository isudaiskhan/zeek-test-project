"use client";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import BranchModal from "@/components/Modals/BranchModal/BranchModal";
import Spinner from "@/components/Spinner/Spinner";
import BranchesTableRow from "@/components/TableRow/BranchesTableRow/BranchesTableRow";
import { useGetBranches } from "@/services/branch";
import { AccountCircleOutlined } from "@mui/icons-material";
import { MailOutlineOutlined } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
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
import React, { useState } from "react";

const TableHeadStyles = {
  fontSize: "12px",
  fontWeight: 500,
  color: "#ACACAC",
};

const Branches = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { data, isLoading, isError } = useGetBranches(
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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (isError) {
    return <div>Error Loading Data....</div>;
  }

  return (
    <div className="p-4">
      <Box className="flex flex-wrap justify-between items-center p-4 gap-4">
        <div className="flex items-center w-full sm:w-auto">
          <Typography variant="h4" className="!font-bold !text-4xl">
            Branches
            <span className="text-[#B3B3B3] text-4xl ml-3 font-bold">
              {data?.totalCount ? data?.totalCount : 0}
            </span>
          </Typography>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto justify-end">
          <CustomButton
            text="Add New Branch"
            bgColor="#FFDAC5"
            textColor="#FF5B00"
            onClick={handleOpenModal}
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
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOnOutlinedIcon
                      sx={{ color: "#ACACAC", marginRight: 1 }}
                      fontSize="small"
                      color="primary"
                    />
                    <Typography sx={TableHeadStyles}>Location</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccountCircleOutlined
                      sx={{ color: "#ACACAC", marginRight: 1 }}
                      fontSize="small"
                    />
                    <Typography sx={TableHeadStyles}>Manager</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MailOutlineOutlined
                      sx={{ color: "#ACACAC", marginRight: 1 }}
                      fontSize="small"
                    />
                    <Typography sx={TableHeadStyles}>Email</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MailOutlineOutlined
                      sx={{ color: "#ACACAC", marginRight: 1 }}
                      fontSize="small"
                    />
                    <Typography sx={TableHeadStyles}>Phone Number</Typography>
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
                <BranchesTableRow
                  key={item?._id}
                  id={item?._id}
                  location={item?.name}
                  name={item?.manager?.fullName}
                  email={item?.manager?.email}
                  phoneNumber={item?.manager?.phone}
                  onSelect={handleRowSelect}
                  isSelected={selectedRows.includes(item?._id)}
                />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow sx={{ "& td, & th": { border: 0 } }}>
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

      {openModal && (
        <BranchModal open={openModal} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default Branches;
