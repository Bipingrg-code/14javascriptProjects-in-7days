window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-form');
    const input  = document.querySelector('#submit-task');
    const listEle = document.querySelector('#task')

    form.addEventListener('submit', (e) => {
        e.preventDefault();
       // var task = input.value
        if (form.value == null) {
            alert("fill out the task")
        }
       const task_ele = document.createElement("div");
       task_ele.classList.add("task");
      

       const task_content = document.createElement("div");
       task_content.classList.add("content"); 

       task_ele.appendChild(task_content)

       const task_input_el = document.createElement("input");
       task_input_el.classList.add("text");
       task_input_el.type = "text";
       task_input_el.value = form.value;
    
      

       task_content.appendChild(task_input_el)

       listEle.appendChild(task_ele)
    })
      
})
