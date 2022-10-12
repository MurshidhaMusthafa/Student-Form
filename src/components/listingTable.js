import React from "react";
import Table from 'react-bootstrap/Table';
const ListingTable = () => {
  return (
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Parent Name</th>
          <th>Date of Birth</th>
          <th>Address</th>
          
        </tr>
      </thead>
    </Table>
    </div>
  )
}

export default ListingTable