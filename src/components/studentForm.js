import React, { useState } from "react";
import { Modal, Form, Button, NavItem } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import ListingPage from "../../src/pages/listingPage";
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
  const existingEntity = {
    firstName: "Fname",
    parentName: "Pname",
    date: "11/01/2000",
    address: "abc nagar",
  };

  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  console.log("name", value);
  const [selectedDate, setSelectedDate] = useState(null);
  const [sf, setSf] = useState(defaultEntity);
  const onValueChange = (e) => {
    setSf({ ...sf, [e.target.name]: e.target.value });
  };
  const saveSf = () => {
    // const formData = sf;
    // console.log("formData",formData);
  };

  const onSubmit = (e) => {
    console.log("e", e.target.value);
    e.preventDefault();

    saveSf();
  };
  const onCheckBoxChange = (e) => {
    setSf((es) => ({ ...es, [e.target.name]: e.target.checked }));
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
                  <input
                    className=""
                    type="text"
                    name="firstName"
                    value={sf.firstName}
                    onChange={onValueChange}
                  ></input>
                </div>

                <div>
                  <label className="text-base font-bold px-1 py-2">
                    PARENT NAME:
                  </label>
                  <input
                    className=""
                    type="text"
                    name="parentName"
                    value={sf.parentName}
                    onChange={onValueChange}
                  ></input>
                </div>
                <div className="">
                  <label className="text-base font-bold px-1 py-2 ">
                    GENDER:
                  </label>
                  <input
                    type="radio"
                    value={sf.isMale}
                    className="px-1 "
                    name="isMale"
                    checked={sf.isMale === true}
                    onChange={() =>
                      setSf({
                        ...sf,
                        isMale: true,
                      })
                    }
                  ></input>
                  <label className="px-1">MALE</label>

                  <input
                    type="radio"
                    value={sf.isMale}
                    className="px-1 "
                    name="isMale"
                    checked={sf.isMale === false}
                    onChange={() =>
                      setSf({
                        ...sf,
                        isMale: false,
                      })
                    }
                  ></input>
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
                      value={sf.date}
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
                      value={sf.address}
                      onChange={onValueChange}
                    />
                  </div>
                  <div>
                    <label className="flex"> SKILLS:</label>
                    <input
                      type="checkbox"
                      id="skills"
                      name="isProgramming"
                      value={sf.isProgramming}
                      onChange={onCheckBoxChange}
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
                      value={sf.isPresentation}
                      onChange={onCheckBoxChange}
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
                      value={sf.isGraphics}
                      onChange={onCheckBoxChange}
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
                      value={sf.isManaging}
                      onChange={onCheckBoxChange}
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
                      value={sf.isOther}
                      onChange={onCheckBoxChange}
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
                      <select name="hobbies" id="hobbies">
                        <option value={sf.hobbies} onChange={onValueChange}>
                          {" "}
                          Listening Music
                        </option>
                        <option value={sf.hobbies} onChange={onValueChange}>
                          Reading Books
                        </option>
                        <option value={sf.hobbies} onChange={onValueChange}>
                          Drawing
                        </option>
                        <option value={sf.hobbies} onChange={onValueChange}>
                          Other
                        </option>
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
            <Button variant="primary" onClick={onSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    
  );
}

export default StudentForm;
