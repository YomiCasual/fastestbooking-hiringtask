module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		spacing: {
			0: '0px',
			1: '5px',
			1.5: '6px',
			2: '10px',
			3: '15px',
			4: '20px',
			4.5: '25px',
			5: '30px',
			5.5: '35px',
			6: '40px',
			6.5: '50px',
			7: '60px',
			7.5: '65px',
			8: '75px',
			9: '80px',
			10: '90px',
			11: '100px',
			15: '150px',
			'5l': '10rem',
			'n1/2': '-50%',
			24: '24rem',
			400: '400px',
			107: '107px',
		},
		extend: {
			colors: {
				brand: {
					DEFAULT: '#0A11E0',
				},
			},
			fontSize: {
				xsmall: '10px',
				small: '12px',
				regular: '14px',
				medium: '16px',
				semilarge: '18px',
				large: '20px',
				xlarge: '24px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
