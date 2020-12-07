
import { Subject, BehaviorSubject } from "rxjs";

export class SharedService {
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
