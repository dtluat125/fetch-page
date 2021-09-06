import React from 'react';
import Help from './Help';

const HelpList = ({ disableBtn }) => {
    return (
        <React.Fragment>
            <Help disableBtn={disableBtn}/>
            <Help disableBtn={disableBtn}/>
            <Help disableBtn={disableBtn}/>
            <Help disableBtn={disableBtn}/>
        </React.Fragment>
    )
}

export default HelpList
