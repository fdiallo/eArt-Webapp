isc.DataSource.create({
    ID:"QuartzJobs",
    dbName:"ANY_DATA",
    serverConstructor:"com.isomorphic.scheduler.QuartzJobs",
    fields:{
        group:{
            name:"group",
            primaryKey:true,
            required:true,
            type:"string"
        },
        name:{
            name:"name",
            primaryKey:true,
            required:true,
            type:"string"
        },
        description:{
            name:"description",
            type:"string"
        },
        "class":{
            name:"class",
            required:true,
            type:"string"
        },
        dataMap:{
            name:"dataMap",
            type:"string"
        },
        state:{
            canEdit:false,
            name:"state",
            type:"intEnum",
            valueMap:{
                "0":"Normal",
                "1":"Paused",
                "2":"Complete",
                "3":"Error",
                "4":"Blocked",
                "-1":"None"
            }
        },
        startTime:{
            name:"startTime",
            type:"datetime"
        },
        endTime:{
            name:"endTime",
            type:"datetime"
        },
        cronExpression:{
            name:"cronExpression",
            type:"text"
        },
        timeZone:{
            name:"timeZone",
            type:"text"
        }
    }
})