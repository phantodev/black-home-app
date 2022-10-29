import api from "../index";

export class ProductHelper {
  static async getProductMain() {
    try {
      const { data } = await api.get("/getProdutoDestaque");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async getProductAll() {
    try {
      const { data } = await api.get("/getAllProduto");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async getProductDetails(id: string) {
    try {
      const { data } = await api.post("/getProdutoDetalhe", {
        idProduto: id,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
