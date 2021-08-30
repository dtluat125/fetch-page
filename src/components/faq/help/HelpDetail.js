import React from 'react';
import Help from './Help';
import '../../../assets/scss/HelpDetail.scss';
import HelpNav from './HelpNav';

const HelpDetail = () => {
    return (
        <div className="help-detail">
            <HelpNav />
            <Help disableBtn/>
            
        </div>
    )
}

export default HelpDetail
