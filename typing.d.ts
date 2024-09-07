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

export type Category = string;
{
  /*das wurde als eije Probe von Typisirung hinzugefugt um Konflikt in requestsListe zu vermeiden  */
}
