import React from 'react'
import H0 from '../../img/zz0.svg'
import H1 from '../../img/zz1.svg'
import H2 from '../../img/zz2.svg'
import H3 from '../../img/zz3.svg'
import H4 from '../../img/zz4.svg'
import H5 from '../../img/zz5.svg'

export default function MainHisto() {
    return (
        <div className="histo-holder">
            <div id="histo-parallax">
                <img alt="H0" id="H0" src={H0}/>
            </div>
            <div id="histo-parallax">
                <img alt="H1" id="H1" src={H1}/>
            </div>
            <div id="histo-parallax">
                <img alt="H2" id="H2" src={H2}/>
            </div>
            <div id="histo-parallax">
                <img alt="H3" id="H3" src={H3}/>
            </div>
            <div id="histo-parallax">
                <img alt="H4" id="H4" src={H4}/>
            </div>
            <div id="histo-parallax">
                <img alt="H5" id="H5" src={H5}/>
            </div>
            <div id="histo-mask">
            </div>
            <div id="histo-mask-shadow">
            </div>
            <div className="histo-title welcome">
                history...
            </div>
            <div className="histo-untitle">
                (<span className="inverse-flave linkage">version 1.0</span> of the site was a lot different!)
            </div>
        </div>
    )
}
