import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "This is Document 1",
            fileSize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Know", tagColor: "green" },
        },
        {
            desc: "This is Document 2",
            fileSize: ".19mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Know", tagColor: "red" },
        },
        {
            desc: "This is Document 3",
            fileSize: ".2mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Know", tagColor: "yellow" },
        },
    ];
    return (
        <div ref={ref} className='fixed p-5 top-0 left-0 z-[3] w-full h-screen bg-sky-800/50 flex gap-10 flex-wrap'>

            {/* <Card /> */}
            {data.map((item,index)=>(
                <Card data={item} reference={ref} />
                
            ))}

        </div>)
}

export default Foreground