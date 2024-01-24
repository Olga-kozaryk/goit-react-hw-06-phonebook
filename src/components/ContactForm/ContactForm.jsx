import { useDispatch } from "react-redux";
import { BtnForm } from "./BtnForm.styled";
import { FormStyled } from "./ContactForm.styled";
import { LabelStyled } from "./LabelForm.styled";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactsSlice";


export const ContactForm = () => {
const dispatch = useDispatch();  

const handleSubmit = e => {
  e.preventDefault();

  const form = e.target;
  const contact ={
    name: form.el.name.value,
    number: form.el.number.value,
    id: nanoid(),
  }

    dispatch(addContact(contact));

    form.reset();
}
    
return (
  <FormStyled onSubmit={handleSubmit}>
    
    <LabelStyled>
      Name
      <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      />
    </LabelStyled>
        
    <LabelStyled>
      Number
      <input
        type="text"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </LabelStyled>
            
    <BtnForm type="submit">
      Add contact
    </BtnForm>
        
  </FormStyled>
); 
}
    
