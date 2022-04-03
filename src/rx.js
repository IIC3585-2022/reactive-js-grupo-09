let observable = Rx.Observable.fromEvent(
    $(document),
    'mousemove'
);

let subscription = observable.subscribe(e => $('#results').text(`${e.clientX},${e.clientY}`));
