
import {validateObj} from 'src/app/shared/models/utill-model'
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';



export function csvFileValidator(csvParser : NgxCsvParser,files : FileList,templateMessage :  string) : validateObj {
    let csvObj : validateObj = {
        errorMsg : "",
        errorString : "",
        validateFlag : false,
    };
    let errorCountArray : string[] =[];
    const arr : any[] = validatorMethod(templateMessage);
    let stringErrorArray : string =  '';

    

    csvParser.parse(files[0],{header : false,delimiter : ","})
    .pipe().subscribe((result : Array<any>) => {
        console.log("Result",result);

        let fileHeaderArray : any[] = result ? (result[0] ? result[0] : null) : null;

        if(!fileHeaderArray.includes("mobile")){
            errorCountArray.push("mobile");
            console.log("Mobile Mandatory check")
        }

        if(!(!arr.some(ele => !fileHeaderArray.includes(ele)))){
           errorCountArray =  codeLineParser(arr,fileHeaderArray,errorCountArray);
        }

        if(errorCountArray.length > 0){
            stringErrorArray = errorMessageConstructor(this.errorCountArray);
            csvObj.errorString = stringErrorArray;
            csvObj.validateFlag = false;
            return csvObj;
        }else{
            return csvObj.validateFlag = true;
        }


    },
    (error : NgxCSVParserError) => {
        csvObj.validateFlag = false;
        csvObj.errorMsg = error;
        console.log("Error"+error);
    })


    return csvObj;

}

function   codeLineParser(arrayA : string[],arrayB : string[],errorCountArray : string[]) : string[] {
    for(let i =0 ; i < arrayA.length ;i++){
          if(!arrayB.includes(arrayA[i])){
            errorCountArray.push(arrayA[i]);
          }
          
    }
    return errorCountArray;
    console.log("Code Line Parser ")
  }

  function validatorMethod(templateMessageArg : string): any{
    var found = [],          // an array to collect the strings that are found
    rxp = /{([^}]+)}/g,
    templteMessage = templateMessageArg,
    // str = "a {string} with {curly} braces",
    
    curMatch;

  while( curMatch = rxp.exec( templteMessage ) ) {
    found.push( curMatch[1] );
}

console.log( found );
return found    // ["string", "curly"]
   }

   function errorMessageConstructor(errorCountArray : string[]) : string
   {
    let stringArray : string  = '';
    if(errorCountArray.length > 0){
        for(let i =0 ;i < errorCountArray.length ; i++){
          if(i != errorCountArray.length-1){
          stringArray = stringArray+errorCountArray[i]+ ",";
          }else{
            stringArray = stringArray+errorCountArray[i];
          }

        }
   }
   console.log("Error Msg Constructor :"+stringArray);
   return stringArray;
}