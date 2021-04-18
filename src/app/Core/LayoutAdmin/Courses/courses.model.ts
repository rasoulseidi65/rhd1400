export class Courses {

  constructor(
    public title?: string,
    public categories?:string,
    public detail?: string,
    public teacherID?: string,
    public Coursechapter?:string[],
    public image?: string,
    public price?:number,
    public viewCount?: number,
    public commentCount?: number,
    public time?: string,
  ) {
  }

}
