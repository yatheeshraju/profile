import React, { Component } from 'react';

import {Timeline,TimelineItem} from 'vertical-timeline-component-for-react';
class DetailsComponent extends Component {
    render() {
        return (
            <div>
             
                <Timeline lineColor={'#ddd'}>
                  
                    <TimelineItem 
                    key="001"
                    dateText="Some Date"
                    dateInnerStyle={{background:'#F13C20',color:'#fff'}}
                    bodyContainerStyle={{
                        width:'300px',
                    }}>

                    <h5>Event 1 </h5>
                    <h6>Tag line </h6>
                    <p>This some text about the event </p>
                    </TimelineItem>
                    <TimelineItem 
                    key="002"
                    dateText="Some Date"
                    dateInnerStyle={{background:'#F13C20',color:'#fff'}}
                    >
                    <h5>Event 1 </h5>
                    <h6>Tag line </h6>
                    <p>This some text about the event </p>
                    </TimelineItem>
                    <TimelineItem 
                    key="003"
                    dateText="Some Date"
                    dateInnerStyle={{background:'#F13C20',color:'#fff'}}
                    >
                    <h5>Event 1 </h5>
                    <h6>Tag line </h6>
                    <p>This some text about the event </p>
                    </TimelineItem>
                    <TimelineItem 
                    key="004"
                    dateText="Some Date" 
                    dateInnerStyle={{background:'#F13C20',color:'#fff'}}
                    >
                    <h5>Event 1 </h5>
                    <h6>Tag line </h6>
                    <p>This some text about the event </p>
                    </TimelineItem>
                </Timeline>
            </div>
        );
    }
}

export default DetailsComponent;