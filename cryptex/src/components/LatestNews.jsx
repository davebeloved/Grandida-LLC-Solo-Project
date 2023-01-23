import axios, { Axios } from 'axios'
import React, { useState, useEffect } from 'react'

const LatestNews = () => {
const [news, setNews] = useState([])
const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4cb01de2d14040cf9b9ed5bda0fa949a';

useEffect(() => {
  axios.get(url).then(response => {
    setNews(response.data.articles)
    console.log(response.data.articles);
  }).catch(error => {
    console.error(error)
   
  })

}, [])

  return (
    <div className=''
    data-aos='fade-up'
    data-aos-delay='400'
    >

            
                <h3 className='font-bold text-xl text-center -mb-32 mt-16'>
                    Keep Updated With the Latest Happennings.
                </h3>
            
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 mt-40'>
                    <div className='bg-white text-black space-y-3 rounded-2xl pb-8'>
                            <img src='https://techcrunch.com/wp-content/uploads/2023/01/peerlist-founders.jpg' alt="" className='w-full h-1/2'/>
                            <h3 className='font-bold text-xl text-darkblue'>Jagmeet Singh</h3>
                            <h3 className='font-bold px-3'>HubSpot co-founder Shah backs Peerlist for a new take on professional networking</h3>
                            <h3 className='text-gray-600 p-4'>Peerlist, building a LinkedIn alternative, has raised $1.1 million in a seed funding round led by HubSpot co-founder and CTO Dharmesh Shah.</h3>
                            <a href='https://techcrunch.com/2023/01/23/hubspot-dharmesh-shah-peerlist-investment-linkedin-alternative/' target='_blank' className='text-blue-hover p-4'>Read More</a>
                      </div>
                    <div className='bg-white text-black space-y-3 rounded-2xl pb-8'>
                            <img src='https://techcrunch.com/wp-content/uploads/2023/01/adJ1ki70J6Okt55PGCS73Kz0oVC.jpg?resize=1200,675' alt="" className='w-full h-1/2'/>
                            <h3 className='font-bold text-xl text-darkblue'>Lauren Forristal</h3>
                            <h3 className='font-bold px-3'>HNetflix teams up with Bumble so users can bond over popular TV shows</h3>
                            <h3 className='text-gray-600 p-4'>Bumble is launching a new Netflix-themed question game that asks users questions about a popular Netflix show.</h3>
                            <a href='hhttps://techcrunch.com/2023/01/23/netflix-teams-up-with-bumble/' target='_blank' className='text-blue-hover p-4'>Read More</a>
                      </div>
                    <div className='bg-white text-black space-y-3 rounded-2xl pb-8'>
                            <img src='https://techcrunch.com/wp-content/uploads/2019/03/lp-logo-3.jpg?resize=1200,812' alt="" className='w-full h-1/2'/>
                            <h3 className='font-bold text-xl text-darkblue'>Kyle Wiggers</h3>
                            <h3 className='font-bold px-3'>Microsoft invests billions more dollars in OpenAI, extends partnership</h3>
                            <h3 className='text-gray-600 p-4'>Microsoft has announced that it's signed a multi-year, multi-billion-dollar deal with OpenAI to help further develop the latter's AI tech.</h3>
                            <a href='https://techcrunch.com/2023/01/23/microsoft-invests-billions-more-dollars-in-openai-extends-partnership/' target='_blank' className='text-blue-hover p-4'>Read More</a>
                      </div>

                  <div className='bg-white text-black space-y-3 rounded-2xl pb-8'>
                            <img src='https://techcrunch.com/wp-content/uploads/2023/01/DSC02723.jpg?resize=1200,798' alt="" className='w-full h-1/2'/>
                            <h3 className='font-bold text-xl text-darkblue'>Matt Burns</h3>
                            <h3 className='font-bold px-3'>Review: The 2023 Mac Mini is a serious contender with the M2 Pro</h3>
                            <h3 className='text-gray-600 p-4'>Apple’s latest silicon innovations shine in the Mac Mini. The tiny desktop computer is the latest Apple computer fitted with the M2 chipset. For $599, buyers can opt for the M2 or spend $1299 for the impressive M2 Pro, which features unique benefits. For the …</h3>
                            <a href='https://techcrunch.com/2023/01/23/2023-mac-mini-m2-m2-pro-review/' target='_blank' className='text-blue-hover p-4'>Read More</a>
                      </div>
                       
                    <div className='bg-white text-black space-y-3 rounded-2xl pb-8'>
                            <img src='https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1232704144.jpg?resize=1200,798' alt="" className='w-full h-1/2' />
                            <h3 className='font-bold text-xl text-darkblue'>Manish Singh</h3>
                            <h3 className='font-bold px-3'>India central bank orders SBM local unit to stop outward remittance transactions</h3>
                            <h3 className='text-gray-600 p-4'>India’s central bank has directed SBM Bank India to stop all outward remittance transactions in a blow to the bank and many of its fintech partners that offer services allowing users to invest in foreign services. The Reserve Bank of India said in a brief sta …</h3>
                            <a href='https://techcrunch.com/2023/01/23/india-central-bank-orders-sbm-local-unit-to-stop-outward-remittance-transactions/' target='_blank' className='text-blue-hover p-4'>Read More</a>
                      </div>
                     
                    <div className='bg-white text-black space-y-3 rounded-2xl pb-8'>
                            <img src='https://techcrunch.com/wp-content/uploads/2022/02/GettyImages-1013933224.jpg?w=990&crop=1' alt="" className='w-full h-1/2' />
                            <h3 className='font-bold text-xl text-darkblue'>Romain Dillet</h3>
                            <h3 className='font-bold px-3'>Spotify cuts 6% of its workforce, impacting 600 people</h3>
                            <h3 className='text-gray-600 p-4'>IMusic streaming service Spotify has announced that it will be conducting a round of layoffs that will impact around 6% of its global workforce. In its most recent earnings release, the company said that there were 9,808 full-time employees working for Spotify…</h3>
                            <a href='https://techcrunch.com/2023/01/23/spotify-cuts-6-of-its-workforce-impacting-600-people/' target='_blank' className='text-blue-hover p-4'>Read More</a>
                      </div> 

                {/* {news.map((news) => {
                    return (
                        
                        <div className='bg-white text-black space-y-3 rounded-2xl pb-8'>
                            <img src={news.urlToImage} alt="" className='w-full h-1/2'/>
                            <h3 className='font-bold text-xl text-darkblue'>{news.author}</h3>
                            <h3 className='font-bold px-3'>{news.title}</h3>
                            <h3 className='text-gray-600 p-4'>{news.description}</h3>
                            <a href={news.url} target='_blank' className='text-blue-hover p-4'>Read More</a>
                        </div>

                            
                        
                    )
                })} */}
            </div>
    </div>
  )
}

export default LatestNews




