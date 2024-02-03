import React from 'react'
import Icon from '../Icon';
import ShareIcon from "../../public/assets/icons/share.svg"

const ShareButton = () => {
  return (
    <button className='border-textHighlight border-2 rounded-full flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 '>
      <Icon 
        altText="share"
        iconSrc={ShareIcon}
        width={16}
        height={16}
      />
      <span className='uppercase font-bold text-base text-textHighlight hidden sm:block'>share</span>
    </button>
  )
}

export default ShareButton
