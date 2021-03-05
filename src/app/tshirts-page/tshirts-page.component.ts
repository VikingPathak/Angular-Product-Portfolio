import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirts-page',
  templateUrl: './tshirts-page.component.html',
  styleUrls: ['./tshirts-page.component.css']
})
export class TshirtsPageComponent implements OnInit {

  public tshirt_name = [
    "Proline Dark", 
    "Levis White Striped", 
    "Lee Maroon", 
    "Sample Tshirt", 
    "Sample Tshirt", 
    "Sample Tshirt", 
    "Sample Tshirt", 
    "Sample Tshirt", 
    "Sample Tshirt", 
    "Sample Tshirt"
  ];

  public image_url = [
    "https://th.bing.com/th/id/OIP.zXbFLXJIkbEsnOVPhaxVDAHaHa?pid=ImgDet&rs=1",
    "https://ik.imagekit.io/bfrs/tr:w-1000,h-1000,pr-true,cm-pad_resize,bg-FFFFFF/image_prolineindia/data/PV17006L_BK-1.jpg",
    "https://media.debenhams.com/i/debenhams/099010354759/maroon_colour_block_cotton_jumper.jpg?w=1500&h=1500&fmt=jpeg&qlt=70",
    "https://www.carolinamade.com/prodimg/zoom/A2410W_021920151649.png",
    "https://resources.mandmdirect.com/Images/_default/f/p/3/fp3356_1_cloudzoom.jpg",
    "https://th.bing.com/th/id/OIP.zXbFLXJIkbEsnOVPhaxVDAHaHa?pid=ImgDet&rs=1",
    "https://ik.imagekit.io/bfrs/tr:w-1000,h-1000,pr-true,cm-pad_resize,bg-FFFFFF/image_prolineindia/data/PV17006L_BK-1.jpg",
    "https://media.debenhams.com/i/debenhams/099010354759/maroon_colour_block_cotton_jumper.jpg?w=1500&h=1500&fmt=jpeg&qlt=70",
    "https://www.carolinamade.com/prodimg/zoom/A2410W_021920151649.png",
    "https://resources.mandmdirect.com/Images/_default/f/p/3/fp3356_1_cloudzoom.jpg"
  ]

  public tshirt_mrp = [450, 349, 320, 560, 670, 320, 549, 485, 670, 310]

  public tshirt_link = [
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse",
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse",
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse",
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse",
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse",
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse",
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse",
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse",
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse",
    "https://www.flipkart.com/try-striped-men-round-neck-blue-yellow-t-shirt/p/itm1ceaee366b84f?pid=TSHFZ5EMF4H79ANE&lid=LSTTSHFZ5EMF4H79ANE4NSQD0&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=b023eaf0-1cf8-4204-bb47-f3d33d3dfd34.TSHFZ5EMF4H79ANE.SEARCH&ppt=browse&ppn=browse"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
