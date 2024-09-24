import { useState } from "react"



export interface manageList {
    id: string | number;
    name: string;
    phoneNumber: string;
}

const Contact = () => {

    const [input, setInput] = useState("")
    const [list, setList] = useState<manageList[]>([]);

    const editList = (newEdit: string) => {
        const newList: manageList = {
            id: Math.random(),
            name: newEdit,
            phoneNumber: ""
        };
        setList([...list, newList]);
        setInput("");
    }

    const handleDelete = (id:number) => {
        setList(list.filter((lists) => lists.id !== id));
    }

    const editContact = (id:number) =>{
        setList(list.map(lists => lists.id ===id? {...lists, phoneNumber: } :lists))
    }

  return (
    <>
    <div className="myContainer">
        <div className="row">
            <h1>Contact List</h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />

            <button className="btn btn-primary" onClick={() => editList(input)}>Edit</button>
            <Form handleDelete={handleDelete}/>

            <ul>
                




            </ul>


        </div>


    </div>
    
    
    </>
  )
}

export default Contact