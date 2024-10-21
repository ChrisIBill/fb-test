'use client'
import Image from 'next/image'

import Logo from '@/public/png/favicon.png'

const WhiskeyCakeLogo = () => {
	return <Image src={Logo.src} alt='TerraTrue' width={24} height={24} />
}

export default WhiskeyCakeLogo
