import React, {  useState } from 'react'

const test = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [input, setInput] = useState("")
    var string = input;
    string = string.replace(/(\r\n|\n|\r|\t)/gm,"*");
    string = string.replace(/\s/g, "\t\n");
    
const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInput(event.target.value);
    console.log(string);
}
  return (
    <>
    <input type="text" onChange={handleInputChange} />
    <pre>Dimensions: {string}</pre>
    </>
  )
}

export default test