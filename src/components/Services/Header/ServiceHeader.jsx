import React from 'react'
import "../../../assets/css/serviceHeader.css"
function ServiceHeader({theme, headerTitle, headerSubtitle}) {
    return (
        <div className = "c-page-header service-header">
            <div className="c-page-header__inner service-header__inner row">
                <div className="col-md-8 service-header__left">
                    <div className="service-header__text-group c-header-text-group">
                        <div className="service-header__title c-h1-title">
                            {headerTitle}
                        </div>
                        <div className="service-header__subtitle c-h6-subtitle">
                            {headerSubtitle}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 service-header__right c-theme-holder">
                    <img src={theme} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ServiceHeader
