import { Card, Icon, Image } from 'semantic-ui-react'
import CardComponent from "./card";
import { MdDashboard } from "react-icons/md";
import {IoPersonSharp} from 'react-icons/io5'
import { GiPegasus } from "react-icons/gi";
import { GoTools } from "react-icons/go";
import { useNavigate } from 'react-router-dom'
import {healthService} from '../services/endpoints/health';
import { useEffect } from 'react';
import {useStatus} from '../hooks/useStatus';

const MainMenu = () => {
  const navigate = useNavigate();

useStatus();

  return (
    <>
    
      <div className="flex flex-grow items-center justify-center mt-16 md:mt-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 lg:gap-x-36 lg:gap-y-24">
          <span className='cursor-pointer' onClick={() => navigate('/overview')}>
            <CardComponent cardTitle='OVERVIEW' cardColor='var(--color-light-blue)' linearBgTop='var(--color-light-blue-025)' linearBgBottom='var(--color-light-blue-001)'>
              <MdDashboard className='text-4xl'/>
            </CardComponent>
          </span>
          <CardComponent cardTitle='USER' cardColor='var(--color-orange)' linearBgTop='var(--color-orange-025)' linearBgBottom='var(--color-orange-001)'>
            <IoPersonSharp className='text-4xl'/>
          </CardComponent>
        <CardComponent cardTitle='PEGA' cardColor='var(--color-pink)' linearBgTop='var(--color-pink-025)' linearBgBottom='var(--color-pink-001)'>
          <GiPegasus className='text-4xl'/>
        </CardComponent>
        <CardComponent cardTitle='TOOLS' cardColor='var(--color-green)' linearBgTop='var(--color-green-025)' linearBgBottom='var(--color-green-001)'>
          <GoTools className='text-3xl'/>
        </CardComponent>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
