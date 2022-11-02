import {saveTask,getTask,onSnapshot,collection,db,deleteeli,editTarea,getActuali} from './firebase.js'

const taskForm = document.getElementById('task-form')
const tasksContainer = document.getElementById('tasks-container')

let editStatus = false;
let id = '';


window.addEventListener('DOMContentLoaded',async ()=> {
    const querySnapshot  = await getTask()

    onSnapshot(collection(db, 'Estudiante'),(querySnapshot)=> {

         let html = ''
         querySnapshot.forEach((doc) => {
       
        const task =doc.data()
        html += `
            <div>

            <h3>${task.Nombre}</h3>
            <p>${task.Apellido}</p>
            <button class='btn-delete'data-id="${doc.id}">Delete</button>
            <button class='btn-edit'data-id="${doc.id}">Edit</button>
            </div>
        
        `
        

    })

    tasksContainer.innerHTML = html

    const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')
    btnsDelete.forEach(btn => {
        btn.addEventListener('click',({target: {dataset}}) => {
            deleteeli(dataset.id)
        })
    })

    const btnEdit = tasksContainer.querySelectorAll('.btn-edit')
    btnEdit.forEach(btn => {
        btn.addEventListener('click',async(e) =>{
            //console.log(e.target.dataset.id)
            const doc = await editTarea(e.target.dataset.id)
            const task =  doc.data()
            taskForm['id-nombre'].value = task.Nombre
            taskForm['id-apellido'].value = task.Apellido

            editStatus = true
            id = doc.id

            taskForm['btn-task-form'].innerText = 'Update'
        })
    })
   
 })
    

})



taskForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    console.log('submited')

    const Nombre = taskForm['id-nombre']
    const Apellido = taskForm['id-apellido']

  

    
    if (!editStatus){
        saveTask(Nombre.value, Apellido.value);
    }else{
        getActuali(id,{
            Nombre :  Nombre.value,
           Apellido: Apellido.value
        });

        editStatus = false;
    }
    taskForm.reset();

})

