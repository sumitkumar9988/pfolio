import React from 'react'

const Footer = ({theme}) => {
    return (
        <p className={`py-8 text-sm font-light text-center ${theme.textColor1}`}>
        <p
          className="hover:opacity-80 transition-opacity"
          rel="noreferrer"
        >
          Sumit .
        </p>
      </p>
    )
}

export default Footer
