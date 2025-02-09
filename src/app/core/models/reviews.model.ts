export class Reviews{
    reviewId? : number;
    rating : number;
    comment : string;
    reviewDate :Date;

    constructor( rating: number, comment: string, reviewDate: Date, reviewId?:number){
        this.reviewId = reviewId;
        this.rating = rating;
        this.comment = comment;
        this.reviewDate = reviewDate;

    }   
}