import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const StyledHeading = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    background-color: darkblue;
  }
`;

const LandingPage = () => {
  const [eventType, setEventType] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");

  const handleEventType = (e) => {
    setEventType(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handlePeople = (e) => {
    setPeople(e.target.value);
  };

  return (
    <FormContainer>
      <StyledHeading>Create Your Event</StyledHeading>
      <form>
        <StyledLabel>
          Event Type:
          <StyledInput
            type="text"
            value={eventType}
            onChange={handleEventType}
          />
        </StyledLabel>
        <StyledLabel>
          Location:
          <StyledInput type="text" value={location} onChange={handleLocation} />
        </StyledLabel>
        <StyledLabel>
          Date:
          <StyledInput type="text" value={date} onChange={handleDate} />
        </StyledLabel>
        <StyledLabel>
          Time:
          <StyledInput type="text" value={time} onChange={handleTime} />
        </StyledLabel>
        <StyledLabel>
          Number of People:
          <StyledInput type="text" value={people} onChange={handlePeople} />
        </StyledLabel>
        <StyledButton type="submit">Create Event</StyledButton>
      </form>
    </FormContainer>
  );
};

export default LandingPage;
