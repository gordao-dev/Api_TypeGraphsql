import { PrismaClient } from "@prisma/client";
import CriarPedaladaInput from "../DTOs/inputs/CreatePedaladasInput";
import Pedalada from "../DTOs/models/PedaladasModels";
import IPedaladasRepository from "./ICreatePedaladasRepository";

class PedaladasRepository implements IPedaladasRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public create = async (data: CriarPedaladaInput): Promise<Pedalada> => {
    const pedaladas = await this.prisma.appointment.create({
      data,
    });

    return pedaladas;
  };
}

export default PedaladasRepository;
