export class Product {

   constructor (public postId: number, public id: number, public name: string, public email: string, public body: string) {}

   toForm(): string {
      return `postId=${this.postId}&id=${this.id}&name=${this.name}&email=&{this.email}&body=&{this.body}`;
   }
}