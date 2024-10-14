import React from 'react'

import xImg from '../../assets/images/x.svg'
import discordImg from '../../assets/images/discord.svg'
import mediumImg from '../../assets/images/medium.svg'
import linkedinImg from '../../assets/images/linkedin.svg'

const Footer = () => {
  return (
    <footer className="border-t border-t-[#584D71] py-[37px] flex justify-between items-center">
      <div className="text-sm text-manrope text-sub-heading">
        Copyright © 2024 VerinLayer. All rights reserved.
      </div>

      <div className="flex space-x-4">
        <a href="#" target="_blank">
          <img src={xImg} alt="X" />
        </a>

        <a href="#" target="_blank">
          <img src={discordImg} alt="X" />
        </a>

        <a href="#" target="_blank">
          <img src={mediumImg} alt="X" />
        </a>

        <a href="#" target="_blank">
          <img src={linkedinImg} alt="X" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
