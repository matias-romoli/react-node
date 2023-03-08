export class Error {
  constructor(status, info, err) {
    this.status = status;
    this.info = info;
    this.err = err;
  }
}

export class Task {
  id;
  newTask;
  constructor(id, newTask){
    this.id = id;
    this.newTask = newTask;
  }
}