export class LoggingService {
    logStatusChange(status : string){
        console.log('A server has been changed, new status :'+status);
    }
}