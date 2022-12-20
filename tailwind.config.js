/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      'display':['Quicksand'],
      'body':['"Source Sans Pro"']
    },
    extend: {
      colors:{
        brightGreen: '#a4bd29',
        mediumGreen: '#69b72d',
        darkGreen: '#1e9c39',
        darkBrown: '#724f4c',
        lightBrown: '#beb0a7',
        lightBlue: '#3f84e5',
        darkBlue: '#335c67',
        darkYellow: '#ffc914',
        gray: {
          '900':'#0f1011'
        }
      },
      minWidth: {
				'14': '3.5rem'
			},
      backgroundImage: {
				'red-img': "url('/img/stack-wooden.jpg')",
				'yellow-img': "url('/img/wood-processing.jpg')",
				'green-img': 'url("https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=341&q=80")',
        'prod-img': "url('/img/aserrio2.jpg')",
			}
    },
  },
  plugins: [],
}
