import React from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

const CloseBTNSVG = () => {
    gsap.registerPlugin(DrawSVGPlugin)



    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id='menu-close'
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
        >
            <path
                d="M49.8884 44.2634C49.8884 45.1563 49.5759 45.9152 48.9509 46.5402L44.3973 51.0938C43.7723 51.7188 43.0134 52.0313 42.1205 52.0313C41.2276 52.0313 40.4687 51.7188 39.8437 51.0938L30 41.2501L20.1562 51.0938C19.5312 51.7188 18.7723 52.0313 17.8794 52.0313C16.9866 52.0313 16.2276 51.7188 15.6026 51.0938L11.0491 46.5402C10.4241 45.9152 10.1116 45.1563 10.1116 44.2634C10.1116 43.3706 10.4241 42.6117 11.0491 41.9867L20.8928 32.1429L11.0491 22.2992C10.4241 21.6742 10.1116 20.9152 10.1116 20.0224C10.1116 19.1295 10.4241 18.3706 11.0491 17.7456L15.6026 13.192C16.2276 12.567 16.9866 12.2545 17.8794 12.2545C18.7723 12.2545 19.5312 12.567 20.1562 13.192L30 23.0358L39.8437 13.192C40.4687 12.567 41.2276 12.2545 42.1205 12.2545C43.0134 12.2545 43.7723 12.567 44.3973 13.192L48.9509 17.7456C49.5759 18.3706 49.8884 19.1295 49.8884 20.0224C49.8884 20.9152 49.5759 21.6742 48.9509 22.2992L39.1071 32.1429L48.9509 41.9867C49.5759 42.6117 49.8884 43.3706 49.8884 44.2634Z"
                stroke='white'
            />
        </svg>
    )
}

export default CloseBTNSVG
