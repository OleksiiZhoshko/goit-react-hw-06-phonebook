import PhoneBook from './PhoneBook/PhoneBook';
import Comtacts from './Contacts/Contacts';
import Filter from './ContactsFilter/ContactsFilter';

export function App() {
  return (
    <>
      <h1>Phone book</h1>

      <PhoneBook/>

      <h2>Contacts</h2>

      <Filter/>
      <Comtacts/>
    </>
  );
};
