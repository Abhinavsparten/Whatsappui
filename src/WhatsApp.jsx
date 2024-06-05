import React from 'react'
import { IoSearchSharp } from 'react-icons/io5';
import { BsBoxArrowInRight } from "react-icons/bs";
import { Col, Navbar, Container, Form, FormControl, Button, InputGroup,Row } from 'react-bootstrap';
import { IoMdSend } from "react-icons/io";
import { FaRegSmile } from "react-icons/fa";
import "./WhatsApp.css"

function WhatsApp() {
    return (
        <div>
            <Container fluid className="profile-container ">
                <Row className="h-100">
                    {/* Sidebar */}
                    <Col md={3} className="left-section p-0">
    <div className="header d-flex align-items-center justify-content-between p-3">
        <div className="profile-picture">
            <b>Conversations</b>
        </div>
        <div className="icons d-flex">
           
            <BsBoxArrowInRight className="header-icon text-danger" />
        </div>
    </div>
    <div className="search-bar p-4">
        <div className="input-wrapper position-relative">
            <IoSearchSharp className="search-icon position-absolute" />
            <input
                type="text"
                placeholder="Search or start new chat"
                className="search-input form-control"
            />
        </div>
    </div>
    <ul className="conversations-list list-unstyled p-0 m-0">
        {Array.from({ length: 7 }).map((_, index) => (
            <li className="conversation-item d-flex align-items-center p-3" key={index}>
                <img className="conversation-img me-3" src="https://i.postimg.cc/pdhrcGjg/777image.png" alt="" />
                <div className="conversation-info">
                    <div className="conversation-name">9470398625</div>
                    <div className="conversation-message">Last message snippet</div>
                </div>
            </li>
        ))}
    </ul>
</Col>

                    {/* Main Content */}
                    <Col md={9} className="p-1 bg-white h-100 overflow-y-auto d-flex flex-column">
      {/* Header Section */}
      <Navbar className="navbar ">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt=""
              src="https://i.postimg.cc/pdhrcGjg/777image.png"
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
            />{' '}
           <section className='ms-3'>Salton Morris</section>
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      
      {/* Message Input Section */}
      <div className='d-flex align-items-center send-message'>
    
      <Form className="bg-light p-3 d-flex send-message">
  <InputGroup>
    <InputGroup.Text>
      <FaRegSmile />
    </InputGroup.Text>
    <FormControl
      type="text"
      placeholder="Type a message"
    />
  </InputGroup>
  <IoMdSend variant="primary" className="ms-3 mt-2 send-icon" />
</Form>

      </div>
    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhatsApp