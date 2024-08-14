import { useState,useRef } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { Todo } from "./types";

interface Props{
    todo:Todo
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Design = ({todo,todos,setTodos}:Props) => {
    const [edit,setEdit]=useState<string>(todo.todo)
    const [editting,setEditting]=useState<boolean>(false)
    const [done, setDone]=useState<boolean>(false)

    const inputRef=useRef<HTMLInputElement>(null)

    const handleEdit=()=>{
        setEditting(true)

    }
    const handleDelete=(id:number)=>{
        setTodos(todos.filter((t)=>t.id !==id))
        
    }

    const handleComplete=()=>{
        setDone(!done)
    }
    
        
    
    const handleUpdate=(e:React.FormEvent)=>{
        e.preventDefault() 
        if(inputRef.current !==null){
            inputRef.current.focus() 

        }
              
        setEditting(false)
        todo.todo=edit

    }

    return (  
        <div className="design ">
            <section className="flex justify-between items-center my-2 w-[400px] md:w-[600px] h-[80px] px-6 bg-yellow-400 rounded-2xl">
               { editting ? ( <form onSubmit={handleUpdate}>
                    <input 
                       ref={inputRef}
                        className="outline-none"                        
                       type="text"
                       value={edit}
                       onChange={(e)=>setEdit(e.target.value)}
                     />
                </form>) :(
                done ?
                <p className="line-through">{todo.todo}</p>
              : <p className="font-inter font-medium text-[24px] leading-[32px] tracking-[10%]">{todo.todo}</p>
            )}
               
                <div className="flex gap-6">
                    <CiEdit data-testid="edit" onClick={handleEdit} className="text-4xl cursor-pointer" />
                    <MdDelete data-testid="remove" onClick={()=>handleDelete(todo.id)} className="text-4xl cursor-pointer"  />
                    <MdDownloadDone  data-testid="complete" onClick={ handleComplete} className="text-4xl cursor-pointer"  />
                </div>
            </section>
        </div>
    );
}
 
export default Design;