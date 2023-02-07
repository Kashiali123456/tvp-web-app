import React from 'react'
import cate1 from '../tvpAssets/cate1.png';
import cate2 from '../tvpAssets/cate2.png';
export default function Categories() {
  return (
<>
<div className="container">
    <div className="row my-5">
        <h2> Popular Categories</h2>
    </div>
</div>

<div className="container neerr my-5 p-5">
                <div className="MagicScroll" data-options="width: 100%; height: 150;">
                    <img src={cate1} />
                    <img src={cate2} />
                    <img src={cate1} />
                    <img src={cate2} />
                    <img src={cate1} />
                    <img src={cate2} />
                    <img src={cate1} />
                    <img src={cate2} />
                    <img src={cate1} />

                </div>
            </div>

</>
  )
}
