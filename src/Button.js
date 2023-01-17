import React, { useContext } from 'react'
import { ThemeConsumer, ThemeContext } from './ThemeContext'


const styles = {
    dark: {
        backgroundColor: "black",
        color: "white"
    },
    light: {
        backgroundColor: "white",
        color: "black"
    }
}

const Button = ({ children }) => {
    const context = useContext(ThemeContext);
    console.log(context)
  return (
    <div>
        <ThemeConsumer>
            {value => (
            <button style={styles[value]}>
                {children} {value}
            </button>
            )}
        </ThemeConsumer>
          <button style={styles[context]}>
              {children} {context}
          </button>
    </div>
  )
}

export default Button
