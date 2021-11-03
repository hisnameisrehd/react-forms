import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email !== '') {
      //destructure first
      const person = { id: new Date().getTime().toString(), name, email };
      // add the destructured to array
      setPeople(() => {
        return [...people, person];
      });
      setName('');
      setEmail('');
    }
  };

  const deleteEntry = (id) => {
    console.log(id);
    const newEntry = people.filter((person) => id !== person.id);

    setPeople(newEntry);
  };
  return (
    <div className='App'>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add Person</button>
      </form>

      {people.map((person) => {
        const { id, name, email } = person;
        return (
          <div key={id}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <button onClick={() => deleteEntry(id)}>Delete Entry</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
