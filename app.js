
const  yargs=require("yargs")
const studentData=require("./studentData")
 
yargs.command({
    command:"add",
    describe:"adding an item",
    builder:{
        id:{
            describe:"adding id",
            demandOption:true,
            type:"string"
        },
        fname:{
            describe:"adding first name",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"adding last name",
            demandOption:true,
            type:"string"
        },
        city:{
            describe:"adding city ",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"adding age",
            demandOption:true,
            type:"string"
        },
      
    },
    handler:(x)=>{
        studentData.addPerson(x.id,x.fname,x.lname,x.city,x.age)
    }
})

yargs.command({
    command:"delete",
    describe:"deleting an item",
    builder:{
        id:{
            describe:"delete data",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        studentData.deleteData(x.id)
    }
})

yargs.command({
    command:"read",
    describe:"reading an item",
    builder:{
        id:{
            describe:"read data",
            demandOption:true,
            type:"number"
        }
    },
    handler:(x)=>{
        studentData.readData(x.id)
    }
})

yargs.command({
    command:"list",
    describe:"showing an item",
    
    handler:(x)=>{
        studentData.showData()
    }
})

yargs.parse()