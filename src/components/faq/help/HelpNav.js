import React, { useEffect, useState } from 'react';
import '../../../assets/scss/HelpNav.scss';
import { Breadcrumb } from 'antd';
import {ReactComponent as ArrowLeft} from '../../../assets/img/arrowLeft.svg';
import {ReactComponent as ArrowRight} from '../../../assets/img/arrowRight.svg';
import { withRouter, Link } from 'react-router-dom';

const HelpNav = withRouter(props => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const [oneBread, setBread] = useState(true);

    useEffect(() => {
        if(window.innerWidth < 768) setBread(true);
        else if(window.innerWidth >= 768) setBread(false);
    }, [])

    return (
        <div className="help-nav">
            {!oneBread ? (
                <Breadcrumb separator={<ArrowLeft style={{ height: '14px', width: '10px' }} />}>
                    {pathSnippets.map((urlName, index) => {
                        const urlChild = `/${pathSnippets.slice(0, index + 1).join('/')}`;
                        if(index === 0) {
                            return (
                                <Breadcrumb.Item  key={urlChild} >
                                    <Link className="bc-root" to={urlChild}>
                                        All Collections
                                    </Link>
                                </Breadcrumb.Item>
                            )
                        } else {
                            return (
                                <Breadcrumb.Item  key={urlChild} >
                                    <Link className={`bc-child bc-child-${index}`} to={urlChild}>
                                        {urlName}
                                    </Link>
                                </Breadcrumb.Item>
                            )
                        }
                    })}
                </Breadcrumb>) : (
                <Breadcrumb>
                    <Breadcrumb.Item >
                        <Link 
                            className="bc-child-one" 
                            to={`/${pathSnippets.slice(0, pathSnippets.length - 1).join('/')}`}
                            style={{display: 'inline-flex', alignItems: 'center'}}
                        >
                            <ArrowRight style={{ height: '14px', width: '10px', marginRight: '8px'}} />
                            {pathSnippets[pathSnippets.length - 2]}
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            )}
        </div>
    )
});

export default HelpNav
