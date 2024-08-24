'use client';
import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { classNames } from '@/lib/utils';
export default function ThemeSwitcher() {
	const [enabled, setEnabled] = useState(false);
	return (
		<Switch
			checked={enabled}
			onChange={() => setEnabled(!enabled)}
			className={classNames(
				enabled ? 'bg-blue-600' : 'bg-gray-500',
				'relative inline-flex h-6 w-11 border-2 border-transparent rounded-full ring-0 focus:ring-2 focus:ring-offset-2 ring-blue-600 items-center transition duration-200',
			)}
		>
			<span
				className={classNames(
					enabled ? 'translate-x-5' : 'translate-x-0',
					'relative inline-block h-5 w-5 bg-white rounded-full transition-transform ease-in-out duration-200',
				)}
			>
				<span
					className={classNames(
						enabled ?
							'opacity-100 ease-in duration-200'
						:	'opacity-0 ease-out duration-100',
						'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
					)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='h-3 w-3 text-blue-500'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
						/>
					</svg>
				</span>
				<span
					className={classNames(
						enabled ?
							'opacity-0 ease-out duration-100'
						:	'opacity-100 ease-in duration-200',
						'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
					)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-3 h-3 text-blue-500'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
						/>
					</svg>
				</span>

				{/* <svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					className='absolute size-6'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
					/>
				</svg> */}
			</span>
		</Switch>
	);
}
