import React from 'react';
import Seervice from '../Service/Seervice'

const Services = () => {
   const services =  [
    {
        id: "625d3037c5d376a1385aef56",
      "price": "$2,130.94",
      "picture": "http://askproject.net/wryter/wp-content/uploads/sites/36/2021/10/illustration_1.png",
      "name": "Langley Cabrera",
      "description": "Cupidatat dolor deserunt adipisicing mollit velit. Laborum veniam nulla quis anim. Amet duis aliqua et qui anim consectetur enim amet eiusmod officia. Tempor proident dolore irure ea duis cillum et. Quis adipisicing magna consequat voluptate eu minim ipsum. Veniam sint tempor excepteur laborum mollit Lorem eiusmod minim cillum et voluptate occaecat ipsum. Anim veniam duis amet pariatur ad labore elit dolore ea quis sit reprehenderit deserunt.\r\n"
    },
    {
      "id": "625d3037a9488eef1e1b5643",
      "price": "$1,994.07",
      "picture": "http://askproject.net/wryter/wp-content/uploads/sites/36/2021/10/illustration_2.png",
      "name": "Goodman Walls",
      "description": "Cupidatat do est labore quis reprehenderit labore culpa ut in mollit. Aliquip ut tempor sunt cillum consequat tempor. Non nulla sit reprehenderit voluptate culpa tempor sit. Deserunt magna laboris Lorem nisi nisi mollit aliqua eiusmod cupidatat labore exercitation exercitation nisi. Reprehenderit et proident occaecat dolor veniam aliquip aliqua aliqua do sit deserunt deserunt aliqua consequat.\r\n"
    },
    {
      "id": "625d30370ed16afca549df0a",
      "price": "$2,932.18",
      "picture": "http://askproject.net/wryter/wp-content/uploads/sites/36/2021/10/icon_6_2.png",
      "name": "Elisabeth Avila",
      "description": "Cupidatat dolor deserunt adipisicing mollit velit. Laborum veniam nulla quis anim. Amet duis aliqua et qui anim consectetur enim amet eiusmod officia. Tempor proident dolore irure ea duis cillum et. Quis adipisicing magna consequat voluptate eu minim ipsum. Veniam sint tempor excepteur laborum mollit Lorem eiusmod minim cillum et voluptate occaecat ipsum. Anim veniam duis amet pariatur ad labore elit dolore ea quis sit reprehenderit deserunt.\r\n"
    },
    {
      "id": "625d3037732562364bffa158",
      "price": "$3,821.40",
      "picture": "http://askproject.net/wryter/wp-content/uploads/sites/36/2021/10/icon_8_2.png",
      "name": "Colleen Key",
      "description": "Cupidatat dolor deserunt adipisicing mollit velit. Laborum veniam nulla quis anim. Amet duis aliqua et qui anim consectetur enim amet eiusmod officia. Tempor proident dolore irure ea duis cillum et. Quis adipisicing magna consequat voluptate eu minim ipsum. Veniam sint tempor excepteur laborum mollit Lorem eiusmod minim cillum et voluptate occaecat ipsum. Anim veniam duis amet pariatur ad labore elit dolore ea quis sit reprehenderit deserunt.\r\n"
    },
    {
      "id": "625d30378250760aa77b7e0f",
      "price": "$2,942.13",
      "picture": "http://askproject.net/wryter/wp-content/uploads/sites/36/2021/10/icon_4_2.png",
      "name": "Jessica Suarez",
      "description": "Cupidatat dolor deserunt adipisicing mollit velit. Laborum veniam nulla quis anim. Amet duis aliqua et qui anim consectetur enim amet eiusmod officia. Tempor proident dolore irure ea duis cillum et. Quis adipisicing magna consequat voluptate eu minim ipsum. Veniam sint tempor excepteur laborum mollit Lorem eiusmod minim cillum et voluptate occaecat ipsum. Anim veniam duis amet pariatur ad labore elit dolore ea quis sit reprehenderit deserunt.\r\n"
    },
    {
      "id": "625d3037b91a86be4a9f1d4d",
      "price": "$2,552.39",
      "picture": "http://askproject.net/wryter/wp-content/uploads/sites/36/2021/10/illustration_2.png",
      "name": "Danielle Kent",
      "description":"Cupidatat dolor deserunt adipisicing mollit velit. Laborum veniam nulla quis anim. Amet duis aliqua et qui anim consectetur enim amet eiusmod officia. Tempor proident dolore irure ea duis cillum et. Quis adipisicing magna consequat voluptate eu minim ipsum. Veniam sint tempor excepteur laborum mollit Lorem eiusmod minim cillum et voluptate occaecat ipsum. Anim veniam duis amet pariatur ad labore elit dolore ea quis sit reprehenderit deserunt.\r\n"
    }
  ]
    return (
        <div className="grid grid-cols-3 gap-4 m-20 ">   
            {
              
                services.map(service =>{
              return      <div className=' bg-cyan-700 gap-4 mb-10 p-5      text-white mx-auto  rounded-2xl '>
                      {
                        <Seervice 
                        key={service}
                        service={service}
                        ></Seervice>
                      }
                    </div>
                })
            }
        </div>
    );
};

export default Services;