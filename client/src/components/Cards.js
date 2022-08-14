import react,{useState} from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardsData from "./CardsData"
import "./style.css"
import {  useNavigate } from "react-router-dom";

const Cards=()=>{


    const navigate = useNavigate();
  const [data,setData]=useState(CardsData)
  console.log(data)

  const openDetails= (id)=>{
    console.log(id)
    navigate(`/productDetails/${id}`)
  }

    return (
        <div className="container mt-3">
        <h2 className="text-center">Products</h2>

        <div className="row d-flex justify-content-center align-items-center">
            {
                data.map((element,id)=>{
                    return(

                        <>
                         <Card style={{ width: '22rem' ,border:"none"}} className='mx-2 mt-4 card_style' onClick={()=>openDetails(element.id)}>
      <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3"/>
      <Card.Body>
        <Card.Title style={{fontSize:"17px"}}>{element.product_name}</Card.Title>
        <Card.Text>
         <p style={{fontSize:"12px"}}>{element.generic_name}</p>
        </Card.Text>

        <div className="button_div d-flex justify-content-center" >
        <Button variant="primary"  className="col-lg-12">Product detail</Button>
        </div>
      
      </Card.Body>
    </Card>
                        
                        </>
                    )
                })
            }
     

        </div>


        </div>
    )
}

export default Cards