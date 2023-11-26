import React from 'react' 
import Header from '../components/Header'  
import Button from '../components/Button' 

const Dashboard = () =>{ 


    return (
        <>

        <div className='bg-[#E6E6E6]'>
        <Header/>
            <div className="bg-[#F7F7E2] py-[1.7rem] px-[2rem] mt-[1.7rem]">
              <div className='bg-[url(../assets/img/farmbg.jpg)] py-[3rem] px-[2rem] bg-cover bg-center bg-no-repeat'>
              <p className='text-white text-center font-[Lato] font-bold leading-[1.4rem] text-[.9rem]'>Gives precise information to enable more appropriate and cost efficient application of seed, fertilizer, chemicals, irrigation, and other farm inputs.</p>
              </div>
            </div>
            <div className="bg-[#F7F7E2] mt-[1.9rem] py-[1.7rem] px-[2rem]">
            <div className='bg-[url(../assets/img/farmbg.jpg)] py-[3rem] px-[2rem] bg-cover bg-center bg-no-repeat'>
              <p className='text-white text-center font-[Lato] font-bold leading-[1.4rem] text-[.9rem]'>Precision #agriculture is an emerging field that utilizes advanced technologies and data-driven strategies to optimize crop growth and reduce weather-related risks. One of the most important factors in precision #agriculture is the use of weather data and forecasting to improve crop management practices.</p>
              </div>
            </div>

            <div className='flex flex-col gap-[1rem] mt-[1.7rem]'>
            <Button 
            bgBtn='bg-[#065146]'
            fntColor='text-white'
            btnWidth='py-[.8rem] px-[4.2rem]'
            children="Insight"/>

            <div className='bg-[#F7F7E2] gap-[1rem] flex flex-col items-center py-[2rem] px-[4rem]'>
                <img src='./assets/img/stat.png' alt='stat' className='w-[15rem]'/>
             
                <div>
                <p className='text-center font-[Lato] font-bold text-[1.5rem]'>Forecast market value of precision agriculture worldwide from 2021 to 2027
(in billion U.S. dollars)</p>
                </div>
            </div>
            
            </div>
            


        </div>
        
        </>
    )
}

export default Dashboard;
