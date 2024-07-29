class Book {
  private title: string;
  readonly author: string;
  private checkedOut: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.checkedOut = true;
  }

  // Methods
  public checkout() {
    this.checkedOut = true;
  }

  public isCheckedOut() {
    return this.checkedOut;
  }

  // Only can be accessed inside the Book Class
  private toggleCheckOutStatus() {
    return !this.checkedOut;
  }

  public theResult() {
    return (this.checkedOut = this.toggleCheckOutStatus());
  }

  public returnTitle() {
    let newTitle = "";
    return (newTitle = this.readTitle());
  }

  private readTitle() {
    const title = this.title;
    return `${title} is the title of the book`;
  }
}

const deepWork = new Book("Deep Work", "Cal Newport");
deepWork.checkout();
console.log(deepWork.theResult());

console.log(deepWork);

// Getters and Setters in classses

class AnotherExample {
  private outcheck: boolean = false;

  isTitle: string;
  isAuthor: string;

  constructor(isTitle: string, isAuthor: string) {
    this.isTitle = isTitle;
    this.isAuthor = isAuthor;
  }

  // Getter
  get info() {
    return `${this.isTitle} is the title of the book and the author is ${this.isAuthor}`;
  }

  // Setters
  set checkoutt(check: boolean) {
    this.outcheck = check;
  }
}

const exp = new AnotherExample("Deep Work", "Cal Newport");
exp.checkoutt = true;
console.log(exp.info);

// Interface with class

interface IPerson {
  name: string;
  age: number;
  greet: () => void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello ${this.name}`);
  }
}

const mouli = new Person("Shake&Bake", 24);
mouli.greet();
