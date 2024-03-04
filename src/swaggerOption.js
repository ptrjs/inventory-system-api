const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Inventory System API",
        version: "1.0.0",
        description: "API for Inventory System Project, made using Express JS and documented by Swagger.",
        contact:{
            name: "Peter Jose",
            url: "https://github.com/ptrjs"
        }
      },    
      servers: [
        {
          url: "https://inventory-system-p75j.onrender.com/v1",
        },
      ],
      
    },
    apis: ['./src/routes/v1/*.js'],
  };
  
  module.exports = swaggerOptions;
  