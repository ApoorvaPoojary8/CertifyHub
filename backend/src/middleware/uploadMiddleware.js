import multer from "multer";

const storage = multer.diskStorage({

  destination: (req,file,cb)=>{

    if(file.fieldname==="csv"){
      cb(null,"uploads/csv");
    }
    else{
      cb(null,"uploads/templates");
    }

  },

  filename:(req,file,cb)=>{
    cb(
      null,
      Date.now()+"-"+file.originalname
    );
  }

});

const upload = multer({storage});

export default upload;