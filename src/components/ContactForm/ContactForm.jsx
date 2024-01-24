import { useState } from "react";
import { BtnForm } from "./BtnForm.styled";
import { FormStyled } from "./ContactForm.styled";
import { LabelStyled } from "./LabelForm.styled";

export const ContactForm = ({addContact}) => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const handleChange = e => {
  const{name, value } = e.currentTarget;
  name === 'name' ? setName(value) : setNumber(value);
};

const handleSubmit = e => {
  e.preventDefault();
  addContact({ name, number });
  setName('');
  setNumber('');
}
    
return (
  <FormStyled onSubmit={handleSubmit}>
    
    <LabelStyled>
      Name
      <input
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
      required
      />
    </LabelStyled>
        
    <LabelStyled>
      Number
      <input
        type="text"
        name="number"
        value={number}
        onChange={handleChange}
        required
      />
    </LabelStyled>
            
    <BtnForm type="submit">
      Add contact
    </BtnForm>
        
  </FormStyled>
); 
}
    
