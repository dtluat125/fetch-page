import React from 'react';
import Help from './Help';



const HelpList = ({ disableBtn, data }) => {
    return (
        <React.Fragment>
            {data?.map(helpOpt => (
                <Help key={helpOpt.id} data={helpOpt} disableBtn={disableBtn}/>
            ))}
        </React.Fragment>
    )
}

export default HelpList
