import React, {useState, useEffect} from "react";
import api from '../../lib/api' 
import {  Card, CardImg, CardBody, CardTitle, CardText, Button, Col  } from 'reactstrap'
import { Link} from 'react-router-dom'
import "./styles.scss"

const Posts = () =>{
    const [ posts , setPosts] = useState({})

    useEffect (  async () => {
        const postDB  = await  api.getPost()        
        setPosts(postDB)
    }, [])   

    return (
        <>         
            {
                Object.keys(posts).map( postKey =>  {
                    const  post  = posts[postKey]
                    return (  
                       <Col xs="12" md = "4">
                        <Card Key= { postKey} className="mt-4">                          
                            <CardImg top width="100%"  src={post.urlImage} alt="Ups...aqui iba una imagen te quedarás con las ganas" className="imagepost" />                          
                          <CardBody>
                            <CardTitle tag="h5">{post.title}</CardTitle>                           
                            <CardText>{post.content.substring(0,30)}...</CardText>
                            <Link to={`detail-post/${postKey}`}>
                                <Button className="bg-success" >Detalle</Button>
                            </Link>
                          </CardBody>
                        </Card>
                      </Col>
                    )
                })
            }
        </>      
    )
}
export default Posts