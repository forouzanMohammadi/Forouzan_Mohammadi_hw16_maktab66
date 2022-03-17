import React, { useState } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap'

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false)

  const logSub=(e)=>{
    e.preventDefault();
    alert('خوش آمدید')
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <p className="par">خوش آمدید</p>
        </Col>
        <Form onSubmit={logSub}>
          {passwordShown ? (
            <i onClick={togglePasswordVisiblity} className="bi bi-eye "></i>
          ) : (
            <i
              onClick={togglePasswordVisiblity}
              className="bi bi-eye-slash"
            ></i>
          )}
          <input
            type={'email'}
            placeholder={'پست الکترونیک'}
            id={'email'}
            className="mt-4"
            required
          />
          <input
            required
            type={passwordShown ? "text" : "password"}
            placeholder={'کلمه عبور'}
            id={'number'}
            className="mt-4"
          />
          <Col className="mt-5">
            <a className="forgot">فراموش کردید؟</a>
          </Col>
          <button className="mt-5 subLog">ورود</button>
        </Form>
      </Row>
    </Container>
  )
}
