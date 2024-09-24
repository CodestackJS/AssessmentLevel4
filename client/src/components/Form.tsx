import { manageList } from "./Contact";



interface FormProps{
    form: manageList;
    handleDelete: (id:number) => void,
    editContact: (id:number) => void
}


const Form = ({form, editContact, handleDelete}: FormProps) => {
    
    

  return (
    <>
    <li>
    

    <button onClick={() => handleDelete()}> Delete</button>




    </li>
    
    </>
  )
}

export default Form