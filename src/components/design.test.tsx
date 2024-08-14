import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import Design from './tododesign'

const mockTodo={id:1, todo:'code',isdone:false}
const mockTodos=[mockTodo]
const mocksetTodos=jest.fn()
describe('design',()=>{
    it('icons in the design work correctly',async()=>{
        render(<Design todo={mockTodo} todos={mockTodos} setTodos={mocksetTodos}/>)
        const remove=screen.getByTestId('remove')
        const edit=screen.getByTestId('edit')
        const complete=screen.getByTestId('complete')

        await user.click(remove)
        expect(mocksetTodos).toHaveBeenCalledWith([])

        await user.click(complete)
        expect(screen.getByText('code')).toHaveClass('line-through')

        await user.click(edit)
        const input=screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
        await user.type(input, '{backspace}ing{enter}')
        expect(input).toHaveValue('coding')
        expect(input).not.toBeInTheDocument()
    })
})