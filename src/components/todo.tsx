import { useState } from "react";
import Design from "./tododesign";
import type { Todo } from "./types";


const Home = () => {
    const [todo,setTodo]=useState<string>('')
    const [todos,setTodos]=useState<Todo[]>([])

    const handleAdd=(e:React.FormEvent)=>{
        e.preventDefault()
        setTodos([...todos,{id:Date.now(),todo,isdone:false}])
        setTodo('')
    }

    return (  
        <div className=" mx-auto text-center w-[screen]">
            <h1 className='font-inter font-bold text-[30px] leading-[36px] tracking-[15%]'>TODO</h1>
         
         <form onSubmit={handleAdd} className=' flex items-center mx-auto w-[370px] md:w-[700px] lg:w-[800px] h-[65px] border-[1px] border-green-500 rounded-[20px]'>
            <input 
                className='w-[300px] md:w-[500px] lg:w-[700px] h-[60px] rounded-5xl outline-none px-4 '
                type="text" 
                placeholder="What's new?"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className='w-[50px] h-[50px] rounded-full bg-green-400 active:w-[45px] active:h-[45px]'>Add</button>
        </form>

        <section className="TODOS mt-[30px] flex flex-col items-center w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1300px]">
             {
                todos.map((t)=>(
                    <div data-testid='todos' key={t.id} className="">
                      <Design todo={t} todos={todos} setTodos={setTodos}/>
                    </div>
                ))
             }
        </section>
        </div>
    );
}
 
export default Home;