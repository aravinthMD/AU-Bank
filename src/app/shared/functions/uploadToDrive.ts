
import{UserService } from 'src/app/shared/services/user.service';

import{uploadType} from 'src/app/shared/models/utill-model';

export function uploadToAppiyoDrive(file : File,type : string,userService :  UserService ) : uploadType{

    let uploadObject : uploadType = {
        uploadFlag : false,
        documentUploadId : null,
        errorMsg : null
    };

        userService.uploadToAppiyoDrive(file).subscribe(
            (response) =>{
                console.log("Response from upload drive"+response);
                if(response["ok"]){
                    if(type == "pdf"){
                        uploadObject.uploadFlag = true;
                        uploadObject.documentUploadId = response["info"]["id"];
                        return uploadObject;
                    }
                    else if(type == "csv"){
                        uploadObject.uploadFlag = true;
                        uploadObject.documentUploadId = response["info"]["id"];
                        return uploadObject;
                    }
                }else{
                    uploadObject.uploadFlag  = false;
                    uploadObject.errorMsg  = response["errorMsg"];
                    return uploadObject;
                }
            },(error) =>{
                uploadObject.uploadFlag  = false;
                uploadObject.errorMsg = error;
                return uploadObject
            }
        )
        return uploadObject;
}

function setUploadId(response :  any,type : string){
    if(type === "pdf"){
        
    }
}