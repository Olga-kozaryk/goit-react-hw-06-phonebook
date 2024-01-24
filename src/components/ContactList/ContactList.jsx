import ListStyled from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact}) => {
return ( <ListStyled> 
      {contacts.map(({ id, name, number}) => (
        <li key={id} >
          <p >
            {name}............
            {number}
          </p>
          <button 
          type="submit"
          onClick={()=> onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ListStyled>
  );
      }
