import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoAppim from './TodoAppim';

function Days() {

    
    const [holidays, setHolidays] = useState([]);
    const [selectedHoliday, setSelectedHoliday] = useState(null);

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

    const sliderStyle = {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',

    };

    const tikla = {

    }

    return (
        <div>

            <Row style={sliderStyle} className='topRow'>


                {holidays.map(holiday => (

                    <Col lg={2} className='text' onClick={tikla}>

                        <div key={holiday.date}>
                            <h4>{holiday.date}</h4>
                            <h6>{holiday.name}</h6>
                        </div>

                    </Col>


                ))}

            </Row>

            <Row className='centerRow'>
                <Col lg={6} className='centerCol'>
                    <TodoAppim/>
                </Col>
                
            </Row>
        </div>


    );
};


export default Days