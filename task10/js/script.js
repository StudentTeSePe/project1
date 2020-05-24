window.addEventListener('DOMContentLoaded', function(){
    'use strics';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }

    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }

    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;

                }
            }
        }
    });


    //Timer
class TimeRemaining {
    constructor (enddate) {
        this.deadline = enddate;
        this.timer = document.getElementById('timer'),
        this.hours = timer.querySelector('.hours'),
        this.minutes = timer.querySelector('.minutes'),
        this.seconds = timer.querySelector('.seconds')
        
    }

    getTimeRemaining() {
        let t = Date.parse(this.deadline) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        
        return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };   
    }
    
    setClock() {
            this.timeIntervsl = setInterval(this.updateClock.bind(this), 1000);
     }
    updateClock(){
            let t = this.getTimeRemaining();
            this.hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;
            this.minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
            this.seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;

            if (t.total <= 0) {
                clearInterval(this.timeIntervsl);
                this.hours.textContent = '00';
                this.minutes.textContent = '00';
                this.seconds.textContent = '00';
            }
        }
    //}
}

let tRemain = new TimeRemaining('2020-05-22 17:50:00');
tRemain.setClock();

class ModalWindow {
    constructor() {
        this.overlay = document.querySelector('.overlay'),
        this.close = document.querySelector('.popup-close'), 
        this.btnsplash = null;

        this.close.addEventListener('click', function() {
            this.overlay.style.display = 'none';
            this.btnsplash.classList.remove('more-splash');
        document.body.style.overflow = '';
    }.bind(this));
    }

    show(btn){
        this.overlay.style.display = 'block';
        btn.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
        this.btnsplash = btn;
    }

    
}
    //Modal
    let ShowModalWindow = new ModalWindow();
        more = document.querySelector('.more'),
        descbtn = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function() {
        ShowModalWindow.show(this);
    });

    for(let i = 0; i < descbtn.length; i++) {
        descbtn[i].addEventListener('click', function() {
            ShowModalWindow.show(this);
        });
    };


    class Options {
        constructor(height, width, bg, fontSize, textAlign){
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }

        CreateDiv(msgtext){
            let div = document.createElement('div');
            
            div.textContent = msgtext;
            div.style.cssText = `background-color:${this.bg};height:${this.height}px;width:${this.width}px;font-size:${this.fontSize}px;text-align:${this.textAlign}`;
            document.body.appendChild(div);

        }
    }

    let objectOptions = new Options(50,500,'red',14,'center');
    objectOptions.CreateDiv('Hello div element');

})