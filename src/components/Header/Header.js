const Header = () => {
	return (
		<nav className='flex px-10 py-4.5 items-center space-x-[100px] justify-between'>
			<div className='flex items-center space-x-9'>
				<a href='/' className='text-[40px] text-brand font-bold'>
					LOGO.
				</a>
				<div>
					<ul className='flex items-center'>
						<li>
							<a
								className='text-regular text-black px-4.5 py-2 cursor-pointer'
								href='/'>
								Home
							</a>
						</li>
						<li>
							<a
								className='text-regular text-gray-500 px-4.5 py-2 cursor-pointer'
								href='/'>
								About
							</a>
						</li>
						<li>
							<a
								className='text-regular text-gray-500 px-4.5 py-2 cursor-pointer'
								href='/'>
								Programs
							</a>
						</li>
						<li>
							<a
								className='text-regular text-gray-500 px-4.5 py-2 cursor-pointer'
								href='/'>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<ul className='flex items-center space-x-2'>
					<li>
						<a
							className='flex space-x-2 items-center px-4 py-3 rounded-lg border cursor-pointer'
							href='/'>
							<svg
								width='18'
								height='18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M16.5554 13.0042l-2.4295-1.6974a1.8686 1.8686 0 00-1.0741-.3384 1.8748 1.8748 0 00-1.5371.8027l-.564.8082c-.9452-.6339-1.9999-1.519-3.0053-2.5242-1.0053-1.0053-1.8902-2.06-2.524-3.0052l.808-.564c.4117-.2867.6867-.7162.774-1.2092.0872-.4925-.0226-.9902-.3097-1.4022l-1.697-2.4294c-.355-.5076-.9275-.8108-1.532-.8108-.2094 0-.4148.037-.6104.1091a3.3637 3.3637 0 00-.6319.3102l-.3354.2362a2.5442 2.5442 0 00-.2366.2113c-.4093.409-.6997.9269-.8635 1.5392-.6993 2.6213 1.033 6.5852 4.3106 9.8628 2.7525 2.7524 6.0592 4.4623 8.6294 4.4626h.0002c.4402 0 .8551-.0512 1.2334-.1523.6123-.1637 1.1301-.4541 1.5396-.8635a2.5553 2.5553 0 00.2215-.2509l.2364-.3373c.1156-.1846.2161-.3915.2992-.6152.2858-.7727-.0027-1.6538-.7018-2.1423z'
									fill='#0A11E0'
								/>
							</svg>
							<span>+12 345 678</span>
						</a>
					</li>
					<li>
						<a
							className='px-4 py-3 rounded-lg bg-gray-100 text-gray-600 cursor-pointer'
							href='/'>
							Sign In
						</a>
					</li>
					<li>
						<a
							className='px-4 py-3 rounded-lg  bg-brand shadow-lg text-white cursor-pointer'
							href='/'>
							Sign In
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
