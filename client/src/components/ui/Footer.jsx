import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#2c2c2c] text-gray-300 py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Amit Thakur. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
