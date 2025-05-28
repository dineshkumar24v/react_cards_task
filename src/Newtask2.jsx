
import { HiOutlineCube } from "react-icons/hi2";
import { CiImageOn } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";
import { FaGears } from "react-icons/fa6";

export function Newtask2(){
  return(
    <div style={{display:"flex"}}>
      <h1>Resources</h1>
      <div className="resource_cards" style={{border: "1px solid  black",padding:"1rem",textAlign:"center"}}>
        <HiOutlineCube size={30} style={{border:"1px solid black",padding:"3px",borderRadius:"5px"}}/>
        <h4>Objects</h4>
        <p>Learn about the object model and how to create, read, update, and delete Objects.</p>
      </div>
      <div className="resource_cards">
        <CiImageOn size={30} style={{border:"1px solid black",padding:"3px",borderRadius:"5px"}}/>
        <h4>Media</h4>
        <p>Learn about the Media model and how to create, read, update, and delete Objects.</p>
      </div>
      <div className="resource_cards">
        <FaGears size={30} style={{border:"1px solid black",padding:"3px",borderRadius:"5px"}}/>
        <h4>Quiries</h4>
        <p>Learn about the query methods to fetch Objects and media from your Bucket.</p>
      </div>
      <div className="resource_cards">
        <SlSettings size={30} style={{border:"1px solid black",padding:"3px",borderRadius:"5px"}}/>
        <h4>Object Types</h4>
        <p>Learn abouut the object type model and how to create, read, update, and delete Object types.</p>
      </div>
    </div>
  )
}
