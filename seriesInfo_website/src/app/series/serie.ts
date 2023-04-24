/* Clase utilizada para definir atributos para manejar
 * datos de una serie de television. */

export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    review: string;
    url: string;
    image: string;

    constructor(id: number, name: string, channel: string, seasons: number, review: string, url: string, image: string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.review = review;
        this.url = url;
        this.image = image;
    }
}
