import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { InputText } from "./components/InputText";
import { InputPhone } from "./components/InputPhone";
import { InputMail } from "./components/InputMail";
import { Birthdate } from "./components/Birthdate";
import { Radio } from "./components/Radio";
import { Submit } from "./components/Submit";
import { ErrorGender } from "./components/ErrorGender";

function App() {
  const [firstName, setFirstName] = useState("none");
  const [firstNameValidation, setFirstNameValidation] = useState(false);

  const [lastName, setLastName] = useState("none");
  const [lastNameValidation, setLastNameValidation] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(111111111);
  const [phoneNumberValidation, setPhoneNumberValidation] = useState(false);

  const [email, setEmail] = useState("none@none.no");
  const [emailValidation, setEmailValidation] = useState(false);

  const [birthdateDay, setBirthdateDay] = useState("none");
  const [dayValidation, setDayValidantion] = useState(false);

  const [birthdateMonth, setBirthdateMonth] = useState("none");
  const [monthValidation, setMonthValidation] = useState(false);

  const [birthdateYear, setBirthdateYear] = useState("none");
  const [yearValidation, setYearValidation] = useState(false);

  const [birthdateComplete, setBirthdateComplete] = useState([
    "01",
    "01",
    "0000",
  ]);
  const [birthdateValidation, setBirthdateValidation] = useState(false);

  const [isLeapYear, setIsLeapYear] = useState(false);

  const [gender, setGender] = useState("none");
  const [genderValidation, setGenderValidation] = useState(false);

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  useEffect(() => {
    if (firstName.match(/^[A-Z a-z Ñ ñ Áá Éé Íí Óó Úú]{3,}$/)) {
      setFirstNameValidation(true);
    } else setFirstNameValidation(false);
  }, [firstName]);

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  useEffect(() => {
    if (lastName.match(/[A-Z a-z Ñ ñ Áá Éé Íí Óó Úú]{3,}/)) {
      setLastNameValidation(true);
    } else setLastNameValidation(false);
  }, [lastName]);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  useEffect(() => {
    if (phoneNumber.toString().match(/^\d{9}$/)) {
      setPhoneNumberValidation(true);
    } else setPhoneNumberValidation(false);
  }, [phoneNumber]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  useEffect(() => {
    if (
      email.match(/^[A-Z a-z \d Ñ ñ \- _]+@[A-Z a-z Ñ ñ]+\.[A-Z ñ a-z ñ]{2,3}$/)
    ) {
      setEmailValidation(true);
    } else setEmailValidation(false);
  }, [email]);

  const handleGender = (event) => {
    setGender(event.target.value);
  };
  useEffect(() => {
    if (gender !== "") {
      return setGenderValidation(true);
    } else {
      return setGenderValidation(false);
    }
  }, [gender]);

  const handleBirthdateDay = (event) => {
    setBirthdateDay(event.target.value);
  };
  useEffect(() => {
    if (birthdateDay !== "none") {
      setDayValidantion(true);
    }
  }, [birthdateDay]);

  const handleBirthdateMonth = (event) => {
    setBirthdateMonth(event.target.value);
  };
  useEffect(() => {
    if (birthdateMonth !== "none") {
      setMonthValidation(true);
    }
  }, [birthdateMonth]);

  const handleBirthdateYear = (event) => {
    setBirthdateYear(event.target.value);
  };
  useEffect(() => {
    const yearInNumber = parseInt(birthdateYear);

    if (yearInNumber % 4 === 0) {
      if (yearInNumber % 100 === 0) {
        if (yearInNumber % 400 === 0) {
          setIsLeapYear(true);
        } else {
          setIsLeapYear(false);
        }
      } else {
        setIsLeapYear(true);
      }
    } else {
      setIsLeapYear(false);
    }

    setYearValidation(true);
  }, [birthdateYear]);

  useEffect(() => {
    if (!dayValidation || !monthValidation || !yearValidation) {
      return setBirthdateValidation(false);
    }
    setBirthdateComplete([birthdateDay, birthdateMonth, birthdateYear]);
  }, [
    birthdateDay,
    birthdateMonth,
    birthdateYear,
    dayValidation,
    monthValidation,
    yearValidation,
  ]);

  useEffect(() => {
    const dateString = birthdateComplete.toString();

    if (isLeapYear) {
      if (
        dateString.match(
          /^((([0-2]\d|3[0-1]),((0[13578])|1[02]))|(([0-2]\d|30),(0[469]|11))|(([0-2]\d),02)),\d{4}$/
        )
      ) {
        return setBirthdateValidation(true);
      }
    } else {
      if (
        dateString.match(
          /^((([0-2]\d|3[0-1]),((0[13578])|1[02]))|(([0-2]\d|30),(0[469]|11))|(([0-2][0-8]),02)),\d{4}$/
        )
      ) {
        return setBirthdateValidation(true);
      }
    }

    setBirthdateValidation(false);
  }, [
    birthdateComplete,
    dayValidation,
    monthValidation,
    yearValidation,
    isLeapYear,
    birthdateDay,
    birthdateMonth,
    birthdateYear,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === "none") {
      return setFirstNameValidation(false);
    }
    if (lastName === "none") {
      return setLastNameValidation(false);
    }

    if (birthdateDay === "none") {
      return setBirthdateValidation(false);
    }

    if (birthdateMonth === "none") {
      return setBirthdateValidation(false);
    }

    if (birthdateYear === "none") {
      return setBirthdateValidation(false);
    }

    if (gender === "none") {
      return setGenderValidation(false);
    }
    if (email === "none@none.no") {
      return setEmailValidation(false);
    }

    if (phoneNumber === 111111111) {
      return setPhoneNumberValidation(false);
    }
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="6" className="mx-auto">
            <form onSubmit={handleSubmit}>
              <fieldset className="my-4">
                <InputText
                  label={"Nombre"}
                  id={"form-name"}
                  handletext={handleFirstName}
                  error={firstNameValidation}
                />
              </fieldset>
              <fieldset className="my-4">
                <InputText
                  label={"Apellidos"}
                  id={"form-lastname"}
                  handletext={handleLastName}
                  error={lastNameValidation}
                />
              </fieldset>
              <fieldset className="my-4">
                <Birthdate
                  handleday={handleBirthdateDay}
                  day={birthdateDay}
                  handlemonth={handleBirthdateMonth}
                  month={birthdateMonth}
                  handleyear={handleBirthdateYear}
                  year={birthdateYear}
                  error={birthdateValidation}
                />
              </fieldset>

              <fieldset className="form-group my-4">
                <div className="d-flex justify-content-around">
                  <label style={{ color: genderValidation ? "black" : "red" }}>
                    Sexo:
                  </label>
                  <Radio
                    gendervalue="male"
                    gender="Hombre"
                    handlegender={handleGender}
                    error={genderValidation}
                  />
                  <Radio
                    gendervalue="female"
                    gender="Mujer"
                    handlegender={handleGender}
                    error={genderValidation}
                  />
                  <Radio
                    gendervalue="other"
                    gender="Otro"
                    handlegender={handleGender}
                    error={genderValidation}
                  />
                </div>
                <ErrorGender val={genderValidation} />
              </fieldset>
              <fieldset className="my-4">
                <InputMail
                  label={"Email"}
                  id={"form-email"}
                  handletext={handleEmail}
                  error={emailValidation}
                />
              </fieldset>
              <fieldset className="my-4">
                <InputPhone
                  label={"Teléfono"}
                  id={"form-phone"}
                  handletext={handlePhoneNumber}
                  error={phoneNumberValidation}
                />
              </fieldset>
              <Submit />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
