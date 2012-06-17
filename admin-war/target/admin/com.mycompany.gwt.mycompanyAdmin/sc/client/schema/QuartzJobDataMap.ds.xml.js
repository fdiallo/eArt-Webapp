isc.DataSource.create({
    ID:"QuartzJobDataMap",
    dbName:"ANY_DATA",
    serverConstructor:"com.isomorphic.scheduler.QuartzJobDataMap",
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
        key:{
            name:"key",
            required:true,
            type:"string"
        },
        value:{
            name:"value",
            required:true,
            type:"string"
        }
    }
})
