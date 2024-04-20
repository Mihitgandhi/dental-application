import { Component } from '@angular/core';

@Component({
  selector: 'app-bridges',
  templateUrl: './bridges.component.html',
  styleUrl: './bridges.component.scss'
})
export class BridgesComponent {

  lineitems1=[
    "Restore your smile",
"Restore the ability to properly chew and speak",
"Maintain the shape of your face",
"Distribute the forces in your bite properly by replacing missing teeth",
"Prevent remaining teeth from drifting out of position"
  ]

  lineitems2=[
    {main:"Traditional : ", sub:"This consists of a false tooth that’s anchored by dental crowns and are attached to the surrounding teeth. It is commonly applied when you still have healthy natural teeth on both sides of your missing tooth"},
    {main:" Cantilever : ", sub:"This type of bridge is similar to a traditional porcelain dental bridge. However, instead of needing two neighboring teeth, this only needs one to hold it in place."},
    {main:"Maryland : ", sub:"A Maryland dental pontic will not need a dental crown to be attached to the surrounding teeth. Instead, it uses a metal or a porcelain framework to position it as a replacement of your missing tooth."},
    {main:"Implant-supported dental bridge : ", sub:"A dental implant is a dental screw which replaces the roots of your natural teeth. The implant will be used as an anchor for the dental bridge, making the crown and bridge stable and durable"}
  ]
}
