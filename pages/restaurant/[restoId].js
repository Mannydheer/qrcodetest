import { useRouter } from 'next/router';
import React from 'react';

const Restaurant = () => {

    //
    const router = useRouter()
    const { restoId } = router.query;

    const isBelleProvince = restoId === '5';

    return (
        <>
            {isBelleProvince ?
                <a href="https://restaurantlabelleprovince.com/menu/">
                    belle province link

                </a>
                :
                <div>resto doesnt exist</div>
            }
        </>
    )
}

export default Restaurant
