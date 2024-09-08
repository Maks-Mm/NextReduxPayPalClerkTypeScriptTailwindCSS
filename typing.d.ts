export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

{
  /*das wurde als eije Probe von Typisirung hinzugefugt um Konflikt in requestsListe zu vermeiden  
  export type Category = string;
  */
}
