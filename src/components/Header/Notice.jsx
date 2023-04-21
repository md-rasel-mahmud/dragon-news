import Button from 'react-bootstrap/Button';
import React from 'react';
import Marquee from 'react-fast-marquee';


const Notice = () => {
    return (
        <div className="bg-light container py-3 d-flex gap-3">
            <Button variant='danger' className="rounded-0 px-4"> Latest </Button>
            <Marquee speed={100} direction='right' gradient={false}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illo ducimus, possimus illum a natus pariatur sit! Mollitia quis explicabo maiores. Tenetur exercitationem modi laudantium distinctio voluptates deserunt atque incidunt, alias inventore! Cum, iste. Fuga voluptate cum voluptatem! Iusto explicabo optio quos inventore atque possimus. Beatae repellendus, unde ducimus nemo deleniti temporibus, accusantium alias eveniet, hic a obcaecati modi vel! Sed cum voluptas iste optio repudiandae quae, temporibus incidunt ea asperiores provident sit mollitia in earum. Ab itaque tenetur vel quaerat nostrum illum, laborum dolorum alias ipsam, odit molestiae enim, repudiandae facere voluptates vero dicta sit accusantium distinctio minus! Atque.
            </Marquee>
        </div>
    );
};

export default Notice;