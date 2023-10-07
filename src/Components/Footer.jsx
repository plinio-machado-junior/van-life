import React, { useState, useEffect } from 'react'
import '../css/footer.css';

const Footer = () => {
    const [year, setYear] = useState();

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        setYear(year);
    }, []);



    return (
        <footer>&copy; <span>{year}</span> #VANLIFE</footer>
    )
}

export default Footer