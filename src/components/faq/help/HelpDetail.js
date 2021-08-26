import React from 'react';
import Help from './Help';
import './HelpDetail.scss';
import { Breadcrumb } from 'antd';
import {ReactComponent as ArrowLeft} from '../../../assets/img/arrowLeft.svg';

const HelpDetail = () => {
    return (
        <div className="help-detail">
            <div className="detail-nav">
                <Breadcrumb separator={<ArrowLeft style={{ height: '14px', width: '10px' }}/>}>
                    <Breadcrumb.Item>All Collections</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Introduction to Fetch Technology</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            
            <div className="detail-wrap">
                <div className="detail-content">
                    <h2>Introduction to Fetch Technology</h2>
                    <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                </div>

                <Help />
            </div>
            
        </div>
    )
}

export default HelpDetail
