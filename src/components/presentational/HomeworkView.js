import React from 'react';

const HomeworkView = (props) => {
    return (
        <>
            <div className="card-layout-section">
                <h1 className="homework-title">과제 1. 카드 UI</h1>
                <div className="portrait">
                    <h3 className="ui-title">세로형 레이아웃</h3>
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
                    <h3 className="ui-title">세로형 레이아웃2</h3>
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
                    <h3 className="ui-title">가로형 레이아웃</h3>
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
            <div className="form-wrap">
                <h1 className="homework-title">과제 2. 입력 폼 UI</h1>
                <div className="first-form">
                    <div className="textarea-wrap">
                        <textarea 
                            id="textarea-content"
                            className="write-textarea"
                            placeholder="내용을 입력하세요. (최대 300자까지 가능합니다)"
                            onChange={props.onChangeInput}
                            value={props.value}
                            maxLength={300}
                        />
                        <span id="counter" className="textarea-counter">{props.length}</span>
                    </div>
                    <div className="btn-wrap">
                        <button className="save-btn">
                            <span className={`btn-text ${props.value !== "" && "active"}`}>save</span>
                        </button>
                    </div>
                </div>
                <div className="second-form">
                    <div className="textarea-wrap">
                        <textarea 
                            disabled
                            className="write-textarea"
                            placeholder="내용을 입력하세요. (최대 300자까지 가능합니다)"
                        />
                        <span id="counter" className="textarea-counter" />
                    </div>
                </div>
                <div className="third-form">
                    <div className="textarea-wrap">
                        <textarea 
                            readOnly
                            className="write-textarea"
                            placeholder="내용을 입력하세요. (최대 300자까지 가능합니다)"
                        />
                        <span id="counter" className="textarea-counter" />
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
                    {props.review !== "" &&
                        <span className="card-review">{props.review}</span>
                    }
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
                    {props.review !== "" &&
                        <span className="card-review">{props.review}</span>
                    }
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