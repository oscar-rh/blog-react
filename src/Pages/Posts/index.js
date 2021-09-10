import React, {useState, useEffect} from "react";
import api from '../../lib/api' 

import {  Card, CardImg, CardBody, CardTitle, CardText, Button, Col  } from 'reactstrap'

import { Link} from 'react-router-dom'


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
                       <Col xs="12" md = "3">
                        <Card Key= { postKey}>
                          <CardImg top width="100%"  src={post.urlImage} alt="Card image cap" />
                          <CardBody>
                            <CardTitle tag="h5">{post.title}</CardTitle>                           
                            <CardText>{post.content}</CardText>
                            <Link to={`detail-post/${postKey}`}>
                                <Button>Detalle</Button>
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