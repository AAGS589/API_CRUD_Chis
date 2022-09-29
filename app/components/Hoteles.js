import React from "react";
import CardHotel from './CardHotel'

class Hoteles extends React.Component {
    constructor(props) {
        super(props);

        this.data = [
            {
                imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/08/80/80/ed/hotel-b-o.jpg',
                title: 'Hoteles',

            },
            {
                imagen: 'https://p.bookcdn.com/data/Photos/Big/6253/625334/625334155/Totem-Cabanas-photos-Exterior-Totem-Caba-as.JPEG',
                title: 'Cabañas',

            },
            {
                imagen: 'https://playalinda950.com/wp-content/gallery/galeria/fotos-camara-nueva-410.jpg',
                title: 'Casas en la playa',

            }
        ]
    }

    render() {
        return(

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <For each="item" index="index" of={this.data} >
                    <CardHotel   key={index} imagen={item.imagen} title={item.title}  />
                </For>

            </div>

        )
    }
};

export default Hoteles;