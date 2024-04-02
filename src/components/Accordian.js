import "../styles/Accordian.css"
import FAQ from '../components/FAQ'

function Accordian(){
    return(
        <>
         <h1>Frequently asked questions</h1>
         <div className="accordian">
            <FAQ title='Title1'/>
            <FAQ title='Title2'/>
            <FAQ title='Title3'/>
         </div>
        </>
       
    )
}

export default Accordian;