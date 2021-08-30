import React from 'react';
import '../../../assets/scss/HelpNav.scss';
import { Breadcrumb } from 'antd';
import {ReactComponent as ArrowLeft} from '../../../assets/img/arrowLeft.svg';

const HelpNav = () => {
    return (
        <div className="help-nav">
            <Breadcrumb separator={<ArrowLeft style={{ height: '14px', width: '10px' }}/>}>
                <Breadcrumb.Item>All Collections</Breadcrumb.Item>
                <Breadcrumb.Item href="">Introduction to Fetch Technology</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default HelpNav
