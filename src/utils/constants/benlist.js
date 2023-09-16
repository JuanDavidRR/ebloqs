import { AiFillAlert } from "react-icons/ai"

import {FaPeopleRoof} from 'react-icons/fa'
import { BsFillBuildingFill, BsFillPeopleFill, BsCashCoin, BsFillBuildingsFill,BsFillAwardFill } from "react-icons/bs"

export const benlist = [
  {
    id: 0,
    title: 'Beneficios',
    description: "Así mismo el token de utilidad está diseñado para ofrecer a su comunidad beneficios y recompensas. ",
    icon: <BsFillAwardFill/>,
  },
  {
    id: 1,
    title: 'Prioridad',
    description: "También prioridad a las mejores inversiones o ventas, antes de que el público general tengan acceso.",
    icon: <AiFillAlert/>
  },
  {
    id: 2,
    title: 'Incentivos',
    description: "Inmediatamente incentivos financieros, DeFi, pool de liquidez, incremento de rentabilidad en determinadas inversiones.",
    icon: <BsCashCoin/>
  },
  {
    id: 3,
    title: 'Acceso exclusivo',
    description: "Del mismo modo acceso exclusivo a eventos, además de formación con Partnerships.",
    icon: <BsFillPeopleFill/>
  },
]