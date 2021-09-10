import React, {useState, useEffect} from "react";
import api from "../../lib/api"

import {
        Form, 
        FormGroup,
        Label,
        Input,
        Button,
        Col
} from "reactstrap"

import { useHistory } from 'react-router-dom'

const CreatePost = () => {
    const [ postData, setPostData] = useState({ likes:0 , comments : [] })
    let history = useHistory()

    const inputHandler = event => {
        const {name, value}  = event.target  
        //console.log({...postData, [name]: value  })
        setPostData( {...postData, [name]: value  }  )
    }

    const buttonHandler = async () => {
        let result =  await  api.createPost(postData)
        history.push("/")
    }
    
    return(
        <Col xs="12" md="6">
            <Form>
                    <FormGroup>
                        <Label >Autor</Label>
                        <Input type="text" name="autor"  onChange= {inputHandler}  placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Título</Label>
                        <Input type="text" name="title" onChange={ inputHandler }  placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Contenido</Label>
                        <Input type="text" name="content" onChange={ inputHandler }  placeholder="" />
                    </FormGroup>
                    <FormGroup>
                        <Label >Imagen</Label>
                        <Input type="text" name="urlImage"  onChange={ inputHandler }  placeholder="" />
                    </FormGroup>
                    <Button  onClick={buttonHandler} className="mt-3 bg-success" >Guardar</Button>                      
            </Form>
        </Col>
    )
}

export default CreatePost