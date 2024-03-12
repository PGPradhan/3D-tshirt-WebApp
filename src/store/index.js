import {proxy} from 'valtio'

const state = proxy({
    intro:true,
    color:'#EFBD48',
    isLogoTexture: true,
    isFullTexture:false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'

})
// It is like context api , whatever you define here will be there everywhere
export default state;