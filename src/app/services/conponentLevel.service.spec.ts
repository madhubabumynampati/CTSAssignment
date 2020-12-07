import { ComponentLevelService } from "./componentLevel.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';


describe('ComponentLevelService', () => {
    let service: ComponentLevelService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [ComponentLevelService]
        });
        service = TestBed.get(ComponentLevelService);
    })
    it('#getTodoAll should return todos', () => {
        const todos:Array<any> = [];
        service.getTodoAll().subscribe(res=>{
            expect(res).toEqual(todos)
        })
    });
    
  
  });