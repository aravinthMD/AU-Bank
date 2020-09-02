import { ValidatorFn, AbstractControl } from '@angular/forms';
// export function TriggerTimeValidator(control : AbstractControl) : { [key : string] : any } | null => {

// }
export function TriggerTimeValidator() : ValidatorFn{
    return (control : AbstractControl) : {[key:string] : boolean} | null => {
    const date = new Date();
    const currentHour : number = date.getHours();
    const currentMinute : number = date.getMinutes();
    console.log("Current Date:"+date.getHours());
    
    const triggerTime = control.value;
    if(control.touched && control.dirty){
            console.log("triggerTime :"+triggerTime);
            const selectedtimeHour  = Number(`${triggerTime.hour}`);
            const selectedtimeMinute = Number(`${triggerTime.minute}`)
            // const selectedtimeHour = Number(triggerTime.hour);
            // const selectedtimeMinute = Number(triggerTime.time);
            if(selectedtimeHour < currentHour ){
              return {"triggerTimeError":true};
            }else if(currentHour == selectedtimeHour){
              if(selectedtimeMinute < currentMinute){
              return {"triggerTimeError":true};
              }else{
                return null;
              }
            }
            else{
              return null;
            }
      
    }
    

    }
}