import { useState } from 'react';

function EntryForm() {
  // useState returns a pair: the current state value and a function to update it
  const [urlToAdd, setUrl] = useState('http://google.com');

  return (
    <>
      <form>
        <input type='text' name='url' />
        <input type='submit' value='Shorten URL' />
      </form>
      <div>Url that was input: {urlToAdd}</div>
    </>
  )
}

export default EntryForm;