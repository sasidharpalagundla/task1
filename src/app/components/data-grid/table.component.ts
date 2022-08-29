import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'total-value-component',
    template: `
    <h2 style="padding:20px">TABLE COMPONENT</h2>
    <p style="background-color: black; color:white">Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Velit molestiae, fugiat animi odio Saepe obcaecati maxime soluta 
    sint vero nesciunt! Modi corporis voluptas cum mollitia?</p>`,

})

export class TotalValueRenderer implements ICellRendererAngularComp {

    // gets called once before the renderer is used
    agInit(params: any): void {
        console.log("HIIIIII")
        console.log(params.data, "params.data")
    }

    // gets called whenever the user gets the cell to refresh
    refresh(params: any) {
        // set value into cell again
        console.log("refresh")
        return false;
    }
}
