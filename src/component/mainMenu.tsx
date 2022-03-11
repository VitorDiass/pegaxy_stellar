import { Card, Icon, Image } from 'semantic-ui-react'
import CardComponent from "./card";
import { MdDashboard } from "react-icons/md";
import {IoPersonSharp} from 'react-icons/io5'
import { GiPegasus } from "react-icons/gi";
import { GoTools } from "react-icons/go";

const MainMenu = () => {
  return (
    <>
      <div className="flex justify-evenly mt-20">
        <CardComponent cardTitle='GENERAL' cardColor='var(--color-light-blue)' linearBgTop='var(--color-light-blue-025)' linearBgBottom='var(--color-light-blue-001)'>
          <MdDashboard className='text-4xl'/>
        </CardComponent>
        <CardComponent cardTitle='USER' cardColor='var(--color-orange)' linearBgTop='var(--color-orange-025)' linearBgBottom='var(--color-orange-001)'>
          <IoPersonSharp className='text-4xl'/>
        </CardComponent>
      </div>
      <div className="flex justify-evenly mt-16">
        <CardComponent cardTitle='PEGA' cardColor='var(--color-pink)' linearBgTop='var(--color-pink-025)' linearBgBottom='var(--color-pink-001)'>
          <GiPegasus className='text-4xl'/>
        </CardComponent>
        <CardComponent cardTitle='TOOLS' cardColor='var(--color-green)' linearBgTop='var(--color-green-025)' linearBgBottom='var(--color-green-001)'>
          <GoTools className='text-3xl'/>
        </CardComponent>
      </div>
    </>
  );
};

export default MainMenu;
