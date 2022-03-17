import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
// import { RiEyeOffLine } from 'react-icons/fa'

export default function Regester() {
  const [getData, setGetData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [education, setEducation] = useState(false)
  const [val, setVal] = useState({firstName:'',lastName:'',email:'',pass:'',local:''}) 

  
 const regSub=(e)=>{
  e.preventDefault();
  alert('ثبت نام با موفقیت انجام شد')
  setVal({firstName:'',lastName:'',email:'',pass:'',local:''})
  setInputValue('')
  }

  useEffect(() => {
    fetch('iranstates.json')
      .then((res) => res.json())
      .then((data) => {
        setGetData(data)
      })
  }, [])

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <p className="par">رایگان ثبت نام کنید</p>
        </Col>
        <Form onSubmit={regSub}>
          <input placeholder="نام"
          className={'nameInput col-5'} type="text"
          value={val.firstName}
          name="firstName"
          onChange={(event) => {
           setVal({ ...val, firstName: event.target.value });
            }}
          required />
          <input
            required
            placeholder="نام خانوادگی"
            className={'nameInput col-5'}
            name='lastName'
            value={val.lastName}
            onChange={(event) => {
              setVal({ ...val, lastName: event.target.value });
               }}
            type="text"
          />
          <input
            required
            type={'email'}
            placeholder={'پست الکترونیک'}
            name='email'
            value={val.email}
            onChange={(event) => {
              setVal({ ...val, email: event.target.value });
               }}
            id={'email'}
            className="mt-3"
          />
          <input
            required
            type={'text'}
            placeholder={'کلمه عبور'}
            id={'number'}
            name='pass'
            value={val.pass}
            onChange={(event) => {
              setVal({ ...val, pass: event.target.value });
               }}
            className="mt-3"
          />
          <select
          required
            onChange={(event) => {
              setInputValue(event.target.value);
              setEducation(true)
            }}
            className="mt-3"
            name="diplom"
            id="diplom"
          >
            <option value={''} className="plcholder">
              تحصیلات
            </option>
            <option value={'زیر دیپلم'}>زیر دیپلم</option>
            <option value={'دیپلم'}>دیپلم</option>
            <option value={'کاردانی'}>کاردانی</option>
            <option value={'کارشناسی'}>کارشناسی</option>
            <option value={'کارشناسی ارشد'}>کارشناسی ارشد</option>
            <option value={'دکتری'}>دکتری</option>
          </select>
          {education && (
            <input required value={val.local}
            name='local'
            onChange={(event) => {
              setVal({ ...val, local: event.target.value });
               }}
             type={'text'} placeholder={'محل تحصیل'}
              className={'mt-3'} />
          )}
          <Row>
            <div className="col-6">
              <select required  onChange={(event) => {
              setInputValue(event.target.value);
            }} className="mt-3 selected" name="province" id="province">
                <option value={''} className="plcholder">
                  استان محل تولد
                </option>
                {Object.keys(getData).map((province, index) => {
                  return (
                    <option
                      key={index}
                      value={Object.keys(getData).indexOf(province)}
                    >
                      {province}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="col-6">
              <select required className="mt-3 selected">
                <option  className="plcholder">
                  شهرستان محل تولد
                </option>
                {Object.values(getData)[parseInt(inputValue)] !== undefined
                  ? Object.values(getData)[parseInt(inputValue)].map((city) => {
                      return <option value={city}>{city}</option>
                    })
                  : ''}
              </select>
            </div>
          </Row>
          <button className="mt-4 subLog">ثبت نام</button>
        </Form>
      </Row>
    </Container>
  )
}
