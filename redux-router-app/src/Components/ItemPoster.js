import React, { useState } from "react";

const ItemPoster = ({ prop }) => {
    const View = {
        DETAILS: "DETAILS",
        USER_INFO: "USER_INFO",
    };

    const [view, setView] = useState(View.DETAILS);

    return (
        <div className="item-poster">
            <div className="image">
                <img src={prop.imgsrc} alt="pic" />
                <div className="poster-title">{prop.title}</div>
            </div>
            <div className="left">
                <div className="buttons">
                    <button onClick={() => setView(View.DETAILS)}>Detail</button>
                    <button onClick={() => setView(View.USER_INFO)}>User Info</button>
                </div>
                <div className="poster-desc">
                    {view === View.DETAILS ? prop.body : `Post was posted by ${prop.userId}`}
                </div>
            </div>
        </div>
    );
};

export default ItemPoster;
