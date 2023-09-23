import { FaServer, FaCoins, FaChartLine } from 'react-icons/fa';
import { BiAbacus, BiSolidDoughnutChart } from "react-icons/bi";

export const tabs = [
  { id: 0, iconTitle: <FaServer />, title: "Plataforma", period: "Q3 - 23", subtitle: 'Desarrollo', description: "Plataforma 100% operativa para lanzamiento ICO.", value: 0 },
  { id: 1, iconTitle: <FaCoins />, title: "ICO", period: "Q4 - 23", subtitle: 'Lanzamiento', description: "Ronda privada y pre venta.", value: 1},
  { id: 2, iconTitle: <BiAbacus />, title: "Tokenización", period: "Q1 - 24", subtitle: 'Desarrollo', description: "Plataforma 100% operativa para tokenización de bienes.", value: 2 },
  { id: 3, iconTitle: <BiSolidDoughnutChart />, title: "Ciencia Datos", period: "Q2 - 24", subtitle: 'AI', description: "Fase I: Modelo de gobierno de aprendizaje de datos.", value: 3 },
  { id: 4, iconTitle: <FaChartLine />, title: "Exchange", period: "Q3 - 24", subtitle: 'Venta Pública', description: "Publicación de token en Exchange.", value: 4 },
];