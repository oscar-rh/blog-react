export default {


         async createPost(postData){

            let result = await fetch( "https://blog12gk-default-rtdb.firebaseio.com/posts/.json"  ,  {

                method: "POST", 
                headers:{ "Content-Type":"application/json"},
                body: JSON.stringify (postData)

            } )
            
            return await result.json()
        }



}