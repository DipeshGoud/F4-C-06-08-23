import React from "react";

const icons = [
    <svg
        key="1"
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        className="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Path data */}
    </svg>,
    <svg
        key="2"
        width="21"
        height="23"
        viewBox="0 0 21 23"
        fill="none"
        className="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Path data */}
    </svg>,
    <svg
        key="3"
        width="18"
        height="23"
        viewBox="0 0 18 23"
        fill="none"
        className="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Path data */}
    </svg>,
    <svg
        key="4"
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
        className="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Path data */}
    </svg>,
];

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="name">TravelMedia.in</div>
            <div className="tags">
                {icons.map((icon) => (
                    <React.Fragment key={icon.key}>{icon}</React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
