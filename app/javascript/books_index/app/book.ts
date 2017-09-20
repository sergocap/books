export default class Book {
  poster_base64:string;
  poster_original_file_name:string;

  constructor(private id:string, private title:string, private description:string,
    private poster_url:string, private created_at:string) {}
}
