import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';
import Cap2 from '../images/cap2.jpg'
import Cap3 from '../images/cap3.jpg'
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';

const clientImage = {
    height: '7rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}


const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        {
                            window.innerWidth > 1000 && 
                            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                                <img alt="card img" className="rounded-[1rem] float-right" src={Cap2} />
                            </div>
                        }
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-500 font-bold">Qui sommes-nous ?</h3>
                            <br/>
                            <ul>
                                <p className='my-3 text-lg text-gray-800 font-regular'>Chez Sleep’n Go, notre mission est simple : offrir un espace de repos confortable et accessible pour rendre chaque escale agréable. Nous croyons que même les petits moments de détente peuvent transformer votre voyage.</p>
                                <p className='my-3 text-lg text-gray-800 font-regular'>
                                Derrière Sleep’n Go, une équipe passionnée et dévouée travaille pour garantir votre confort. Grâce à nos partenaires de confiance, nous innovons constamment pour répondre à vos besoins.
                                </p>
                            </ul>
                            
                        </div>
                    </div>
                </div>

                <br/>
                <div className="mt-8 bg-gray-100">
                    <section data-aos="fade-up">
                        <div className="my-0 py-2">
                                <h2 className="my-2 text-center text-3xl text-blue-500 uppercase font-bold">Nos Partenaires</h2>
                                <div className='flex justify-center'>
                                    <div className='w-24 border-b-4 border-blue-500'></div>
                                </div>
                                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-regular text-blue-500">Ils nous font confiance</h2>

                            </div>

                        <div className="p-13" data-aos="fade-in" data-aos-delay="600" id='partner' >
                        <br/>
                        <br/>

                            <div className="grid sm:grid-cols-5 lg:grid-cols-5">
                                

                                <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqijn_-vurDhpEvTT4t3gOqNaT6lgHD1mlQ&s"} alt="client" />                            
                                </div>

                                
                                <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqijn_-vurDhpEvTT4t3gOqNaT6lgHD1mlQ&s"} alt="client" />                            
                                </div>
                                
                                <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqijn_-vurDhpEvTT4t3gOqNaT6lgHD1mlQ&s"} alt="client" />                            
                                </div>

                                
                                <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqijn_-vurDhpEvTT4t3gOqNaT6lgHD1mlQ&s"} alt="client" />                            
                                </div>
                    
                                <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqijn_-vurDhpEvTT4t3gOqNaT6lgHD1mlQ&s"} alt="client" />                            
                                </div>
                    
                                <br/>
                                <br/>
                                                
                            </div>
                        </div>
                    </section>
                </div>
                        <br/>

                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6"  >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            <h3 className="text-3xl  text-blue-500 font-bold">Pourquoi choisir nos capsules ?</h3>
                            <br/>
                            <ul>
                                <p className='my-3 text-lg text-gray-800 font-regular'>•&nbsp;&nbsp;<b>Confort optimal</b> : Insonorisation et lits ergonomiques pour un sommeil réparateur.</p>
                                <p className='my-3 text-lg text-gray-800 font-regular'>•&nbsp;&nbsp;<b>Flexibilité</b> : Réservez à l’heure ou pour une courte sieste, selon vos besoins.</p>
                                <p className='my-3 text-lg text-gray-800 font-regular'>•&nbsp;&nbsp;<b>Intimité garantie</b> : Profitez d’un espace privé pour vous détendre et recharger vos batteries.</p>
                                <p className='my-3 text-lg text-gray-800 font-regular'>•&nbsp;&nbsp;<b>Services connectés</b> : Profitez du Wi-Fi gratuit et de ports de recharge pour rester connecté.</p>
                            </ul>
                        </div>
                        {
                            window.innerWidth > 1000 && 
                            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                                <img alt="card img" className="rounded-[1rem] float-right" src={Cap3} />
                            </div>
                        }
                    </div>
                </div>
        </>
    )
}

export default Intro;