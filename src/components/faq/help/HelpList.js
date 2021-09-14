import React, { useState, useEffect } from 'react';
import Help from './Help';
import { Skeleton } from 'antd';

const HelpList = ({ disableBtn, data }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => setLoading(false), 2000);

        return () => clearTimeout(timer);
    }, [])
    return (
        <React.Fragment>
            {data?.map(helpOpt => (
                <Skeleton className="skeleton-faq" active avatar loading={loading}>
                <Help key={helpOpt.id} data={helpOpt} disableBtn={disableBtn}/>
                </Skeleton>
            ))}
        </React.Fragment>
    )
}

export default HelpList
