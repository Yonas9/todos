import Dropdown from './UI/dropdown'
import Tabs from './UI/tabs'
import Tootlip from './UI/tooltlip'
import  './todos'


const dropdowns = document.querySelectorAll('.dropdown');
const tab = document.querySelector('.tabs');
const tootlip = document.querySelector('.tootlip')

dropdowns.forEach(dropdown =>{
    const instance = new Dropdown(dropdown);
    instance.init()
})

const tabInstance = new Tabs(tab);
tabInstance.init()

const toot = new Tootlip(tootlip);
toot.init()