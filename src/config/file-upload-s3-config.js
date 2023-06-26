//all the file upload logic
import multer from "multer";
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

aws.config.update({
    region: process.env.AWS_REGION,
    secretAccessKey: process.env.ACCESSKEY, //get it from aws,
    accessId: process.env.ACCESSID//also get it from aws
});  //this is for setting aws config

const s3 = new aws.S3() // creating a s3 object

const upload = multer({  //upload set up using multer
    storage: multerS3({
        s3: s3,
        bucket: process.env.Bucket_name, //get the bucket name from aws
        acl: 'public-read',
        metadata: function (req, file, cb){
            cb(null, {fieldName: file.fieldname})
        },
        key : function (req, file, cb){
            cb(null, Date.now().toString())
        }
    })
});

export default upload;