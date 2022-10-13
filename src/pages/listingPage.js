import React from "react";
import { useState } from "react";
import Header from "../components/header";
import { Button } from "react-bootstrap";
import StudentForm from "../components/studentForm";
import ListingTable from "../components/listingTable";
function ListingPage() {
  const [show, setShow] = useState(false);
  console.log("show", show);
  const handleShow = () => {
    console.log("u clicked here");
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <div className="relative">
        <div>
          <Header />
          <StudentForm 
          showModal={show} 
          closeModal={handleClose}

           />
        </div>
        <Button
          variant="primary"
          onClick={handleShow}
          // className="absolute left-1 top-1 rounded-full"
        >
          New Student
        </Button>{" "}
        <div>  <ListingTable/></div>
       
      </div>
    </>
  );
}

export default ListingPage;
