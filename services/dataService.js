function studentAvr(){
 fetch('localhost:3001/api/students')
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
    })
}