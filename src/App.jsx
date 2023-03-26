import React from "react";
import { GoDiffAdded, GoArrowRight } from 'react-icons/go';





class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      todo: [],
    

    }
  }
  
  componentDidMount(){
    let data=localStorage.getItem('Todo_List')
    console.log(data)
    if(data== null){
      this.state.todo=[]
    }
    else{
      this.state.todo=JSON.parse(data)
    }


    
    this.setState({})
  }
  handle = (val) => {
    console.log(val)
    this.setState({
      value: val
    })

  }

  submit = () => {
    let obj = {
      title: this.state.value,
      s: 0
    }
    
      this.state.todo= [...this.state.todo, obj]


    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
    this.setState({

      value: ""
    })

    // console.log(this.state.todo)

  }


  editbtn = (ind) => {
    
    for (var i = 0; i < this.state.todo.length; i++) {
      this.state.todo[i].s = 0

    }
    this.state.todo[ind].s = 1
    this.setState({

    })
  }



  setnewtext=(val,ind)=>{
    this.state.todo[ind].title=val
       this.setState({
         
       })
   
   
   }

   updbtn = (i)=>{
    this.state.todo[i].s=0
    localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

    this.setState({
      
    })
}


dletbtn = (ind)=>{
  this.state.todo.splice(ind,1) //delete one element
  localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
  this.setState({})

}


  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input   value={this.state.value} type="text" onChange={(e) => this.handle(e.target.value)} />
        <button onClick={() => this.submit()}>
          <GoDiffAdded />
        </button>
        <ul>
        {  this.state.todo.map((v, i) => {

return (
  v.s == 0 ?
    <>
      <li key={i} style={{ listStyle: "none" }}>
        <i><GoArrowRight /></i>{v.title}
        <button onClick={() => this.editbtn(i)}>edit</button>
        <button  onClick={() => this.dletbtn (i)}     >delete</button>

      </li>
      </>
      :
      <li key={i} style={{ listStyle: "none" }}>
        <i><GoArrowRight /></i><input value={v.title} onChange={(e)=>this.setnewtext(e.target.value,i)} type="text" />
        <button onClick={() => this.updbtn(i)}>update</button>

       
      </li>
  
)

         })}

          
        </ul>
      </div>
    )
  }
}

export default App