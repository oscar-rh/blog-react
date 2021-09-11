export default {
         async createPost(postData){

            let result = await fetch( "https://blog12gk-default-rtdb.firebaseio.com/posts/.json"  ,  {
                method: "POST", 
                headers:{ "Content-Type":"application/json"},
                body: JSON.stringify (postData)
            } )            
            return await result.json()
        } ,
        async getPost(){
            let result = await fetch( "https://blog12gk-default-rtdb.firebaseio.com/posts/.json"  )            
            return await result.json()
        } ,
        async getPostById(postId){
            let result = await fetch( `https://blog12gk-default-rtdb.firebaseio.com/posts/${postId}.json`  )            
            return await result.json()
        } ,        
        async updatePost(postData,id){

            let result = await fetch( `https://blog12gk-default-rtdb.firebaseio.com/posts/${id}.json`  ,  {

                method: "PATCH", 
                headers:{ "Content-Type":"application/json"},
                body: JSON.stringify (postData)

            } )            
            return await result.json()
        }     
}