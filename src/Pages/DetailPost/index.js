import React, {useState, useEffect} from "react";
import api from "../../lib/api"
import { useParams} from "react-router-dom"
import { Card, CardBody, CardTitle,  CardText, Button, Col, CardImg, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap'
import "./style.scss"

const DetailPost = () =>{

    const [post, setPost] = useState({})
    const [comment, setComment] = useState("")
    const postId = useParams().id
 

    useEffect ( async () => {
        const postResult =  await api.getPostById( postId)        
        setPost(postResult)
    }, [])

    const likeHandler = (async () => {     
        const newPost = {...post}
        newPost.likes = newPost.likes + 1 
        let result = await api.updatePost(newPost,postId)        
        setPost(result)
    })

    const saveComment = (async () => {     
        let newPost = {...post}
        if (newPost.comments){
             newPost.comments.push(comment)
            }else{
                newPost.comments = [comment]
            }
        let result = await api.updatePost(newPost,postId)        
        setPost(result)
        setComment("")        
    })

    const commentHandler = event => {
        const {value}  = event.target          
        setComment(value)
    }

    return (
        <>         
        { 
                <>  
                    <Col xs="12" md="6" className="mt-4">
                        <Card >
                        <CardImg top width="100%" src={post.urlImage} alt="Card image cap" className="cover" />
                        <CardBody>
                            <CardTitle tag="h5">{post.title}</CardTitle>                           
                            <CardText>{post.content}</CardText>
                            <CardText>Autor: {post.autor}</CardText>
                            <div className="d-flex justify-content-between align-items-center " >
                                <CardText>Likes: { post.likes  }</CardText>                                  
                                <Button onClick={ likeHandler } className="bg-success" >Dale Like</Button>                                
                            </div>
                        </CardBody>
                        </Card>
                    </Col>
            
                    <Col xs="12" md="6" className="mt-3">
                        <FormGroup>
                            <Label for="exampleText">Comentarios</Label>
                            <Input type="textarea" name="text" id="exampleText" onChange={commentHandler} value={comment} />
                            <Button className="mt-3 bg-success" onClick={saveComment} >Grabar</Button>   
                        </FormGroup>

                        <ListGroup className="mt-3">
                            {                                     
                                post.comments && post.comments.map( (comment, index) => <ListGroupItem Key={index} >{comment}</ListGroupItem> )                         
                            }                            
                        </ListGroup>                    
                    </Col>
                </>
         }                     
        </>
    )
}
export default DetailPost