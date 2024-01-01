import React from 'react'

const Button = ({ styles, name = "Get Started" }) => (
  <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded ${styles}`}>
    {name}
  </button>
)

export default Button