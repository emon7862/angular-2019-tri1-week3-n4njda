export class User {
  private username: string = '';
  private password?: string = '';
  private firstName?: string = '';
  private lastName?: string = '';

  get Name() {
    return `${this.firstName} ${this.lastName}`;
  }

  set FirstName(value: string) {
    this.firstName = value;
  }

  set LastName(value: string) {
    this.lastName = value;
  }

  set UserName(value: string) {
    this.username = value;
  }

  set Password(value: string) {
    this.password = value;
  }
}