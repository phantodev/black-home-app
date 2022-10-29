import api from "../index";

export class ProductHelper {
  static async getProductMain() {
    try {
      const { data } = await api.get("/getProdutoDestaque");
      return data
    } catch (error) {
      console.log(error);
    }
  }
}
