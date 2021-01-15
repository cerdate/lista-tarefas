let data =[] /* criando array , a posição do array semmpre começa por zero 

   podemos criar JSON {
       id:1,
       title:"Estudar html"
   }
*/

function rendeTodo(){ /*função rende todo para o for each  */
    document.querySelector('.todo').innerHTML=''; /*limpa todo  */


data.forEach(task => {  /*colocando array que vai percorrer, com  uma função for each   */


     let li = document.createElement('li'); /* uma variavel li , criando elemento li que vai renderizar na  página */

     /* recebendo uma template que vai aparecer na tela do li */
     li.innerHTML = `                       
                    <input type="checkbox" id="task-${task.id}"> 
                    <label for="task-${task.id}">${task.title}</label> 
                    <button type="button">x</button>
                     `;

    li.querySelector('input').addEventListener("change", e =>{ /* dentro tag li vou procurar input e adicionar evento change*/

        if (e.target.checked) {       /*se tarrget tiver chekado for verdadeiro */
            li.classList.add('complete'); /*adiconar classe */
        }else { 
            li.classList.remove('complete'); /*remove class*/
        }
    });


     li.querySelector('button').addEventListener('click', e => { /*selecionar li > button adc escutar function */

       let button = e.target;
       let li = button.parentNode;
       let input = li.querySelector('input');
       let id = input.id;
       let idArray= id.split('-');
       let todoID = idArray[1];
       let title = li.querySelector('label').innerText;

       if(confirm(`Deseja realmente excluir a tarefa ${title}?`)) {

       

       data = data.filter(task => task.id !== parseInt(todoID));

       rendeTodo();
  
        }
     });
       

     document.querySelector('.todo').append(li);/*pega classe .todo(ul) e adicionar nosso li */
  
    });

}

document.querySelector('#new-task').addEventListener('keyup', e => { /* selecionar ID new task ,com evento keyup que solta a tecla */
    if (e.key ==='Enter') { /*usando propriedade (e) key para identficar a tecla ENTER  */

        data.push({               /*fazer push no array, pega valor id e valor title adicionar    */
             id:data.length+1, 
             title:e.target.value
        });

        e.target.value =""; /*igual vazio ou seja vai zerar valor target   */
        
        rendeTodo();
    
    }

});

 
rendeTodo();