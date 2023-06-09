import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { LinkContainer } from "react-router-bootstrap";
import Common from "../../common";
import axios from "axios";

export default class SchoolAddForm extends Component {
  state = {
    school_name: "",
    active: 0,
  };

  render() {
    const { school_name } = this.state;

    const handleSubmit = (e) => {
      e.preventDefault();
      try {
        axios
          .post(
            Common.API_URL + "school/create",
            {
              school_name: school_name,
              active: 1,
            },
            Common.options
          )
          .then((res) => {
            // console.log(res);
            // console.log(res.data);
            window.location = "/school";
          });
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div>
        <Row>
          <Col sm={8}>
            <h3>เพิ่มโรงเรียน</h3>
          </Col>
          <Col sm={4}>
            <Breadcrumb>
              <LinkContainer to="/">
                <Breadcrumb.Item>หน้าหลัก</Breadcrumb.Item>
              </LinkContainer>
              <LinkContainer to="/school-list">
                <Breadcrumb.Item>ข้อมูลโรงเรียน</Breadcrumb.Item>
              </LinkContainer>
              <Breadcrumb.Item active>เพิ่มโรงเรียน</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Card border="info">
          <Card.Body>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ชื่อโรงเรียน</Form.Label>

                <Form.Control
                  type="text"
                  onChange={(e) =>
                    this.setState({ school_name: e.target.value })
                  }
                  defaultValue={school_name}
                  required
                />
              </Form.Group>
              <div align="center">
                <Button variant="primary" type="submit">
                  บันทึก
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
