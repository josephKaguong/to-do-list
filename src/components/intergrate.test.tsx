import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import { logRoles } from '@testing-library/dom';
import Home from './todo'

describe('todo works correctly',()=>{
    it('works',async()=>{
        
        user.setup()
        const {container}=render(<Home/>)
        logRoles(container)
        const input=screen.getByPlaceholderText(/what's new?/i)
        user.type(input,'coding{enter}')        
        

       
       
        expect(input).toHaveValue('')
        

       

    })
})