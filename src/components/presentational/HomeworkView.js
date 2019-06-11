import React from 'react';

const HomeworkView = (props) => {
    return (
        <>
            <div className="card-layout-section">
                <div className="portrait">
                    <h3>세로형 레이아웃</h3>
                    <div className="card-layout-wrap">
                        {props.cards.map((card, i) => {
                            return (
                                <Portrait 
                                    subTitle={card.subTitle}
                                    mainTitle={card.mainTitle}
                                    bottomTitle={card.bottomTitle}
                                    ratings={card.ratings}
                                    review={card.review}
                                    key={i}  
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="portrait2">
                    <h3>세로형 레이아웃2</h3>
                    <div className="card-layout-wrap">
                        {props.cards.map((card, i) => {
                            return (
                                <Portrait 
                                    subTitle={card.subTitle}
                                    mainTitle={card.mainTitle}
                                    bottomTitle={card.bottomTitle}
                                    ratings={card.ratings}
                                    review={card.review}
                                    key={i}  
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="landscape">
                    <h3>가로형 레이아웃</h3>
                    <div className="card-layout-wrap">
                        {props.cards.map((card, i) => {
                            return (
                                <Landscape 
                                    subTitle={card.subTitle}
                                    mainTitle={card.mainTitle}
                                    bottomTitle={card.bottomTitle}
                                    ratings={card.ratings}
                                    review={card.review}
                                    key={i}  
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

const Portrait = props => ( 
    <div className="card-wrap">
        <div className="card-inner-wrap">
            <div className="card-image" />
            <div className="card-text-wrap">
                <div className="card-title-area">
                    <a className="card-sub-title" href="#">{props.subTitle}</a>
                    <a className="card-main-title" href="#">{props.mainTitle}</a>
                    <span className="card-bottom-title" href="#">{props.bottomTitle}</span>
                </div>
                <div className="card-rating-area">
                    <div className="card-rating-wrap">
                        <div className="card-rating-group">
                            {props.ratings.map((rating, i) => {
                                return (
                                    <span className={`card-rating ${rating === 'star' ? "star": ""}`} key={i} />
                                )
                            })}
                        </div>
                    </div>
                    <span className="card-review">{props.review}</span>
                </div>
            </div>
        </div>
    </div>
);

const Landscape = props => ( 
    <div className="card-wrap">
        <div className="card-inner-wrap">
            <div className="card-image" />
            <div className="card-text-wrap">
                <div className="card-title-area">
                    <a className="card-main-title" href="#">{props.mainTitle}</a>
                    <span className="card-review">{props.review}</span>
                </div>
                <div className="card-rating-area">
                    <div className="card-rating-wrap">
                        <div className="card-rating-group">
                            {props.ratings.map((rating, i) => {
                                return (
                                    <span className={`card-rating ${rating === 'star' ? "star": ""}`} key={i} />
                                )
                            })}
                            <span className="card-rating-sub-text">SubText</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeworkView;