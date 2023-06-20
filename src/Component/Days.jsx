import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Row } from 'react-bootstrap';

function Days() {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        const fetchHolidays = async () => {
            try {
                const year = 2023; // İlgili yılı belirtin
                const countryCode = 'TR'; // İlgili ülke kodunu belirtin
                const apiUrl = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;
                const response = await axios.get(apiUrl);
                setHolidays(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHolidays();
    }, []);

    // API'den gelen tatil verilerini kullanarak bir şeyler yapabilirsiniz

    return (
        <Row>



            {/* Tatil verilerini kullanarak JSX içinde istediğiniz şekilde gösterim yapabilirsiniz */}
            {holidays.map(holiday => (

                <Col lg={3} >
                    <div key={holiday.date}>
                    <span>{holiday.date}</span>
                    <span>{holiday.name}</span>
                    </div>
                    
                </Col>


            ))}

        </Row>
    );
};


export default Days