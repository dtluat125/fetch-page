import React from 'react';
import HelpList from './HelpList';
import '../../../assets/scss/HelpDetail.scss';
import HelpNav from './HelpNav';
import { Switch, Route } from 'react-router';
import HelpArticle from './HelpArticle';

const data = [
    {id: 1, title: "What is Fetch?", description: "Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market."},
    {id: 2, title: "Past works and partnerships", description: "Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market."},
    {id: 3, title: "Location of offices in Singapore & Vietnam", description: "Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market."},
]

const HelpDetail = () => {

    return (
        <div className="help-detail">
            <HelpNav />
            <Switch>
                <Route path="/faq/:level1/:level2" >
                    <HelpArticle />
                </Route>
                <Route path="/faq/:level1" >
                    <HelpList disableBtn data={data}/>
                </Route>
            </Switch>
            
        </div>
    )
}

export default HelpDetail
