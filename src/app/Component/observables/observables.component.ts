import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, map, of, take } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy{
  sub!: Subscription;
  // // return object
  // obs = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);

  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);

  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);

  //   // setTimeout(() => {
  //   //   observer.error('Error Emitted');
  //   // }, 3500);

  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 5000);
  // });



  ngOnInit(): void {

    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    //  this.sub= this.obs.subscribe({
    //     // three callback functions
    //     // next , error , complete
    //     next: (val) => {
    //       console.log(val);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log('Completed');
    //     },
    //   });
    // this.obs.subscribe(
    //   // next => success
    //   data=>{
    //   console.log(data);
    // })

    // operators
    of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));
    // merge
    // let obs1 = new Observable((observer: any) => {
    //   observer.next('This is observable1');
    // });

    // let obs2 = new Observable((observer: any) => {
    //   observer.next('This is observable2');
    // });
    // // obs1.subscribe(data=>{console.log(data);
    // // })
    // let obs3=merge(obs1,obs2);
    // obs3.subscribe(data=>{console.log(data);
    // })

    // of
    // creation operator => create Observables

    // of(1,2,3).subscribe(data=>{console.log(data)});
    // of([1,2,3]).subscribe(data=>{console.log(data)});

    // from
    // creation operator => create Observables

    // from([1,2,3]).subscribe(data=>{console.log(data)});

    // map()
    // let obs=of("hello world");

    // pipe
    // this.sub= obs.pipe(map(data=>data.toUpperCase())).subscribe(data=>{console.log(data);
    // obs.pipe(map(data=>data.toUpperCase())).subscribe(data=>{console.log(data)})
    // obs.pipe(map(data=>data.toUpperCase().includes('e'))).subscribe(data=>{console.log(data)})

    // fromEvent() operator
    // let obs1=fromEvent(document,'click');
    // obs1.subscribe(()=>{console.log("You clicked this page!!")});

    // take
    let obs1 = fromEvent(document, 'click');
    obs1.pipe(take(2)).subscribe(() => {
      console.log('You clicked this page');
    });
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    // console.log("Observable stopped");
  }
}

