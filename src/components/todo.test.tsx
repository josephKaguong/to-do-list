import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import Home from './todo'

const tasks=['code','test the todos', 'ps5','gym','child','great']

describe('todo',()=>{
    it('todo is rendered',async()=>{
        render(<Home/>)

        
        const input=screen.getByRole('textbox')
        const add=screen.getByRole('button')  
        
        for(const task of tasks){
            await user.type(input,task)
            await user.click(add)
        }
        
       
        const container=screen.getAllByTestId('todos')
        expect(input).toHaveValue('')
        expect(container).toHaveLength(6)



    })
})