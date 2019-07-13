import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';
class SkillsComponent extends Component {
    render() {
        var data ={
            labels:["dev","frontend","backend","test","web"],
            datasets:[{
                label:"Skills",
                data:[60,90,60,40,100]
            }]
        };
        var options ={
            scale:{
                ticks:{
                    beginAtZero:true,
                    max:100,
                    min:0,
                    stepSize:20
                }
            }
        }
     return (
            <div style={{color:"#fff"}}>
                
            <Radar data={data} options={options} height={300} width={300} ></Radar>
            </div>
        );
    }
}

export default SkillsComponent;