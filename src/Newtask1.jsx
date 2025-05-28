import './Components.css'


function Newtask1(){
  return(
    <div style={{backgroundColor:"#052a80", textAlign:"center",height:"50vh",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",color:"white"}}>
      <img src="react.svg"/>
      <h1>Start Building Today</h1>
      <div style={{padding:"10px"}}>
      <button style={{padding:"10px 25px",borderRadius:"10px",marginRight:"10px",backgroundColor:"#057080",border:"none"}}>Start Building</button>
      <button style={{padding:"10px 25px",borderRadius:"10px",border:"none"}}>Contact Sales</button>
      </div>
    </div>
  )
}
export default Newtask1