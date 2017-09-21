export default class Book {
  poster_base64:string;
  poster_original_file_name:string;

  constructor(public id:string, public title:string, public description:string,
    private poster_url:string, private created_at:string) {}
}
