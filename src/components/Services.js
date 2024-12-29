import React from 'react';
import Ma from '../images/MA.png';
import Image1 from '../images/image1.jpeg'
import Image2 from '../images/image2.jpg'
import Image3 from '../images/image3.webp'
import Image4 from '../images/image44.jpg'


const Services = () => {

    return (
        <div  className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down" id="services">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-500 uppercase font-bold">Caractéristiques</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-500'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-regular text-blue-500">Atouts de nos capsules de sommeil</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-black rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="sfoosgoosdg rounded-t group-hover:scale-[1.09] transition duration-400 ease-in-out" src={Image1} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Siège à Gravité Zéro</h2>
                                    <p className="text-md font-medium text-center">
                                    C'est la posture idéale pour faire une sieste. Lorsque vous dormez les jambes surélevées, votre cœur se détend grâce à une circulation sanguine fluide.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-black rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="sfoosgoosdg rounded-t group-hover:scale-[1.09] transition duration-400 ease-in-out" src={Image2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Siège Ventilé                                    </h2>
                                    <p className="text-md font-medium text-center">
                                    L'air circule en continu à travers le siège, offrant une ventilation optimale pour vous garder au frais et vous assurer un confort maximal, même lors de longues périodes d'utilisation.
                                    
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-black rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="sfoosgoosdg rounded-t group-hover:scale-[1.09] transition duration-400 ease-in-out" src={Image3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Massage Doux du Dos</h2>
                                    <p className="text-md font-medium text-center">
                                    Profitez d’un massage apaisant du dos combiné à un siège chauffant, conçu pour détendre vos muscles, soulager efficacement les douleurs dorsales et offrir une expérience de relaxation ultime.</p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-300 hover:text-black rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="sfoosgoosdg rounded-t group-hover:scale-[1.09] transition duration-400 ease-in-out" src={Image4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Thérapie à l'oxygène</h2>
                                    <p className="text-md font-medium text-center">
                                    Le générateur d'oxygène intégré augmente l'énergie, soulage les maux de tête et améliore le sommeil. Une lumière bleue apaisante et une musique de méditation favorisent un endormissement rapide.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <br/>
            <br/>
            <br/>



            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='mot' >

<div className="flex flex-col-reverse lg:flex-row py-8 justify-center lg:text-center" data-aos="fade-up">
    <div className="flex-col my-4 text-center lg:text-center lg:my-0 lg:justify-center w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
        
        <h3 className="text-3xl  text-blue-500 font-bold">Mot du Fondateur</h3>
        <br/>
        <ul>
            <p className='my-3 text-lg lg:text-center text-gray-800 font-regular'>
            Les capsules Sleep’n Go ciblent avant tout les passagers en transit prolongé, à la recherche d’un espace de repos vraiment privé. L’ambition est d’offrir au Maroc un accueil holistique et innovant, où voyageurs d’affaires et touristes en correspondance profitent d’un refuge confortable et connecté. Au-delà du simple service, 
            </p>
            
            <p className='my-3 text-lg lg:text-center text-gray-800 font-regular'>
            Sleep’n Go souhaite transformer chaque moment d’attente en une expérience de bien-être, valorisant l’image de l’aéroport et enrichissant l’expérience voyageur.
            </p>
        </ul>
        
    </div>


</div>
</div>




<br/>
            <br/>
            <br/>

            
            
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='emplacement' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        {
                            window.innerWidth > 1000 && 
                            <div className="lg:w-1/2 md:w-1/2 sm:w-full flex flex-col lg:mx-2 justify-center">
                                <img 
                                    alt="card img" 
                                    className="rounded-[1rem] float-right w-3/4 mx-auto" 
                                    src={Ma} 
                                />
                            </div>
                            
                        }
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-500 font-bold">Nos Emplacements</h3>
                            <br/>
                            <ul>
                                <p className='my-3 text-lg text-gray-800 font-regular'>

                                Bientôt partout dans les aéroports du royaume
                                </p>
                            </ul>
                            
                        </div>

                    
                    </div>
                </div>


        
            
        </div>
    )
}

export default Services;
