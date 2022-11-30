import React, {useState }from 'react'


const BgChange = () => {
    const purple = '#8e44ad'
    const[bg, setBg] = useState(purple);
    const[name, setName] = useState('Click me');

    const BgChangeHandler = () =>{
        let newBg = '#34495e';
        setBg (newBg);
        setName('Ouch!!!..')

    }

  return (
    <div>

      <div style={{backgroundColor:bg}}>
        <button onClick = {BgChangeHandler}>{name}</button>
      </div>

    </div>
  )
}

export default BgChange