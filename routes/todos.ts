import {Router} from 'express';
import { Todo } from '../models/todo';
const todos:Todo[]=[];
const router=Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos});
})
router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text
    }
    todos.push(newTodo);
})
router.delete(':id',(req,res,next)=>{
    const {id} =req.params;
   const filteredTodos:Todo[]=todos.filter((todo)=>todo.id!==id);
   
})
export default router;