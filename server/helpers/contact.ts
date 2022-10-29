import api from "../index";

export class ContactHelper {
  static async sendConcact(values: {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
  }) {
    try {
      const { data } = await api.post("/SendContact", values);
      return data;
    } catch (error) {
      return { status: "error" };
      console.log(error);
    }
  }
}
