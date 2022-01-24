import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Button = styled.button`
  background: none;
  border: none;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
          {theme === 'light' && 
          <FontAwesomeIcon icon={faMoon} />
    }
    {theme === 'dark' &&
      <FontAwesomeIcon icon={faSun} />
    }
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
