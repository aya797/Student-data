
const fs =require("fs");
const addPerson=(id,fname,lname,city,age,grades)=>{
    const allData=loadDate()
     
     const duplicatedData=allData.filter((obj)=>{
        return obj.id=== id;
        
     })
    //  console.log(duplicatedData)
        if(duplicatedData.length==0 ){
             total = 0;
             average=0;
             if(grades.length==6 ){               
                    total =grades.reduce(function(acc,current){
                          return acc+current
                    },0)
                    average=total/6;
              
        allData.push({
            id:id,
            fname:fname,
            lname:lname,
            city:city,
            age:age,
            total:total,
           average:average

        })
        saveAllData(allData)
        console.log("Data saved successfully")
     }

     else{
        console.log("Please enter 6 degress")
     }
    }
     else{
        console.log("error duplicated id")
     }
}
const loadDate=()=>{
    try{
    const dataJson=fs.readFileSync("studentData.json").toString()
        return JSON.parse(dataJson)

}catch{
    return[]
}
}
const saveAllData=(allData)=>{
      const saveAllDataJson=JSON.stringify(allData)
      fs.writeFileSync("studentData.json",saveAllDataJson)
}

////////////////////////////////////////////////////////////////////////

const deleteData = (id)=>{
    const allData=loadDate()
    const dataToKeep=allData.filter((obj)=>{
       return obj.id !== id
    })

        saveAllData(dataToKeep)
        console.log("student is removed")
            // console.log(dataToKeep)

}

//////////////////////////////////////////////////////////////////////////

const readData=(id)=>{
    const allData=loadDate()
    const itemNeeded=allData.find((obj)=>{
        return obj.id==id
    })
    if(itemNeeded){
    console.log(itemNeeded)
}
else{
    console.log("student not found")
}}
////////////////////////////////////////////////////////////////
const showData=()=>{
    const allData=loadDate()
    allData.forEach((obj)=>{
        console.log(obj.fname,obj.city,obj.age)

    })
}

module.exports={
    addPerson,
    deleteData,
    readData,
    showData,
}
