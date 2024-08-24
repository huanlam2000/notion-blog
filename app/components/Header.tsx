'use client';
import {
	Disclosure,
	DisclosurePanel,
	DisclosureButton,
} from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { classNames } from '@/lib/utils';
import ThemeSwitcher from './ThemeSwitcher';
import User from '@/public/avatar.jpg';

const user = {
	name: 'The Huan',
	email: 'huantyn@gmail.com',
	avt: User,
};

const navigation = [
	{ name: 'Blog', href: '/' },
	{ name: 'Series', href: '/series' },
	{ name: 'Me', href: '/me' },
];
export default function Header() {
	const pathname = usePathname();
	return (
		<Disclosure
			as={'nav'}
			className='bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:text-white'
		>
			{({ open }) => (
				<>
					<div className='px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8 rounded-3xl'>
						<div className='flex justify-between min-h-9'>
							{/* Logo */}
							<div className='flex items-center'>
								<Link
									href={'/'}
									className='text-white dark:text-gray-50 font-light'
								>
									The Huan
								</Link>
							</div>

							{/* Navigations */}
							<div className='hidden sm:flex space-x-8 items-center flex-shrink-0'>
								{navigation.map((item, index) => (
									<Link
										key={item.href}
										href={item.href}
										className={classNames(
											pathname === item.href ?
												' text-gray-900 dark:text-gray-50 dark:bg-slate-400/40'
											:	' text-gray-400 dark:text-gray-300 hover:bg-slate-600/40 hover:text-white',
											'flex items-center px-8 py-2 text-sm uppercase rounded-md transition duration-300 ease-in-out',
										)}
									>
										{item.name}
									</Link>
								))}
							</div>

							{/* Right Elements */}
							<div className='hidden sm:flex sm:items-center'>
								<ThemeSwitcher></ThemeSwitcher>

								{/* me */}
								<div className='ml-8 flex max-w-xs items-center'>
									<Link
										href={'/me'}
										className='rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-600 focus:ring-cyan-300'
									>
										{/* <span className='sr-only'>Open user menu</span> */}
										<Image
											src={User}
											alt='Me'
											width={32}
											height={32}
											className='rounded-md'
										></Image>
									</Link>
								</div>
							</div>

							{/* Mobile nav */}
							<div className='flex items-center sm:hidden'>
								<DisclosureButton className='flex items-center p-2 rounded-md bg-gray-700 hover:bg-gray-400 hover:text-black focus:ring-2 ring-offset-2 ring-indigo-500 ring-offset-gray-900'>
									<span className='sr-only'>Open main menu</span>
									{open ?
										<XMarkIcon
											className='block w-6 h-6'
											strokeWidth={2}
										/>
									:	<Bars3Icon
											className='block w-6 h-6'
											strokeWidth={2}
										/>
									}
								</DisclosureButton>
							</div>
						</div>
					</div>
					<DisclosurePanel className='sm:hidden'>
						<div className='pt-2 pb-3 space-y-1'>
							{navigation.map((item, index) => (
								<Link
									key={item.href}
									href={item.href}
									className={classNames(
										pathname === item.href ?
											' border-gray-50 bg-blue-50 text-blue-500 dark:bg-gray-700 dark:text-white'
										:	'border-transparent text-gray-600 hover:bg-blue-300 hover:border-gray-300 dark:text-gray-400 dark:hover:bg-gray-700',
										'block border-l-4 py-2 pl-3 pr-4',
									)}
								>
									{item.name}
								</Link>
							))}
						</div>
						<div className='flex items-center pt-2 pb-3 pl-3'>
							<ThemeSwitcher /> <span className='ml-2'>Dark mode</span>
						</div>
						<div className='pt-4 pb-3 border-t border-gray-200 dark:border-gray-600'>
							<div className='flex items-center px-4'>
								<div className='flex-shrink-0'>
									<Image
										src={user.avt}
										alt='avt'
										width={40}
										height={40}
										className='rounded-md'
									/>
								</div>
								<div className=' ml-2'>
									<div className='text-base font-medium text-gray-800 dark:text-white'>
										{user.name}
									</div>
									<div className='text-sm font-small text-gray-500 dark:text-gray-400'>
										{user.email}
									</div>
								</div>
							</div>
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
