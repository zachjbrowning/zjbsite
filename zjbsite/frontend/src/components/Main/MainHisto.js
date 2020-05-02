import React from 'react'
import H0 from './HistoSVGS/H0'
import H1 from './HistoSVGS/H1'
import H2 from './HistoSVGS/H2'
import H3 from './HistoSVGS/H3'
import H4 from './HistoSVGS/H4'
import H5 from './HistoSVGS/H5'
export default function MainHisto() {
    return (
        <div className="histo-holder">
            <div id="histo-parallax">
                <H0 id="H0"/>
            </div>
            <div id="histo-parallax">
                <H1 id="H1"/>
            </div>
            <div id="histo-parallax">
                <H2 id="H2"/>
            </div>
            <div id="histo-parallax">
                <H3 id="H3"/>
            </div>
            <div id="histo-parallax">
                <H4 id="H4"/>
            </div>
            <div id="histo-parallax">
                <H5 id="H5"/>
            </div>
            <div id="histo-mask">
            </div>
            <a id="histo-mask-shadow" href="/oldsite">
            </a>
            <div className="histo-title welcome">
                history...
            </div>
            <div className="histo-untitle">
                (<a className="inverse-flave linkage" href="/oldsite">version 1.0</a> of the site was a lot different!)
            </div>
        </div>
    )
}
