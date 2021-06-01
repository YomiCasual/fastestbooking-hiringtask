const Form = () => {
	return (
		<div className='px-10 pt-5.5 pb-15 bg-[#F9F9FA]'>
			<div>
				<h3 className='text-xlarge text-brand font-semibold'>Apply Now</h3>
				<p classname='text-gray-600 mt-3 text-medium'>
					Discover your right course or degree
				</p>
			</div>
			<form className='mt-3'>
				<div className='flex flex-col space-y-4 mt-4 '>
					<div className='flex w-full space-x-4'>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>First name</label>
							<input
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								type='text'
								placeholder='Enter your name'
							/>
						</div>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>Email Adress</label>
							<input
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								type='text'
								placeholder='Enter your name'
							/>
						</div>
					</div>
					<div className='flex w-full space-x-4'>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>Last name</label>
							<input
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								type='text'
								placeholder='Enter your name'
							/>
						</div>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>Phone number</label>
							<input
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								type='text'
								placeholder='Enter your name'
							/>
						</div>
					</div>
					<div className='flex w-full space-x-4'>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>Program type</label>
							<input
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								type='text'
								placeholder='Enter your name'
							/>
						</div>
						<div className='flex justify-between items-center w-1/2'></div>
					</div>
				</div>

				{/* second part */}
				<div className='flex flex-col  space-y-4 mt-5 '>
					<div className='flex w-full space-x-4 mt-3'>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>
								First preferred university
							</label>
							<select
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								placeholder='Enter your name'>
								<option value='first'>First Value</option>
								<option value='second' selected>
									Second Value
								</option>
								<option value='third'>Third Value</option>
							</select>
						</div>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>
								Prefered start date
							</label>
							<select
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								placeholder='Enter your name'>
								<option value='first'>First Value</option>
								<option value='second' selected>
									Second Value
								</option>
								<option value='third'>Third Value</option>
							</select>
						</div>
					</div>
					<div className='flex w-full space-x-4 mt-3'>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>
								Second preferred university
							</label>
							<select
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								placeholder='Enter your name'>
								<option value='first'>First Value</option>
								<option value='second' selected>
									Second Value
								</option>
								<option value='third'>Third Value</option>
							</select>
						</div>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>
								Prefered start date
							</label>
							<select
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								placeholder='Enter your name'>
								<option value='first'>First Value</option>
								<option value='second' selected>
									Second Value
								</option>
								<option value='third'>Third Value</option>
							</select>
						</div>
					</div>
					<div className='flex w-full space-x-4 mt-3'>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>Home address</label>
							<select
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								placeholder='Enter your name'>
								<option value='first'>First Value</option>
								<option value='second' selected>
									Second Value
								</option>
								<option value='third'>Third Value</option>
							</select>
						</div>
						<div className='flex justify-between items-center w-1/2'>
							<label className='text-regular flex-none'>
								Preferred program
							</label>
							<select
								className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
								placeholder='Enter your name'>
								<option value='first'>First Value</option>
								<option value='second' selected>
									Second Value
								</option>
								<option value='third'>Third Value</option>
							</select>
						</div>
					</div>
				</div>
				{/* end of second part */}

				{/* third part */}
				<div className='flex flex-col  space-y-4 mt-5 '>
					<div className='flex w-full space-x-4 mt-3'>
						<div className='flex flex-col space-y-4 w-1/2'>
							<div className='flex justify-between items-center w-full'>
								<label className='text-regular flex-none'>Home address 2</label>
								<select
									className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
									placeholder='Enter your name'>
									<option value='first'>First Value</option>
									<option value='second' selected>
										Second Value
									</option>
									<option value='third'>Third Value</option>
								</select>
							</div>
							<div className='flex justify-between items-center w-full'>
								<label className='text-regular flex-none'>City</label>
								<select
									className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
									placeholder='Enter your name'>
									<option value='first'>First Value</option>
									<option value='second' selected>
										Second Value
									</option>
									<option value='third'>Third Value</option>
								</select>
							</div>
							<div className='flex justify-between items-center w-full'>
								<label className='text-regular flex-none'>State</label>
								<select
									className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
									placeholder='Enter your name'>
									<option value='first'>First Value</option>
									<option value='second' selected>
										Second Value
									</option>
									<option value='third'>Third Value</option>
								</select>
							</div>
							<div className='flex justify-between items-center w-full'>
								<label className='text-regular flex-none'>Zip Code</label>
								<select
									className='text-medium w-[400px] bg-transparent px-3 py-2 border border-gray-600 focus:border-brand rounded-sm'
									placeholder='Enter your name'>
									<option value='first'>First Value</option>
									<option value='second' selected>
										Second Value
									</option>
									<option value='third'>Third Value</option>
								</select>
							</div>
						</div>

						<div className='flex flex-col justify-between w-1/2  '>
							<div className='flex justify-between space-x-4 items-center w-full'>
								<label className='text-regular'>
									Do you require English language instruction before your
									program?
								</label>
								<div className=' w-[400px] flex space-x-4 flex-none '>
									<label
										className='flex items-center space-x-2 text-mediumbg-transparent px-3 py-2 rounded-sm'
										placeholder='Enter your name'>
										<input type='radio' />
										<span>Yes</span>
									</label>
									<label
										className='flex items-center space-x-2 text-mediumbg-transparent px-3 py-2 rounded-sm'
										placeholder='Enter your name'>
										<input type='radio' />
										<span>No</span>
									</label>
								</div>
							</div>
							<div className='text-right'>
								<button
									className='px-7.5 py-3 rounded-lg  inline-block  bg-brand shadow-lg text-white cursor-pointer'
									href='/'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* end of third part */}
			</form>
		</div>
	);
};

export default Form;
