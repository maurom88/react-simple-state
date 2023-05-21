import React, {useState} from 'react';
import './App.css'
import Title from './Title'
import Button from './Button'

export default function App() {
  const [titleColor, setTitleColor] = useState("red")
  
  return (
    <main>
      <Button buttonText='Click me!'
        changeColor={
          () => {
              titleColor == "red" ? setTitleColor("blue") : setTitleColor("red")
              }
        }
      />
      <Title text="Hello!" color={titleColor} />
    </main>
  )
}
