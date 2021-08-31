import React from 'react';
import Help from './Help';
import '../../../assets/scss/HelpDetail.scss';
import HelpNav from './HelpNav';
import { Switch, useRouteMatch, Route } from 'react-router';
import HelpArticle from './HelpArticle';

const HelpDetail = () => {
    const {url, path} = useRouteMatch();

    console.log("url: ", url);
    console.log("path: ", path);
    return (
        <div className="help-detail">
            <HelpNav />
            <Switch>
                <Route path="/faq/:level1/:level2" >
                    <HelpArticle />
                </Route>
                <Route path="/faq/:level1" >
                    <Help disableBtn />
                </Route>
            </Switch>
            
        </div>
    )
}

export default HelpDetail
