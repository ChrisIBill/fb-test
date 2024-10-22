'use client'

// Tools

// Types
import { GlobalType } from '@/types/documents/global-type'
import { NavigationType } from '@/types/documents/navigation-type'
import { MenuType } from '@/types/documents/menu-type'

// Components
import Header from '@/components/header'
import SanityImage from '@/components/sanity-image'

interface PageProps {
	global: GlobalType[]
	navigation: NavigationType[]
	menu: MenuType[]
}

const MenuPage: React.FC<PageProps> = ({ global, navigation, menu }) => {
	return (
		<>
			<Header navigation={navigation} global={global} />
			<main className='flex min-h-[calc(100vh-328px)] w-full flex-col items-center justify-center py-16'>
				<h1 className='text-7xl font-bold'>Hello Menu</h1>
				<section className='mt-16 flex w-full max-w-4xl flex-col items-center gap-y-10 px-5'>
					<h2 className='text-4xl font-bold'>Snacks</h2>
					<div className='flex flex-col gap-y-10'>
						{menu
							.filter(item => item.kind === 'snacks')
							.map((item, index) => (
								<div key={index} className='flex w-full items-center'>
									<div className='w-1/3'>
										<SanityImage
											source={item.image}
											alt={item.image.alt}
											width={200}
											height={200}
											componentIndex={1}
											role='none'
											sizes={`(min-width: 1024px) 1024px, 100vw`}
										/>
									</div>
									<div className='w-2/3 pl-4'>
										<h3 className='font-bold'>
											{item.title} - $<span>{item.price}</span>
										</h3>
										<p>{item.description}</p>
									</div>
								</div>
							))}
					</div>
				</section>
				<section className='mt-16 flex w-full max-w-4xl flex-col items-center gap-y-10 px-5'>
					<h2 className='text-4xl font-bold'>Mains</h2>
					<div className='gap-y-10l flex flex-col'>
						{menu
							.filter(item => item.kind === 'mains')
							.map((item, index) => (
								<div key={index} className='flex w-full items-center'>
									<div className='w-1/3'>
										<SanityImage
											source={item.image}
											alt={item.image.alt}
											width={200}
											height={200}
											componentIndex={1}
											role='none'
											sizes={`(min-width: 1024px) 1024px, 100vw`}
										/>
									</div>
									<div className='w-2/3 pl-4'>
										<h3 className='font-bold'>
											{item.title} - $<span>{item.price}</span>
										</h3>
										<p>{item.description}</p>
									</div>
								</div>
							))}
					</div>
				</section>
			</main>
		</>
	)
}

export default MenuPage
