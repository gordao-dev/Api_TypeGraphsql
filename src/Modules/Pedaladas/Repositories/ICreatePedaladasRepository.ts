import CriarPedaladasInput from "../../../dtos/inputs/create-pedaladas-input";
import CriarPedaladaInput from "../DTOs/inputs/CreatePedaladasInput";
import CriarPedaladasModel from "../DTOs/models/PedaladasModels";

interface IPedaladasRepository {
  create(data: CriarPedaladaInput): Promise<CriarPedaladasModel>;
}

export default IPedaladasRepository;
