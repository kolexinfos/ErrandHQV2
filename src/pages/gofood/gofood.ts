import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Toast } from 'ionic-native';

import { ModalAutocompleteItems } from '../modal-autocomplete-items/modal-autocomplete-items';
declare var google:any;

@Component({
  selector: 'page-gofood',
  templateUrl: 'gofood.html'
})
export class GofoodPage {  

  ionViewDidLoad() {
    console.log('Hello GosendPage Page');
  }

   gofood: {location?: string,weight?:string, quantity?: number, time?: string, destination?: string} = {};
  submitted:boolean = false;
  transferDate:string;

  placesService:any;
  map: any;
  markers = [];
  placedetails: any;
  public required:any;

   address:any = {
        place: '',
        set: false,
    };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
      let utc = new Date().toJSON().slice(0,10);
      this.transferDate = utc;
  }

 goFoodRequest(form){
     console.log(form);


     var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
        {
            origins: [this.gofood.location],
            destinations: [this.gofood.destination ],
            travelMode: 'DRIVING',
            avoidHighways: false,
            avoidTolls: false,
        }, callback);

        function callback(response, status) {
            console.log(status);
            console.log(response);
                    if (status == 'OK') {
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;

                for (var i = 0; i < origins.length; i++) {
                var results = response.rows[i].elements;
                for (var j = 0; j < results.length; j++) {
                    var element = results[j];
                    var distance = element.distance.text;
                    var duration = element.duration.text;
                    var from = origins[i];
                    var to = destinations[j];
                    var info = "The distance from " + from + " to " + to + " is " + distance + " - " + "and would take approximately " + duration;
                    console.log(info);

                    Toast.show(info, '10000', 'center').subscribe(
                        toast => {
                            console.log(toast);
                        });
                    }
                }
            }
        }
 }

  showMap(){
    console.log("Location input clicked");
  }

  ngOnInit() {
        this.initMap();
        this.initPlacedetails();
    }

  showModal(input) {

      
        // reset 
        this.reset();
        // show modal|
        let modal = this.modalCtrl.create(ModalAutocompleteItems);
        modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            if(data){
                console.log(input.name);                
                if(input.name != 'location'){
                this.gofood.destination = data.description;
                }
                else{
                    this.gofood.location = data.description
                }
                // get details
                //this.getPlaceDetail(data.place_id);
            }                
        })
        modal.present();
    }

     private reset() {
        this.initPlacedetails();
        this.address.place = '';
        this.address.set = false;
    }

    private getPlaceDetail(place_id:string):void {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
                self.placedetails.address = place.formatted_address;
                self.placedetails.lat = place.geometry.location.lat();
                self.placedetails.lng = place.geometry.location.lng();
                for (var i = 0; i < place.address_components.length; i++) {
                    let addressType = place.address_components[i].types[0];
                    let values = {
                        short_name: place.address_components[i]['short_name'],
                        long_name: place.address_components[i]['long_name']
                    }
                    if(self.placedetails.components[addressType]) {
                        self.placedetails.components[addressType].set = true;
                        self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                        self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                    }                                     
                }                  
                // set place in map
                self.map.setCenter(place.geometry.location);
                self.createMapMarker(place);
                // populate
                self.address.set = true;
                console.log('page > getPlaceDetail > details > ', self.placedetails);
            }else{
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    }


     private initMap() {
        var point = {lat: -34.603684, lng: -58.381559}; 
        let divMap = (<HTMLInputElement>document.getElementById('map'));
        this.map = new google.maps.Map(divMap, {
            center: point,
            zoom: 15,
            disableDefaultUI: true,
            draggable: false,
            zoomControl: true
        });
    }

    private createMapMarker(place:any):void {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: this.map,
          position: placeLoc
        });    
        this.markers.push(marker);
    }

    private initPlacedetails() {
        this.placedetails = {
            address: '',
            lat: '',
            lng: '',
            components: {
                route: { set: false, short:'', long:'' },                           // calle 
                street_number: { set: false, short:'', long:'' },                   // numero
                sublocality_level_1: { set: false, short:'', long:'' },             // barrio
                locality: { set: false, short:'', long:'' },                        // localidad, ciudad
                administrative_area_level_2: { set: false, short:'', long:'' },     // zona/comuna/partido 
                administrative_area_level_1: { set: false, short:'', long:'' },     // estado/provincia 
                country: { set: false, short:'', long:'' },                         // pais
                postal_code: { set: false, short:'', long:'' },                     // codigo postal
                postal_code_suffix: { set: false, short:'', long:'' },              // codigo postal - sufijo
            }    
        };        
    } 


}
