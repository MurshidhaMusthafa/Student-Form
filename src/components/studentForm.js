import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function StudentForm({ showModal, closeModal }) {
  console.log("props", showModal);
  // const [show, setShow] = useState(false);
  //  const handleClose = () => {
  //   console.log("u entered here");
  //  }
  const defaultEntity = {
    firstName: "",
    parentName: "",
    isMale: "true",
    date: "",
    address: "",
    isProgramming: "true",
    isGraphics: "true",
    isPresentation: "true",
    isManaging: "true",
    isOther: "true",
  };
  const existingEntity={
    firstName: "Fname",
    parentName: "Pname",
    date: "11/01/2000",
    address: "abc nagar",
  };
  const hobbies = ["watching tv", "listening music", "reading books"];
  const [selectedDate, setSelectedDate] = useState(null);
  const [sf, setSf] = useState(defaultEntity);
  const loadedItem = {
    firstName: "Fname",
    parentName: "Pname",
    date: "11/01/2000",
    address: "abc nagar",
  };


  return (
    <>
      <Modal
        show={showModal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        {/*  */}
        <Modal.Header closeButton>
          <Modal.Title>NEW STUDENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="">
              <div className="">
                <label className="text-base font-bold px-1">NAME:</label>
                <input className="" type="text" name="firstName"></input>
              </div>
              <div>
                <label className="text-base font-bold px-1 py-2">
                  PARENT NAME:
                </label>
                <input className="" type="text" name="parentName"></input>
              </div>
              <div className="">
                <label className="text-base font-bold px-1 py-2 ">
                  GENDER:
                </label>
                <input
                  type="radio"
                  value="male"
                  className="px-1 "
                  name="isMale"
                ></input>
                <label className="px-1">MALE</label>

                <input type="radio" value="male" className="px-1"></input>
                <label className=" px-1">FEMALE </label>

                <div>
                  <label className="text-base font-bold px-1 py-2">
                    Date of Birth:
                  </label>
                  <DatePicker
                    name="date"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                    // minDate={new Date("12-31-2010")}
                    maxDate={new Date("12-31-2010")}
                  />
                </div>
                <div>
                  <label className="text-base font-bold px-1 py-2 mb-2" />
                  ADDRESS:
                  <textarea
                    name="address"
                    id="address"
                    className=" w-full px-2 resize-none"
                    rows={5}
                  />
                </div>
                <div>
                  <label className="flex"> SKILLS:</label>
                  <input
                    type="checkbox"
                    id="skills"
                    name="isProgramming"
                    value="Programming"
                    className="px-2"
                  ></input>
                  <label for="skills" className=" px-2">
                    {" "}
                    Programming
                  </label>

                  <input
                    type="checkbox"
                    id="skills"
                    name="isPresentation"
                    value="Presentation"
                    className="px-2"
                  ></input>
                  <label for="skills" className=" px-2">
                    {" "}
                    Presentation
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="skills"
                    name="isGraphics"
                    value="Graphics"
                    className="px-2"
                  ></input>
                  <label for="skills" className=" px-2">
                    {" "}
                    Graphics{" "}
                  </label>

                  <input
                    type="checkbox"
                    id="skills"
                    name="isManaging"
                    value="Managing"
                    className="px-2"
                  ></input>
                  <label for="skills" className=" px-2">
                    {" "}
                    Managing
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="skills"
                    name="isOther"
                    value="Other"
                    className="px-2"
                  ></input>
                  <label for="skills" className=" px-2">
                    {" "}
                    Other
                  </label>
                  <div>
                    <label className="text-base font-bold px-1 py-2 ">
                      {" "}
                      HOBBIES:
                    </label>
                    <select name="cars" id="cars">
                      <option value="listening music"> Listening Music</option>
                      <option value="Reading Books">Reading Books</option>
                      <option value="Drawing">Drawing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button> */}
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentForm;
