import react, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";
import Cardsdata from "./CardsData";

const CardsDetails=()=>{
    const params = useParams()
    const [data,setData] = useState({});
    useEffect(()=>{
       
        let req = Cardsdata.filter((el)=> el.id== params.id)
      
        setData(req[0])

    },[])
  
    return (
        <>
        <div className="container mt-2"> 
        <h2 className="text-center">Details Page</h2>

        <section className="container mt-3">
       <div className="iteamsdetails">
           <div className="items_img">
             <img src={data.imgdata} alt=""></img>
             <p >{data.product_name}</p>
           </div>
           <div className="details">
            <Table >
                <tr>
                    <td>
                        <p><strong>url--:</strong>{data.url}</p>
                        <p><strong>quantity--:</strong>{data.quantity}</p>
                        <p><strong>packaging--:</strong>{data.packaging}c</p>
                        <p><strong>serving_size--:</strong>:{data.serving_size}</p>
                        <p><strong>serving_size--:</strong>{data.serving_size}</p>
                        <p><strong>energy_100g--:</strong>{data.energy_100g}</p>
                        <p><strong>fat_100g--:</strong>{data.fat_100g}</p>
                        <p><strong>saturated_fat_100g--:</strong>{data.saturated_fat_100g}</p>
                        <p><strong>monounsaturated_fat_100g--:</strong>{data.monounsaturated_fat_100g}</p>
                        <p><strong>proteins_100g--:</strong>{data.proteins_100g}</p>
                        <p><strong>salt_100g--:</strong>{data.salt_100g}</p>
                    </td>
                </tr>
            </Table>
           </div>
       </div>
        </section>
        </div>
        </>
    )
}


export default CardsDetails