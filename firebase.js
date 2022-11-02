    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
    import { getFirestore,
         collection,
         addDoc,
         getDocs,
         deleteDoc,
         onSnapshot,
         doc,
        getDoc,
        updateDoc
     } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBEDq_zUMz8i7R_W5PEC_ldYNx5tn_21Xk",
      authDomain: "copia-5d78b.firebaseapp.com",
      projectId: "copia-5d78b",
      storageBucket: "copia-5d78b.appspot.com",
      messagingSenderId: "899078977891",
      appId: "1:899078977891:web:2c5905908b73214a0bbb56",
      measurementId: "G-ETEVE7HDB3"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);



    const db =getFirestore()

    export const saveTask = (Nombre,Apellido,Titulo,Descripcion,id) => 
      addDoc(collection(db,'Estudiante'), {Nombre,Apellido,Titulo,Descripcion})

    
    export const saveClas = (Titulo,Descripcion) =>
      addDoc(collection(db,'Clases'),{Titulo,Descripcion})

    export const saveMatr = (idClase) =>
    addDoc(collection(db,'Matricula'),{idClase})

    

    export const getTask =  () => getDocs(collection(db,'task'))

    export const getOtros = () => getDocs(collection(db,'Clases'))

    export const onGetTasks = () => console.log('onGetTasks')

    //export const onGetTasks = (callback) =>onSnapshot(collection(db, "tasks"), callback);

    export const deleteeli = (id) => deleteDoc(doc(db, 'Estudiante', id))

    export { 
        onSnapshot,
        collection,
        db}
    export const editTarea = (id) => getDoc(doc(db,'Estudiante', id))

    export const getActuali = (id,newFile) => updateDoc(doc(db,'Estudiante', id),newFile)
    export const getSiactuali = (id,newFile) => updateDoc(doc(db,'Clases', id),newFile)

    

