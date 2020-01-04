module.exports = function(schema, params){
  try{
    const schemaOptions = {
      strict: true,
      abortEarly: true,
      stripUnknown: true,
      recursive: true
    };
    schema.validateSync(params, schemaOptions);
  }catch(ex){
    return ex;
  }
};
