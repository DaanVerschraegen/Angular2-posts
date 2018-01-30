export class Product {

   constructor (public userId: number, public id: number, public title: string, public body: string) {}

   toForm(): string {
      return `userId=${this.userId}&id=${this.id}&title=${this.title}&body=&{this.body}`;
   }
}