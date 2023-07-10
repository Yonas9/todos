import '../styles/tabs.css'

class Tabs{
    constructor(container){
        this.container = container
        this.tabs = this.container.querySelectorAll('.trigger');
        this.contents = this.container.querySelectorAll('.content')
    }
     
    init(){
       
        this.tabs.forEach(tab =>{
            tab.addEventListener('click',e=>{
                this.toggleTabs(e)
                this.toggleContent(e)
            })
        })

    }
     toggleTabs(e){
            this.tabs.forEach(tab => tab.classList.remove('active'))
            e.target.classList.toggle('active')
     }
     toggleContent(e){
        this.contents.forEach(content =>content.classList.remove('active'))
        const clicked = e.target.getAttribute('data-target');
       this.container.querySelector(clicked).classList.add('active')
     }
}


export {Tabs as default}