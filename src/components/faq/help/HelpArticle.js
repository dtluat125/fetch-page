import React from 'react';
import '../../../assets/scss/HelpArticle.scss';
import { ReactComponent as SmileIcon } from '../../../assets/img/smile-solid.svg'
import { ReactComponent as MehIcon } from '../../../assets/img/meh-solid.svg'
import { ReactComponent as FrownIcon } from '../../../assets/img/frown-solid.svg'
import HelpNav from './HelpNav';
const HelpArticle = () => {
    return (
        <div className="help-article">
            <HelpNav />
            <div className="help-article-inner">
                <div className="article-wrap">
                    <div className="article-header">
                        <h3>What is Fetch?</h3>
                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                    </div>
                    <div className="article-body">
                            <p>
                                Whether you're a business, a contractor, or a client, Deel can help you:
                            </p>
                            <br/>
                            <ul>
                                <li>
                                    Comply with international hiring laws (tax forms, localized contracts)
                                </li>
                                <li>
                                    Handle multiple payment methods in one platform
                                </li>
                                <li>
                                    Manage payment cycles and timesheets
                                </li>
                                <li>
                                    Automatically generate invoices
                                </li>
                            </ul>
                            <br/>
                            <p>
                                When you hire an employee in another country, Deel acts as an employer of record (EOR), saving you the cost of creating a foreign entity.
                            </p>
                            <br/>
                            <p>
                                Deel helps companies with international payroll, benefits, taxes, and compliance in 150 countries - all through one powerful dashboard.
                            </p>
                            <br/>
                            <p>
                                You can read all about our story here or request a demo from our amazing team.
                            </p>
                            <br/>
                    </div>
                </div>
                <div className="evaluate">
                    <div className="evaluate-inner">
                        <p>Did this answer your question?</p>
                        <div className="icon-wrap">
                            <span>
                                <SmileIcon />

                            </span>
                            <span>
                                <MehIcon />
                            </span>
                            <span>
                                <FrownIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpArticle
