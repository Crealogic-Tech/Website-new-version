import React from 'react'

const BurgerBTN = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-burger"
            version="1.1"
            viewBox="0 0 24 24"
            style={{ width: 40 }}
        >
            <defs>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n      .cls-1 {\n        fill: none;\n        stroke: #fff;\n        stroke-linecap: round;\n        stroke-miterlimit: 10;\n        stroke-width: 2px;\n      }\n    "
                    }}
                />
            </defs>
            <line
                className="cls-1"
                x1="22.9"
                y1="4.7"
                x2="1.1"
                y2="4.7"
                style={{ strokeWidth: '1.5px' }}
            />
            <line className="cls-1" x1="22.9" y1="9.6" x2="5.9" y2="9.6" style={{ strokeWidth: '1.5px' }} />
            <line className="cls-1" x1="22.9" y1="14.4" x2="2.4" y2="14.4" style={{ strokeWidth: '1.5px' }} />
            <line className="cls-1" x1="22.9" y1="19.3" x2="10.9" y2="19.3" style={{ strokeWidth: '1.5px' }} />
        </svg>
    )
}

export default BurgerBTN
