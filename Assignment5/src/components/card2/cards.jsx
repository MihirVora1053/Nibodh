import React from 'react';
import Card from './component/card';
let array=
    [
        {
            src:"https://www.hdfc.com/blog/sites/default/files/article-images/plant_0_0.jpg",
            title:"Tree Plantation Drive",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor molestiae commodi aut! Repellendus, quod.",
            val:50
        },
        {
            src:"https://static.toiimg.com/thumb/msid-66410303,imgsize-708621,width-400,resizemode-4/66410303.jpg",
            title:"Tree Plantation Drive",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor molestiae commodi aut! Repellendus, quod.",
            val:18
        },
        {
            src:"https://cdn.pixabay.com/photo/2020/10/01/11/07/hands-5618240__340.jpg",
            title:"Tree Plantation Drive",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor molestiae commodi aut! Repellendus, quod.",
            val:90
        }
    ]

export default function card() {
    return (
        <div>
            <div className="card-heading2 pt-5">
                <h1 className="text-uppercase text-center display-6">Latest Campaigns</h1>  
            </div>
            <div className="d-flex justify-content-center">
                <span className="card-span"></span>
            </div>
            <div className="card-para-2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quibusdam non dolorum, facere doloribus, nostrum illo delectus dolore, pariatur sapiente vitae quia dolorem! Nihil porro totam enim ab ea dignissimos autem. Veritatis consectetur quibusdam similique!
            </div>
            <div className="row justify-content-center">
                <div className="col-8">
                    
                    <div className="d-flex justify-content-evenly my-5">
                        {
                            array.map(data=>{
                                return(
                                <Card src={data.src} title={data.title} desc={data.desc} val={data.val}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
