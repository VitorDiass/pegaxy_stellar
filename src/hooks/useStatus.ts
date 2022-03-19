import React, { useState } from 'react';
import { useEffect } from 'react';
import { healthService } from '../services/endpoints/health';

export const useStatus = () => {
   const [apiStatus, setApiStatus] = useState(false);

   useEffect(() =>{
        const response = healthService();
        response.then(response => {
          const status = response?.data?.status;
          setApiStatus(status === 'Ok' ? true : false);
        });
   },[])

  return apiStatus;
}
