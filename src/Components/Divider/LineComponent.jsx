import React from 'react'

const LineComponent = () => {
    return (
        <div
            className="lineContainer"
            style={{
                background: "transprent",
                width: "100vw",
                height: "100vh",
                position: "absolute",
                zIndex: 0,
                right: 0,
                top: 0,
            }}
        >
            <div
                className="lines"
                style={{
                    background: "#1A1A1A",
                    height: "20%",
                    width: "100%",
                    transform: "translateX(-100%)",
                    zIndex: 10,
                }}
            ></div>
            <div
                className="lines"
                style={{
                    background: "#1A1A1A",
                    height: "20%",
                    width: "100%",
                    zIndex: 10,
                    transform: "translateX(-100%)",
                }}
            ></div>
            <div
                className="lines"
                style={{
                    background: "#1A1A1A",
                    height: "20%",
                    width: "100%",
                    transform: "translateX(-100%)",
                }}
            ></div>
            <div
                className="lines"
                style={{
                    background: "#1A1A1A",
                    height: "20%",
                    width: "100%",
                    transform: "translateX(-100%)",
                }}
            ></div>
            <div
                className="lines"
                style={{
                    background: "#1A1A1A",
                    height: "20%",
                    width: "100%",
                    transform: "translateX(-100%)",
                }}
            ></div>
        </div>
    )
}

export default LineComponent
