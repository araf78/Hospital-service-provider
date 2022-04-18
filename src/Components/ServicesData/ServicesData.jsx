import React from 'react';
import Services from '../Services/Services';

const ServicesData = () => {
    const servicesAllData = [
        {
          "id": "625cd35e25172abddb9366c9",
          "picture": "http://placehold.it/32x32",
          "eyeColor": "green",
          "title": "Lorem voluptate aliquip deserunt excepteur occaecat esse occaecat do esse dolor. Consectetur anim exercitation pariatur esse commodo consequat eu amet sunt elit aliquip cupidatat. Cillum enim est do minim officia consectetur reprehenderit et Lorem velit Lorem occaecat quis.\r\n"
        },
        {
          "id": "625cd35e407f34f1449c618d",
          "picture": "http://placehold.it/32x32",
          "eyeColor": "green",
          "title": "Minim enim deserunt incididunt minim laboris mollit nisi adipisicing ipsum. Consectetur occaecat voluptate ipsum ea laborum ut aliquip. Est elit anim occaecat nisi nostrud ullamco veniam occaecat. Aliqua tempor do dolor fugiat culpa Lorem minim fugiat veniam sint. Sint in cillum reprehenderit magna excepteur. Id eu laborum ex ut. Et consectetur nulla esse dolor sit ullamco.\r\n"
        },
        {
          "id": "625cd35e611654b616664002",
          "picture": "http://placehold.it/32x32",
          "eyeColor": "brown",
          "title": "Aute excepteur excepteur id id. Velit eu fugiat cupidatat dolor sit exercitation sit exercitation sint nostrud Lorem anim ut fugiat. Incididunt ullamco et quis laborum esse ad. Culpa ullamco sunt dolore reprehenderit ex consequat. Nostrud magna proident dolor laborum ullamco exercitation magna cupidatat nulla elit non proident aliqua laborum. Deserunt qui id anim sunt amet proident duis. Ea mollit eiusmod in aliquip occaecat pariatur exercitation minim ipsum anim aliquip nulla duis laborum.\r\n"
        },
        {
          "id": "625cd35ebbdacb60e75615c8",
          "picture": "http://placehold.it/32x32",
          "eyeColor": "green",
          "title": "Mollit enim fugiat pariatur dolore commodo nisi duis in in pariatur pariatur Lorem enim id. Velit sit occaecat esse dolor et est do sint amet. Consectetur consectetur adipisicing reprehenderit ipsum qui occaecat non nulla consequat pariatur est.\r\n"
        },
        {
          "id": "625cd35e669da273d3ae078b",
          "picture": "http://placehold.it/32x32",
          "eyeColor": "green",
          "title": "Ad reprehenderit officia consectetur reprehenderit occaecat enim anim consectetur ad velit ad aute deserunt. Duis voluptate mollit id do culpa id. Cillum occaecat fugiat sit velit ut ex anim adipisicing commodo elit nisi laboris. Nostrud voluptate officia incididunt laborum sunt excepteur deserunt et. Ut voluptate culpa nisi magna ad sint duis tempor sunt incididunt cillum excepteur aliquip. Exercitation labore minim reprehenderit laboris duis id non Lorem laborum laboris et.\r\n"
        },
        {
          "id": "625cd35e7b71ed5cbf8fe87a",
          "picture": "http://placehold.it/32x32",
          "eyeColor": "brown",
          "title": "Sit fugiat quis est sint ad labore occaecat enim. Cupidatat pariatur pariatur id adipisicing tempor nulla proident. Aliquip nulla dolor mollit non nulla magna est velit commodo officia esse sint exercitation.\r\n"
        }
      ];
    return (
        <div>
             {
                servicesAllData.map(data =>{
                    // console.log(data)
                    <Services
                    data = {data}
                    ></Services>
                })
            } 
        </div>
    );
};

export default ServicesData;