import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data , reference}) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale :1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 700, bounceDamping: 10 }}className='relative w-60 h-72 bg-sky-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden flex-shrink-0' >
            <FaFileAlt />
            <p className='mt-5 text-sm font-semibold leading-tight'>{data.desc}</p>

            <div className="footer absolute bottom-0 bg-sky-400 w-full  left-0">
                <div className='flex item-center py-3 px-8 justify-between'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose color='#fff' size=".8em" /> : <LuDownload color='#fff' size=".8em" />}

                    </span>
                </div>
                {data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-red-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}
                    </h3>
                </div>) }

            </div>

        </motion.div>

    )
}

export default Card