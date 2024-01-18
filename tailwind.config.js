/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
  
  "./public/*.{html,js,css}",
  
  "./views/*.ejs",
  
  "./views/layouts/*.ejs",
  
  "./views/components/*.ejs"
  
  ],
  
  theme: {
    fontFamily: {
      Satoshi: ["Satoshi"],
      SatoshiLight: ["SatoshiLight"],
      SatoshiBold: ["SatoshiBold"],
    },
  extend: {
    colors:{
      'faded-jade': {
        '50': '#f4f9f8',
        '100': '#dbece7',
        '200': '#b8d7ce',
        '300': '#8cbcb0',
        '400': '#649d91',
        '500': '#43766c',
        '600': '#396860',
        '700': '#31544e',
        '800': '#2a4541',
        '900': '#263b37',
        '950': '#122120',
    },
    'rum-swizzle': {
      '50': '#f8fae5',
      '100': '#f1f6cb',
      '200': '#e9ef99',
      '300': '#e1e55f',
      '400': '#dcd933',
      '500': '#cdc325',
      '600': '#b09c1e',
      '700': '#8d731b',
      '800': '#755c1e',
      '900': '#654d1e',
      '950': '#3a290e',
    },
    'sandal': {
      '50': '#f6f5f0',
      '100': '#eae3d7',
      '200': '#d6c9b2',
      '300': '#bea786',
      '400': '#b19470',
      '500': '#9c7a56',
      '600': '#856349',
      '700': '#6c4c3c',
      '800': '#5c4237',
      '900': '#503a33',
      '950': '#2d1f1b',
    },
    'ironstone': {
      '50': '#faf5f2',
      '100': '#f3eae1',
      '200': '#e6d2c2',
      '300': '#d5b49c',
      '400': '#c49073',
      '500': '#b77758',
      '600': '#aa644c',
      '700': '#8d5141',
      '800': '#76453b',
      '900': '#5d3831',
      '950': '#321c18',
    },
  
  
      
    },
  },
  
  },
  
  plugins: [],
  
  }
  