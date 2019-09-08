'use strict';

     



    const DomElement = function (selector, height, width, bg, fontSize){

            this.selector = selector;
            this.height = height;    
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;

        };



        DomElement.prototype.addItem = function () {

            // let nameClassOrId = prompt('Введите название класса через точку или id через решетку', '.className или #idName');
            
            if ( this.selector[0] == '.'){

                let newDiv = document.createElement("div");
                document.querySelector('body').appendChild(newDiv);               
                newDiv.className = this.selector;
                newDiv.innerHTML = 'любой текст';
                /*newDiv.style.cssText = 'height: this.height;
                                        background-color: this.bg;
                                        width: this.width;
                                        fontSize: this.fontSize;'; */
                newDiv.style.height=this.height;
                newDiv.style.width=this.width;
                newDiv.style.background=this.bg;
                newDiv.style.fontSize=this.fontSize;
                console.log('newDiv: ', newDiv);

            }     if ( this.selector[0] == '#'){
                let newId = document.createElement("p");
                document.querySelector('body').appendChild(newId);  
                newId.innerHTML = 'любой текст';
                //newId.style.cssText = 'height:this.height; background-color:this.bg; width: this.width; font-size: this.fontSize';
                newId.style.height=this.height;
                newId.style.width=this.width;
                newId.style.background=this.bg;
                newId.style.fontSize=this.fontSize;
                console.log('id: ', newId);
            }

        };
        

        const element = new DomElement('.prom', '200px', '300px' ,'black','30px');
        element.addItem();



        

   


  



                               
      
