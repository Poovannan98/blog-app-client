import React from 'react';
import "./sidebar.css"

function About() {
  return (
    <div className="sidebarItem" id="about">
            <span className="sidebarTitle">ABOUT APP</span>
            <img
                src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
                alt=""
            />
            <p>
                This is an Simple blog application using MERN technology, I using CURD operation for made this application. One important pakage using this application is Multer using this to upload image to DB, Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
            </p>
        </div>
  )
}

export default About;