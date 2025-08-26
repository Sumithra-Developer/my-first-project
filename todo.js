const inputtext=document.getElementById("input1")
        const list=document.getElementById("list1")
        
        function addlist(){
        if(input1.value==""){
        alert("you must write something")
    }
        else
        {
        // add list from input 
            const li=document.createElement("li")
            li.innerHTML=input1.value
            // add li to ul
            list.appendChild(li)

        // clear input text
            document.getElementById("input1").value="" 

        // create delete button    
            const del=document.createElement("button")
            del.innerHTML="X"
            // add delete button to li
            li.appendChild(del)
            
            del.onclick=function(){
            li.remove(del)
        }

        // It make strickout while clicking the list
    
            li.onclick=function(){
            li.style.textDecoration="line-through"
        }}}

       