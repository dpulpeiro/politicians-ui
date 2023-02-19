/** @type {import('tailwindcss').Config} */

const colors=[
  'pink',
  'cyan',
  'red',
  'blue',
  'gray',
  'yellow',
  'rose',
  'purple',
  'green',
  'amber',
  'lime',
  'orange',
]
let colorSaveList=[]

for (const color of colors) {
  colorSaveList.push(`text-${color}-800`);
  colorSaveList.push(`bg-${color}-200`);
}
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: colorSaveList,
  theme: {
    extend: {},
  },
  plugins: [],
}
