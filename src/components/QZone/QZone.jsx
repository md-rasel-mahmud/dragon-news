import React from 'react';
import photo1 from '../../assets/qZone1.png'
import photo2 from '../../assets/qZone2.png'
import photo3 from '../../assets/qZone3.png'


const QZone = () => {
    return (
        <div className='mt-4 bg-light py-3 px-2 rounded'>
            <h4 className='mb-5'>Q-Zone</h4>
            <img src={photo1} alt="q-zone image" />
            <img src={photo2} alt="q-zone image" />
            <img src={photo3} alt="q-zone image" />
        </div>
    );
};

export default QZone;