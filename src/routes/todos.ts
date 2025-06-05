import {Router} from 'express';
import { Todo } from '../models/todo';
type RequestBody={text:string};
type RequestParams={id:string};
const todos:Todo[]=[];
const router=Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos});
})
router.post('/todo',(req,res,next)=>{
    const body=req.body as RequestBody;
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:body.text
    }
    todos.push(newTodo);
    res.status(200).json({todos});
})
router.delete('/:id',(req,res,next)=>{
    const {id} =req.params as RequestParams;
  let index:number=todos.findIndex(todo=>todo.id===id);
  if(index!==-1){
todos.splice(index,1);
res.status(200).json({todos});
  }else{
    res.status(404).json({message:"not found "});
  }
  

})
router.put('/:id',(req,res,next)=>{
    const {id} =req.params as RequestParams;
    const {text}=req.body as RequestBody;
  let index:number=todos.findIndex(todo=>todo.id===id);
  if(index!==-1){
todos[index].text=text as string;
res.status(200).json({todos});
  }else{
    res.status(404).json({message:"not found "});
  }
  

})
export default router;