
class TeacherControllers{

    static display =async(req,res) => {
        try{
            res.send("hello teacher")
        }catch(err){
            console.log(err)
        }
    };
}

module.exports= TeacherControllers