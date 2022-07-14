
import mongoose  from 'mongoose';



const Connection = async () =>
{
    const URL="mongodb+srv://Pratham20:Pratham%4020@e-commerce.az2yg.mongodb.net/PROJECT0?retryWrites=true&w=majority";
                      
    try{

        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database Connected Successfully');
    }
    catch(error)
    {
        console.log('Error: ',error.message);
    }
}

export default Connection;