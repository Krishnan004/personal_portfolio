module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      keyframes:{
        typing:{
          'from':{width:'0%'},
          'to':{width:'100%'},
        },
        blink:{
          '50%':{border:'transparent'}
        },
        expand:{
          '0%':{transform:'translateY(-6px)'},
          '50%':{transform:'translateY(-2px)'},
          '100%':{transform:'translateY(6px)'},
        },
        visible: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        page:{
          'from':{transform:'translateX(999px)'},
          'to':{transform:'translateX(0px)'},
        },
        page1:{
          'from':{transform:'translateX(-999px)'},
          'to':{transform:'translateX(0px)'},
        },
        appear: {
          'from': {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        heightvisible:{
          'from':{height:"0%",opacity:'0'},
          'to':{height:"100%",opacity:'1'},
        },
        bgMove: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      animation:{
        typing:'typing 2s steps(20) 1s 1 normal  both,blink .5s step-end infinite alternate ',    
        expand:'expand 1s ease-in-out infinite alternate',
        visible: 'visible 2s ease-in-out ',
        page:'page 1s ease-in-out alternate',
        page1:'page1 1s ease-in-out alternate',
        appear: 'appear 1.5s linear ',
        heightvisible:'heightvisible 1.5s linear',
        bgMove: 'bgMove 10s linear infinite',
      }
    },
    backgroundImage: {
      'custom-image': "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
    },
  },
  plugins: [],
}
